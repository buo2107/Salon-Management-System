"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
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
import { TagsInput } from "@/components/ui/tags-input";

const formSchema = z.object({
  stock: z.string(),
  productCatagory: z.array(z.string()).nonempty("Please at least one item"),
  productBrand: z.array(z.string()).nonempty("Please at least one item"),
});

export default function UpdateSettingsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productCatagory: ["test"],
      productBrand: ["test"],
    },
  });

  function onSubmit(values) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>最低庫存</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="" {...field} />
              </FormControl>
              <FormDescription>This is your limit stock</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="productCatagory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品類別</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Enter your tags"
                />
              </FormControl>
              <FormDescription>Add tags.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="productBrand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品品牌</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Enter your tags"
                />
              </FormControl>
              <FormDescription>Add tags.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
