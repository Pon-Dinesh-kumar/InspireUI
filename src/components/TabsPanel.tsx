
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Phone, Mic, PauseCircle, Calendar } from "lucide-react";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TabsPanelProps {
  className?: string;
}

const TabsPanel = ({ className }: TabsPanelProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className={cn("w-full glass rounded-lg p-1", className)}>
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 bg-darkbg-panel mb-4">
          <TabsTrigger value="overview" className="data-[state=active]:text-purple">Overview</TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:text-purple">
            Payment
            <span className="ml-2 w-5 h-5 rounded-full bg-purple text-xs flex items-center justify-center">1</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:text-purple">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 animate-fade-in">
          <Alert className="bg-darkbg-panel border-none shadow-none">
            <AlertTriangle className="h-4 w-4 text-purple" />
            <AlertTitle className="text-sm font-medium">Got a punch</AlertTitle>
          </Alert>

          <div className="relative mt-8 mb-4">
            <div className="w-full flex justify-center items-center">
              <img 
                src="/lovable-uploads/0461f44f-6515-4a2a-97ca-4c8c1a5d6880.png" 
                alt="Voedo Horizon 3000 FX" 
                className="w-3/4 object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-center text-gradient">Voedo Horizon 3000 FX</h3>

          <div className="grid grid-cols-3 gap-2 text-center mt-4">
            <div className="flex flex-col">
              <span className="text-md font-semibold">P-204</span>
              <span className="text-xs text-white/60">Spot</span>
            </div>
            <div className="flex flex-col">
              <span className="text-md font-semibold">VEL-204X</span>
              <span className="text-xs text-white/60">Number</span>
            </div>
            <div className="flex flex-col">
              <span className="text-md font-semibold">Sedan</span>
              <span className="text-xs text-white/60">Body</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="glass-dark rounded-lg p-4">
              <div className="flex flex-col">
                <span className="text-md font-semibold">Sarah Connor</span>
                <span className="text-xs text-white/60">Completes removing</span>
              </div>
              <div className="flex justify-center mt-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img src="/placeholder.svg" alt="Sarah Connor" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="glass-dark rounded-lg p-4">
              <div className="flex flex-col">
                <span className="text-md font-semibold">Reserved until</span>
                <span className="text-xs text-white/60">Your parking time</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">14.08</span>
                <Calendar className="w-5 h-5 text-white/70" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">Rental time</h4>
              <span className="text-xs text-white/60">This year</span>
            </div>
            <div className="h-32 relative">
              <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
              {/* Chart lines */}
              <div className="h-full flex items-end justify-between gap-1">
                <div className="w-full flex flex-col items-center">
                  <div className="h-10 w-1 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white/40 mt-1">Jul</span>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="h-16 w-1 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white/40 mt-1">Aug</span>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="h-24 w-1 bg-purple rounded-full"></div>
                  <span className="text-xs text-white mt-1">Sep</span>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="h-12 w-1 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white/40 mt-1">Oct</span>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="h-8 w-1 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white/40 mt-1">Nov</span>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="h-6 w-1 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white/40 mt-1">Dec</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="payment" className="animate-fade-in">
          <div className="flex flex-col items-center justify-center h-64">
            <h3 className="text-lg font-medium">Payment Information</h3>
            <p className="text-sm text-white/60 mt-2">You have 1 pending payment</p>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="animate-fade-in">
          <div className="flex flex-col items-center justify-center h-64">
            <h3 className="text-lg font-medium">Parking History</h3>
            <p className="text-sm text-white/60 mt-2">View your recent parking sessions</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsPanel;
