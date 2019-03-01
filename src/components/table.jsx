import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@material-ui/core";
import { Helmet } from "react-helmet";

import { formatCurrency, formatPercent } from "./../utils/formatters";

export default ({ coins }) => {
  const sortedCoins = coins.concat().sort((a, b) => {
    if (a.cmc_rank < b.cmc_rank) {
      return -1;
    }
    if (a.cmc_rank > b.cmc_rank) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Helmet>
        <title>Market overview</title>
      </Helmet>
      <Paper>
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
            {sortedCoins.map(coin => (
              <TableRow key={coin.id}>
                <TableCell>{coin.cmc_rank}</TableCell>
                <TableCell>{coin.name}</TableCell>
                <TableCell>{formatCurrency(coin.quote.USD.price)}</TableCell>
                <TableCell>
                  {formatPercent(coin.quote.USD.percent_change_24h / 100)}
                </TableCell>
                <TableCell>
                  {formatCurrency(coin.quote.USD.market_cap)}
                </TableCell>
                <TableCell>
                  {formatCurrency(coin.quote.USD.volume_24h)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
