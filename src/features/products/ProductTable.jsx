import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductTableMenu from "./ProductTableMenu";
import { useProducts } from "./useProducts";
import Spinner from "@/ui/Spinner";

function ProductTable() {
  const { isLoading, products } = useProducts();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="rounded-md border-2">
          <Table>
            <TableHeader>
              <TableRow className="text-base *:text-center *:font-semibold">
                <TableHead className="text-center">名稱</TableHead>
                <TableHead>類別</TableHead>
                <TableHead>品牌</TableHead>
                <TableHead>規格</TableHead>
                <TableHead>成本/售價</TableHead>
                <TableHead>上次進貨日期</TableHead>
                <TableHead>庫存</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="*:text-center">
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <img
                        className="block aspect-3/2 w-28 -translate-x-2 scale-125 object-contain object-center"
                        src="sampoo.png"
                        alt="product"
                      />
                      <span className="text-base">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>{product.catagory}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.brand}</Badge>
                  </TableCell>
                  <TableCell>{product.spec}</TableCell>
                  <TableCell>
                    {product.cost} / {product.price}
                  </TableCell>
                  <TableCell>2024/2/3</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <ProductTableMenu />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}

export default ProductTable;
