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
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        
        {/* Left Y-axis for Cost */}
        <YAxis 
          yAxisId="left"
          tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
          stroke="#6b7280"
        />
        
        {/* Right Y-axis for Users */}
        <YAxis 
          yAxisId="right" 
          orientation="right"
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          stroke="#6b7280"
        />
        
        <XAxis 
          dataKey="date" 
          stroke="#6b7280"
        />
        
        <Tooltip 
          formatter={(value: number, name: string) => {
            if (name === 'cost') return [`$${value.toLocaleString()}`, 'Cost'];
            return [value.toLocaleString(), 'Users'];
          }}
        />
        
        {/* Cost Area Chart (Blue) */}
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="cost"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#colorCost)"
        />
        
        {/* Users Line Chart (Pink) */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="users"
          stroke="#ec4899"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}