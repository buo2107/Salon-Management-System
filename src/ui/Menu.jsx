import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Menu({ children }) {
  return <DropdownMenu>{children}</DropdownMenu>;
}

function Trigger({ children }) {
  return <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>;
}

function Content({ children }) {
  return (
    <DropdownMenuContent>
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
