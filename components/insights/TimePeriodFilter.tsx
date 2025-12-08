"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimePeriod {
  id: string;
  label: string;
}

interface TimePeriodFilterProps {
  periods: TimePeriod[];
  value: string;
  onChange: (value: string) => void;
}

export function TimePeriodFilter({ periods, value, onChange }: TimePeriodFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {periods.map((period) => (
          <SelectItem key={period.id} value={period.id}>
            {period.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}