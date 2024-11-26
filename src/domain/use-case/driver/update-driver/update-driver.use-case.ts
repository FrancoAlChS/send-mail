import { DriverRepository } from "@/domain/repository/driver/driver.repository";
import { UpdateDriverDTO } from "./update-driver.dto";

export class UpdateDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(id: string, driverDTO: UpdateDriverDTO) {
    const driver = await this.driverRepository.findById(id);
    if (!driver) throw new Error("No se encontró el conductor");

    if (driverDTO.name && driver.name !== driverDTO.name)
      driver.name = driverDTO.name;

    if (driverDTO.email && driver.email !== driverDTO.email)
      driver.email = driverDTO.email;

    if (driverDTO.isActive && driver.isActive !== driverDTO.isActive)
      driver.isActive = driverDTO.isActive;

    await this.driverRepository.update(driver);

    return driver;
  }
}
