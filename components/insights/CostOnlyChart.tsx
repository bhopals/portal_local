"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartData {
  date: string;
  cost: number;
  users: number;
}

interface CostOnlyChartProps {
  data: ChartData[];
}

export function CostOnlyChart({ data }: CostOnlyChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCostOnly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />

        {/* Y-axis for Cost */}
        <YAxis
          tickFormatter={(value) => `$${(value / 1000).toFixed(value >= 1000 ? 1 : 0)}k`}
          stroke="#9ca3af"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />

        <XAxis
          dataKey="date"
          stroke="#9ca3af"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            fontSize: '13px',
            padding: '8px 12px'
          }}
          labelStyle={{
            color: '#374151',
            fontWeight: 600,
            marginBottom: '4px'
          }}
        />

        {/* Cost Area Chart (Blue) */}
        <Area
          type="monotone"
          dataKey="cost"
          stroke="#3b82f6"
          strokeWidth={2.5}
          fill="url(#colorCostOnly)"
          animationDuration={800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
