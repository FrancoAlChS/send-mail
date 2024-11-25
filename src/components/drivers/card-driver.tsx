import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Driver } from "@/domain/entities/driver";
import { Mail, Trash2 } from "lucide-react";
import { ButtonEdit } from "./button-edit";

interface Props {
  driver: Driver;
}

export function CardDriver({ driver }: Props) {
  return (
    <Card>
      <CardHeader className="flex-row justify-between gap-2">
        <CardTitle className="truncate max-w-[85%]">{driver.name}</CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`rounded-full w-4 h-4 ${
                  driver.isActive ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{driver.isActive ? "Activo" : "Inactivo"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <p className=" flex items-center gap-2 truncate text-sm text-neutral-500">
          <Mail className="size-4" /> {driver.email}
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2 py-3">
        <ButtonEdit driver={driver} />
        <Button
          size="icon"
          variant="outline"
          className="border-red-500 text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <Trash2 className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
