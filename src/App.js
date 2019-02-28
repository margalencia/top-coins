import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "./components/table"

const App = () => {
  const [coins, setCoins] = useState([]);

  async function fetchCoins() {
    const result = await axios("/api/coins");
    setCoins(result.data.data);
    console.log(result.data.data);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <Table coins={coins}/>
  );
};

export default App;
