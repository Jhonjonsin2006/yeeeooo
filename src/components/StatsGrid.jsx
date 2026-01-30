import React from "react";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "$15,151.54",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    gradient: "from-emerald-400 to-teal-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/25",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "users",
    title: "Active Users",
    value: "2,345",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    gradient: "from-blue-400 to-cyan-400",
    bg: "bg-blue-50 dark:bg-blue-900/25",
    text: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "orders",
    title: "Total Orders",
    value: "1,284",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingCart,
    gradient: "from-orange-400 to-amber-400",
    bg: "bg-orange-50 dark:bg-orange-900/25",
    text: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "conversion",
    title: "Conversion Rate",
    value: "4.8%",
    change: "+1.4%",
    trend: "up",
    icon: TrendingUp,
    gradient: "from-purple-400 to-pink-400",
    bg: "bg-purple-50 dark:bg-purple-900/25",
    text: "text-purple-600 dark:text-purple-400",
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;

        return (
          <div
            key={stat.id}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {stat.value}
                </p>
                <div className={`flex items-center space-x-2 ${stat.text}`}>
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl ${stat.bg} transition-all duration-200`}
              >
                <Icon className={`w-6 h-6 ${stat.text}`} />
              </div>
            </div>
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full w-full bg-gradient-to-r ${stat.gradient}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
