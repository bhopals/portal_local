"use client";

import { useState } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudCostChart } from "@/components/insights/CloudCostChart";
import { mockCostData } from "@/lib/mockCostData";

export default function InsightsPage() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [timePeriod, setTimePeriod] = useState("6months");

  // Get zone-specific data
  const currentMetrics = mockCostData.zoneMetrics[selectedZone as keyof typeof mockCostData.zoneMetrics];
  const allZoneData = mockCostData.zoneChartData[selectedZone as keyof typeof mockCostData.zoneChartData];

  // Filter data based on time period
  const getFilteredData = () => {
    if (timePeriod === 'week') {
      // Past Week: Show daily data (last 7 points)
      return allZoneData.slice(-7);
    } else if (timePeriod === 'month') {
      // Past Month: Show every 2-3 days (sample every 2nd point from last 20)
      const monthData = allZoneData.slice(-20);
      return monthData.filter((_, index) => index % 2 === 0);
    } else if (timePeriod === '3months') {
      // Past 3 Months: Show weekly data (last 13 points)
      return allZoneData.slice(-13);
    } else {
      // Past 6 Months: Show all data points
      return allZoneData;
    }
  };

  const currentChartData = getFilteredData();

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-[250px] h-11 justify-between px-4 bg-white border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-500 transition-all duration-200"
              >
                <span className="text-slate-900">
                  {mockCostData.landingZones.find(z => z.id === selectedZone)?.name || "Select Landing Zone"}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[250px] bg-white border-slate-200 shadow-lg rounded-lg">
              {mockCostData.landingZones.map((zone) => (
                <DropdownMenuItem
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                    selectedZone === zone.id
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {zone.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Cloud Cost Card */}
      <Card className="p-6 lg:p-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60">
        {/* Cloud Cost Header */}
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-slate-900">Cloud Cost</h3>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="total">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="total">TOTAL COST</TabsTrigger>
              <TabsTrigger value="breakdown">BREAKDOWN BY RESOURCE</TabsTrigger>
            </TabsList>

            {/* Time Period Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[200px] h-11 justify-between px-4 bg-white border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-500 transition-all duration-200"
                >
                  <span className="text-slate-900">
                    {mockCostData.timePeriods.find(p => p.id === timePeriod)?.label || "Select Period"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] bg-white border-slate-200 shadow-lg rounded-lg">
                {mockCostData.timePeriods.map((period) => (
                  <DropdownMenuItem
                    key={period.id}
                    onClick={() => setTimePeriod(period.id)}
                    className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                      timePeriod === period.id
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {period.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <TabsContent value="total" className="mt-0">

            {/* Metrics */}
            <div className="flex gap-8 mb-4">
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
          </TabsContent>

          <TabsContent value="breakdown" className="mt-0">
            <p className="text-slate-500">Breakdown by resource view - Coming soon</p>
          </TabsContent>
        </Tabs>
      </Card>
      </div>
    </div>
  );
}