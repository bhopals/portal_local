"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudCostChart } from "@/components/insights/CloudCostChart";
import { mockCostData } from "@/lib/mockCostData";

export default function InsightsPage() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [timePeriod, setTimePeriod] = useState("6months");

  return (
    <div className="p-6">
      
      {/* Cost Overview Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Cost Overview</h2>
          <p className="text-gray-500 mt-1">
            Billing data as of {new Date().toISOString().split('T')[0]}
          </p>
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

      {/* Tabs */}
      <Tabs defaultValue="total" className="mb-6">
        <TabsList>
          <TabsTrigger value="total">TOTAL COST</TabsTrigger>
          <TabsTrigger value="breakdown">BREAKDOWN BY RESOURCE</TabsTrigger>
        </TabsList>
        
        <TabsContent value="total" className="mt-6">
          <Card className="p-6">
            {/* Chart Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Cloud Cost</h3>
              
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
                  <span className="text-sm text-gray-600">COST TREND</span>
                </div>
                <div className="text-3xl font-bold">{mockCostData.costTrend.percentage}%</div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm text-gray-600">DAILY ACTIVE USERS TREND</span>
                </div>
                <div className="text-3xl font-bold">{mockCostData.dailyActiveUsersTrend.percentage}%</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-1">YOUR EXCESS</div>
                <div className="text-xl font-semibold text-red-600">
                  {mockCostData.excess.percentage}% or ~{mockCostData.excess.engineers} engineers
                </div>
              </div>
            </div>

            {/* Chart */}
            <CloudCostChart data={mockCostData.chartData} />
          </Card>
        </TabsContent>
        
        <TabsContent value="breakdown">
          <Card className="p-6">
            <p className="text-gray-500">Breakdown by resource view - Coming soon</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}