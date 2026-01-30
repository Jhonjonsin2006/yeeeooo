import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ReventChat = () => {
  const data = [
    { month: "Jan", revenue: 12000, users: 400, experience: 70 },
    { month: "Feb", revenue: 15000, users: 450, experience: 75 },
    { month: "Mar", revenue: 14000, users: 500, experience: 80 },
    { month: "Apr", revenue: 16000, users: 550, experience: 85 },
    { month: "May", revenue: 17000, users: 600, experience: 90 },
    { month: "Jun", revenue: 18000, users: 650, experience: 95 },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly Revenue & Experience
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Users
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Experience
            </span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#334155" />
            <YAxis stroke="#334155" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="experience"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReventChat;
