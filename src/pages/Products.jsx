import AddProduct from "@/features/products/AddProduct";
import ProductTable from "@/features/products/ProductTable";
import DeleteAlert from "@/ui/DeleteAlert";

function Products() {
  return (
    <>
      <div className="flex flex-row pt-5">
        <h1 className="text-3xl font-semibold tracking-widest">商品資料</h1>
      </div>

      <div className="flex flex-col gap-3">
        <AddProduct />

        <ProductTable />

        <div className="self-end">
          <DeleteAlert />
        </div>
      </div>
    </>
  );
}

export default Products;
