import { useSearchParams } from "react-router-dom";
import { AtSign } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchInput({ placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCompositionStart(e) {
    e.target.composing = true;
  }

  function handleCompositionEnd(e) {
    if (!e.target.composing) return;

    e.target.composing = false;
    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
  }

  function handleChange(e) {
    if (e.target.composing) return;

    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
  }

  function handleBlur(e) {
    e.target.value = "";
    searchParams.set("search", "");
    setSearchParams(searchParams);
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          className="peer ps-9"
          placeholder={placeholder}
          type="text"
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <AtSign size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
