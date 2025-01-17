import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFormDto: CreateFormDto, userID: number) {
    await this.prisma.requestForm.create({
      data: {
        ...createFormDto,
        fromId: userID,
      },
    });

    return this.prisma.requestForm.findMany({
      where: {
        fromId: userID,
      },
    });
  }

  findAllSend(req: Request) {
    const userId = req['user'].sub;
    return this.prisma.requestForm.findMany({
      where: {
        fromId: userId,
      },
    });
  }

  findAllReceive(req: Request) {
    const userId = req['user'].sub;
    return this.prisma.requestForm.findMany({
      where: {
        toId: userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.requestForm.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return this.prisma.requestForm.update({
      where: { id },
      data: updateFormDto,
    });
  }

  remove(id: number) {
    return this.prisma.requestForm.delete({
      where: { id },
    });
  }
}
