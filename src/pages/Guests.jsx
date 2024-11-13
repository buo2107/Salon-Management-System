// import GuestTable from "../features/guests/GuestTable";

import GuestTable from "@/features/guests/GuestTable";

function Guests() {
  return (
    <>
      <div className="flex flex-col gap-6 pt-5">
        <h1 className="text-3xl font-semibold tracking-widest">客戶資料</h1>
      </div>

      <div className="px-10 py-6">
        <GuestTable />
      </div>
      {/* <GuestTable /> */}
    </>
  );
}

export default Guests;
