/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignIn, SignUp } from './dto/create-auth.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request, Response } from 'express';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() sigupDto: SignUp) {
    return this.authService.signup(sigupDto);
  }

  @Post('signin')
  signin(@Res({ passthrough: true }) res: Response, @Body() signinDto: SignIn) {
    return this.authService.signin(res, signinDto);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  getusers(@Req() req: Request) {
    console.log(req['user']);

    return this.authService.getusers();
  }

  @Post('refresh')
  async refreshTokens(@Req() req: Request) {
    try {
      const { refresh_token } = req.body; // Assuming refresh_token is sent in the request body
      if (!refresh_token) {
        throw new UnauthorizedException('No refresh token provided');
      }

      const tokens = await this.authService.refreshToken(req); // Call the service method

      return tokens; // Return tokens to the client
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
