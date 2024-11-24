import { CarFront, LucideIcon, Mail } from "lucide-react";

export interface SidebarItem {
  label: string;
  url: string;
  icon: LucideIcon;
}

export const sidebarItems: SidebarItem[] = [
  { label: "Conductores", url: "/conductores", icon: CarFront },
  { label: "Servicios diarios", url: "/servicios-diarios", icon: Mail },
];
