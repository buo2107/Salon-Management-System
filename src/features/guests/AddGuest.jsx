import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button size="icon" variant="outline" className="self-end">
          <UserPlus />
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        <CreateGuestForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddGuest;
