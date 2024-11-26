"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCreateGuest } from "./useCreateGuest";
import { useUpdateGuest } from "./useUpdateGuest";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "此欄位為必須",
  }),
  phone_number: z
    .string()
    .min(1, {
      message: "此欄位為必須",
    })
    .regex(/^0(9|2)\d{8}$/, "非標準電話號碼，請確認輸入是否正確"),
  gender: z.string(),
  vip: z.boolean().optional(),
  description: z.string().optional(),
});

export default function CreateGuestForm({ guestToUpdate = {}, onCloseModal }) {
  const { createGuest, isCreating } = useCreateGuest();
  const { updateGuest, isUpdating } = useUpdateGuest();

  // Confirm whether is in UPDATE situation (guestId has existed)
  const { id: guestId, ...updateValues } = guestToUpdate;
  const isUpdateSession = Boolean(guestId);
  // console.log(updateValues);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isUpdateSession
      ? updateValues
      : {
          name: "",
          phone_number: "",
          vip: false,
          description: "",
          gender: "女",
        },
  });

  function onSubmit(data) {
    if (isUpdateSession) updateGuest({ updateData: { ...data }, id: guestId });
    else createGuest(data);

    form.reset();
    onCloseModal();
    // console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                客戶姓名<span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="哆啦O夢" type="text" {...field} />
              </FormControl>
              {form.getFieldState(field.name).error ? (
                <FormMessage />
              ) : (
                <FormDescription>請輸入客戶名稱</FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                連絡電話<span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="10位碼" type="text" {...field} />
              </FormControl>
              {form.getFieldState(field.name).error ? (
                <FormMessage />
              ) : (
                <FormDescription>請輸入手機(09)或市話(02)號碼</FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                性別<span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row items-center space-x-3"
                >
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="女" />
                    </FormControl>
                    <FormLabel className="font-normal">女</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="男" />
                    </FormControl>
                    <FormLabel className="font-normal">男</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vip"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>VIP</FormLabel>
                <FormDescription>確認此客戶為本店VIP</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>備註</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="常用***色染髮劑、油性髮..."
                  className="min-h-[none]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreating}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
