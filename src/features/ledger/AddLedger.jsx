import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";

function AddLedger() {
  return (
    <Button size="icon" variant="outline" className="self-end">
      <HandCoins />
    </Button>
  );
}

export default AddLedger;
