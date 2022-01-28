import { RolesEnum } from '../../modules/auth/guards/roles.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleEntity } from './vehicle.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  mobile: string;

  @Column()
  password: string;

  @Column({ default: true })
  enable: boolean;

  @Column({
    type: "enum",
    enum: RolesEnum,
    default: RolesEnum.User
  })
  role: RolesEnum;

  @OneToMany(() => VehicleEntity, vehicle => vehicle.user)
  vehicles: VehicleEntity[];
}
