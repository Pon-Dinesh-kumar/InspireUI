import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Layout, 
  Palette, 
  Type, 
  Layers, 
  Sparkles,
  ArrowRight,
  Wand2,
  Lightbulb,
  Rocket,
  Copy,
  Check,
  Share2
} from "lucide-react";
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

interface WebsiteAnalyzerProps {
  onAnalyze: (url: string, analysisType: 'page' | 'site') => void;
  isLoading: boolean;
}

const WebsiteAnalyzer: React.FC<WebsiteAnalyzerProps> = ({ onAnalyze, isLoading }) => {
  const [url, setUrl] = useState('');
  const [analysisType, setAnalysisType] = useState<'page' | 'site'>('page');
  const [activeTab, setActiveTab] = useState('quick');
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const formatUrl = (input: string): string => {
    // Remove any whitespace
    let formatted = input.trim();
    
    // Add https:// if no protocol is specified
    if (!formatted.match(/^https?:\/\//i)) {
      formatted = 'https://' + formatted;
    }
    
    // Remove trailing slashes
    formatted = formatted.replace(/\/+$/, '');
    
    return formatted;
  };

  const validateUrl = (input: string): boolean => {
    try {
      const url = new URL(formatUrl(input));
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to analyze",
        variant: "destructive"
      });
      return;
    }

    if (!validateUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL (e.g., example.com or https://example.com)",
        variant: "destructive"
      });
      return;
    }

    const formattedUrl = formatUrl(url);
    onAnalyze(formattedUrl, analysisType);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUrl(input);
  };

  const handleUrlBlur = () => {
    if (url && validateUrl(url)) {
      setUrl(formatUrl(url));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: "URL Copied",
      description: "Website URL has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Layout className="h-5 w-5" />,
      title: "Layout Analysis",
      description: "Understand the structure and organization of UI elements",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Color Palette",
      description: "Extract and analyze color schemes and combinations",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Type className="h-5 w-5" />,
      title: "Typography",
      description: "Identify font families, sizes, and text hierarchy",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "UI Components",
      description: "Detect and analyze UI patterns and components",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Analysis Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-darkbg-panel border-white/10 hover:border-purple/50 transition-all duration-300">
            <CardContent className="p-6">
              <Tabs defaultValue="quick" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 mb-6 bg-darkbg-lighter/50">
                  <TabsTrigger value="quick" className="data-[state=active]:bg-purple/20">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Quick Analysis
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="data-[state=active]:bg-purple/20">
                    <Wand2 className="h-4 w-4 mr-2" />
                    Advanced Options
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="quick">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="url" className="text-white/90 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Website URL
                      </Label>
                      <div className="relative group">
                        <Input
                          id="url"
                          type="text"
                          placeholder="e.g., example.com"
                          value={url}
                          onChange={handleUrlChange}
                          onBlur={handleUrlBlur}
                          className="pl-10 bg-darkbg-lighter border-white/10 focus:border-purple transition-all duration-300 group-hover:border-purple/50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md pointer-events-none" />
                        {url && (
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={copyToClipboard}
                            >
                              {copied ? (
                                <Check className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => window.open(formatUrl(url), '_blank')}
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-white/60">
                        Enter a valid website URL to analyze its UI/UX design
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/90">Analysis Scope</Label>
                      <RadioGroup
                        value={analysisType}
                        onValueChange={(value) => setAnalysisType(value as 'page' | 'site')}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="page" id="page" className="border-purple/50" />
                          <Label htmlFor="page" className="text-white/70">Single Page</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="site" id="site" className="border-purple/50" />
                          <Label htmlFor="site" className="text-white/70">Entire Website</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple to-pink hover:opacity-90 text-white transition-all duration-300 group"
                      disabled={isLoading}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                          Analyzing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                          Analyze UI/UX
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="advanced">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple/10 to-pink/10 p-4 rounded-lg border border-purple/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple/20 p-2 rounded-lg">
                          <Wand2 className="h-5 w-5 text-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Advanced Analysis Options</h4>
                          <p className="text-sm text-white/60">
                            Configure detailed analysis parameters for more precise results. 
                            Coming soon in the next update.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Features */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-purple" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
                What We Analyze
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`bg-gradient-to-br ${feature.color} border-white/10 hover:border-purple/50 transition-all duration-300`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{feature.title}</h4>
                          <p className="text-sm text-white/60">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/20">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Pro Tip</h4>
                    <p className="text-sm text-white/60">
                      For best results, analyze websites that are publicly accessible and have a modern design. 
                      The tool works best with responsive websites that follow current design trends.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteAnalyzer;
