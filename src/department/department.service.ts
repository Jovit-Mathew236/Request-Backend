import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.departments.create({
      data: createDepartmentDto,
    });
  }

  findAll() {
    return this.prisma.departments.findMany();
  }

  findOne(id: number) {
    return this.prisma.departments.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.departments.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  remove(id: number) {
    return this.prisma.departments.delete({
      where: { id },
    });
  }
}
