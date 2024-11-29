import { Driver } from "@/domain/entities/driver";
import { DriverRepository } from "@/domain/repository/driver/driver.repository";
import { Pagination } from "@/domain/shared/pagination";
import prisma from "@/lib/prisma";
import { DriverMapper } from "../mappers/driver.mapper";

export class DriverRepositoryImpl implements DriverRepository {
  async find(pagination: Pagination, filter?: string): Promise<Driver[]> {
    const skip =
      pagination.page <= 1 ? 0 : (pagination.page - 1) * pagination.limit;

    const listDrivers = await prisma.driver.findMany({
      skip: skip,
      take: pagination.limit,
      where: {
        OR: [{ name: { contains: filter } }, { email: { contains: filter } }],
      },
    });
    return listDrivers.map((driver) => DriverMapper.modelToEntity(driver));
  }

  async findById(id: string): Promise<Driver | null> {
    const registeredDriver = await prisma.driver.findFirst({ where: { id } });
    return registeredDriver && DriverMapper.modelToEntity(registeredDriver);
  }

  async create(driver: Driver): Promise<Driver> {
    const registeredDriver = await prisma.driver.create({
      data: {
        email: driver.email,
        name: driver.name,
        working_state: driver.isActive,
      },
    });

    driver.id = registeredDriver.id;
    return driver;
  }

  async update(driver: Driver): Promise<Driver> {
    await prisma.driver.update({
      where: { id: driver.id },
      data: {
        email: driver.email,
        name: driver.name,
        working_state: driver.isActive,
      },
    });

    return driver;
  }

  async delete(id: string): Promise<void> {
    await prisma.driver.delete({ where: { id } });
  }
}
