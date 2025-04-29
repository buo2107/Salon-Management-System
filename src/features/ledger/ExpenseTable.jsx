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
import { formatCurrency } from "@/utils/helpers";
import { Badge } from "@/components/ui/badge";
import { useExpenseItem } from "./useExpenseItem";
import { useMediaQuery } from "@/hooks/use-media-query";
import ExpenseTableMenu from "./ExpenseTableMenu";
import { Pagination } from "@/components/ui/pagination";

function ExpenseTable() {
  const { expenses, isLoading } = useExpenses();
  const { expenseItems, isLoading: isLoading2 } = useExpenseItem();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isLoading || isLoading2) return <Spinner />;

  // Combine the expense and expenseItem data
  const fullExpenses = expenses.map((expense) => {
    const matchingItem = expenseItems.filter(
      (item) => item.expenseId === expense.id,
    );
    if (matchingItem) {
      expense.item = matchingItem;
    }
    return expense;
  });

  return (
    <>
      <div>
        <Table>
          <TableHeader className="bg-transparent">
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableHead>日期</TableHead>
              <TableHead>分類</TableHead>
              {isDesktop && <TableHead>說明</TableHead>}
              <TableHead className="text-right">金額</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
            {fullExpenses.map((expense) => (
              <TableRow
                key={expense.id}
                className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
              >
                <TableCell className="font-medium">{expense.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="w-[70px]">
                    {expense.category}
                  </Badge>
                </TableCell>
                {isDesktop && (
                  <TableCell>
                    {expense.item.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        {expense.description}
                      </p>
                    ) : (
                      expense.item.map((item) => (
                        <p
                          key={item.id}
                          className="text-sm text-muted-foreground"
                        >{`${item.products.name} x ${item.quantity}`}</p>
                      ))
                    )}
                  </TableCell>
                )}
                <TableCell className="text-right font-medium">
                  {formatCurrency(expense.amount)}
                </TableCell>
                <TableCell className="text-center" width={60}>
                  <ExpenseTableMenu id={expense.id} />
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
      </div>

      {/* <Pagination count={count} /> */}
    </>
  );
}

export default ExpenseTable;
