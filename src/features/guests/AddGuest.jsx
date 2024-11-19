import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";

function AddGuest() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button size="icon" variant="outline" className="self-end">
          <UserPlus />
        </Button>
      </Modal.Trigger>
      <Modal.Window />
    </Modal>
  );
}

export default AddGuest;
