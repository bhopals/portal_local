"use client";

import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartData {
  date: string;
  cost: number;
  users: number;
}

interface CostOnlyChartProps {
  data: ChartData[];
}

// Calculate linear trend line
const calculateTrendLine = (data: ChartData[]) => {
  const n = data.length;
  const sumX = data.reduce((sum, _, i) => sum + i, 0);
  const sumY = data.reduce((sum, d) => sum + d.cost, 0);
  const sumXY = data.reduce((sum, d, i) => sum + i * d.cost, 0);
  const sumX2 = data.reduce((sum, _, i) => sum + i * i, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return data.map((d, i) => ({
    ...d,
    trend: Math.max(0, slope * i + intercept) // Ensure trend never goes below 0
  }));
};

export function CostOnlyChart({ data }: CostOnlyChartProps) {
  const dataWithTrend = calculateTrendLine(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={dataWithTrend}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCostOnly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.15}/>
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />

        {/* Y-axis for Cost */}
        <YAxis
          domain={['dataMin', 'auto']}
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
          formatter={(value: number, name: string) => {
            if (name === 'cost') return [`$${value.toLocaleString()}`, 'Actual Cost'];
            if (name === 'trend') return [`$${value.toLocaleString()}`, 'Cost Trend'];
            return [`$${value.toLocaleString()}`, 'Cost'];
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

        {/* Cost Area Chart (Blue fill only, no stroke) */}
        <Area
          type="monotone"
          dataKey="cost"
          stroke="none"
          fill="url(#colorCostOnly)"
          animationDuration={800}
        />

        {/* Blue Trend Line (Straight line) */}
        <Line
          type="monotone"
          dataKey="trend"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
          animationDuration={800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
