import { Module } from '@nestjs/common';
import { StatusModule } from './modules/status/status.module';

@Module({
  imports: [StatusModule],
})
export class AppModule {}
