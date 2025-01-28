import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Spinner from "@/ui/Spinner";
import { useExpenses } from "./useExpenses";
import { Button } from "@/components/ui/button";
import { GripHorizontal } from "lucide-react";
import { formatCurrency } from "@/utils/helpers";
import { Badge } from "@/components/ui/badge";
import { useExpenseItem } from "./useExpenseItem";

function ExpenseTable() {
  const { expenses, isLoading } = useExpenses();
  const { expenseItems, isLoading: isLoading2 } = useExpenseItem();

  if (isLoading || isLoading2) return <Spinner />;

  // console.log(expenseItems[0].products.name);
  const products = expenseItems.map((item) => {
    return { name: item.products.name, quantity: item.quantity };
  });

  console.log(expenses, products);
  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableHead>日期</TableHead>
            <TableHead>分類</TableHead>
            <TableHead>說明</TableHead>
            <TableHead className="text-right">金額</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {expenses.map((item) => (
            <TableRow
              key={item.id}
              className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
            >
              <TableCell className="text-base font-medium">
                {item.date}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{item.category}</Badge>
              </TableCell>
              <TableCell>
                {item.description ||
                  products.map((item) => (
                    <p key={item.name}>{`${item.name} x ${item.quantity}`}</p>
                  ))}
              </TableCell>
              <TableCell className="text-right text-base font-medium">
                {formatCurrency(item.amount)}
              </TableCell>
              <TableCell className="text-center">
                <Button size="icon" variant="ghost">
                  <GripHorizontal />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Table with vertical lines
      </p>
    </div>
  );
}

export default ExpenseTable;
