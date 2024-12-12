import { PackageMinus, PackagePlus, GripHorizontal, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";
import DeleteAlert from "@/ui/DeleteAlert";
import { useDeleteProduct } from "./useDeleteProduct";

function ProductTableMenu({ data }) {
  const { deleteProduct } = useDeleteProduct();
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
            <DropdownMenuItem
              className={data.catagory === "技術" ? "hidden" : ""}
            >
              <Button variant="ghost" className="w-full justify-start">
                <PackagePlus />
                進貨
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={data.catagory === "技術" ? "hidden" : ""}
            >
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
              <DeleteAlert.Trigger />
            </DropdownMenuItem>
          </Menu.Content>
        </Menu>
        <Modal.Window>
          <form></form>
        </Modal.Window>
        <DeleteAlert.Window onConfirm={() => deleteProduct(data.id)} />
      </DeleteAlert>
    </Modal>
  );
}

export default ProductTableMenu;
