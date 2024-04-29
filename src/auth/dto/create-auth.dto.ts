/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

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

  @IsNotEmpty({ message: 'role is required' })
  @IsNumber({}, { message: 'invalid role' })
  roleId: number;

  @IsNotEmpty({ message: 'department is required' })
  @IsNumber({}, { message: 'invalid department' })
  departmentId: number;

  @IsNotEmpty({ message: 'college is required' })
  @IsNumber({}, { message: 'invalid college' })
  collegeId: number;
}
export class SignIn {
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  hash: string;
}
