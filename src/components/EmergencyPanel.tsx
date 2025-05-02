
import React from 'react';
import { AlertTriangle, Phone, Mic, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface EmergencyPanelProps {
  className?: string;
}

const EmergencyPanel = ({ className }: EmergencyPanelProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      <div className="glass-dark rounded-lg p-4">
        <div className="mb-2">
          <p className="text-sm text-white/90 leading-relaxed">
            Hey, Sarah! The system picked up an impact on your windshield, but don't 
            worry—it's nothing serious. I checked it myself and there's not even a scratch. 
            Turns out, a kid was playing around and accidentally...
          </p>
        </div>
      </div>
      
      <div className="glass-dark rounded-lg p-4 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Something wrong?</h3>
          <p className="text-sm text-white/70">Don't think</p>
          <p className="text-sm text-white/70">Call for help!</p>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <Button variant="ghost" className="text-xs text-white/60 hover:text-white">
            <Phone className="h-4 w-4 mr-1 text-purple" />
            <span>Drag to emergency call</span>
          </Button>
          <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-red-600/50 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="glass-dark rounded-lg p-3 col-span-1 md:col-span-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mic className="h-4 w-4 text-purple" />
            <span className="text-xs text-white/60">You're saying...</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-white/40">pause record</span>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
              <Square className="h-3 w-3 text-purple" />
            </Button>
          </div>
        </div>
        
        <div className="mt-2 h-6 relative">
          <div className="w-full h-full flex items-center">
            <div className="w-full h-12 flex items-center justify-center">
              <div className="w-full h-6">
                <svg viewBox="0 0 200 20" className="w-full">
                  <path
                    d="M0,10 Q10,5 20,10 T40,10 T60,15 T80,5 T100,10 T120,15 T140,5 T160,10 T180,5 T200,10"
                    fill="none"
                    stroke="rgba(190, 46, 221, 0.7)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPanel;
