import supabase from "./supabase";

export async function getExpenses() {
  let { data, error } = await supabase.from("expense").select("*");

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be loaded");
  }

  return data;
}

export async function getExpenseItem(id) {
  let { data, error } = await supabase
    .from("expenseItem")
    .select("*, products(name)")
    .eq("expenseId", id);

  if (error) {
    console.error(error);
    throw new Error("Expense data could not be loaded");
  }

  return data;
}
