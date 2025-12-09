"use client";

import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartData {
  date: string;
  cost: number;
  users: number;
}

interface CloudCostChartProps {
  data: ChartData[];
}

export function CloudCostChart({ data }: CloudCostChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />

        {/* Left Y-axis for Cost */}
        <YAxis
          yAxisId="left"
          tickFormatter={(value) => `$${(value / 1000).toFixed(value >= 1000 ? 1 : 0)}k`}
          stroke="#9ca3af"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />

        {/* Right Y-axis for Users */}
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
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
          formatter={(value: number, name: string) => {
            if (name === 'cost') return [`$${value.toLocaleString()}`, 'Cost Trend'];
            return [value.toLocaleString(), 'Daily Active Users'];
          }}
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
          yAxisId="left"
          type="monotone"
          dataKey="cost"
          stroke="#3b82f6"
          strokeWidth={2.5}
          fill="url(#colorCost)"
          animationDuration={800}
        />

        {/* Users Line Chart (Pink) */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="users"
          stroke="#ec4899"
          strokeWidth={2.5}
          dot={false}
          animationDuration={800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}