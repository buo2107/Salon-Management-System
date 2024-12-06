import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";
import CreateProductForm from "./CreateProductForm";
import { useState } from "react";

function AddProduct() {
  const [open, setOpen] = useState(false);

  return (
    <Modal>
      <Modal.Trigger>
        <Button size="icon" variant="outline" className="self-end">
          <Plus />
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        <CreateProductForm onCloseModal={() => setOpen(false)} />
      </Modal.Window>
    </Modal>
  );
}

export default AddProduct;
