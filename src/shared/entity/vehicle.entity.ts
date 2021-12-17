import { Column, Entity, ManyToOne } from 'typeorm';
import { FuelTypeEnum } from '../enum/fuel-type.enum';
import { IVehicle } from '../interface/vehicle.interface';
import { UserEntity } from './user.entity';
import { EntityBase } from './_entity-base';

@Entity({ name: 'vehicle' })
export class VehicleEntity extends EntityBase implements IVehicle {
  @Column()
  name: string;

  @Column()
  brandName: string;

  @Column()
  modelName: string;

  @Column()
  year: number;

  @Column()
  licenseNo: string;

  @Column()
  vin: string;

  @Column({ type: 'int', default: 0 })
  fuelType: FuelTypeEnum;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, user => user.vehicles)
  user: UserEntity;
}
