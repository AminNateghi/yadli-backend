import {
  Controller,
  HttpStatus,
  Response,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginGuard } from './guards/login.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  @UseGuards(LoginGuard)
  public async login(@Response() res, @Body() model: LoginUserDto) {
    return await this.authService.login(model).then((result) => {
      return res.status(HttpStatus.OK).json(result);
    });
  }

  // @Get('whoami')
  // @UseGuards(JwtAuthGuard)
  // public async testAuth(@Response() res): Promise<any> {
  //   return await this.authService.howami().then(result => {
  //     return res.status(HttpStatus.OK).json(result);
  //   });
  // }
}