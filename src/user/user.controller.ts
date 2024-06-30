import {
  Controller,
  Get,
  // Body,
  //  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(@Req() req: Request) {
    console.log(req['user']);

    return this.userService.getUsers();
  }
  @Get('faculty')
  @UseGuards(AuthGuard)
  getFacultyUsers(@Req() req: Request) {
    console.log(req['user']);

    return this.userService.getFacultyUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @Get('/roles/:roleId')
  @UseGuards(AuthGuard)
  getRoleUser(@Req() req: Request, @Param('roleId') roleId: number) {
    console.log(req['user']); // This should log the user object if authentication is successful

    return this.userService.getRoleUsers(+roleId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
