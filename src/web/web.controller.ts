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
  @Get()
  findCount() {
    return this.webService.findCount();
  }
}
