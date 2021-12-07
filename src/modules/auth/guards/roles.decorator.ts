import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesEnum } from './roles.enum';
import { RolesGuard } from './roles.guard';

export const ROLES_KEY = 'roles';

export function Roles(...roles: RolesEnum[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(RolesGuard)
  );
}