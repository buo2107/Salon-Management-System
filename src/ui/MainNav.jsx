import {
  House,
  CalendarClock,
  SquareScissors,
  Users,
  BadgeDollarSign,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const navList = [
  {
    title: "儀錶板",
    icon: House,
    link: "/dashboard",
  },
  {
    title: "臨時/預約",
    icon: CalendarClock,
    link: "/bookings",
  },
  {
    title: "服務/商品",
    icon: SquareScissors,
    link: "/products",
  },
  {
    title: "客戶資料",
    icon: Users,
    link: "/guests",
  },
  {
    title: "記帳本",
    icon: BadgeDollarSign,
    link: "/accountingLedger",
  },
  //   {
  //     title: "設定",
  //     icon: SlidersHorizontal,
  //     link: "/settings",
  //   },
];

function MainNav() {
  return (
    <SidebarGroup>
      {navList.map((item) => (
        <SidebarMenu key={item.title}>
          <SidebarMenuItem>
            <Link to={item.link}>
              <SidebarMenuButton className="group/item space-x-1 px-5 py-8 text-base text-gray-500">
                <item.icon className="group-hover/item:text-indigo-600" />
                <span className="tracking-widest group-hover/item:text-indigo-950">
                  {item.title}
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      ))}
    </SidebarGroup>
  );
}

export default MainNav;
