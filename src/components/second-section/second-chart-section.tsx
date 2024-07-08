"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function SecondChartSection() {
  return (
    <div className="bg-white p-8 rounded-xl">
      <h2>Vidas</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}>
            <defs>
              <linearGradient
                id="colorPv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#07E098"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#07E098"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#0095FF"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#0095FF"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              fill="url(#colorUv)"
              strokeWidth={2}
              dot={true}
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#0095FF"
            />
            <Area
              fill="url(#colorPv)"
              strokeWidth={2}
              dot={true}
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#07E098"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center">Ultimo mes/Este mes</div>
      </div>
    </div>
  );
}
