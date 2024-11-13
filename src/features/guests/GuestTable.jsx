import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function GuestTable() {
  return (
    <Table className="border border-red-500">
      <TableHeader>
        <TableRow className="*:font-semibold">
          <TableHead>姓名</TableHead>
          <TableHead>性別</TableHead>
          <TableHead>電話號碼</TableHead>
          <TableHead>類型</TableHead>
          <TableHead>最後消費日期</TableHead>
          <TableHead>1651</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>王曉明</TableCell>
          <TableCell>男</TableCell>
          <TableCell>09522422355</TableCell>
          <TableCell>vip</TableCell>
          <TableCell>2024/2/3</TableCell>
          <TableCell>5156</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default GuestTable;
