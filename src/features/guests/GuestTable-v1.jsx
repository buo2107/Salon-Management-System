import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatPhoneNumber } from "@/utils/helpers";
import GuestTableMenu from "./GuestTableMenu";
import Pagination from "@/ui/Pagination";
import { useGuests } from "./useGuests";
import Spinner from "@/ui/Spinner";

function GuestTable() {
  const { isLoading, guests, count } = useGuests();
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="rounded-md border-2">
        <Table>
          <TableHeader>
            <TableRow className="text-base *:font-semibold">
              <TableHead className="text-center">姓名</TableHead>
              <TableHead>性別</TableHead>
              <TableHead>類型</TableHead>
              <TableHead>電話號碼</TableHead>
              <TableHead>備註</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell className="text-center">{guest.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{guest.gender}</Badge>
                </TableCell>
                <TableCell>{guest.vip ? <Badge>VIP</Badge> : ""}</TableCell>
                <TableCell>{formatPhoneNumber(guest.phone_number)}</TableCell>
                <TableCell>{guest.description}</TableCell>
                <TableCell>
                  <GuestTableMenu data={guest} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="self-end">
        <Pagination count={count} />
      </div>
    </>
  );
}

export default GuestTable;
