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
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { PopoverClose } from "@radix-ui/react-popover";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductsList } from "../products/useProductsList";
import { useSettings } from "../settings/useSettings";

const formSchema = z.object({
  category: z.enum(["營業支出", "商品進貨"]),
  date: z.coerce.date(),
  amount: z.number().min(0),
  description: z.string().optional(),
});
export default function CreateExpenseForm() {
  const popOverRef = useRef(null);
  const { settings, isLoadingSettings } = useSettings();
  const { products, isLoadingProducts } = useProductsList();

  const [items, setItems] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "營業支出",
      date: new Date(),
      amount: 0,
      description: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    const date = data.date.toLocaleString().split("T")[0].split(" ")[0];

    console.log(date);
  }

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
                  {/* Solution for close Calendar by one clicking is from https://github.com/shadcn-ui/ui/issues/901#issuecomment-2351135245 */}
                  <PopoverClose ref={popOverRef} />
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(e) => {
                      field.onChange(e);
                      popOverRef.current?.click(); // closes popover
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="min-h-[180px]">
          {/* If CATEGORY TYPE is "營業支出" */}
          {form.getValues("category") === "營業支出" && (
            <div className="flex flex-col gap-3">
              {/* AMOUNT */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      金額<span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer pe-12 ps-10"
                          placeholder="0"
                          type="number"
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                          NT$
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                          TWD
                        </span>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* DESCRIPTION */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>備註</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="EX: xx月水費, xx月電費, xx月網路費..."
                        className="min-h-[none]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* If CATEGORY TYPE is "商品進貨" */}
          {form.getValues("category") === "商品進貨" && (
            <div className="space-y-4">
              <div>
                {/* LIST OF PRODUCTS [{PRODUCT 1, QUANTITY}, {PRODUCT 2, QUANTITY}...] */}
                {/* 商品名稱 */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇商品" />
                  </SelectTrigger>

                  <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
                    {isLoadingSettings
                      ? null
                      : settings.catagory_list?.map((catagory) => (
                          <SelectGroup key={catagory}>
                            <SelectLabel>{catagory}</SelectLabel>
                            {isLoadingProducts
                              ? null
                              : products
                                  .filter(
                                    (product) => product.catagory === catagory,
                                  )
                                  .map((product) => (
                                    <SelectItem
                                      key={product.id}
                                      value={product.name}
                                    >
                                      {product.name}
                                    </SelectItem>
                                  ))}
                          </SelectGroup>
                        ))}
                  </SelectContent>
                </Select>
                {/* 數量 */}
              </div>
              <button
                type="button"
                // onClick={addEmail}
                className="text-sm underline hover:no-underline"
              >
                + Add another
              </button>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full">
          SendIcon invites
        </Button>
      </form>
    </Form>
  );
}
