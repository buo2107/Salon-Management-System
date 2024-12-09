import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

function DeleteAlert({ children }) {
  return <AlertDialog>{children}</AlertDialog>;
}

function Trigger() {
  return (
    <AlertDialogTrigger asChild>
      <Button variant="ghost" className="w-full justify-start">
        <Trash2 />
        刪除資料
      </Button>
    </AlertDialogTrigger>
  );
}

function Window({ onConfirm }) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
        <AlertDialogDescription>
          此動作無法復原，刪除後資料將完全從伺服器中移除。
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>取消</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>確定刪除</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

DeleteAlert.Trigger = Trigger;
DeleteAlert.Window = Window;

export default DeleteAlert;
