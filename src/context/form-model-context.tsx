/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, ReactNode, useContext, useState } from "react";
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import z, { ZodType } from "zod";

interface Context<T extends ZodType<any, any, any>> {
  mode: "create" | "update";
  form: UseFormReturn<z.TypeOf<T>, any, undefined>;
  edit: (data: UseFormProps<z.infer<T>>["defaultValues"]) => void;
  create: () => void;
  open: boolean;
  onOpenChange: () => void;
}

export const FormModalContext = createContext<Context<any>>({
  mode: "create",
  form: {} as UseFormReturn<z.TypeOf<any>, any, undefined>,
  edit: () => null,
  create: () => null,
  open: false,
  onOpenChange: () => null,
});

export function useFormModal<T extends ZodType<any, any, any>>() {
  const context = useContext<Context<T>>(FormModalContext);
  if (!context || context.form === null) {
    throw new Error("No existe el contexto");
  }
  return context;
}

// PROVIDER
interface Props<T extends ZodType<any, any, any>> {
  children: ReactNode;
  defaultValues: UseFormProps<z.infer<T>>["defaultValues"];
  schema: T;
}

export const FormModal = <T extends ZodType<any, any, any>>({
  children,
  defaultValues,
  schema,
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "update">("create");
  const form = useForm<typeof schema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  function onOpenChange() {
    setOpen((prev) => !prev);
  }

  function edit(data: any) {
    setMode("update");
    form.reset(data);
    onOpenChange();
  }

  function create() {
    setMode("create");
    onOpenChange();
    form.reset(defaultValues as any);
  }

  return (
    <FormModalContext.Provider
      value={{
        mode,
        form,
        edit,
        create,
        open,
        onOpenChange,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
};
