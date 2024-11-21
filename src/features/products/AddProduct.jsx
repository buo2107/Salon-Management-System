import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";

function AddProduct() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button size="icon" variant="outline" className="self-end">
          <Plus />
        </Button>
      </Modal.Trigger>
      <Modal.Window />
    </Modal>
  );
}

export default AddProduct;
