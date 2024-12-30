import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleValueChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Select defaultValue="price-desc" onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="選擇排序方式" />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
        <SelectItem value="price-desc">
          <div className="flex items-center gap-1">
            售價
            <TrendingDown className="text-teal-500" />
          </div>
        </SelectItem>
        <SelectItem value="price-asc">
          <div className="flex items-center gap-1">
            售價
            <TrendingUp className="text-rose-500" />
          </div>
        </SelectItem>
        {/* <SelectItem value="cost-desc">成本(高-低)</SelectItem>
        <SelectItem value="cost-asc">成本(低-高)</SelectItem> */}
        <SelectItem value="stock-desc">
          <div className="flex items-center gap-1">
            庫存量
            <TrendingDown className="text-teal-500" />
          </div>
        </SelectItem>
        <SelectItem value="stock-asc">
          <div className="flex items-center gap-1">
            庫存量
            <TrendingUp className="text-rose-500" />
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortBy;
