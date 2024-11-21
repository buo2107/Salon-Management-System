import AddGuest from "@/features/guests/AddGuest";
import GuestTable from "@/features/guests/GuestTable";
import Pagination from "@/ui/Pagination";

function Guests() {
  return (
    <>
      <div className="flex flex-row pt-5">
        <h1 className="text-3xl font-semibold tracking-widest">客戶資料</h1>
      </div>

      <div className="flex flex-col gap-3">
        <AddGuest />

        <GuestTable />

        <div className="self-end">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Guests;
