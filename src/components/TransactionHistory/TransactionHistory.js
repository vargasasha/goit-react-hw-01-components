import { TableHeader, TableHead, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <TableHeader>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </TableHeader>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableRow>{item.type}</TableRow>
            <TableRow>{item.amount}</TableRow>
            <TableRow>{item.currency}</TableRow>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
