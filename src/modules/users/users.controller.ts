import { Body, Controller, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { Roles } from '../auth/guards/roles.decorator';
import { RolesEnum } from '../auth/guards/roles.enum';
import { UpdateUserDto } from '../auth/dto/update-user.dto';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  @Roles(RolesEnum.Admin)
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get()
  @Roles(RolesEnum.Admin)
  findAll() {
    return this.userService.findAll();
  }

  @Get('info')
  @Roles(RolesEnum.User)
  info(@Req() request: Request) {
    return this.userService.userInfo(request);
  }

  @Put()
  @Roles(RolesEnum.User)
  update(@Body() model: UpdateUserDto, @Req() request: Request) {
    return this.userService.update(request, model);
  }
}
