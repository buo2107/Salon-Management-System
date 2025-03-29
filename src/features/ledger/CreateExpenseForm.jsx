import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";

const formSchema = z.object({
  category: z.string(),
  date: z.coerce.date(),
});
export default function CreateExpenseForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "營業支出",
      date: new Date(),
    },
  });

  function onSubmit(data) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10"
      >
        {/* CATEGORY TYPE */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                支出類型<span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row items-center space-x-3"
                >
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="營業支出" />
                    </FormControl>
                    <FormLabel className="font-normal">營業支出</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="商品進貨" />
                    </FormControl>
                    <FormLabel className="font-normal">商品進貨</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        {/* DATE */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>付款日期</FormLabel>
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
                        <span>選擇日期</span>
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

        <div>
          {/* If CATEGORY TYPE is "營業支出" */}
          {form.getValues("category") === "營業支出" && (
            // AMOUNT
            // DESCRIPTION
            <div className="space-y-4">營業支出</div>
          )}

          {/* If CATEGORY TYPE is "商品進貨" */}
          {form.getValues("category") === "商品進貨" && (
            // LIST OF PRODUCTS [{PRODUCT 1, QUANTITY}, {PRODUCT 2, QUANTITY}...]
            // 商品名稱
            // 數量
            <button
              type="button"
              // onClick={addEmail}
              className="text-sm underline hover:no-underline"
            >
              + Add another
            </button>
          )}
        </div>

        <Button type="button" className="w-full">
          SendIcon invites
        </Button>
      </form>
    </Form>
  );
}
