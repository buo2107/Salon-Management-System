import { Input } from "@/components/ui/input";
import { AtSign, ChevronDown } from "lucide-react";
import { useState } from "react";
import AddGuest from "./AddGuest";
import { useSearchParams } from "react-router-dom";
import { Label } from "@/components/ui/label";

function GuestTableOperations({ table }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // PROBLEM: 解決中文輸入提前被斷句問題
  function handleChange(e) {
    searchParams.set("name", e.target.value);
    setSearchParams(searchParams);
    // table.getColumn(filterBy)?.setFilterValue(e.target.value);
  }

  return (
    <>
      <div className="space-y-2">
        <div className="relative">
          <Input
            className="peer ps-9"
            placeholder="姓名"
            type="text"
            value={searchParams.get("name") || ""}
            onChange={handleChange}
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <AtSign size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>

      <AddGuest />
    </>
  );
}

export default GuestTableOperations;
