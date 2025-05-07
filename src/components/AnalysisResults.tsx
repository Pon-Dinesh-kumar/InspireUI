import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Code, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Share2, 
  Copy, 
  Check, 
  RefreshCw, 
  Minimize, 
  Maximize, 
  MousePointer,
  AlertCircle,
  Globe
} from "lucide-react";
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';

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
  const [previewMode, setPreviewMode] = useState<'iframe' | 'screenshot'>('iframe');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState(false);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPreviewInteractive, setIsPreviewInteractive] = useState(false);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hiddenIframeRef = useRef<HTMLIFrameElement>(null);

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const captureScreenshot = async () => {
    if (!hiddenIframeRef.current) return;
    
    try {
      setIsPreviewLoading(true);
      const iframe = hiddenIframeRef.current;
      
      // Wait for iframe to load
      await new Promise((resolve) => {
        iframe.onload = resolve;
        iframe.src = data.url;
      });

      // Wait for content to be fully rendered
      await new Promise(resolve => setTimeout(resolve, 2000));

      const canvas = await html2canvas(iframe.contentDocument.body, {
        allowTaint: true,
        useCORS: true,
        scale: 1,
        logging: false,
        windowWidth: iframe.contentDocument.documentElement.scrollWidth,
        windowHeight: iframe.contentDocument.documentElement.scrollHeight
      });

      const screenshotUrl = canvas.toDataURL('image/png');
      setScreenshotUrl(screenshotUrl);
      setPreviewMode('screenshot');
      setIsPreviewLoading(false);
    } catch (error) {
      console.error('Failed to capture screenshot:', error);
      setPreviewError(true);
      setIsPreviewLoading(false);
    }
  };

  const handlePreviewError = () => {
    setPreviewError(true);
    toast({
      title: "Preview Error",
      description: "Unable to load website preview. Switching to screenshot mode...",
      variant: "destructive"
    });
    captureScreenshot();
  };

  const handleRetryPreview = () => {
    setPreviewError(false);
    setIsPreviewLoading(true);
    setPreviewMode('iframe');
    if (iframeRef.current) {
      iframeRef.current.src = data.url;
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePreviewLoad = () => {
    setIsPreviewLoading(false);
    setIsPreviewInteractive(true);
  };

  const handlePreviewInteraction = () => {
    if (!isPreviewInteractive) {
      setIsPreviewInteractive(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.url);
    setCopied(true);
    toast({
      title: "URL Copied",
      description: "Website URL has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Website Preview */}
      <div className="lg:col-span-7">
        <Card className={`bg-darkbg-panel border-white/10 overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'fixed inset-4 z-50' : ''
        }`}>
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Website Preview</h3>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3"
                    onClick={() => window.open(data.url, '_blank')}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-darkbg-lighter/50 rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-3 ${
                      deviceMode === 'desktop' ? 'bg-purple/20 text-purple' : 'text-white/70'
                    }`}
                    onClick={() => setDeviceMode('desktop')}
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-3 ${
                      deviceMode === 'tablet' ? 'bg-purple/20 text-purple' : 'text-white/70'
                    }`}
                    onClick={() => setDeviceMode('tablet')}
                  >
                    <Tablet className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-3 ${
                      deviceMode === 'mobile' ? 'bg-purple/20 text-purple' : 'text-white/70'
                    }`}
                    onClick={() => setDeviceMode('mobile')}
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 ${
                    previewMode === 'iframe' ? 'bg-purple/20 text-purple' : 'text-white/70'
                  }`}
                  onClick={() => setPreviewMode('iframe')}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  Live Preview
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-3 ${
                    previewMode === 'screenshot' ? 'bg-purple/20 text-purple' : 'text-white/70'
                  }`}
                  onClick={() => setPreviewMode('screenshot')}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Screenshot
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? (
                    <Minimize className="h-4 w-4" />
                  ) : (
                    <Maximize className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="relative mx-auto transition-all duration-300 w-full">
              {previewError ? (
                <div className="p-8 text-center">
                  <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2">Preview Error</h4>
                  <p className="text-white/60 mb-4">
                    Unable to load website preview. This might be due to:
                  </p>
                  <ul className="text-white/60 mb-4 text-left list-disc pl-6 space-y-2">
                    <li>The website blocking external access</li>
                    <li>Network connectivity issues</li>
                    <li>Security restrictions</li>
                  </ul>
                  <div className="flex flex-col gap-4 items-center">
                    <Button
                      variant="outline"
                      onClick={handleRetryPreview}
                      className="gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Try Preview Again
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(data.url, '_blank')}
                      className="gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      Open in New Tab
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-pink/5 pointer-events-none" />
                  {isPreviewLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-darkbg-panel/80 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-2">
                        <RefreshCw className="h-8 w-8 animate-spin text-purple" />
                        <p className="text-white/70">Loading preview...</p>
                      </div>
                    </div>
                  )}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-lg border border-white/10">
                      {previewMode === 'iframe' ? (
                        <div className="flex justify-center bg-darkbg-lighter/50 p-4">
                          <div 
                            className="transition-all duration-300 ease-in-out"
                            style={{ width: getDeviceWidth() }}
                          >
                            <iframe
                              ref={iframeRef}
                              src={data.url}
                              className="w-full h-[600px] bg-white rounded-lg shadow-lg"
                              onLoad={handlePreviewLoad}
                              onError={handlePreviewError}
                              onMouseEnter={handlePreviewInteraction}
                              onTouchStart={handlePreviewInteraction}
                              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                              referrerPolicy="no-referrer"
                              title="Website Preview"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          {screenshotUrl ? (
                            <div className="flex justify-center bg-darkbg-lighter/50 p-4">
                              <div 
                                className="transition-all duration-300 ease-in-out"
                                style={{ width: getDeviceWidth() }}
                              >
                                <img
                                  src={screenshotUrl}
                                  alt="Website Screenshot"
                                  className="w-full h-auto rounded-lg shadow-lg"
                                  onError={() => {
                                    setPreviewError(true);
                                    toast({
                                      title: "Screenshot Error",
                                      description: "Unable to load screenshot. Please try opening the website in a new tab.",
                                      variant: "destructive"
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="h-[600px] flex items-center justify-center bg-darkbg-lighter">
                              <div className="text-center">
                                <RefreshCw className="h-8 w-8 animate-spin text-purple mx-auto mb-2" />
                                <p className="text-white/70">Generating screenshot...</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {!isPreviewInteractive && previewMode === 'iframe' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-darkbg-panel/80 backdrop-blur-sm">
                        <div className="text-center p-4">
                          <p className="text-white/70 mb-2">Click to interact with the preview</p>
                          <Button
                            variant="outline"
                            onClick={() => setIsPreviewInteractive(true)}
                            className="gap-2"
                          >
                            <MousePointer className="h-4 w-4" />
                            Enable Interaction
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hidden iframe for screenshot capture */}
      <iframe
        ref={hiddenIframeRef}
        className="hidden"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title="Hidden Screenshot Capture"
      />

      {/* Right Column - Analysis Details */}
      <div className="lg:col-span-5">
        <Card className="bg-darkbg-panel border-white/10">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Layout Analysis</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-darkbg-lighter/50 p-4 rounded-lg">
                    <p className="text-white/70 mb-1">Structure</p>
                    <p className="font-medium">{data.layout.structure}</p>
                  </div>
                  <div className="bg-darkbg-lighter/50 p-4 rounded-lg">
                    <p className="text-white/70 mb-1">Responsive</p>
                    <p className="font-medium">{data.layout.responsive ? 'Yes' : 'No'}</p>
                  </div>
                  <div className="bg-darkbg-lighter/50 p-4 rounded-lg">
                    <p className="text-white/70 mb-1">Grid System</p>
                    <p className="font-medium">{data.layout.columns}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Color Scheme</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(data.colors).map(([key, value]) => (
                    <div key={key} className="bg-darkbg-lighter/50 p-4 rounded-lg">
                      <div 
                        className="w-full h-8 rounded mb-2" 
                        style={{ backgroundColor: value }}
                      />
                      <p className="text-white/70 mb-1 capitalize">{key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Typography</h3>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(data.typography).map(([key, value]) => (
                    <div key={key} className="bg-darkbg-lighter/50 p-4 rounded-lg">
                      <p className="text-white/70 mb-1 capitalize">{key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">UI Elements</h3>
                <div className="grid grid-cols-1 gap-4">
                  {data.uiElements.map((element, index) => (
                    <div key={index} className="bg-darkbg-lighter/50 p-4 rounded-lg">
                      <p className="font-medium">{element}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Theme</h3>
                <div className="bg-darkbg-lighter/50 p-4 rounded-lg">
                  <p className="font-medium">{data.theme}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Design Prompt</h3>
                <div className="bg-darkbg-lighter/50 p-4 rounded-lg">
                  <p className="font-medium whitespace-pre-wrap">{data.prompt}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisResults;
