import { Column, Entity, ManyToOne } from 'typeorm';
import { FuelTypeEnum } from '../enum/fuel-type.enum';
import { IVehicle } from '../interface/vehicle.interface';
import { UserEntity } from './user.entity';
import { EntityBase } from './_entity-base';

@Entity({ name: 'vehicle' })
export class VehicleEntity extends EntityBase implements IVehicle {
  @Column()
  name: string;

  @Column({ nullable: true })
  brandName: string;

  @Column({ nullable: true })
  modelName: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  licenseNo: string;

  @Column({ nullable: true })
  vin: string;

  @Column({ type: 'int', default: 0, nullable: true })
  fuelType: FuelTypeEnum;

  @Column({ nullable: true })
  description: string;


  @ManyToOne(() => UserEntity, user => user.vehicles)
  user: UserEntity;
}
