import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFormDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Message is required' })
  @IsString({ message: 'Message must be a string' })
  message: string;

  // @IsNotEmpty({ message: 'From ID is required' })
  // @IsNumber({}, { message: 'From ID must be a number' })
  // fromId: number;

  @IsNotEmpty({ message: 'To ID is required' })
  @IsNumber({}, { message: 'To ID must be a number' })
  toId: number;
}
