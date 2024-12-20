import {
  House,
  CalendarClock,
  SquareScissors,
  Users,
  BadgeDollarSign,
  SlidersHorizontal,
  BaggageClaim,
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
    title: "商品列表",
    icon: BaggageClaim,
    link: "/products",
  },
  {
    title: "服務項目",
    icon: SquareScissors,
    link: "/services",
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
  {
    title: "設定",
    icon: SlidersHorizontal,
    link: "/settings",
  },
];

function MainNav() {
  return (
    <SidebarGroup>
      {navList.map((item) => (
        <SidebarMenu key={item.title}>
          <SidebarMenuItem>
            <Link to={item.link}>
              <SidebarMenuButton className="group/item space-x-1 px-5 py-8 text-base">
                <item.icon className="group-hover/item:text-primary" />
                <span className="tracking-widest group-hover/item:font-semibold group-hover/item:text-primary/70">
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
