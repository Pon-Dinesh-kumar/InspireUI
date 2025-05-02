
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gradient-primary">Enter Website Details</h3>
        
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
                className="bg-darkbg-lighter border-white/10 pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Analysis Scope</Label>
            <RadioGroup 
              defaultValue="page"
              value={analysisType}
              onValueChange={(value) => setAnalysisType(value as 'page' | 'site')}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="page" id="page" />
                <Label htmlFor="page" className="cursor-pointer">Single Page</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="site" id="site" />
                <Label htmlFor="site" className="cursor-pointer">Entire Website</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-purple hover:bg-purple-dark"
            disabled={!url || isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze UI/UX'
            )}
          </Button>
        </form>
      </div>
      
      <div className="glass-dark rounded-lg p-6 flex flex-col justify-center items-center">
        <img 
          src="/lovable-uploads/0461f44f-6515-4a2a-97ca-4c8c1a5d6880.png" 
          alt="UI Visualization" 
          className="w-4/5 mb-6"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gradient">InspireUI Analyzer</h3>
          <p className="text-sm text-white/70 mt-2">
            Our advanced analysis tool will extract UI/UX patterns, color palettes, typography, and more from your provided website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalyzer;
