import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest() {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button size="icon" variant="outline" className="self-end">
          <UserPlus />
        </Button>
      </Modal.Trigger>
      <Modal.Window>
        <CreateGuestForm modalOpenChange={setOpen} />
      </Modal.Window>
    </Modal>
  );
}

export default AddGuest;
