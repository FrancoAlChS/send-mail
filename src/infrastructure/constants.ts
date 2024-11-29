import { CreateDriver } from "@/domain/use-case/driver/create-driver/create-driver.use-case";
import { DeleteDriver } from "@/domain/use-case/driver/delete-driver/delete-driver.use-case";
import { ListDriver } from "@/domain/use-case/driver/list-driver/list-driver.use-case";
import { UpdateDriver } from "@/domain/use-case/driver/update-driver/update-driver.use-case";
import { DriverRepositoryImpl } from "@/infrastructure/repositories/driver.repository";

// * Conductores
const driverRepository = new DriverRepositoryImpl();

export const listDriversUseCase = new ListDriver(driverRepository);
export const createDriverUseCase = new CreateDriver(driverRepository);
export const updateDriverUseCase = new UpdateDriver(driverRepository);
export const deleteDriverUseCase = new DeleteDriver(driverRepository);
