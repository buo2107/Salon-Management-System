import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatToTagsInput } from "@/utils/helpers";
import { useUpdateSettings } from "./useUpdateSettings";
import TagsInput from "@/ui/TagsInput";

const formSchema = z.object({
  minimum_stock: z
    .number()
    .min(0, { message: "最低庫存不得為負數" })
    .nonnegative()
    .optional(),
  catagory_list: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  brand_list: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
});

export default function UpdateSettingsForm({ settings }) {
  const { updateSettings, isUpdating } = useUpdateSettings();

  const { minimum_stock, catagory_list, brand_list } = settings;
  const initialCatagoryList = formatToTagsInput(catagory_list);
  const initialBrandList = formatToTagsInput(brand_list);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      minimum_stock,
      catagory_list: initialCatagoryList,
      brand_list: initialBrandList,
    },
  });

  function onSubmit(data) {
    const newCatagory = data.catagory_list.map((item) => item.text);
    const newBrand = data.brand_list.map((item) => item.text);

    // if no data changed, return
    if (
      data.minimum_stock === minimum_stock &&
      JSON.stringify(newCatagory) === JSON.stringify(catagory_list) &&
      JSON.stringify(newBrand) === JSON.stringify(brand_list)
    )
      return;

    const newSettings = {
      ...data,
      catagory_list: newCatagory,
      brand_list: newBrand,
    };
    updateSettings(newSettings);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8"
      >
        <FormField
          control={form.control}
          name="minimum_stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>最低庫存</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormDescription>商品低於此庫存量時提醒我</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="catagory_list"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品類別</FormLabel>
              <FormControl>
                <TagsInput
                  initialTags={initialCatagoryList}
                  field={field}
                  fieldName={"catagory_list"}
                  setValue={form.setValue}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brand_list"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品品牌</FormLabel>
              <FormControl>
                <TagsInput
                  initialTags={initialBrandList}
                  field={field}
                  fieldName={"brand_list"}
                  setValue={form.setValue}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isUpdating}>
          儲存修改
        </Button>
      </form>
    </Form>
  );
}
