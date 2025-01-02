import AddGuest from "./AddGuest";
import SearchInput from "@/ui/SearchInput";

function GuestTableOperations() {
  return (
    <>
      <div className="flex gap-3">
        <SearchInput placeholder="姓名 or 電話號碼" />
      </div>

      <AddGuest />
    </>
  );
}

export default GuestTableOperations;
