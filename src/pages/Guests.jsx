import { Button } from "@/components/ui/button";
import GuestTable from "@/features/guests/GuestTable";
import Modal from "@/ui/Modal";
import Pagination from "@/ui/Pagination";
import { UserPlus } from "lucide-react";

function Guests() {
  return (
    <>
      <div className="flex flex-row pt-5">
        <h1 className="text-3xl font-semibold tracking-widest text-primary">
          客戶資料
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <Modal>
          <Modal.Trigger>
            <Button size="icon" variant="outline" className="self-end">
              <UserPlus />
            </Button>
          </Modal.Trigger>
          <Modal.Window />
        </Modal>

        <GuestTable />

        <div className="self-end">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Guests;
