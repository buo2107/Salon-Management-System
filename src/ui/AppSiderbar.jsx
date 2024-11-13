import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import MainNav from "./MainNav";
import NavSettings from "./NavSettings";
import Logo from "./Logo";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="my-4 items-center p-3">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <MainNav />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
