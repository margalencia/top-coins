import React from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from "recharts";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { formatCurrency } from "./../utils/formatters";

const CoinName = styled.span`
  font-weight: bold;
`;

const TooltipBody = styled.div`
  background: white;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 20px;
`;

export default ({ coins }) => {
  const data = coins.map(({ name, quote }) => ({
    name,
    market_cap: quote.USD.market_cap,
    volume_24h: quote.USD.volume_24h,
    price_change: Math.abs(
      (quote.USD.price * quote.USD.percent_change_24h) /
        (100 + quote.USD.percent_change_24h)
    )
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <TooltipBody>
          <CoinName>{payload[0].payload.name}</CoinName>
          {payload.map(prop => (
            <p key={prop.name}>
              {prop.name}: {formatCurrency(prop.value)}
            </p>
          ))}
        </TooltipBody>
      );
    }

    return null;
  };

  return (
    <>
      <Helmet>
        <title>Liquidity analysis</title>
      </Helmet>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 120 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="market_cap"
            name="Market Capitalization"
            tickFormatter={formatCurrency}
          />
          <YAxis
            dataKey="volume_24h"
            name="Volume (24h)"
            tickFormatter={formatCurrency}
          />
          <ZAxis
            dataKey="price_change"
            range={[100, 1000]}
            name="Absolute price change (24h)"
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<CustomTooltip />}
          />
          <Scatter name="Coin" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
