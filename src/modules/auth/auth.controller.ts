import {
  Controller,
  HttpStatus,
  Response,
  Post,
  Body
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { TokenVerifyDto } from './dto/token-verify.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  public async login(@Response() res, @Body() model: LoginUserDto) {
    return await this.authService.login(model).then((result) => {
      return res.status(HttpStatus.OK).json(result);
    });
  }

  @Post('verify')
  public async verify(@Body() model: TokenVerifyDto) {
    return await this.authService.verifyToken(model);
  }

  // @Get('whoami')
  // @UseGuards(JwtAuthGuard)
  // public async testAuth(@Response() res): Promise<any> {
  //   return await this.authService.howami().then(result => {
  //     return res.status(HttpStatus.OK).json(result);
  //   });
  // }
}
