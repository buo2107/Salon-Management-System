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
      className="flex flex-col items-stretch rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="start"
      sideOffset={4}
    >
      {children}
    </DropdownMenuContent>
  );
}

Menu.Trigger = Trigger;
Menu.Content = Content;

export default Menu;
