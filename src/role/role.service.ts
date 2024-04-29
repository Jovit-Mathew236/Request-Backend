import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({
      data: createRoleDto,
    });
  }

  findAll() {
    return this.prisma.roles.findMany();
  }

  findOne(id: number) {
    return this.prisma.roles.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prisma.roles.update({
      where: { id },
      data: updateRoleDto,
    });
  }

  remove(id: number) {
    return this.prisma.roles.delete({
      where: { id },
    });
  }
}
