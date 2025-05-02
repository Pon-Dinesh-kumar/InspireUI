
import React from 'react';
import { PlusCircle, MinusCircle, Maximize2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ParkingDisplayProps {
  className?: string;
}

const ParkingDisplay = ({ className }: ParkingDisplayProps) => {
  return (
    <div className={cn("relative w-full h-full rounded-lg glass overflow-hidden", className)}>
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" className="rounded-full bg-darkbg-light hover:bg-darkbg-lighter">
          <Maximize2 size={16} className="text-white/80" />
        </Button>
      </div>
      
      <div className="absolute bottom-4 left-4 z-10 flex flex-col glass-dark rounded-lg p-2">
        <div className="flex items-center space-x-2 px-1">
          <Clock size={14} className="text-white/80" />
          <span className="text-xs">Today, 09/27/25 14:24:05 PM</span>
        </div>
      </div>
      
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-darkbg-light hover:bg-darkbg-lighter">
            <PlusCircle size={16} className="text-white/80" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-darkbg-light hover:bg-darkbg-lighter">
            <MinusCircle size={16} className="text-white/80" />
          </Button>
        </div>
      </div>
      
      <div className="relative w-full h-full overflow-hidden">
        <div className="w-full h-full bg-darkbg-panel flex items-center justify-center">
          <div className="w-full h-[80%] relative">
            <div className="absolute top-0 left-[10%] w-20 h-20 rounded-full bg-purple/20 animate-pulse-glow flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-purple/70 flex items-center justify-center">
                <AlertIcon className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="relative">
                  <div className="w-full h-12 bg-red-500/20 rounded-sm"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white/5 rounded-md backdrop-blur-sm"></div>
                </div>
                <div className="relative">
                  <div className="w-full h-12 bg-red-500/20 rounded-sm"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white/5 rounded-md backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alert Icon component
const AlertIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
};

export default ParkingDisplay;
