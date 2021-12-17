import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Repository } from 'typeorm';

import { ResponseBase, ResponseBaseWithData } from '../../shared/interface/response-base';
import { IVehicleService } from '../../shared/interface/vehicle-service.interface';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { VehicleEntity } from '../../shared/entity/vehicle.entity';
import { VehicleMapper } from '../../shared/mapper/vehicle.mapper';

@Injectable()
export class VehicleService implements IVehicleService {

  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectRepository(VehicleEntity) private readonly vehicleRepo: Repository<IVehicle>,
    private mapper: VehicleMapper
  ) { }

  async findAll(): Promise<ResponseBaseWithData<IVehicle[]>> {
    const data = await this.vehicleRepo.find({ relations: ["user"] });
    const result: ResponseBaseWithData<IVehicle[]> = {
      success: true,
      data: data
    };
    return result;
  }


  findById(id: string): Promise<IVehicle> {
    throw new Error('Method not implemented.');
  }

  findOne(options: object): Promise<IVehicle> {
    throw new Error('Method not implemented.');
  }

  async create(model: IVehicle): Promise<ResponseBase> {
    const mappedModel = this.mapper.mapToCreateEntity(model);
    try {
      await this.vehicleRepo.save(mappedModel);
      const response: ResponseBase = { success: true };
      return response;
    } catch (error) {
      throw new Error(error)
    }
  }

  update(newValue: IVehicle): Promise<ResponseBase> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<ResponseBase> {
    throw new Error('Method not implemented.');
  }

}
