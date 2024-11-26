import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateGuestForm from "./CreateGuestForm";
import Modal from "@/ui/Modal";

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
        <CreateGuestForm onCloseModal={() => setOpen(false)} />
      </Modal.Window>
    </Modal>
  );
}

export default AddGuest;
