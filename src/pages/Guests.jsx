import GuestTable from "../features/guests/GuestTable";
import Heading from "../ui/Heading";
import LayoutRow from "../ui/LayoutRow";

function Guests() {
  return (
    <>
      <LayoutRow>
        <Heading as="h1">客戶資料</Heading>
      </LayoutRow>

      <GuestTable />
    </>
  );
}

export default Guests;
