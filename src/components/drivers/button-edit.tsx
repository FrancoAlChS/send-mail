"use client";
import { useFormModal } from "@/context/form-model-context";
import { Driver } from "@/domain/entities/driver";
import { FilePenLine } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  driver: Driver;
}

export function ButtonEdit({ driver }: Props) {
  const { edit } = useFormModal();

  return (
    <Button
      size="icon"
      variant="outline"
      className="border-blue-500 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
      onClick={() =>
        edit({ ...driver, state: driver.isActive ? "ACTIVO" : "INACTIVO" })
      }
    >
      <FilePenLine className="size-4" />
    </Button>
  );
}
