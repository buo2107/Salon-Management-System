import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import RadioSelect from "@/ui/RadioSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  // for expense table
  category: z.string(),
  date: z.string().date(),
  amount: z.number(),
  description: z.string().optional(),
  //   for expenseItem table
  items: z
    .array(
      z.object({
        expenseId: z.number(),
        productId: z.number(),
        quantity: z.number(),
        cost: z.number(),
        total: z.number(),
      }),
    )
    .optional(),
});

function CreateExpenseForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "營業支出",
      date: "",
      amount: 0,
      description: "",
      items: [],
    },
  });
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>category</FormLabel> */}
              <FormControl>
                <RadioSelect />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CreateExpenseForm;
