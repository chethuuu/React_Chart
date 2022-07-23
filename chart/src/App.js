import "./App.css";

import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    task1: 4000,
    task2: 1000,
  },
  {
    task1: 1000,
    task2: 4000,
  },
  {
    task1: 4000,
    task2: 2000,
  },
  {
    task1: 800,
    task2: 1000,
  },
  {
    task1: 1500,
    task2: 3000,
  },
];

function App() {
  return (
    <>
      <h3> &nbsp; Your Work Summary</h3>
      <h4> &nbsp; Nov - July</h4>
      <ResponsiveContainer width="98%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" stroke="#243240" />

          <YAxis tick={{ fill: "#A9A9A9	" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="task1"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
          <Line
            type="monotone"
            dataKey="task2"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <h1> &nbsp; 9845</h1>

      <div className="ch"> blur
        </div>

      

    </>
  );
}

export default App;
