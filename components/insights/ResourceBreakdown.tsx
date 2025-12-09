"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ResourceData {
  name: string;
  cost: number;
  percentage: number;
  color: string;
}

interface ResourceBreakdownProps {
  data: ResourceData[];
}

export function ResourceBreakdown({ data }: ResourceBreakdownProps) {
  const totalCost = data.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="space-y-6">
      {/* Bar Chart */}
      <div className="bg-slate-50 rounded-lg p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cost']}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="cost" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Resource List */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-900">Resource Details</h4>
        {data.map((resource) => (
          <div
            key={resource.name}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: resource.color }}
              />
              <span className="font-medium text-slate-900">{resource.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-slate-600">
                {resource.percentage}%
              </span>
              <span className="font-semibold text-slate-900 min-w-[100px] text-right">
                ${resource.cost.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 rounded-lg">
        <span className="font-semibold text-slate-900">Total Cost</span>
        <span className="text-xl font-bold text-blue-700">
          ${totalCost.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
