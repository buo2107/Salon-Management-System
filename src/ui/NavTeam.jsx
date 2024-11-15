import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Avatar from "./Avatar";

function NavTeam() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar src="team-logo.jpg" alt="logo" radius="lg" />

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">峰工作室</span>
            <span className="truncate text-xs">no plan</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavTeam;
