"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudCostChart } from "@/components/insights/CloudCostChart";
import { mockCostData } from "@/lib/mockCostData";

export default function InsightsPage() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [timePeriod, setTimePeriod] = useState("6months");

  // Get zone-specific data
  const currentMetrics = mockCostData.zoneMetrics[selectedZone as keyof typeof mockCostData.zoneMetrics];
  const currentChartData = mockCostData.zoneChartData[selectedZone as keyof typeof mockCostData.zoneChartData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

      {/* Cost Overview Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/25">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Cost Overview</h2>
              <p className="text-sm text-slate-500 mt-1">
                Billing data as of {new Date().toISOString().split('T')[0]}
              </p>
            </div>
          </div>

          {/* Landing Zone Selector */}
          <Select value={selectedZone} onValueChange={setSelectedZone}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select Landing Zone" />
            </SelectTrigger>
            <SelectContent>
              {mockCostData.landingZones.map((zone) => (
                <SelectItem key={zone.id} value={zone.id}>
                  {zone.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="total" className="mb-6">
        <TabsList>
          <TabsTrigger value="total">TOTAL COST</TabsTrigger>
          <TabsTrigger value="breakdown">BREAKDOWN BY RESOURCE</TabsTrigger>
        </TabsList>
        
        <TabsContent value="total" className="mt-6">
          <Card className="p-8 lg:p-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60">
            {/* Chart Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Cloud Cost</h3>
              
              {/* Time Period Filter */}
              <Select value={timePeriod} onValueChange={setTimePeriod}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {mockCostData.timePeriods.map((period) => (
                    <SelectItem key={period.id} value={period.id}>
                      {period.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Metrics */}
            <div className="flex gap-8 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-600 font-medium">COST TREND</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{currentMetrics.costTrend.percentage}%</div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm text-slate-600 font-medium">DAILY ACTIVE USERS TREND</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{currentMetrics.dailyActiveUsersTrend.percentage}%</div>
              </div>

              <div>
                <div className="text-sm text-slate-600 font-medium mb-1">YOUR EXCESS</div>
                <div className="text-xl font-semibold text-red-600">
                  {currentMetrics.excess.percentage}% or ~{currentMetrics.excess.engineers} engineers
                </div>
              </div>
            </div>

            {/* Chart */}
            <CloudCostChart data={currentChartData} />
          </Card>
        </TabsContent>
        
        <TabsContent value="breakdown">
          <Card className="p-8 lg:p-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60">
            <p className="text-slate-500">Breakdown by resource view - Coming soon</p>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}