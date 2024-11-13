import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

function NavSettings() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link to="/settings">
          <SidebarMenuButton className="group/item space-x-1 p-6 text-base text-gray-500">
            <SlidersHorizontal className="group-hover/item:text-indigo-600" />
            <span className="tracking-widest group-hover/item:text-indigo-950">
              設定
            </span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavSettings;
