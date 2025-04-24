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

export async function createExpense(newExpense) {
  const { data, error } = await supabase
    .from("expense")
    .insert([{ ...newExpense }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be created");
  }
}
