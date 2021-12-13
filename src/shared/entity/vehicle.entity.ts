import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FuelTypeEnum } from '../enum/fuel-type.enum';
import { UserEntity } from './user.entity';

@Entity({ name: 'vehicle' })
export class VehicleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({
    type: "enum",
    enum: FuelTypeEnum,
    array: true,
    default: [FuelTypeEnum.Other]
  })
  fuelType: FuelTypeEnum[];

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, user => user.vehicles)
  user: UserEntity;
}
