import { PAGE_SIZE } from "@/utils/constants";
import supabase from "./supabase";

export async function getGuests({ filter, page }) {
  let query = supabase.from("guests").select("*", { count: "exact" });

  // FILTER
  if (filter) query = query.like(filter.field, `%${filter.value}%`);

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Guests data could not be loaded");
  }

  return { data, count };
}

export async function getGuest(id) {
  let { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guests data could not be loaded");
  }

  return data;
}

export async function createGuest(newGuest) {
  const { error } = await supabase
    .from("guests")
    .insert([{ ...newGuest }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }
}

export async function updateGuest(updateData, id) {
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
}

export async function deleteGuest(id) {
  const { error } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be deleted");
  }
}
