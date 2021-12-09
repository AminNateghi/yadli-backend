import { ResponseBase, ResponseBaseWithData } from '../../../shared/interface/response-base';
import { Request } from 'express';
import { IUser } from './user.interface';

export interface IUsersService {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findOne(options: object): Promise<IUser | null>;
  findByEmailPassword(email: string, password: string): Promise<boolean>;
  create(user: IUser): Promise<ResponseBase>;
  update(req: Request, newValue: IUser): Promise<ResponseBase>;
  delete(id: string): Promise<string>;
}