import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createFormDto: CreateFormDto, @Req() req: Request) {
    const userID = req['user'].sub;
    return this.formService.create(createFormDto, userID);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Req() req: Request) {
    return this.formService.findAll(req);
  }

  // @Get(':id')
  // @UseGuards(AuthGuard)
  // findOne(@Param('id') id: string) {
  //   return this.formService.findOne(+id);
  // }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(+id, updateFormDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }
}
