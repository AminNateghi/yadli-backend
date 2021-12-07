import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { Roles } from '../auth/guards/roles.decorator';
import { RolesEnum } from '../auth/guards/roles.enum';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('create')
  @Roles(RolesEnum.Admin)
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get('findAll')
  @Roles(RolesEnum.Admin)
  findAll() {
    return this.userService.findAll();
  }
}
