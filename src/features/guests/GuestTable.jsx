import { formatPhoneNumber, formatCurrency } from "@/utils/helpers";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "@/ui/Pagination";
import Spinner from "@/ui/Spinner";
import GuestTableMenu from "./GuestTableMenu";
import GuestTableOperations from "./GuestTableOperations";
import { useGuests } from "./useGuests";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CircleOff } from "lucide-react";

function GuestTable() {
  const { isLoading, guests, count } = useGuests();

  return (
    <>
      <div className="flex flex-row justify-between">
        <GuestTableOperations />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="rounded-md border-2">
          <Table>
            <TableHeader>
              <TableRow className="text-sm *:text-center">
                <TableHead>姓名</TableHead>
                <TableHead>聯絡電話</TableHead>
                <TableHead>
                  <div className="flex items-center justify-center space-x-2">
                    <Checkbox id="vip" />
                    <label htmlFor="vip">會員卡</label>
                  </div>
                </TableHead>
                <TableHead>點數卡</TableHead>
                <TableHead>備註</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guests.length === 0 ? (
                <TableRow>
                  {/* Mobile may need to change the colSpan */}
                  <TableCell colSpan={5} className="h-24 text-center">
                    <span>查無資料</span>
                  </TableCell>
                </TableRow>
              ) : (
                guests.map((guest) => (
                  <TableRow key={guest.id} className="*:text-center">
                    <TableCell>
                      <div
                        className={`border-l-2 md:border-l-4 ${guest.gender === "女" ? "border-red-200" : "border-blue-200"} text-base`}
                      >
                        {guest.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-base">
                        {formatPhoneNumber(guest.phone_number)}
                      </div>
                    </TableCell>
                    <TableCell>
                      {guest.vip ? (
                        <div className="flex flex-col items-center justify-center gap-1">
                          <Badge>會員</Badge>
                          <Label>{formatCurrency(guest.vipDepositMoney)}</Label>
                        </div>
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col items-center justify-center gap-1">
                        {guest.loyaltyCard?.length !== 0 ? (
                          guest.loyaltyCard.map((card) => (
                            <Badge
                              key={card.name}
                              variant="outline"
                              className="w-[64px] items-baseline gap-1.5"
                            >
                              {card.name}
                              <span className="font-medium text-primary">
                                {card.points}
                              </span>
                            </Badge>
                          ))
                        ) : (
                          <Badge className="gap-1" variant="outline">
                            <CircleOff
                              className="-ms-0.5 opacity-60"
                              size={12}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="overflow-hidden text-sm">
                        {guest.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <GuestTableMenu data={guest} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="self-end">
        <Pagination count={count} />
      </div>
    </>
  );
}

export default GuestTable;
