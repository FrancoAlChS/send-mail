import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <h1 className="text-xl">{title}</h1>
    </header>
  );
}
