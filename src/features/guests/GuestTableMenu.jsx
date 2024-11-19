import { Edit, Eye, GripHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";
import { useNavigate } from "react-router-dom";
import CreateGuestForm from "./CreateGuestForm";

function GuestTableMenu() {
  const navigate = useNavigate();

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
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate("/user")}
            >
              <Eye />
              See detail
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Modal.Trigger>
              <Button variant="ghost" className="w-full justify-start">
                <Edit />
                Edit
              </Button>
            </Modal.Trigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className="w-full justify-start">
              <Trash />
              Delete
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

export default GuestTableMenu;
