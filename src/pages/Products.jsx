import AddProduct from "@/features/products/AddProduct";
import ProductTable from "@/features/products/ProductTable";
import Heading from "@/ui/Heading";

function Products() {
  return (
    <>
      <Heading>商品資料</Heading>

      <div className="flex flex-col gap-3">
        <AddProduct />

        <ProductTable />
      </div>
    </>
  );
}

export default Products;
