import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import DeleteAlert from "@/ui/DeleteAlert";
import Menu from "@/ui/Menu";
import { GripHorizontal } from "lucide-react";
import { useDeleteExpense } from "./useDeleteExpense";

function ExpenseTableMenu({ id }) {
  const { deleteExpense } = useDeleteExpense();

  return (
    <DeleteAlert>
      <Menu>
        <Menu.Trigger>
          <Button size="icon" variant="ghost">
            <GripHorizontal />
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          <DropdownMenuItem>
            <DeleteAlert.Trigger />
          </DropdownMenuItem>
        </Menu.Content>
      </Menu>
      <DeleteAlert.Window onConfirm={() => deleteExpense(id)} />
    </DeleteAlert>
  );
}

export default ExpenseTableMenu;
