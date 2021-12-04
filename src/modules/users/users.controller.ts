import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  @UseGuards(RolesGuard)
  create(@Body() user: CreateUserDto) {
    // return this.userService.create(user);
  }

  @Get('findAll')
  @UseGuards(RolesGuard)
  findAll() {
    // return this.userService.findAll();
  }
}
