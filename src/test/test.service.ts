/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTestDto: CreateTestDto) {
    return this.prisma.test.create({
      data: createTestDto,
    });
  }

  findAll() {
    return this.prisma.test.findMany();
  }

  findOne(id: number) {
    return this.prisma.test.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRecipeDto: UpdateTestDto) {
    return this.prisma.test.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  remove(id: number) {
    return this.prisma.test.delete({
      where: { id },
    });
  }
}
