import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Modal({ children }) {
  return <Dialog>{children}</Dialog>;
}

function Trigger({ children }) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}

function Window({ children }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

Modal.Trigger = Trigger;
Modal.Window = Window;

export default Modal;
