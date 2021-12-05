import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { StatusModule } from './modules/status/status.module';
import { UsersModule } from './modules/users/users.module';
import { UserEntity } from './shared/entity/user.entity';
import { envConfigService } from './shared/services/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(envConfigService.getDatabaseConnectionConfig()),
    TypeOrmModule.forFeature([UserEntity]),
    // StatusModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule { }
