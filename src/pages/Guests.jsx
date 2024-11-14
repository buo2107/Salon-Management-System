import { Button } from "@/components/ui/button";
import GuestTable from "@/features/guests/GuestTable";
import { UserPlus } from "lucide-react";

function Guests() {
  return (
    <>
      <div className="flex flex-col gap-6 pt-5">
        <h1 className="text-3xl font-semibold tracking-widest text-primary">
          客戶資料
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <GuestTable />

        <Button size="icon">
          <UserPlus />
        </Button>
      </div>
    </>
  );
}

export default Guests;
