import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";

function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link to="/user">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar src="default-user.jpg" alt="user image" radius="full" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">attila</span>
              <span className="truncate text-xs">test@test.com</span>
            </div>
            {/* <ChevronsUpDown className="ml-auto size-4" /> */}
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavUser;
