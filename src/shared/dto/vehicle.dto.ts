import { ApiProperty } from "@nestjs/swagger";
import { IVehicle } from "../interface/vehicle.interface";

export class VehicleCreateDto implements IVehicle {
  @ApiProperty()
  name: string;
  @ApiProperty()
  brandName: string;
  @ApiProperty()
  modelName: string;
  @ApiProperty()
  year: number;
  @ApiProperty()
  fuelType: number;
  @ApiProperty()
  licenseNo: string;
  @ApiProperty()
  vin: string;
  @ApiProperty()
  description?: string;
}
