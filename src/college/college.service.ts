import { Injectable } from '@nestjs/common';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollegeService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCollegeDto: CreateCollegeDto) {
    return this.prisma.college.create({
      data: createCollegeDto,
    });
  }

  findAll() {
    return this.prisma.college.findMany();
  }

  findOne(id: number) {
    return this.prisma.college.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCollegeDto: UpdateCollegeDto) {
    return this.prisma.college.update({
      where: { id },
      data: updateCollegeDto,
    });
  }

  remove(id: number) {
    return this.prisma.college.delete({
      where: { id },
    });
  }
}
