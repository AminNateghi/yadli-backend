import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Roles } from '../auth/guards/roles.decorator';
import { RolesEnum } from '../auth/guards/roles.enum';
import { VehicleCreateDto } from '../../shared/dto/vehicle.dto';
import { VehicleService } from './vehicle.service';

@ApiTags('vehicle')
@Controller('vehicle')
export class VehicleController {

  constructor(
    private vehicleService: VehicleService
  ) { }

  @Get()
  @Roles(RolesEnum.User)
  vehicles(@Req() request: Request) {
    return this.vehicleService.findAll();
  }

  @Post()
  @Roles(RolesEnum.User)
  create(@Body() model: VehicleCreateDto) {
    return this.vehicleService.create(model);
  }
}
