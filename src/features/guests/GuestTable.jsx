import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPhoneNumber } from "@/utils/helpers";
import { useEffect, useState } from "react";
import GuestTableMenu from "./GuestTableMenu";
import { Badge } from "@/components/ui/badge";

function GuestTable() {
  // GET FAKE USER DATA
  // const [fake_data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://dummyjson.com/users");
  //     const userdata = await res.json();
  //     setData(userdata.users);
  //   }
  //   fetchData();
  // }, []);
  // console.log(fake_data);

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
          <TableRow>
            <TableCell className="text-center">王曉明</TableCell>
            <TableCell>男</TableCell>
            <TableCell>
              <Badge>VIP</Badge>
            </TableCell>
            <TableCell>{formatPhoneNumber("0956438951")}</TableCell>
            <TableCell>2024/2/3</TableCell>
            <TableCell>
              <GuestTableMenu />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default GuestTable;
