import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ amount }) {
  const data = {
    labels: ["Amount", "Yearly interest amount"],
    datasets: [
      {
        label: "",
        data: [amount, amount * 0.12],
        backgroundColor: ["#24feee", "#828DFF"],
        borderColor: ["#24feee", "#828DFF"],
        borderWidth: 1,
        rotation: 180,
        radius: "100%",
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
        // position: "bottom",
      },
    },
  };

  return (
    <Doughnut
      // style={{ width: "80%", height: "80%" }}
      data={data}
      options={options}
    />
  );
}

export default DoughnutChart;
