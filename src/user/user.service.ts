import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  async getRoleUsers(roleId: number) {
    try {
      const users = await this.prisma.user.findMany({
        where: {
          roleId: roleId,
        },
      });
      return users;
    } catch (error) {
      console.error('Failed to retrieve users:', error);
      throw new HttpException(
        'Failed to retrieve users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return `This action returns all user`;
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

  // // update(id: number, updateUserDto: UpdateUserDto) {
  // //   return `This action updates a #${id} user`;
  // // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
