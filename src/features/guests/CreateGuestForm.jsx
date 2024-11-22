import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function CreateGuestForm() {
  return (
    <form className="overflow-hidden px-10 py-6 *:text-2xl">
      {/* GUEST NAME */}
      <div className="space-y-2 pb-5">
        <Label htmlFor="guest_name">
          客戶姓名 <span className="text-destructive">*</span>
        </Label>
        <Input id="guest_name" placeholder="王小明" type="text" required />
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
        <Label htmlFor="input-02">
          聯絡電話 <span className="text-destructive">*</span>
        </Label>
        <Input id="input-02" placeholder="phone number" type="phone" required />
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
        <RadioGroup defaultValue="female" className="flex gap-5 py-2">
          <div className="flex items-center gap-1">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">女</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="man" id="man" />
            <Label htmlFor="man">男</Label>
          </div>
        </RadioGroup>
      </div>

      {/* VIP */}
      <div className="space-y-2 pb-5">
        <div className="flex items-center gap-2">
          <Checkbox id="isVIP" />
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
        />
      </div>

      <div className="flex items-center justify-end gap-5">
        <Button variant="outline">取消</Button>
        <Button type="submit">新增</Button>
      </div>
    </form>
  );
}

export default CreateGuestForm;
