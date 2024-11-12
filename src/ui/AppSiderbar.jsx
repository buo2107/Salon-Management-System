// import * as React from "react";
import { House, CalendarClock, SquareScissors, Users } from "lucide-react";
// import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import MainNav from "./MainNav";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-5 items-center p-3">
        <img className="w-1/2" src="logo-light.png" alt="logo" />
      </SidebarHeader>
      <SidebarContent>
        {/* NAV-MAIN */}
        <MainNav />
        {/* <SidebarGroup className="gap-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Home"
                className="space-x-1 p-6 text-base"
              >
                <House />
                <span className="tracking-widest">儀錶板</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="gap-3 p-6 text-base">
                <CalendarClock />
                <span className="tracking-widest">預約/臨時</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="gap-3 p-6 text-base">
                <SquareScissors />
                <span className="tracking-widest">服務項目</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="gap-3 p-6">
                <Users />
                <span className="tracking-widest">客戶資料</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarFooter>{/* LOGOUT? */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
