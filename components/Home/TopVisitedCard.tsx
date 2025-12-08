import { ArrowRight, GitBranch, Plus, Shield } from "lucide-react";

export default function TopVisitedCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-xs hover:shadow-md">
      <div className="flex space-y-1.5 p-6 justify-between">
        <h3 className="tracking-tight text-base font-semibold">Top Visited</h3>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-block">View More</a>
      </div>
      <div className="p-6 pt-0">
        <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group text-left">
          <div className="p-2.5 rounded-lg bg-blue-100">
            <Plus className="size-4 text-blue-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground">Landing Zone</p>
            <p className="text-xs mt-1 text-muted-foreground">14 times</p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group text-left">
          <div className="p-2.5 rounded-lg bg-green-100">
            <GitBranch className="size-4 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground">Home</p>
            <p className="text-xs mt-1 text-muted-foreground">17 times</p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group text-left">
          <div className="p-2.5 rounded-lg bg-yellow-100">
            <Shield className="size-4 text-yellow-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground">Create</p>
            <p className="text-xs mt-1 text-muted-foreground">10 times</p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}

