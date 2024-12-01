import { Driver } from "@/domain/entities/driver";
import { Pagination } from "@/domain/shared/pagination";

export interface DriverRepository {
  getTotalDriver(): Promise<number>;
  find(pagination: Pagination, filter?: string): Promise<Driver[]>;
  findById(id: string): Promise<Driver | null>;
  create(driver: Driver): Promise<Driver>;
  update(driver: Driver): Promise<Driver>;
  delete(id: string): Promise<void>;
}
