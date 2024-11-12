import {
  House,
  CalendarClock,
  SquareScissors,
  Users,
  BadgeDollarSign,
  SlidersHorizontal,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navList = [
  {
    title: "儀錶板",
    icon: House,
  },
  {
    title: "臨時/預約",
    icon: CalendarClock,
  },
  {
    title: "服務/商品",
    icon: SquareScissors,
  },
  {
    title: "客戶資料",
    icon: Users,
  },
  {
    title: "記帳本",
    icon: BadgeDollarSign,
  },
  {
    title: "設定",
    icon: SlidersHorizontal,
  },
];

function MainNav() {
  return (
    <SidebarGroup className="gap-1">
      {navList.map((item) => (
        <SidebarMenu key={item.title}>
          <SidebarMenuItem>
            <SidebarMenuButton className="group/item space-x-1 p-6 text-base text-gray-500">
              <item.icon className="group-hover/item:text-teal-700" />
              <span className="tracking-widest">{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      ))}
    </SidebarGroup>
  );
}

export default MainNav;
