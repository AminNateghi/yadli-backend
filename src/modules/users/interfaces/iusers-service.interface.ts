import { ResponseBase, ResponseBaseWithData } from '@app/shared/interface/response-base';
import { IUser } from './user.interface';

export interface IUsersService {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser>;
  findOne(options: object): Promise<IUser | null>;
  findByEmailPassword(email: string, password: string): Promise<boolean>;
  create(user: IUser): Promise<ResponseBase>;
  update(id: number, newValue: IUser): Promise<IUser | null>;
  delete(id: number): Promise<string>;
}