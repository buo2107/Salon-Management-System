import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateProduct } from "./useCreateProduct";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "此欄位為必須",
  }),
  catagory: z.string().min(1, {
    message: "此欄位為必須",
  }),
  brand: z.string().optional(),
  spec: z.string(),
  cost: z.number().min(0).nonnegative(),
  price: z.number().min(0).positive(),
  img: z.instanceof(File).optional().nullable(),
});

export default function CreateProductForm({ onCloseModal }) {
  const { createProduct, isCreating } = useCreateProduct();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      catagory: "",
      brand: "",
      spec: "",
      cost: 0,
      price: 0,
      img: null,
    },
  });

  function onSubmit(data) {
    console.log(data.img.name);
    // createProduct(data);
    // form.reset();
    // onCloseModal();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8 px-8 py-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                商品名稱<span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              {form.getFieldState(field.name).error ? (
                <FormMessage />
              ) : (
                <FormDescription>請輸入商品名稱</FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="catagory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                商品類別<span className="text-destructive">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="此商品分類為:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="洗髮精">洗髮精</SelectItem>
                  <SelectItem value="技術">技術</SelectItem>
                  <SelectItem value="其他">其他</SelectItem>
                </SelectContent>
              </Select>
              {form.getFieldState(field.catagory).error ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  若要建立新類別，請至<a href="#">設定</a>頁面
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>品牌</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇品牌" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="川越">川越</SelectItem>
                      <SelectItem value="其他">其他</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="spec"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>規格</FormLabel>
                  <FormControl>
                    <Input placeholder="EX:600ml" type="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="cost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    成本<span className="text-destructive">*</span>
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
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    售價<span className="text-destructive">*</span>
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
          </div>
        </div>

        <FormField
          control={form.control}
          name="img"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>商品圖片</FormLabel>
              <FormControl>
                <Input
                  className="pe-3 file:me-3 file:border-0 file:border-e"
                  type="file"
                  accept="image/*"
                  {...fieldProps}
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
              </FormControl>
              <FormDescription>上傳商品照(非必須)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreating}>
          新增商品
        </Button>
      </form>
    </Form>
  );
}
