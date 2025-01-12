import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useId, useRef, useState } from "react";

export default function Component() {
  const checkboxId = useId();
  const [checked, setChecked] = useState(false);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   if (checked === true && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [checked]);

  return (
    <div>
      <div className="flex gap-2">
        <div className="flex w-[4rem] items-center justify-around gap-2">
          <Checkbox
            id={checkboxId}
            checked={checked}
            onCheckedChange={setChecked}
            aria-describedby={`${checkboxId}-description`}
          />

          <Label htmlFor={checkboxId}>會員</Label>
        </div>
        <Input
          type="number"
          placeholder="儲值金額(NTD)"
          aria-label="Additional Information"
          disabled={!checked}
        />
      </div>
    </div>
  );
}
