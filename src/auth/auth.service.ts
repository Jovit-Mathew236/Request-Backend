import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignUp, SignIn } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async signup(signupDto: SignUp) {
    try {
      const passowrd = await argon.hash(signupDto.hash);
      const user = await this.prisma.user.create({
        data: {
          email: signupDto.email,
          hash: passowrd,
          firstname: signupDto.firstname,
          lastname: signupDto.lastname,
          roleId: signupDto.roleId,
          departmentId: signupDto.departmentId,
          collegeId: signupDto.collegeId,
        },
      });
      delete user.hash;
      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw e;
    }
  }

  async signin(signinDto: SignIn) {
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
    delete user.hash;
    const payload = {
      email: user.email,
      sub: user.id,
      username: user.firstname + ' ' + user.lastname,
    };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
    };
  }

  getusers() {
    return this.prisma.user.findMany();
  }
}
