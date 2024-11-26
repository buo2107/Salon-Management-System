import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCreateGuest } from "./useCreateGuest";
import Modal from "@/ui/Modal";
import { DialogClose } from "@/components/ui/dialog";

function CreateGuestForm() {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { createGuest, isCreating } = useCreateGuest();

  function onSubmit(data) {
    // const newGuest = { ...data, vip: data.vip === true ? true : false };

    createGuest({ ...data, vip: data.vip === true ? true : false });

    // reset();
  }

  return (
    <Modal.Window>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-hidden px-10 py-6 *:text-2xl"
      >
        {/* GUEST NAME */}
        <div className="space-y-2 pb-5">
          <Label htmlFor="name">
            客戶姓名 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="王小明"
            type="text"
            {...register("name", { required: "This field is required" })}
          />
          {/* <Input
          id="input-06"
          className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
          placeholder="Email"
          type="email"
          defaultValue="invalid@email.com"
        /> */}
          {/* <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          ERROR MESSAGE
        </p> */}
        </div>

        {/* PHONE NUMBER */}
        <div className="space-y-2 pb-5">
          <Label htmlFor="phone_number">
            聯絡電話 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone_number"
            placeholder="phone number"
            type="phone"
            {...register("phone_number", {
              required: "This field is required",
            })}
          />
          {/* <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          ERROR MESSAGE
        </p> */}
        </div>

        {/* GENDER */}
        <div className="space-y-2 pb-5">
          <RadioGroup
            defaultValue="女"
            className="flex gap-5 py-2"
            {...register("gender", { required: "This field is required" })}
          >
            <div className="flex items-center gap-1">
              <RadioGroupItem value="女" id="female" />
              <Label htmlFor="female">女</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="男" id="man" />
              <Label htmlFor="man">男</Label>
            </div>
          </RadioGroup>
        </div>

        {/* VIP */}
        <div className="space-y-2 pb-5">
          <div className="flex items-center gap-2">
            <Checkbox
              id="isVIP"
              value={false}
              {...register("vip")}
              onClick={(e) =>
                setValue(
                  "vip",
                  e.target.dataset.state === "checked" ? false : true,
                )
              }
            />
            <Label htmlFor="isVIP" className="font-semibold">
              VIP
            </Label>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-2 pb-5">
          <Label htmlFor="description">客戶備註</Label>
          <Textarea
            id="description"
            className="min-h-[none]"
            placeholder="常用***色染髮劑、油性髮..."
            rows={2}
            {...register("description")}
          />
        </div>

        <div className="flex items-center justify-end gap-5">
          <Button type="reset" variant="outline">
            清除
          </Button>

          <Button type="submit">新增</Button>
        </div>
      </form>
    </Modal.Window>
  );
}

export default CreateGuestForm;
