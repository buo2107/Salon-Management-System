import GuestTable from "@/features/guests/GuestTable";

function Guests() {
  return (
    <>
      <div className="mb-10 flex flex-row pt-5">
        <h1 className="text-3xl font-semibold tracking-widest">客戶資料</h1>
      </div>

      <div className="flex flex-col gap-3">
        <GuestTable />
      </div>
    </>
  );
}

export default Guests;
