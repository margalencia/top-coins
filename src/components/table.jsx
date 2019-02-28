import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export default ({coins}) => {
  const createFormatter = option => new Intl.NumberFormat("en-US", option);

  const currencyFormatter = createFormatter({
    style: "currency",
    currency: "USD"
  });

  const percentFormatter = createFormatter({
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Price Change (24h)</TableCell>
          <TableCell>Market Cap</TableCell>
          <TableCell>Volume (24h)</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>

      <TableBody>
        {coins.map(coin => (
          <TableRow key={coin.id}>
            <TableCell>{coin.cmc_rank}</TableCell>
            <TableCell>{coin.name}</TableCell>
            <TableCell>
              {currencyFormatter.format(coin.quote.USD.price)}
            </TableCell>
            <TableCell>
              {percentFormatter.format(coin.quote.USD.percent_change_24h / 100)}
            </TableCell>
            <TableCell>
              {currencyFormatter.format(coin.quote.USD.market_cap)}
            </TableCell>
            <TableCell>
              {currencyFormatter.format(coin.quote.USD.volume_24h)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
