import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";
import Modal from "@/ui/Modal";
import CreateSellingExpenseForm from "./CreateSellingExpenseForm";

function AddSellingExpense() {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button variant="outline" className="self-end">
          <PackagePlus
            className="-ms-1 me-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          商品進貨
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        {/* <CreateExpenseForm onCloseModal={() => setOpen(false)} /> */}
        <CreateSellingExpenseForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddSellingExpense;
