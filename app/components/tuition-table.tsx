import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tuitionData = [
  { item: "Tuition", amount: 10000 },
  { item: "Technology Fee", amount: 500 },
  { item: "Student Activity Fee", amount: 250 },
  { item: "Health Insurance", amount: 1500 },
  { item: "Books and Supplies (estimate)", amount: 1000 },
];

export function TuitionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tuitionData.map((item) => (
          <TableRow key={item.item}>
            <TableCell className="font-medium">{item.item}</TableCell>
            <TableCell className="text-right">
              ${item.amount.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className="font-bold">Total</TableCell>
          <TableCell className="text-right font-bold">
            $
            {tuitionData
              .reduce((acc, item) => acc + item.amount, 0)
              .toLocaleString()}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
