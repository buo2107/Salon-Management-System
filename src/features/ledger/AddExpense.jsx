import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Modal from "@/ui/Modal";
import CreateExpenseForm from "./CreateExpenseForm";

function AddExpense() {
  // TODO : reference to shadcn ui Drawer/response dialog
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button variant="outline" className="self-end">
          <Plus
            className="-ms-1 me-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          支出
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        {/* <CreateExpenseForm onCloseModal={() => setOpen(false)} /> */}
        <CreateExpenseForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddExpense;
