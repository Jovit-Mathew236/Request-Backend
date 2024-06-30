import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as argon from 'argon2';
import { Response, Request } from 'express';
import { SignUp, SignIn } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignUp) {
    try {
      const password = await argon.hash(signupDto.hash);
      const user = await this.prisma.user.create({
        data: {
          ...signupDto,
          hash: password,
        },
      });
      delete user.hash; // Remove hash from the user object to prevent it from being returned
      return user;
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ForbiddenException('Email already exists');
      }
      throw e;
    }
  }

  async signin(res: Response, signinDto: SignIn) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signinDto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Invalid email or password');
    }
    const passwordMatch = await argon.verify(user.hash, signinDto.hash);
    if (!passwordMatch) {
      throw new ForbiddenException('invalid email or password');
    }

    const payload = {
      email: user.email,
      sub: user.id,
      username: user.firstname + ' ' + user.lastname,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '10s',
    });
    const refreshToken = await this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    // Set access_token and refresh_token cookies
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // use secure cookies in production
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh', // ensuring this cookie is sent only to this endpoint
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === 'production', // use secure cookies in production
    });

    return {
      data: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    };
  }

  getusers() {
    return this.prisma.user.findMany();
  }

  async refreshToken(req: Request, res: Response) {
    const token = req.cookies['refresh_token'];
    if (!token) {
      throw new UnauthorizedException('No refresh token provided');
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const payload = {
        email: user.email,
        sub: user.id,
        username: user.firstname + ' ' + user.lastname,
      };

      const accessToken = this.jwtService.sign(payload);
      const refreshToken = await this.jwtService.sign(payload, {
        expiresIn: '7d',
      });

      res.cookie('access_token', accessToken);
      res.cookie('refresh_token', refreshToken);

      return { access_token: accessToken, refresh_token: refreshToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
