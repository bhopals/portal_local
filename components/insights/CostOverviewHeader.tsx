"use client";

interface CostOverviewHeaderProps {
  billingDate: string;
  children?: React.ReactNode;
}

export function CostOverviewHeader({ billingDate, children }: CostOverviewHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-3xl font-bold">Cost Overview</h2>
        <p className="text-gray-500 mt-1">
          Billing data as of {billingDate}
        </p>
      </div>
      
      {/* This will render the LandingZoneSelector */}
      {children}
    </div>
  );
}