import supabase from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products data could not be loaded");
  }

  return data;
}

export async function createProduct(newProduct) {
  const { error } = await supabase
    .from("products")
    .insert([{ ...newProduct }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Product data could not be created");
  }
}
