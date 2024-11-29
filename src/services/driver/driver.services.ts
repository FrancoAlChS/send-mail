"use server";

import { Pagination } from "@/domain/shared/pagination";
import { CreateDriverDTO } from "@/domain/use-case/driver/create-driver/create-driver.dto";
import { UpdateDriverDTO } from "@/domain/use-case/driver/update-driver/update-driver.dto";
import {
  createDriverUseCase,
  deleteDriverUseCase,
  listDriversUseCase,
  updateDriverUseCase,
} from "@/infrastructure/constants";

export async function findDrivers(pagination: Pagination, filter: string) {
  return listDriversUseCase.execute(pagination, filter);
}

export async function createDriver(driver: CreateDriverDTO) {
  try {
    await createDriverUseCase.execute(driver);
    return true;
  } catch {
    return false;
  }
}

export async function updateDriver(id: string, driver: UpdateDriverDTO) {
  try {
    await updateDriverUseCase.execute(id, driver);
    return true;
  } catch {
    return false;
  }
}

export async function deleteDriver(driverId: string) {
  await deleteDriverUseCase.execute(driverId);
}
