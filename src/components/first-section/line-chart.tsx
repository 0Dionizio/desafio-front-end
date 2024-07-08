"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "./line-chart-data";

export function Chart() {
  return (
    <ResponsiveContainer width="100%">
      <LineChart width={100} data={data}>
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="td"
          stroke="#A700FF"
          dot={false}
          strokeWidth={5}
        />
        <Line
          type="monotone"
          dataKey="riko"
          stroke="#EF4444"
          dot={false}
          strokeWidth={5}
        />
        <Line
          type="monotone"
          dataKey="blue"
          stroke="#3CD856"
          dot={false}
          strokeWidth={5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
