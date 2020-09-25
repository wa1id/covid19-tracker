import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData((dailyData = await fetchDailyData()));
    };

    console.log(dailyData);

    fetchAPI();
  });

  const lineChart = dailyData[0] ? (
    <Line data={{ labels: "", datasets: [{}, {}] }} />
  ) : null;

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
};

export default Chart;
