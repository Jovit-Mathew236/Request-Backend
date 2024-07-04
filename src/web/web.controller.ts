import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { WebService } from './web.service';
import { CreateWebDto } from './dto/create-web.dto';
// import { UpdateWebDto } from './dto/update-web.dto';

@Controller('web')
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Post()
  create(@Body() createWebDto: CreateWebDto) {
    return this.webService.create(createWebDto);
  }

  @Get()
  findAll() {
    return this.webService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.webService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWebDto: UpdateWebDto) {
  //   return this.webService.update(+id, updateWebDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.webService.remove(+id);
  // }
}
