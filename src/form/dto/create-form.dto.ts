import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateFormDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Lastname is required' })
  @IsString({ message: 'Lastname must be a string' })
  message: string;

  @IsNotEmpty({ message: 'fromId is required' })
  fromId: number;

  @IsNotEmpty({ message: 'toId is required' })
  toId: number;
}
