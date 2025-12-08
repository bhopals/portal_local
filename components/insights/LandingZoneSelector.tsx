"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LandingZone {
  id: string;
  name: string;
}

interface LandingZoneSelectorProps {
  zones: LandingZone[];
  value: string;
  onChange: (value: string) => void;
}

export function LandingZoneSelector({ zones, value, onChange }: LandingZoneSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select Landing Zone" />
      </SelectTrigger>
      <SelectContent>
        {zones.map((zone) => (
          <SelectItem key={zone.id} value={zone.id}>
            {zone.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}