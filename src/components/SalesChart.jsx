import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "Page A", uv: 590 },
  { name: "Page B", uv: 590 },
  { name: "Page C", uv: 868 },
];

const COLORS = ["#3b82f6", "#10b981", "#8b5cf6"];

const SalesChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Production Distribution
        </p>
      </div>

      <div className="h-80 flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="uv"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default SalesChart;
