import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import TagsInput from "@/ui/TagsInput";

const formSchema = z.object({
  stock: z.string(),
  productCatagory: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    }),
  ),
  productBrand: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    }),
  ),
  //   z.array(z.string()).nonempty("Please at least one item"),
});

export default function UpdateSettingsForm({ settings }) {
  const { minimum_stock, catagory_list, brand_list } = settings;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      minimum_stock,
      catagory_list,
      brand_list,
    },
  });

  function onSubmit(data) {
    console.log(data);
    // try {
    //   console.log(values);
    //   toast(
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>,
    //   );
    // } catch (error) {
    //   console.error("Form submission error", error);
    //   toast.error("Failed to submit the form. Please try again.");
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="minimum_stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>最低庫存</FormLabel>
              <FormControl>
                <Input placeholder="0" type="" {...field} />
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
                <TagsInput />
              </FormControl>
              {/* <FormDescription>Add tags.…</FormDescription> */}
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
                <TagsInput />
              </FormControl>
              {/* <FormDescription>Add tags.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
