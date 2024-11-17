import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPhoneNumber } from "@/utils/helpers";

function GuestTable() {
  return (
    <div className="rounded-md border-2 border-primary">
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-primary/60 text-base *:font-semibold">
            <TableHead className="text-center">姓名</TableHead>
            <TableHead>性別</TableHead>
            <TableHead>類型</TableHead>
            <TableHead>電話號碼</TableHead>
            <TableHead>最後消費日期</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">王曉明</TableCell>
            <TableCell>男</TableCell>
            <TableCell>vip</TableCell>
            <TableCell>{formatPhoneNumber("0956438951")}</TableCell>
            <TableCell>2024/2/3</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <GripHorizontal />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-center">王曉明</TableCell>
            <TableCell>男</TableCell>
            <TableCell>vip</TableCell>
            <TableCell>{formatPhoneNumber("0956438951")}</TableCell>
            <TableCell>2024/2/3</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <GripHorizontal />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default GuestTable;
