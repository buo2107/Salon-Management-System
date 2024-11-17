import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";

function Menu({ children }) {
  return <DropdownMenu>{children}</DropdownMenu>;
}

function Trigger({ children }) {
  return <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>;
}

function Content({ children }) {
  const { isMobile } = useSidebar();
  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  );
}

Menu.Trigger = Trigger;
Menu.Content = Content;

export default Menu;
