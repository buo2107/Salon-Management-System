import supabase from "./supabase";

export async function getExpenses() {
  let { data, error } = await supabase.from("expense").select("*");

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be loaded");
  }

  return data;
}

export async function getExpenseItem() {
  let { data, error } = await supabase
    .from("expenseItem")
    .select("*, products(name)");

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be loaded");
  }

  return data;
}

export async function createExpense(newExpense, newExpenseItems = []) {
  const { data, error } = await supabase
    .from("expense")
    .insert([{ ...newExpense }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be created");
  }

  if (newExpense?.category === "營業支出") return;
  //取得此newExpense的id
  const expenseId = data[0].id;

  // 在newExpenseItems裡加入expenseId
  newExpenseItems?.forEach((item) => (item.expenseId = expenseId));
  console.log(newExpenseItems);

  const { data: expenseItems, error: expenseItemsError } = await supabase
    .from("expenseItem")
    .insert(newExpenseItems)
    .select();

  if (expenseItemsError) {
    console.error(expenseItemsError);
    throw new Error("Expense data could not be created");
  }
}
