import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, CircleX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { PopoverClose } from "@radix-ui/react-popover";
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
  date: z.coerce.date(),
  amount: z.number().min(1, { message: "金額不得低於0" }),
});

export default function CreateSellingExpenseForm() {
  const popOverRef = useRef(null);
  const { settings, isLoadingSettings } = useSettings();
  const { products, isLoadingProducts } = useProductsList();

  const [blocks, setBlocks] = useState([
    { productName: "", quantity: 0, unitPrice: 0 },
  ]);
  const totalProductCost = blocks.reduce(
    (acc, cur) => acc + cur.quantity * cur.unitPrice,
    0,
  );

  const addBlock = () => {
    setBlocks(() => [
      ...blocks,
      { productName: "", quantity: 0, unitPrice: 0 },
    ]);
  };

  const removeBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const handleProductNameChange = (index, value) => {
    const newBlocks = [...blocks];
    newBlocks[index].productName = value;
    newBlocks[index].unitPrice = products?.find((p) => p.name === value)?.cost;
    setBlocks(newBlocks);
  };

  const handleQuantityChange = (index, value) => {
    const newBlocks = [...blocks];
    newBlocks[index].quantity = value;
    setBlocks(newBlocks);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      amount: 0,
    },
  });

  function onSubmit(data) {
    console.log(data);
    console.log(blocks);
    const date = data.date.toLocaleString().split("T")[0].split(" ")[0];

    console.log(date);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10"
      >
        {/* DATE */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                付款日期<span className="text-destructive">*</span>
              </FormLabel>
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

        <div className="min-h-[250px]">
          <div className="space-y-4">
            <Label>
              進貨數量<span className="text-destructive">*</span>
            </Label>
            {blocks.map((block, index) => (
              <div key={index} className="grid grid-cols-4 gap-3">
                {/* 商品名稱 */}
                <div className="col-span-2">
                  <Select
                    onValueChange={(value) =>
                      handleProductNameChange(index, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="選擇商品" />
                    </SelectTrigger>

                    <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
                      {isLoadingSettings
                        ? null
                        : settings?.catagory_list?.map((catagory) => (
                            <SelectGroup key={catagory}>
                              <SelectLabel>{catagory}</SelectLabel>
                              {isLoadingProducts
                                ? null
                                : products
                                    ?.filter(
                                      (product) =>
                                        product.catagory === catagory,
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
                </div>

                {/* 商品數量 */}
                <div className="col-span-1">
                  <Input
                    type="number"
                    min={1}
                    defaultValue={1}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                </div>

                {/* 只能從最後一項開始刪除商品(BUG-若從中間項刪除，實際數據正確但UI顯示與實際數據有出入) */}
                <div
                  className={`${index === 0 || index !== blocks.length - 1 ? "hidden" : ""}`}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeBlock(index)}
                  >
                    <CircleX />
                  </Button>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="link"
              disabled={blocks[blocks.length - 1].productName === ""}
              onClick={addBlock}
              className="text-sm underline hover:no-underline"
            >
              +增加項次
            </Button>

            <p className="text-left text-sm text-gray-500">{`預估金額: ${totalProductCost}`}</p>
            {/* 總付款金額 */}
            <div className="mb-2 grid grid-cols-2">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      付款金額<span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer pe-12 ps-10 read-only:bg-muted"
                          type="number"
                          min={0}
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
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          SendIcon invites
        </Button>
      </form>
    </Form>
  );
}
