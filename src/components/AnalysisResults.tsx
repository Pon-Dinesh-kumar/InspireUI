
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { toast } from '@/hooks/use-toast';

interface AnalysisData {
  url: string;
  type: 'page' | 'site';
  layout: {
    structure: string;
    responsive: boolean;
    columns: string;
  };
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  typography: {
    primary: string;
    headings: string;
    body: string;
  };
  uiElements: string[];
  theme: string;
  prompt: string;
}

interface AnalysisResultsProps {
  data: AnalysisData | null;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("analysis");
  const [copied, setCopied] = useState(false);
  
  if (!data) {
    return <div>No analysis data available.</div>;
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.prompt);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Website Preview */}
      <div className="lg:col-span-7">
        <div className="glass rounded-lg p-6 h-full">
          <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
            Website Preview
          </h3>
          
          <div className="bg-darkbg-panel rounded-lg p-4 border border-white/5 mb-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-darkbg-lighter text-white/70">
                {data.url}
              </Badge>
              <Badge variant="outline" className="bg-purple/20 text-purple">
                {data.type === 'page' ? 'Single Page' : 'Entire Website'}
              </Badge>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center bg-darkbg-lighter">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/0461f44f-6515-4a2a-97ca-4c8c1a5d6880.png" 
                  alt="Website Preview" 
                  className="mx-auto w-3/4 max-h-[300px] object-contain"
                />
                <p className="text-sm text-white/60 mt-4">
                  Preview visualization for {data.url}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3">Theme Summary</h4>
            <p className="text-white/80">{data.theme}</p>
          </div>
        </div>
      </div>
      
      {/* Right Column - Analysis & Prompt */}
      <div className="lg:col-span-5">
        <div className="glass-dark rounded-lg p-1">
          <Tabs defaultValue="analysis" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 bg-darkbg-panel mb-4">
              <TabsTrigger value="analysis" className="data-[state=active]:text-purple">Analysis</TabsTrigger>
              <TabsTrigger value="prompt" className="data-[state=active]:text-purple">Prompt</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="space-y-6 animate-fade-in p-5">
              <div>
                <h4 className="text-md font-semibold mb-2">Layout</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Card className="bg-darkbg-panel border-none">
                    <CardContent className="p-3">
                      <p className="text-xs text-white/60">Structure</p>
                      <p className="font-medium">{data.layout.structure}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-darkbg-panel border-none">
                    <CardContent className="p-3">
                      <p className="text-xs text-white/60">Columns</p>
                      <p className="font-medium">{data.layout.columns}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-darkbg-panel border-none col-span-2">
                    <CardContent className="p-3">
                      <p className="text-xs text-white/60">Responsive</p>
                      <p className="font-medium">{data.layout.responsive ? 'Yes' : 'No'}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-semibold mb-2">Color Palette</h4>
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(data.colors).map(([name, color]) => (
                    <div key={name} className="text-center">
                      <div 
                        className="w-full h-10 rounded mb-1" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <p className="text-xs text-white/60 capitalize">{name}</p>
                      <p className="text-xs font-mono">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-semibold mb-2">Typography</h4>
                <div className="space-y-2">
                  {Object.entries(data.typography).map(([name, value]) => (
                    <div key={name} className="flex justify-between">
                      <span className="text-sm text-white/60 capitalize">{name}:</span>
                      <span className="text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-semibold mb-2">UI Elements</h4>
                <div className="flex flex-wrap gap-2">
                  {data.uiElements.map((element, index) => (
                    <Badge key={index} className="bg-darkbg-lighter border-white/10">
                      {element}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prompt" className="animate-fade-in p-5">
              <div className="bg-darkbg-panel rounded-lg p-4 border border-white/10 mb-4">
                <h4 className="text-md font-semibold mb-2">Generated UI/UX Prompt</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {data.prompt}
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={copyToClipboard} 
                  className="bg-purple hover:bg-purple-dark"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Prompt
                    </>
                  )}
                </Button>
              </div>
              
              <div className="mt-6 bg-darkbg-lighter rounded-lg p-4">
                <h4 className="text-md font-semibold mb-2">How to Use This Prompt</h4>
                <ul className="text-sm text-white/70 space-y-2 list-disc ml-5">
                  <li>Copy the generated prompt above</li>
                  <li>Use it with design tools that support text-to-design functionality</li>
                  <li>Fine-tune the results by editing specific elements of the prompt</li>
                  <li>Share the prompt with your design team for consistent implementation</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-6 glass rounded-lg p-5">
          <h4 className="text-md font-semibold mb-3">Save This Analysis</h4>
          <p className="text-sm text-white/70 mb-4">
            Save this analysis to your account to access it later or share with your team.
          </p>
          <Button className="w-full bg-teal hover:bg-teal-dark">
            Save to My Analyses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
