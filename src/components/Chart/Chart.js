import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data, point }) => {
  const lineChart = point ? (
    <Line
      data={{
        labels: [...Array(data.length).keys()],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  min:
                    Math.min(...data.map(({ nominal }) => +nominal)) - 3,
                  max:
                    Math.max(...data.map(({ nominal }) => +nominal)) + 3,
                },
              },
            ],
          },
        },
        datasets: [
          {
            data: data.map(({ actual }) => actual),
            label: "actual",
            showLine: false,
            pointRadius: 5,
            pointBackgroundColor: "blue",
            fill: false,
          },
          {
            data: data.map(({ nominal }) => nominal),
            label: "nominal",
            borderColor: "red",
            backgroundColor: "rgba(255, 0,0,0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
