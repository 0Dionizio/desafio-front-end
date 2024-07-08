import { Chart } from "./line-chart";

export function ChartSection() {
  return (
    <div className="bg-white p-8 rounded-xl w-3/4">
      <h2>Plataformas</h2>
      <div className="h-64 mt-6  ">
        <Chart />
      </div>
    </div>
  );
}
