import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  // for expense table
  // category: z.enum(["營業支出", "商品進貨"]),
  category: z.enum(["營業支出", "商品進貨"]),
  date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  // amount: z.number(),
  // description: z.string().optional(),
  // //   for expenseItem table
  // items: z
  //   .array(
  //     z.object({
  //       expenseId: z.number(),
  //       productId: z.number(),
  //       quantity: z.number(),
  //       cost: z.number(),
  //       total: z.number(),
  //     }),
  //   )
  //   .optional(),
});

function CreateExpenseForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "營業支出",
      // date: new Date(),
      // amount: 0,
      // description: "",
      // items: [],
    },
  });

  function onSubmit(data) {
    const date = data.date.toLocaleString().split("T")[0];

    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10"
        >
          {/* CATEGORY Radio Select FIELD */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <div className="inline-flex h-9 rounded-lg bg-input/50 p-0.5">
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="group relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-md after:bg-background after:shadow-sm after:shadow-black/5 after:outline-offset-2 after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-[:focus-visible]:after:outline has-[:focus-visible]:after:outline-2 has-[:focus-visible]:after:outline-ring/70 data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full"
                      data-state={field.value === "營業支出" ? "off" : "on"}
                    >
                      <FormItem className="relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors group-data-[state=on]:text-muted-foreground/70">
                        <FormLabel>營業支出</FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            value="營業支出"
                            className="sr-only"
                          />
                        </FormControl>
                      </FormItem>
                      <FormItem className="relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors group-data-[state=off]:text-muted-foreground/70">
                        <FormLabel>商品進貨</FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            value="商品進貨"
                            className="sr-only"
                          />
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          {/* DATE FIELD */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="my-4" />

          <Button type="submit">submit</Button>
        </form>
      </Form>

      <ul>
        <li className="flex flex-col">
          <label>商品名稱</label>
          <label>數量</label>
          <label>單價</label>
          <label>總金額</label>
        </li>
      </ul>
    </>
  );
}

export default CreateExpenseForm;
