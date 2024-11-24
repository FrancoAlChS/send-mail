import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/config/sidebar/sidebar-items";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-inherit hover:cursor-default"
              >
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <img src="/logo.svg" className="size-6 flex-shrink" alt="" />
                  <h2 className="truncate text-lg">Send Mail</h2>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild tooltip={item.label}>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="px-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
