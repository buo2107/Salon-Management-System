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
          <SidebarMenuButton className="group/item space-x-1 px-5 py-8 text-base font-semibold text-primary/50">
            <SlidersHorizontal className="group-hover/item:text-primary" />
            <span className="tracking-widest group-hover/item:text-primary/70">
              設定
            </span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavSettings;
