import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VehicleEntity } from '../../shared/entity/vehicle.entity';
import { ResponseBase, ResponseBaseWithData } from '../../shared/interface/response-base';
import { IVehicleService } from '../../shared/interface/vehicle-service.interface';
import { IVehicle } from '../../shared/interface/vehicle.interface';

@Injectable({ scope: Scope.REQUEST })
export class VehicleService implements IVehicleService {

  constructor(
    @InjectRepository(VehicleEntity) private readonly vehicleRepo: Repository<IVehicle>,
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
  create(user: IVehicle): Promise<ResponseBase> {
    throw new Error('Method not implemented.');
  }
  update(req: Request, newValue: IVehicle): Promise<ResponseBase> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<ResponseBase> {
    throw new Error('Method not implemented.');
  }

}
