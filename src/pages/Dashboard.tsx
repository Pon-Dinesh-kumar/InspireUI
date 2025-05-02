
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer';
import AnalysisResults from '@/components/AnalysisResults';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  
  const handleAnalysis = (url: string, analysisType: 'page' | 'site') => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // This is mock data - in a real app, this would come from the backend
      const mockAnalysisData = {
        url: url,
        type: analysisType,
        layout: {
          structure: 'Grid-based',
          responsive: true,
          columns: '12-column grid'
        },
        colors: {
          primary: '#be2edd',
          secondary: '#00cec9',
          background: '#08090c',
          text: '#ffffff'
        },
        typography: {
          primary: 'Inter, sans-serif',
          headings: 'Bold, clean sans-serif',
          body: 'Regular weight sans-serif'
        },
        uiElements: [
          'Glassmorphic panels',
          'Rounded buttons with hover effects',
          'Card-based content layout',
          'Custom navigation menu'
        ],
        theme: 'Modern, futuristic dark theme with glassmorphism effects',
        prompt: `Create a modern web application with a dark theme (#08090c background) and vibrant purple (#be2edd) accent colors. Use glassmorphism for UI elements with subtle transparency and blur effects. Implement a responsive 12-column grid layout with clean typography using Inter font. Add rounded buttons with hover effects and card-based content presentation. The UI should feel futuristic and dynamic with subtle animations for interactions.`
      };
      
      setAnalysisData(mockAnalysisData);
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "We've analyzed the website and generated results",
      });
    }, 3000);
  };
  
  const handleReset = () => {
    setAnalysisData(null);
  };
  
  return (
    <div className="min-h-screen bg-darkbg text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="mt-6">
          {!analysisData ? (
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  className="text-white/80 mr-2" 
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
                <h2 className="text-2xl font-bold text-gradient">Website UI/UX Analyzer</h2>
              </div>
              
              <WebsiteAnalyzer 
                onAnalyze={handleAnalysis} 
                isLoading={isAnalyzing} 
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  className="text-white/80 mr-2" 
                  onClick={handleReset}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  New Analysis
                </Button>
                <h2 className="text-2xl font-bold text-gradient">Analysis Results</h2>
              </div>
              
              <AnalysisResults data={analysisData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
