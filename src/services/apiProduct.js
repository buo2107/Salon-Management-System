import supabase, { supabaseUrl } from "./supabase";

const productCatagory = [
  { name: "洗髮精", image: "sampoo.png" },
  { name: "技術", image: "technique.jpg" },
  { name: "其他", image: "others.png" },
];

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
    const defaultImg = productCatagory.find(
      (el) => el.name === newProduct.catagory,
    ).image;

    imagePath = `${supabaseUrl}/storage/v1/object/public/product-imgs/${defaultImg}`;
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
  if (!newProduct.img) return;

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

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Product could not be deleted");
  }
}
