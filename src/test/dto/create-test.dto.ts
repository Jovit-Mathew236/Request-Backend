/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  title: string;
}
