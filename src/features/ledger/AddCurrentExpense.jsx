import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Modal from "@/ui/Modal";
import CreateCurrentExpenseForm from "./CreateCurrentExpenseForm";

function AddCurrentExpense() {
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
          營業支出
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        <CreateCurrentExpenseForm onCloseModal={() => setOpen(false)} />
      </Modal.Window>
    </Modal>
  );
}

export default AddCurrentExpense;
