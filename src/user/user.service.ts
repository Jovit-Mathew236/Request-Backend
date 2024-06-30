import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return `This action returns all user`;
  }

  getUsers() {
    return this.prisma.user.findMany();
  }

  getFacultyUsers() {
    const users = this.prisma.user.findMany({
      where: {
        roleId: 2,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        roleId: true,
        departmentId: true,
        collegeId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
