import { Header } from "@/components/dashboard/header";
import { ButtonCreate } from "@/components/drivers/button-create";
import { CardDriver } from "@/components/drivers/card-driver";
import { DialogCreateDriver } from "@/components/drivers/dialog-create-driver";
import { driverSchema } from "@/components/drivers/driver-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormModal } from "@/context/form-model-context";
import { Search } from "lucide-react";

export default function page() {
  return (
    <FormModal schema={driverSchema} defaultValues={{ name: "", email: "" }}>
      <Header title="Conductores" />
      <section className="mt-4 w-full">
        <div className="flex flex-wrap gap-2">
          <Input
            className="w-full max-w-96"
            placeholder="Buscar por nombre o correo"
          />
          <Button variant="secondary">
            <Search />
            Buscar
          </Button>
          <ButtonCreate />
        </div>
        <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          <CardDriver
            driver={{
              id: "1",
              email: "chipanasiguas@gmail.com",
              name: "Franco Chipana",
              isActive: true,
            }}
          />
        </div>
      </section>
      <DialogCreateDriver />
    </FormModal>
  );
}
