import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserEntity } from '../entity/user.entity';
import { VehicleEntity } from '../entity/vehicle.entity';
import { IVehicle } from '../interface/vehicle.interface';

@Injectable()
export class VehicleMapper {

  constructor(
    @Inject(REQUEST) private request: Request,
  ) { }

  mapToCreateEntity(model: IVehicle): any {
    const result = {
      name: model.name,
      brandName: model.brandName,
      modelName: model.modelName,
      year: Number(model.year),
      fuelType: Number(model.fuelType),
      licenseNo: model.licenseNo,
      vin: model.vin,
      description: model.description,
      user: this.request.user as UserEntity
    };
    return result;
  }

}