import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { RolesGuard } from './modules/auth/guards/roles.guard';
import { StatusModule } from './modules/status/status.module';
import { UsersModule } from './modules/users/users.module';
import { UserEntity } from './shared/entity/user.entity';
import { envConfigService } from './shared/services/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(envConfigService.getDatabaseConnectionConfig()),
    TypeOrmModule.forFeature([UserEntity]),
    StatusModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule { }
