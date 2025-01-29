import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function AddExpense() {
  // TODO : reference to shadcn ui Drawer/response dialog
  return (
    <Button variant="outline" className="self-end">
      <Plus
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      支出
    </Button>
  );
}

export default AddExpense;
