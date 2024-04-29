import { Module } from '@nestjs/common';
import { CollegeService } from './college.service';
import { CollegeController } from './college.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CollegeController],
  providers: [CollegeService],
})
export class CollegeModule {}
