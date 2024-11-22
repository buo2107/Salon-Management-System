import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatPhoneNumber } from "@/utils/helpers";
import GuestTableMenu from "./GuestTableMenu";
import { guests } from "@/data/data-guests";
import Pagination from "@/ui/Pagination";

function GuestTable() {
  const data = guests;

  return (
    <div className="rounded-md border-2">
      <Table>
        <TableHeader>
          <TableRow className="text-base *:font-semibold">
            <TableHead className="text-center">姓名</TableHead>
            <TableHead>性別</TableHead>
            <TableHead>類型</TableHead>
            <TableHead>電話號碼</TableHead>
            <TableHead>最後消費日期</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((guest) => (
            <TableRow key={guest.name}>
              <TableCell className="text-center">{guest.name}</TableCell>
              <TableCell>{guest.gender}</TableCell>
              <TableCell>{guest.vip ? <Badge>VIP</Badge> : ""}</TableCell>
              <TableCell>{formatPhoneNumber(guest.phone_number)}</TableCell>
              <TableCell>{guest.last_consumption_date}</TableCell>
              <TableCell>
                <GuestTableMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default GuestTable;
