import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';

import { IUsersService } from './interfaces/iusers-service.interface';
import { IUser } from './interfaces/user.interface';
import { UserEntity } from '../../shared/entity/user.entity';
import { ResponseBase, ResponseBaseWithData } from '../../shared/interface/response-base';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UserInfoDto } from 'src/shared/dto/user-info.dto';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<IUser>,
  ) { }

  async findAll(): Promise<any[]> {
    return (await this.userRepo.find()).map(
      (m) => new Object({ name: m.name, email: m.email }),
    );
  }

  async findOne(options: object): Promise<IUser> {
    return await this.userRepo.findOne(options);
  }

  async findById(id: number): Promise<IUser> {
    return await this.userRepo.findOne(id);
  }

  async findByEmailPassword(email: string, password: string): Promise<boolean> {
    // check email exist
    const user = await this.userRepo.findOne({ email: email });
    if (!user) {
      return false;
    }
    return await bcrypt.compare(password, user.password);
  }

  async userInfo(req: Request): Promise<ResponseBaseWithData<UserInfoDto>> {
    const user: UserEntity = req.user as UserEntity;
    const result: ResponseBaseWithData<UserInfoDto> = {
      success: true,
      data: {
        name: user.name,
        email: user.email,
        mobile: user.mobile
      }
    }
    return result;
  }

  async create(userDto: CreateUserDto): Promise<ResponseBase> {
    // check email exist
    const email = await this.userRepo.findOne({ email: userDto.email });
    if (email) {
      const response: ResponseBase = {
        success: false,
        message: 'This email exist!',
      };
      return response;
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = this.userRepo.create({
      name: userDto.name,
      email: userDto.email,
      password: hashedPassword,
    });

    await this.userRepo.save(user);
    const response: ResponseBase = { success: true };
    return response;
  }

  async update(id: number, newValue: IUser): Promise<IUser> {
    const user = await this.userRepo.findOne(id);
    if (!user.email) {
      console.debug('user not found');
      return;
    }

    await this.userRepo.update(id, newValue);
    return await this.userRepo.findOne(id);
  }

  async delete(id: number): Promise<string> {
    return '👍';
  }
}
