// import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    // set dataPoints so we can have a chart to display
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];


  // add value to every month in the chart 
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  // get max value of all the month to compare and draw chart
  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={maxValue}
          label={dataPoint.label}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
}

export default Chart;
