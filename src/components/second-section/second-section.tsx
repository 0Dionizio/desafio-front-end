"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Segunda",
    uv: 4000,
    pv: 25000,
    amt: 2400,
  },
  {
    name: "Terça",
    uv: 3000,
    pv: 13098,
    amt: 22100,
  },
  {
    name: "Quarta",
    uv: 20000,
    pv: 2000,
    amt: 22900,
  },
  {
    name: "Quinta",
    uv: 27800,
    pv: 2080,
    amt: 20000,
  },
  {
    name: "Sexta",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sabado",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Domingo",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function SecondSection() {
  return (
    <div className="bg-white p-8 rounded-xl w-full ">
      <h2>Rendimento total</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}k`
              }
            />
            <Tooltip />
            <Bar
              radius={3}
              dataKey="pv"
              fill="#0095FF"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              radius={3}
              dataKey="uv"
              fill="#00E096"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className=" flex flex-row ">
          <div className="m-auto  gap-8 flex flex-row">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 bg-[#0095FF] rounded-full " />
              <div>Aguardando</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 bg-[#00E096] rounded-full " />
              <div>Implantadas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
