"use client";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function InputFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((filter: string) => {
    const params = new URLSearchParams(searchParams);
    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <Input
      className="w-full max-w-96"
      placeholder="Buscar por nombre o correo"
      defaultValue={searchParams.get("filter")?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}
