import { ResponseBase, ResponseBaseWithData } from "./response-base";
import { IVehicle } from "./vehicle.interface";

export interface IVehicleService {
  findAll(): Promise<ResponseBaseWithData<IVehicle[]>>;
  findById(id: string): Promise<IVehicle>;
  findOne(options: object): Promise<IVehicle | null>;
  create(model: IVehicle): Promise<ResponseBase>;
  update(newValue: IVehicle): Promise<ResponseBase>;
  delete(id: string): Promise<ResponseBase>;
}