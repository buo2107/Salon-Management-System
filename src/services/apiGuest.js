import supabase from "./supabase";

export async function getGuests() {
  let { data, error } = await supabase.from("guests").select("*");

  if (error) {
    console.error(error);
    throw new Error("Guests data could not be loaded");
  }

  return data;
}

export async function deleteGuest(id) {
  const { error } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be deleted");
  }
}
