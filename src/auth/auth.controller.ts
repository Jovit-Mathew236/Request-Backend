/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignIn, SignUp } from './dto/create-auth.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() sigupDto: SignUp) {
    return this.authService.signup(sigupDto);
  }

  @Post('signin')
  signin(@Body() signinDto: SignIn) {
    return this.authService.signin(signinDto);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  getusers(@Req() req: Request) {
    console.log(req['user']);

    return this.authService.getusers();
  }
}
