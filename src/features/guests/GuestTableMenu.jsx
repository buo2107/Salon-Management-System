import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Eye, GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";
import DeleteAlert from "@/ui/DeleteAlert";
import CreateGuestForm from "./CreateGuestForm";
import { useDeleteGuest } from "./useDeleteGuest";

function GuestTableMenu({ data }) {
  const [open, setOpen] = useState(false);
  const { deleteGuest } = useDeleteGuest();
  const navigate = useNavigate();

  return (
    <Modal open={open} onOpenChange={setOpen}>
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
                onClick={() => navigate(`/guests/${data.id}`)}
              >
                <Eye />
                詳細資料
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* Update guest data trigger button */}
              <Modal.Trigger>
                <Button variant="ghost" className="w-full justify-start">
                  <Edit />
                  修改內容
                </Button>
              </Modal.Trigger>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteAlert.Trigger />
            </DropdownMenuItem>
          </Menu.Content>
        </Menu>
        {/* Update guest data window form */}
        <Modal.Window>
          <CreateGuestForm
            guestToUpdate={data}
            onCloseModal={() => setOpen(false)}
          />
        </Modal.Window>
        <DeleteAlert.Window onConfirm={() => deleteGuest(data.id)} />
      </DeleteAlert>
    </Modal>
  );
}

export default GuestTableMenu;
