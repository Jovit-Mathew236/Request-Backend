/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { CollegeModule } from './college/college.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    PrismaModule,
    RecipeModule,
    TestModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    UserModule,
    DepartmentModule,
    CollegeModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
