import { Driver } from "@/domain/entities/driver";
import { DriverRepository } from "@/domain/repository/driver/driver.repository";
import { CreateDriverDTO } from "./create-driver.dto";

export class CreateDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(driverDTO: CreateDriverDTO) {
    const driver = new Driver(
      "",
      driverDTO.name,
      driverDTO.email,
      driverDTO.isActive
    );

    return await this.driverRepository.create(driver);
  }
}
