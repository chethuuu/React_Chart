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
    task1: 200,
    task3: 200,
    task2: 200,
    task4: 200,
  },
  {
    task1: 490,
    task3: 490,
    task2: 510,
    task4: 510,
  },
  {
    task1: 510,
    task3: 510,
    task2: 490,
    task4: 490,
  },
  {
    task1: 480,
    task3: 480,
    task2: 160,
    task4: 160,
  },
  {
    task1: 470,
    task3: 470,
    task2: 180,
    task4: 180,
  },
  {
    task1: 120,
    task3: 120,
    task2: 510,
    task4: 510,
  },
  {
    task1: 180,
    task3: 180,
    task2: 420,
    task4: 420,
  },
  {
    task1: 590,
    task3: 590,
    task2: 440,
    task4: 440,
  },
  {
    task1: 430,
    task3: 430,
    task2: 590,
    task4: 590,
  },
  {
    task1: 80,
    task3: 80,
    task2: 520,
    task4: 520,
  },
  {
    task1: 0,
    task3: 0,
    task2: 80,
    task4: 80,
  },
  {
    task1: 450,
    task3: 450,
    task2: 60,
    task4: 60,
  },
  {
    task1: 600,
    task3: 600,
    task2: 600,
    task4: 600,
  },
  {
    task1: 500,
    task3: 500,
    task2: 500,
    task4: 500,
  },
  {
    task1: 180,
    task3: 180,
    task2: 170,
    task4: 170,
  },
];

function App() {
  return (
    <>
      <h3> &nbsp; Your Work Summary</h3>

      <h4>
        {" "}
        <span class="left">&nbsp; Nov - July</span>
      </h4>
      <span class="right">
        <button className="btn1" type="submit">
          Daily
        </button>
        <button className="btn2">Monthly</button>&nbsp;&nbsp;&nbsp;
      </span>

      <h3>
        <span class="right">
          <span class="dot1"></span>&nbsp;This Month &nbsp;&nbsp;&nbsp;
        </span>{" "}
        <span class="right">
          <span class="dot"></span>&nbsp;Last Month &nbsp;
        </span>{" "}
      </h3>
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
          <CartesianGrid
            strokeDasharray="10"
            horizontal="true"
            vertical=""
            stroke="#243240"
          />

          <YAxis tick={{ fill: "#A9A9A9	" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="line"
            dataKey="task1"
            stroke="#246CF9"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#246CF9", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#246CF9",
              strokeWidth: 6,
              r: 10,
            }}
          />

          <Line
            type="line"
            dataKey="task3"
            filter="blur(14px)"
            stroke="#246CF9"
            strokeWidth="6"
          />

          <Line
            type="line"
            dataKey="task2"
            stroke="#FA2256"
            strokeWidth="6"
          />
          <Line
            type="line"
            dataKey="task4"
            filter="blur(14px)"
            stroke="#FA2256"
            strokeWidth="6"
            dot={{ fill: "#2e4355", stroke: "#FA2256", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#FA2256",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <h1> &nbsp; 9845</h1>

      <div class="card">
        <div class="container">
          {" "}
          <br />
          <span class="dot"></span>&nbsp;Last Month
           <br /> <br /> 
          <span class="dot1"></span>&nbsp;This Month
        </div>
      </div>
    </>
  );
}

export default App;
