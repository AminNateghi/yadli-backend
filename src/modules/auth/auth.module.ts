import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
// Strategies
import { JwtStrategy } from './strategies/jwt.strategy';
import { envConfigService } from '@app/shared/env.config';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: envConfigService.getSecretsKey(),
      signOptions: { expiresIn: envConfigService.getExpireTime() },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, AuthService, JwtModule],
})
export class AuthModule {}
