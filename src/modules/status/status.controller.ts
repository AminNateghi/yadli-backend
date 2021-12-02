import { Controller, Get } from '@nestjs/common';
import * as ver from '../../../package.json';

@Controller('status')
export class StatusController {
  startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  @Get('check')
  async get() {
    const now = Date.now();
    return {
      success: true,
      status: 'Online',
      version: ver.version,
      uptime: Number((now - this.startTime) / 1000).toFixed(0),
    };
  }
}
