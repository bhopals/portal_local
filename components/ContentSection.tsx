import StatsCards from "./Home/StatsCards";
import TopVisitedCard from "./Home/TopVisitedCard";
import RecentlyVisitedCard from "./Home/RecentlyVisitedCard";
import PromotionalBanner from "./Home/PromotionalBanner";

export default function ContentSection() {
  return (
    <main className="pt-16 min-h-screen bg-sidebar">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-1">Welcome back, User Name</h2>
          <p className="text-sm text-muted-foreground">Here's an overview of your infrastructure.</p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Stats Cards Row */}
          <StatsCards />
          
          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TopVisitedCard />
            <RecentlyVisitedCard />
          </div>
          
          {/* Landing Zones Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-xs">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-base font-semibold capitalize">Your started landing zones</h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">Click the star beside a landing zone to add it to this list!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Promotional Banner */}
          <PromotionalBanner />
        </div>
      </div>
    </main>
  );
}