import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

import { formatCurrency, formatPercent } from "./../utils/formatters";

export default ({ coins }) => (
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
          <TableCell>{formatCurrency(coin.quote.USD.price)}</TableCell>
          <TableCell>
            {formatPercent(coin.quote.USD.percent_change_24h / 100)}
          </TableCell>
          <TableCell>{formatCurrency(coin.quote.USD.market_cap)}</TableCell>
          <TableCell>{formatCurrency(coin.quote.USD.volume_24h)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
