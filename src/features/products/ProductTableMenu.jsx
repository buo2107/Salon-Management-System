import { PackageMinus, PackagePlus, GripHorizontal, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Menu from "@/ui/Menu";
import Modal from "@/ui/Modal";
import DeleteAlert from "@/ui/DeleteAlert";
import { useDeleteProduct } from "./useDeleteProduct";
import CreateProductForm from "./CreateProductForm";
import { useState } from "react";
import CreateSellingExpenseForm from "../ledger/CreateSellingExpenseForm";

function ProductTableMenu({ data }) {
  const [editOpen, setEditOpen] = useState(false);
  const [stockInOpen, setStockInOpen] = useState(false);
  const [stockOutOpen, setStockOutOpen] = useState(false);
  const { deleteProduct } = useDeleteProduct();

  return (
    <Modal open={editOpen} onOpenChange={setEditOpen}>
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
                onClick={() => setStockInOpen(true)}
              >
                <PackagePlus />
                進貨
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setStockOutOpen(true)}
              >
                <PackageMinus />
                退貨
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Modal.Trigger id="edit">
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

        {/* 進貨 Modal */}
        <Modal open={stockInOpen} onOpenChange={setStockInOpen}>
          <Modal.Window>
            <CreateSellingExpenseForm
              product={data}
              onCloseModal={() => setStockInOpen(false)}
            />
          </Modal.Window>
        </Modal>

        {/* 退貨 Modal */}
        <Modal open={stockOutOpen} onOpenChange={setStockOutOpen}>
          <Modal.Window>
            {/* <StockOutForm
              product={data}
              onCloseModal={() => setStockOutOpen(false)}
            /> */}
          </Modal.Window>
        </Modal>

        {/* 修改產品 Modal */}
        <Modal.Window id="edit">
          <CreateProductForm onCloseModal={() => setEditOpen(false)} />
        </Modal.Window>
        <DeleteAlert.Window onConfirm={() => deleteProduct(data.id)} />
      </DeleteAlert>
    </Modal>
  );
}

export default ProductTableMenu;
