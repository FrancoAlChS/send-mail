import { Driver } from "@/domain/entities/driver";
import { Driver as DriverModel } from "@prisma/client";

export class DriverMapper {
  static modelToEntity(driver: DriverModel) {
    return new Driver(
      driver.id,
      driver.name,
      driver.email,
      driver.working_state
    );
  }
}
