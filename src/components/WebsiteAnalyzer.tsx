
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, Loader } from "lucide-react";

interface WebsiteAnalyzerProps {
  onAnalyze: (url: string, analysisType: 'page' | 'site') => void;
  isLoading: boolean;
}

const WebsiteAnalyzer: React.FC<WebsiteAnalyzerProps> = ({ onAnalyze, isLoading }) => {
  const [url, setUrl] = useState('');
  const [analysisType, setAnalysisType] = useState<'page' | 'site'>('page');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      return;
    }
    
    // Add http:// if not present
    let processedUrl = url;
    if (!/^https?:\/\//i.test(url)) {
      processedUrl = 'https://' + url;
    }
    
    onAnalyze(processedUrl, analysisType);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="glass-pink-blue rounded-lg p-8 border-gradient backdrop-blur-md transition duration-300 hover:shadow-glow">
        <h3 className="text-xl font-semibold mb-6 text-gradient-pink-blue">Enter Website Details</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url">Website URL</Label>
            <div className="relative">
              <Input
                id="url"
                type="text"
                placeholder="e.g., example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-darkbg-lighter border-white/10 pl-10 focus:border-pink/50 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label>Analysis Scope</Label>
            <RadioGroup 
              defaultValue="page"
              value={analysisType}
              onValueChange={(value) => setAnalysisType(value as 'page' | 'site')}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="page" id="page" className="border-pink/50 text-pink" />
                <Label htmlFor="page" className="cursor-pointer">Single Page</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="site" id="site" className="border-blue/50 text-blue" />
                <Label htmlFor="site" className="cursor-pointer">Entire Website</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-pink-blue hover:opacity-90 border-gradient transition-all duration-300 group"
            disabled={!url || isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <span className="flex items-center justify-center w-full group-hover:scale-105 transition-transform">
                Analyze UI/UX
              </span>
            )}
          </Button>
        </form>
      </div>
      
      <div className="glass-animated rounded-lg p-8 flex flex-col justify-center items-center border-gradient relative overflow-hidden animate-pulse-border">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-pink/5 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-blue/5 to-transparent opacity-30"></div>
        
        <img 
          src="/lovable-uploads/6f5c6533-4209-439b-8866-2de6203e0671.png" 
          alt="UI Visualization" 
          className="w-4/5 mb-8 relative z-10 transition-all duration-700 hover:scale-105 animate-float-motion"
        />
        <div className="text-center relative z-10">
          <h3 className="text-lg font-semibold text-gradient-pink-blue">InspireUI Analyzer</h3>
          <p className="text-sm text-white/70 mt-3 max-w-md">
            Our advanced analysis tool will extract UI/UX patterns, color palettes, typography, and more from your provided website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalyzer;
