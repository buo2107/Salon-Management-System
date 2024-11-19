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

function Window({ children, title = "", description = "" }) {
  return (
    <DialogContent>
      <DialogHeader className="hidden">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  );
}

Modal.Trigger = Trigger;
Modal.Window = Window;

export default Modal;
