import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWebDto } from './dto/create-web.dto';

@Injectable()
export class WebService {
  constructor(private readonly prisma: PrismaService) {}
  create(createWebDto: CreateWebDto) {
    return this.prisma.web.create({
      data: createWebDto,
    });
  }

  findAll() {
    return this.prisma.web.findMany({
      select: {
        email: true,
      },
    });
  }
}
