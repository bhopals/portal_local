import { CircleAlert } from "lucide-react";

export default function RecentlyVisitedCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-xs hover:shadow-md">
      <div className="flex justify-between space-y-1.5 p-6">
        <h3 className="tracking-tight text-base font-semibold">Recently Visited</h3>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-block">View More</a>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <div className="flex items-center gap-3">
          <CircleAlert className="size-4 text-gray-500" />
          <div className="flex justify-between flex-1 items-center">
            <p className="text-sm text-foreground">Home</p>
            <span className="text-xs text-muted-foreground">2 minutes ago</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CircleAlert className="size-4 text-gray-500" />
          <div className="flex justify-between flex-1 items-center">
            <p className="text-sm text-foreground">Create</p>
            <span className="text-xs text-muted-foreground">2 minutes ago</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CircleAlert className="size-4 text-gray-500" />
          <div className="flex justify-between flex-1 items-center">
            <p className="text-sm text-foreground">Landing Zone</p>
            <span className="text-xs text-muted-foreground">2 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

