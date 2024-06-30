import {
  Controller,
  Get,
  // Body,
  // Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(@Req() req: Request) {
    console.log(req['user']);

    return this.userService.getUsers();
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
