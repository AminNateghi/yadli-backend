import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ResponseBase,
  ResponseBaseWithData,
} from 'src/shared/interface/response-base';
import { envConfigService } from '../../shared/services/config.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) { }

  async register(user: CreateUserDto) {
    return await this.usersService.create(user);
  }

  async login(userDto: LoginUserDto): Promise<any> {
    const result = await this.usersService.findByEmailPassword(
      userDto.email,
      userDto.password,
    );
    if (!result) {
      const response: ResponseBase = {
        success: false,
        message: 'Wrong data!',
      };
      return response;
    }

    const token = this.createToken(userDto);
    const response: ResponseBaseWithData<string> = {
      success: true,
      data: token.accessToken,
    };
    return response;
  }

  async validateUserByPayload(payload: IJwtPayload): Promise<any> {
    return await this.usersService.findOne({ email: payload.email });
  }

  private createToken(user: LoginUserDto) {
    const accessToken = this.jwtService.sign(
      {
        email: user.email,
      },
      {
        secret: envConfigService.getSecretsKey(),
        expiresIn: envConfigService.getExpireTime(),
      },
    );

    return {
      accessToken,
    };
  }
}
