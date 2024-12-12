import GuestTable from "@/features/guests/GuestTable";
import Heading from "@/ui/Heading";

function Guests() {
  return (
    <>
      <Heading>客戶資料</Heading>

      <div className="flex flex-col gap-3">
        <GuestTable />
      </div>
    </>
  );
}

export default Guests;
