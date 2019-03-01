import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";
import axios from "axios";

import Select from "@material-ui/core/Select";

import Table from "./components/table";
import Chart from "./components/chart"

const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(100);

  async function fetchCoins() {
    const result = await axios.get("/api/coins", {
      params: {
        limit
      }
    });

    setCoins(result.data.data);
  }

  useEffect(() => {
    fetchCoins();
  }, [limit]);

  return (
    <>
      <h1>Welcome to Top Coins App</h1>
      <Select
        native
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>all</option>
      </Select>
      <nav>
        <Link to="/">Market overview</Link> |{" "}
        <Link to="/liquidity">Liquidity analysis</Link>
      </nav>
      <Router>
        <Table path="/" coins={coins} />
        <Chart path="/liquidity" coins={coins} />
      </Router>
    </>
  );
};

export default App;
