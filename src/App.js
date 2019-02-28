import React, { useEffect, useState } from "react";
import axios from "axios";

import Select from "@material-ui/core/Select";

import Table from "./components/table";

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
    console.log(result.data.data);
  }

  useEffect(() => {
    fetchCoins();
  }, [limit]);

  return (
    <>
      <Select
        native
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>all</option>
      </Select>
      <Table coins={coins} />
    </>
  );
};

export default App;
