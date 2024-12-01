import { DriverRepository } from "@/domain/repository/driver/driver.repository";
import { Pagination } from "@/domain/shared/pagination";

export class ListDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(pagination: Pagination, filter?: string) {
    const [totalDriver, drivers] = await Promise.all([
      this.driverRepository.getTotalDriver(),
      this.driverRepository.find(pagination, filter),
    ]);

    return {
      drivers,
      totalPage: Math.ceil(totalDriver / pagination.limit),
    };
  }
}
