/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUp {
  @IsNotEmpty({ message: 'Firstname is required' })
  @IsString({ message: 'Firstname must be a string' })
  firstname: string;

  @IsNotEmpty({ message: 'Lastname is required' })
  @IsString({ message: 'Lastname must be a string' })
  lastname: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password is too short min 6' })
  hash: string;
}
export class SignIn {
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  hash: string;
}
