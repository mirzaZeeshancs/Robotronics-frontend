import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: Array.from({ length: 25 }, (_, i) => 2000 + i),
    datasets: [
      {
        label: 'Value',
        data: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
        fill: false,
        backgroundColor: 'orange',
        borderColor: 'orange',
        pointBackgroundColor: 'orange',
        pointBorderColor: 'orange',
        pointHoverBackgroundColor: 'orange',
        pointHoverBorderColor: 'orange',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Sample Line Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;