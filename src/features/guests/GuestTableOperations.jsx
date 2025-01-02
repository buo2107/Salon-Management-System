import AddGuest from "./AddGuest";
import SearchInput from "@/ui/SearchInput";

function GuestTableOperations() {
  return (
    <>
      <div className="flex gap-3">
        {/* TODO Maybe just need one SearchInput for both of these */}
        <SearchInput field="name" placeholder="姓名" />
        <SearchInput field="phone_number" placeholder="電話號碼" />
      </div>

      <AddGuest />
    </>
  );
}

export default GuestTableOperations;
