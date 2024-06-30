/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
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
  refreshTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshToken(req, res);
  }
}
