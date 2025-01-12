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
import InputStartInlineAddOn from "@/ui/InputStartInlineAddOn";
import InputEndInlineAddOn from "@/ui/InputEndInlineAddOn";

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
  vipDepositMoney: z.number().min(0),
  hairWashCard: z.boolean().optional(),
  hairWashPoints: z.number().min(0),
  hairProtectCard: z.boolean().optional(),
  hairProtectPoints: z.number().min(0),
  scalpCard: z.boolean().optional(),
  scalpPoints: z.number().min(0),
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
          hairWashCard: false,
          hairProtectCard: false,
          scalpCard: false,
          hairWashPoints: 0,
          hairProtectPoints: 0,
          scalpPoints: 0,
          description: "",
          gender: "女",
          vipDepositMoney: 0,
        },
  });

  function convertDataIntoDBFormat() {
    // loyaltyCard = [ {name:'洗髮', points: 6}, {name: '護髮', points: 12}, {name: '頭皮', points: 12} ]
  }

  function onSubmit(data) {
    // if (isUpdateSession) updateGuest({ updateData: { ...data }, id: guestId });
    // else createGuest(data);

    // form.reset();
    // onCloseModal();
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10"
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

        {/* TODO isUpdateSession時不會出現會員卡及集點卡相關欄位(關乎客戶權益，不應輕易讓使用者修改相關金額)，但創建新客戶時可一同登入會員及集點卡資料(同時建立新的交易資料) */}
        {!isUpdateSession && (
          <div className="flex h-[40px] items-center gap-2">
            <FormField
              control={form.control}
              name="vip"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(event) => {
                        field.onChange(event);
                        event
                          ? form.setValue("vipDepositMoney", 10000)
                          : form.setValue("vipDepositMoney", 0);
                      }}
                    />
                  </FormControl>
                  <FormLabel>會員卡</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vipDepositMoney"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={form.getValues("vip") === false}
                        className="peer pe-12 ps-10"
                        type="number"
                        min="0"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <InputStartInlineAddOn>NT$</InputStartInlineAddOn>
                      <InputEndInlineAddOn>TWD</InputEndInlineAddOn>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        )}

        {/* PONIT CARDS */}
        {!isUpdateSession && (
          <div className="grid grid-cols-2 grid-rows-3 gap-3">
            {/* 洗髮卡 */}
            <div className="row-start-1 flex h-[40px] flex-row items-center gap-1">
              <FormField
                control={form.control}
                name="hairWashCard"
                render={({ field }) => (
                  <FormItem className="flex w-[150px] flex-row items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(event) => {
                          field.onChange(event);
                          event
                            ? form.setValue("hairWashPoints", 1)
                            : form.setValue("hairWashPoints", 0);
                        }}
                      />
                    </FormControl>
                    <FormLabel>洗髮卡</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hairWashPoints"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          disabled={form.getValues("hairWashCard") === false}
                          className="peer pe-12 ps-10"
                          type="number"
                          min={`${form.getValues("hairWashCard") === false ? "0" : "1"}`}
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                        <InputEndInlineAddOn>張</InputEndInlineAddOn>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 護髮卡 */}
            <div className="row-start-2 flex h-[40px] flex-row items-center gap-1">
              <FormField
                control={form.control}
                name="hairProtectCard"
                render={({ field }) => (
                  <FormItem className="flex w-[150px] flex-row items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(event) => {
                          field.onChange(event);
                          event
                            ? form.setValue("hairProtectPoints", 1)
                            : form.setValue("hairProtectPoints", 0);
                        }}
                      />
                    </FormControl>
                    <FormLabel>護髮卡</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hairProtectPoints"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          disabled={form.getValues("hairProtectCard") === false}
                          className="peer pe-12 ps-10"
                          type="number"
                          min={`${form.getValues("hairProtectCard") === false ? "0" : "1"}`}
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                        <InputEndInlineAddOn>張</InputEndInlineAddOn>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 頭皮卡 */}
            <div className="row-start-3 flex h-[40px] flex-row items-center gap-1">
              <FormField
                control={form.control}
                name="scalpCard"
                render={({ field }) => (
                  <FormItem className="flex w-[150px] flex-row items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(event) => {
                          field.onChange(event);
                          event
                            ? form.setValue("scalpPoints", 1)
                            : form.setValue("scalpPoints", 0);
                        }}
                      />
                    </FormControl>
                    <FormLabel>護髮卡</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="scalpPoints"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          disabled={form.getValues("scalpCard") === false}
                          className="peer pe-12 ps-10"
                          type="number"
                          min={`${form.getValues("scalpCard") === false ? "0" : "1"}`}
                          {...field}
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                        <InputEndInlineAddOn>張</InputEndInlineAddOn>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}

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
        <Button type="submit" disabled={isCreating || isUpdating}>
          {isUpdateSession ? "更新客戶資料" : "新增客戶資料"}
        </Button>
      </form>
    </Form>
  );
}
