import { Module } from '@nestjs/common';
import { WebService } from './web.service';
import { WebController } from './web.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WebController],
  providers: [WebService],
})
export class WebModule {}
