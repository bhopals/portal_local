export default function StatsCards() {
  return (
    <div className="flex gap-4">
      <div className="rounded-xl p-4 border transition-all duration-200 hover:shadow-md cursor-pointer flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <span className="text-sm font-medium text-gray-700">Failed</span>
        </div>
        <p className="text-3xl font-medium text-foreground">25</p>
      </div>
      <div className="rounded-xl p-4 border transition-all duration-200 hover:shadow-md cursor-pointer flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          <span className="text-sm font-medium text-gray-700">Unconfirmed</span>
        </div>
        <p className="text-3xl font-medium text-foreground">100</p>
      </div>
      <div className="rounded-xl p-4 border transition-all duration-200 hover:shadow-md cursor-pointer flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-gray-700">Finished</span>
        </div>
        <p className="text-3xl font-medium text-foreground">76</p>
      </div>
      <div className="rounded-xl p-4 border transition-all duration-200 hover:shadow-md cursor-pointer flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-gray-500"></span>
          <span className="text-sm font-medium text-gray-700">Other</span>
        </div>
        <p className="text-3xl font-medium text-foreground">24</p>
      </div>
    </div>
  );
}

