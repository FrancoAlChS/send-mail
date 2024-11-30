import { Header } from "@/components/dashboard/header";
import { ButtonCreate } from "@/components/drivers/button-create";
import { CardDriver } from "@/components/drivers/card-driver";
import { DialogCreateDriver } from "@/components/drivers/dialog-create-driver";
import { driverSchema } from "@/components/drivers/driver-schema";
import { InputFilter } from "@/components/drivers/input-filter";
import { Pagination } from "@/components/drivers/pagination";
import { FormModal } from "@/context/form-model-context";
import { findDrivers } from "@/services/driver/driver.services";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function page({ searchParams }: Props) {
  const sp = await searchParams;
  const page = sp.page ? Number(sp.page) : 1;
  const limit = sp.limit ? Number(sp.limit) : 20;
  const filter = sp.filter ? sp.filter : "";
  const listDrivers = await findDrivers({ page: page, limit }, filter);

  return (
    <FormModal schema={driverSchema} defaultValues={{ name: "", email: "" }}>
      <Header title="Conductores" />
      <section className="mt-4 w-full">
        <div className="flex flex-wrap gap-2">
          <InputFilter />
          <ButtonCreate />
        </div>
        <div className="my-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {listDrivers.map((driver) => (
            <CardDriver
              key={`driver-${driver.id}`}
              driver={{
                id: driver.id,
                email: driver.email,
                name: driver.name,
                isActive: driver.isActive,
              }}
            />
          ))}
        </div>
        <Pagination page={page} totalPages={2} />
      </section>
      <DialogCreateDriver />
    </FormModal>
  );
}
