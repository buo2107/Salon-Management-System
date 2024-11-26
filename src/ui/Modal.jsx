import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Modal({ children, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
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

// function Footer() {
//   return (
//     <DialogFooter>
//       <DialogClose asChild>
//         <Button type="submit">Submit</Button>
//       </DialogClose>
//     </DialogFooter>
//   );
// }

Modal.Trigger = Trigger;
Modal.Window = Window;
// Modal.Footer = Footer;

export default Modal;
