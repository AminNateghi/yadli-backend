import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VehicleMapper } from "../../shared/mapper/vehicle.mapper";
import { VehicleEntity } from "../../shared/entity/vehicle.entity";
import { VehicleController } from "./vehicle.controller";
import { VehicleService } from "./vehicle.service";

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  controllers: [VehicleController],
  providers: [VehicleService, VehicleMapper],
  exports: [VehicleService]
})
export class VehicleModule { }