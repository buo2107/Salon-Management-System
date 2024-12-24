import Filter from "@/ui/Filter";
import SortBy from "@/ui/SortBy";

function ProductTableOperations() {
  return (
    <div className="flex w-1/2 gap-3">
      <Filter />
      <SortBy />
    </div>
  );
}

export default ProductTableOperations;
