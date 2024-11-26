import { DriverRepository } from "@/domain/repository/driver/driver.repository";

export class DeleteDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(id: string) {
    return await this.driverRepository.delete(id);
  }
}
