"use client";

import { useFormModal } from "@/context/form-model-context";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonCreate() {
  const { create } = useFormModal();
  return (
    <Button variant="secondary" onClick={create}>
      <Plus />
      Nuevo
    </Button>
  );
}
