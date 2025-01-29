import AddLedger from "@/features/ledger/AddExpense";
import LedgerTable from "@/features/ledger/LedgerTable";
import Heading from "@/ui/Heading";

function AccountingLedger() {
  return (
    <>
      <Heading>收支明細</Heading>
      <div className="flex flex-row items-start gap-3">
        {/* <AddLedger /> */}
      </div>
      <LedgerTable />
    </>
  );
}

export default AccountingLedger;
