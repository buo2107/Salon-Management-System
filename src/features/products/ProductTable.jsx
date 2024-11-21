import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPhoneNumber } from "@/utils/helpers";
import ProductTableMenu from "./ProductTableMenu";

function ProductTable() {
  return (
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
          <TableRow className="*:text-center">
            <TableCell>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="aspect-3/2 block w-32 -translate-x-2 scale-125 object-contain object-center"
                  src="hair-wash.jpg"
                  alt="product"
                />
                <span className="text-base">頭皮淨化洗髮精</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge>洗髮精</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">綠藤生機</Badge>
            </TableCell>
            <TableCell>250ml</TableCell>
            <TableCell>400 / 480</TableCell>
            <TableCell>2024/2/3</TableCell>
            <TableCell>15</TableCell>
            <TableCell>
              <ProductTableMenu />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductTable;
