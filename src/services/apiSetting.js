import supabase from "./supabase";

export async function getSettings() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings data could not be loaded");
  }

  return settings;
}

export async function updateSettings(updateData) {
  const { data, error } = await supabase
    .from("settings")
    .update(updateData)
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
}
