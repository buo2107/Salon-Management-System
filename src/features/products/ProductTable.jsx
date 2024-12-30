import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Spinner from "@/ui/Spinner";
import Pagination from "@/ui/Pagination";
import { formatCurrency } from "@/utils/helpers";
import { useProducts } from "./useProducts";
import ProductTableMenu from "./ProductTableMenu";

function ProductTable() {
  const { isLoading, products, count } = useProducts();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="rounded-md border-2">
            <Table>
              <TableHeader>
                <TableRow className="text-sm *:text-center">
                  <TableHead>名稱</TableHead>
                  <TableHead>類別</TableHead>
                  <TableHead>品牌</TableHead>
                  <TableHead>規格</TableHead>
                  <TableHead>售價</TableHead>
                  <TableHead>上次進貨日期</TableHead>
                  <TableHead>庫存</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    {/* Mobile may need to change the colSpan */}
                    <TableCell colSpan={8} className="h-24 text-center">
                      <span>目前沒有商品</span>
                    </TableCell>
                  </TableRow>
                ) : (
                  products.map((product) => (
                    <TableRow key={product.id} className="*:text-center">
                      <TableCell>
                        <div className="flex flex-row items-center">
                          {/* <img
                        className="block aspect-3/2 w-28 -translate-x-2 scale-125 object-contain object-center"
                        src={product.img}
                        alt={product.catagory}
                        /> */}
                          <span className="text-base">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge>{product.catagory}</Badge>
                      </TableCell>
                      <TableCell>
                        {product.brand ? (
                          <Badge variant="secondary">{product.brand}</Badge>
                        ) : (
                          "--"
                        )}
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {product.spec ? product.spec : "--"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="font-semibold">
                          {formatCurrency(product.price)}
                        </span>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <span className="font-semibold">{product.stock}</span>
                      </TableCell>
                      <TableCell>
                        <ProductTableMenu data={product} />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <Pagination count={count} />
        </>
      )}
    </>
  );
}

export default ProductTable;
