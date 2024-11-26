import { DriverRepository } from "@/domain/repository/driver/driver.repository";
import { Pagination } from "@/domain/shared/pagination";

export class ListDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(pagination: Pagination, filter?: string) {
    return await this.driverRepository.list(pagination, filter);
  }
}
