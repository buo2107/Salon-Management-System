import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <SelectItem value="price-desc">售價(高-低)</SelectItem>
        <SelectItem value="price-asc">售價(低-高)</SelectItem>
        <SelectItem value="cost-desc">成本(高-低)</SelectItem>
        <SelectItem value="cost-asc">成本(低-高)</SelectItem>
        <SelectItem value="stock-desc">庫存量(高-低)</SelectItem>
        <SelectItem value="stock-asc">庫存量(低-高)</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortBy;
