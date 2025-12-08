"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ExternalLink,
  Pencil,
  Star,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const landingZonesData = [
  {
    id: 1,
    name: "app-1-dev",
    cloud: "azure",
    environment: "dev",
    pattern: "Front end application",
    hygiene: "compliant",
    tags: [
      { key: "AppCode", value: "IT1A" },
      { key: "Squad", value: "XYZ@gmail.com" }
    ],
    starred: false
  },
  {
    id: 2,
    name: "dbx-1-dev",
    cloud: "azure",
    environment: "dev",
    pattern: "Big Data 1",
    hygiene: "compliant",
    tags: [],
    starred: false
  },
  {
    id: 3,
    name: "app-1-qa",
    cloud: "azure",
    environment: "qa",
    pattern: "NA",
    hygiene: "compliant",
    tags: [],
    starred: true
  },
  {
    id: 4,
    name: "backend-api-prod",
    cloud: "aws",
    environment: "prod",
    pattern: "Microservices",
    hygiene: "non-compliant",
    tags: [
      { key: "Team", value: "Backend" }
    ],
    starred: false
  },
  {
    id: 5,
    name: "ml-pipeline-dev",
    cloud: "gcp",
    environment: "dev",
    pattern: "ML Pipeline",
    hygiene: "compliant",
    tags: [
      { key: "Project", value: "AI-Initiative" }
    ],
    starred: true
  }
];

const cloudOptions = ["All Clouds", "Azure", "AWS", "GCP"];

export default function LandingZonePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCloud, setSelectedCloud] = useState("All Clouds");
  const [starredItems, setStarredItems] = useState<number[]>(
    landingZonesData.filter(zone => zone.starred).map(zone => zone.id)
  );
  const filteredZones = landingZonesData.filter(zone => {
    const matchesSearch = zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.pattern.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.environment.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCloud = selectedCloud === "All Clouds" ||
      zone.cloud.toLowerCase() === selectedCloud.toLowerCase();

    return matchesSearch && matchesCloud;
  });

  const toggleStar = (id: number) => {
    setStarredItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getHygieneStyles = (hygiene: string) => {
    if (hygiene === "compliant") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    return "bg-red-50 text-red-700 border-red-200";
  };

  return (
    <div className="pt-20 px-6 pb-6 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-end justify-between mb-6">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Cloud</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center justify-between gap-8 px-4 py-2.5 bg-white border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 min-w-[160px]"
                >
                  <span>{selectedCloud}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[160px]">
                {cloudOptions.map((cloud) => (
                  <DropdownMenuItem
                    key={cloud}
                    onClick={() => setSelectedCloud(cloud)}
                    className={selectedCloud === cloud ? 'bg-blue-50 text-blue-700 font-medium' : ''}
                  >
                    {cloud}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button onClick={() => router.push("/create")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
            <Plus className="w-4 h-4" />
            Create
          </Button>
        </div>

        {(selectedCloud !== "All Clouds" || searchQuery) && (
          <div className="mb-4 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              {selectedCloud !== "All Clouds" && (
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 text-sm font-medium rounded-full border-blue-200 shadow-sm animate-in fade-in slide-in-from-left-2 duration-200"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Cloud: {selectedCloud}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedCloud("All Clouds")}
                    className="ml-1 h-4 w-4 p-0 hover:bg-blue-100 rounded-full"
                    title="Remove filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </Badge>
              )}

              {searchQuery && (
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-sm font-medium rounded-full border-violet-200 shadow-sm animate-in fade-in slide-in-from-left-2 duration-200"
                >
                  <span className="flex items-center gap-1.5">
                    <Search className="w-3 h-3" />
                    &quot;{searchQuery}&quot;
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchQuery("")}
                    className="ml-1 h-4 w-4 p-0 hover:bg-violet-100 rounded-full"
                    title="Remove filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-slate-900">
                All Landing Zones
                <span className="ml-2 text-base font-normal text-slate-500">
                  ({filteredZones.length})
                </span>
              </h1>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                <Input
                  type="text"
                  placeholder="Filter"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-52 pl-10 pr-10 bg-white border-slate-200 rounded-xl text-sm placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50/50">
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</TableHead>
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cloud</TableHead>
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Environment</TableHead>
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Pattern</TableHead>
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Hygiene</TableHead>
                  <TableHead className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tags</TableHead>
                  <TableHead className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredZones.map((zone) => (
                  <TableRow
                    key={zone.id}
                    className="group hover:bg-slate-50/50 transition-colors duration-150"
                  >
                    <TableCell className="px-6 py-4">
                      <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
                        {zone.name}
                      </span>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {zone.cloud}
                      </span>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={`px-2.5 py-1 text-xs font-medium rounded-lg ${zone.environment === 'prod'
                            ? 'bg-orange-50 text-orange-700 border-orange-200'
                            : zone.environment === 'qa'
                              ? 'bg-purple-50 text-purple-700 border-purple-200'
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}
                      >
                        {zone.environment}
                      </Badge>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <span className="text-sm text-slate-600">{zone.pattern}</span>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${getHygieneStyles(zone.hygiene)}`}
                      >
                        {zone.hygiene}
                      </Badge>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        {zone.tags.length > 0 ? (
                          zone.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md border-slate-200"
                            >
                              {tag.key}: {tag.value}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-xs text-slate-400">—</span>
                        )}
                      </div>
                    </TableCell>

                    <TableCell className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                          title="Open"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-violet-600 hover:bg-violet-50"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleStar(zone.id)}
                          className={`h-8 w-8 ${starredItems.includes(zone.id)
                              ? 'text-amber-500 hover:bg-amber-50'
                              : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'
                            }`}
                          title={starredItems.includes(zone.id) ? "Unstar" : "Star"}
                        >
                          <Star className={`w-4 h-4 ${starredItems.includes(zone.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredZones.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-1">No landing zones found</h3>
              <p className="text-sm text-slate-500">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}