import { RolesEnum } from '../../modules/auth/guards/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
    array: true,
    default: [RolesEnum.User]
  })
  roles: RolesEnum[];
}
