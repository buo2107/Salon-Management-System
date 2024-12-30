import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { formatPhoneNumber } from "@/utils/helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

// TABLE COLUMNS DEFINED
const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <Button variant="ghost">客戶姓名</Button>;
    },
    cell: ({ row }) => (
      <div className="border-b-2 border-blue-200 text-base">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "phone_number",

    header: ({ column }) => {
      return <Button variant="ghost">電話號碼</Button>;
    },
    cell: ({ row }) => {
      const formatted = formatPhoneNumber(row.getValue("phone_number"));
      return <div className="text-base">{formatted}</div>;
    },
  },
  {
    accessorKey: "vip",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          類型
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (row.getValue("vip") ? <Badge>VIP</Badge> : ""),
  },

  {
    accessorKey: "description",
    header: "備註",
    cell: ({ row }) => (
      <div className="overflow-hidden">{row.getValue("description")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <GuestTableMenu data={row.original} />,
  },
];

function GuestTable() {
  const { isLoading, guests, count } = useGuests();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: guests,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

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
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="text-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No Data
                  </TableCell>
                </TableRow>
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
