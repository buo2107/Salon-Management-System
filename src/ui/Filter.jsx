import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "@/features/settings/useSettings";
import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { settings, isLoading } = useSettings();

  function handleValueChange(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }
  console.log(settings);

  return (
    <Select defaultValue="all" onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="選擇篩選條件" />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
        {isLoading ? null : (
          <>
            <SelectItem value="all">全部</SelectItem>
            <SelectGroup>
              <SelectLabel>商品類型</SelectLabel>
              {settings.catagory_list.map((catagory) => (
                <SelectItem key={catagory} value={catagory + "c"}>
                  {catagory}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>商品品牌</SelectLabel>
              {settings.brand_list.map((brand) => (
                <SelectItem key={brand} value={brand + "b"}>
                  {brand}
                </SelectItem>
              ))}
            </SelectGroup>
          </>
        )}
      </SelectContent>
    </Select>
  );
}

export default Filter;
