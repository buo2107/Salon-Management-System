import {
  PackageMinus,
  PackagePlus,
  GripHorizontal,
  Trash2,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";

function ProductTableMenu() {
  return (
    <Modal>
      <Menu>
        <Menu.Trigger>
          <Button size="icon" variant="ghost">
            <GripHorizontal />
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          <DropdownMenuItem>
            <Button variant="ghost" className="w-full justify-start">
              <PackagePlus />
              進貨
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Modal.Trigger>
              <Button variant="ghost" className="w-full justify-start">
                <PackageMinus />
                退貨
              </Button>
            </Modal.Trigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Modal.Trigger>
              <Button variant="ghost" className="w-full justify-start">
                <Edit />
                修改資料
              </Button>
            </Modal.Trigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className="w-full justify-start">
              <Trash2 />
              刪除資料
            </Button>
          </DropdownMenuItem>
        </Menu.Content>
      </Menu>
      <Modal.Window>
        <form></form>
      </Modal.Window>
    </Modal>
  );
}

export default ProductTableMenu;
