/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignIn, SignUp } from './dto/create-auth.dto';
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
}
