import { Edit, Eye, GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";
import { useNavigate } from "react-router-dom";
import CreateGuestForm from "./CreateGuestForm";
import DeleteAlert from "@/ui/DeleteAlert";

function GuestTableMenu() {
  const navigate = useNavigate();

  return (
    <Modal>
      <DeleteAlert>
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
              <DeleteAlert.Trigger />
            </DropdownMenuItem>
          </Menu.Content>
        </Menu>
        <Modal.Window>
          <CreateGuestForm />
        </Modal.Window>
        <DeleteAlert.Window />
      </DeleteAlert>
    </Modal>
  );
}

export default GuestTableMenu;
