import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ROLES_KEY } from './roles.decorator';
import { RolesEnum } from './roles.enum';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {

  constructor(private readonly reflector: Reflector) {
    super();
  }

  handleRequest(err, user, info: Error, context: ExecutionContext) {
    if (err) {
      throw err;
    }
    if (info) {
      console.log(info);
    }

    const roles = this.reflector.get<RolesEnum[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return false;
    }
    const hasRole = roles.some(e => e === user.roles);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(user.roles && hasRole)) {
      throw new ForbiddenException('Forbidden');
    }

    if (user && user.roles && hasRole) {
      return user;
    }

    throw new ForbiddenException('Forbidden');
  }
}
