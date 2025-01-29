import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpenseTable from "./ExpenseTable";
import IncomeTable from "./IncomeTable";
import AddExpense from "./AddExpense";

function LedgerTable() {
  return (
    <Tabs defaultValue="expense-table">
      <div className="text-center">
        <TabsList className="h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
          <TabsTrigger
            value="tab-1"
            className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
          >
            全部
          </TabsTrigger>
          <TabsTrigger
            value="income-table"
            className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
          >
            收入
          </TabsTrigger>
          <TabsTrigger
            value="expense-table"
            className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
          >
            支出
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="tab-1">
        <p className="p-4 text-center text-xs text-muted-foreground">
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="income-table">
        <IncomeTable />
      </TabsContent>
      <TabsContent value="expense-table">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div>Search</div>
            <div>FILTER</div>
          </div>
          <AddExpense />
        </div>
        <ExpenseTable />
      </TabsContent>
    </Tabs>
  );
}

export default LedgerTable;
