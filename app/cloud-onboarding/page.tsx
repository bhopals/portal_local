"use client";

import { useState } from "react";
import { ChevronDown, Cloud, User, Mail, Globe, DollarSign, FileText, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CloudOnboardingPage() {
  const [formData, setFormData] = useState({
    appName: "",
    appUniqueIdentifier: "",
    applicationLead: "",
    owningSquadDl: "",
    supportSquadDl: "", 
    cloudKind: "",
    environment: "",
    region: "",
    budgetKey: "",
    notes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      appName: "",
      appUniqueIdentifier: "",
      applicationLead: "",
      owningSquadDl: "",
      supportSquadDl: "",
      cloudKind: "",
      environment: "",
      region: "",
      budgetKey: "",
      notes: "",
    });
  };

  const cloudKindOptions = ["Azure", "AWS", "GCP"];
  const environmentOptions = ["dev", "qa", "prod", "staging"];
  const regionOptions = ["us-east-1", "us-west-2", "eu-west-1", "ap-southeast-1"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/25">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Cloud Onboarding Request</h1>
              <p className="text-sm text-slate-500 mt-1">Fill in the details below to request cloud infrastructure</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 lg:p-10">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h2 className="text-lg font-semibold text-slate-900">Application Information</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    App Name
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={formData.appName}
                      onChange={(e) => handleInputChange("appName", e.target.value)}
                      className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                      placeholder="Enter application name"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <span className="w-4 h-4 flex items-center justify-center text-blue-500 font-bold">#</span>
                    App Unique Identifier
                    <span className="text-xs font-normal text-slate-500 ml-1">(3-digit)</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.appUniqueIdentifier}
                    onChange={(e) => handleInputChange("appUniqueIdentifier", e.target.value)}
                    className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Enter 3-digit unique identifier"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-10"></div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h2 className="text-lg font-semibold text-slate-900">Team Information</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <User className="w-4 h-4 text-blue-500" />
                    Application Lead
                  </label>
                  <Input
                    type="text"
                    value={formData.applicationLead}
                    onChange={(e) => handleInputChange("applicationLead", e.target.value)}
                    className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Enter application lead"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    Owning Squad DL
                  </label>
                  <Input
                    type="email"
                    value={formData.owningSquadDl}
                    onChange={(e) => handleInputChange("owningSquadDl", e.target.value)}
                    className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Enter owning squad email"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    Support Squad DL
                  </label>
                  <Input
                    type="email"
                    value={formData.supportSquadDl}
                    onChange={(e) => handleInputChange("supportSquadDl", e.target.value)}
                    className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Enter support squad email"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-10"></div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h2 className="text-lg font-semibold text-slate-900">Cloud Configuration</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Cloud className="w-4 h-4 text-blue-500" />
                    Cloud Kind
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 justify-between px-4 bg-slate-50/50 border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:border-blue-500 hover:text-slate-900 transition-all duration-200"
                      >
                        <span className={formData.cloudKind ? "text-slate-900" : "text-slate-400"}>
                          {formData.cloudKind || "Select cloud kind"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] bg-white border-slate-200 shadow-lg rounded-lg">
                      {cloudKindOptions.map((option) => (
                        <DropdownMenuItem
                          key={option}
                          onClick={() => handleInputChange("cloudKind", option)}
                          className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                            formData.cloudKind === option 
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Globe className="w-4 h-4 text-blue-500" />
                    Environment
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 justify-between px-4 bg-slate-50/50 border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:border-blue-500 hover:text-slate-900 transition-all duration-200"
                      >
                        <span className={formData.environment ? "text-slate-900" : "text-slate-400"}>
                          {formData.environment || "Select environment"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] bg-white border-slate-200 shadow-lg rounded-lg">
                      {environmentOptions.map((option) => (
                        <DropdownMenuItem
                          key={option}
                          onClick={() => handleInputChange("environment", option)}
                          className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                            formData.environment === option 
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Globe className="w-4 h-4 text-blue-500" />
                    Region
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 justify-between px-4 bg-slate-50/50 border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:border-blue-500 hover:text-slate-900 transition-all duration-200"
                      >
                        <span className={formData.region ? "text-slate-900" : "text-slate-400"}>
                          {formData.region || "Select region"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] bg-white border-slate-200 shadow-lg rounded-lg">
                      {regionOptions.map((option) => (
                        <DropdownMenuItem
                          key={option}
                          onClick={() => handleInputChange("region", option)}
                          className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                            formData.region === option 
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                    Budget Key
                  </label>
                  <Input
                    type="text"
                    value={formData.budgetKey}
                    onChange={(e) => handleInputChange("budgetKey", e.target.value)}
                    className="h-11 pl-4 pr-4 text-sm border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Enter budget key"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-10"></div>

            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <FileText className="w-4 h-4 text-blue-500" />
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 resize-none"
                placeholder="Enter any additional notes or requirements..."
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                className="h-11 px-8 border-slate-300 bg-white text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-11 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

