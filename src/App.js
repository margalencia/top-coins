import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";
import axios from "axios";

import Select from "@material-ui/core/Select";
import styled from "styled-components";

import Table from "./components/table";
import Chart from "./components/chart"

const PageWrapper = styled.main`
  padding: 20px;
`;

const ChooseLimitPanel = styled.div`
  margin: 20px 0;
`;

const StylesSelect = styled(Select)`
  margin: 0 20px;
`;

const Navigation = styled.nav`
  margin: 20px 0;
`;

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
    <PageWrapper>
      <h1>Welcome to Top Coins App</h1>
      <ChooseLimitPanel>
        Please, select coins amount:
        <StylesSelect
          native
          value={limit}
          onChange={e => setLimit(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>all</option>
        </StylesSelect>
      </ChooseLimitPanel>
      <Navigation>
        <Link to="/">Market overview</Link> |{" "}
        <Link to="/liquidity">Liquidity analysis</Link>
      </Navigation>
      <Router>
        <Table path="/" coins={coins} />
        <Chart path="/liquidity" coins={coins} />
      </Router>
    </PageWrapper>
  );
};

export default App;
