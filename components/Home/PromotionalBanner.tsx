import { BookOpen, Layers, Plus } from "lucide-react";

export default function PromotionalBanner() {
  return (
    <div className="rounded-xl overflow-hidden relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/sidebar/bg.svg)' }}
      ></div>

      {/* <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        <div className="max-w-3xl text-white space-y-4 z-10">
          <h3 className="text-xl md:text-3xl font-semibold tracking-tight">
            You do not have any stacks yet
          </h3>
          <div className="space-y-2 text-blue-50">
            <p className="text-md">
              Spacelift is no fun without stacks and you haven't created one yet. Create one now, or learn more from our documentation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 text-white h-11 px-6 gap-2">
              <BookOpen className="size-4" />
              Documentation
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg h-11 px-6 gap-2 font-semibold">
              <Plus className="size-4" />
              Create Stack
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 relative z-10">
          <div className="relative size-16 md:size-28 flex items-center justify-center">
            <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <Layers className="size-8 md:size-12 text-blue-600" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-white/40 rounded-full blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

