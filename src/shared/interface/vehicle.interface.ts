import { FuelTypeEnum } from "../enum/fuel-type.enum";

export interface IVehicle {
  readonly name: string;
  readonly brandName: string;
  readonly modelName: string;
  readonly year: number;
  readonly fuelType: FuelTypeEnum;
  readonly licenseNo: string;
  readonly vin: string;
  readonly description?: string;
}
