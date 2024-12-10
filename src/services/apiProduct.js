import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products data could not be loaded");
  }

  return data;
}

export async function createProduct(newProduct) {
  let imageName;
  let imagePath;
  // If there is no image upload, use the default image
  if (!newProduct.img) {
    imagePath = `${supabaseUrl}/storage/v1/object/public/product-imgs/sampoo.png`;
  } else {
    imageName = `${Math.random()}-${newProduct.img.name}`.replaceAll("/", "");

    imagePath = `${supabaseUrl}/storage/v1/object/public/product-imgs/${imageName}`;
  }

  const { data, error } = await supabase
    .from("products")
    .insert([{ ...newProduct, img: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Product data could not be created");
  }

  // Upload product images
  const { error: storageError } = await supabase.storage
    .from("product-imgs")
    .upload(imageName, newProduct.img);

  // Delete the product IF there was an error uploading image.
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "product image could not be uploaded and the product was not created",
    );
  } else {
    // Handle success
  }
}
