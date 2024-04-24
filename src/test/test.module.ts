/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
