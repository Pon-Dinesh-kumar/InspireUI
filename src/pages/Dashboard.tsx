import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer';
import AnalysisResults from '@/components/AnalysisResults';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Clean up any fullpage effects and reset styles when component mounts
  useEffect(() => {
    // Remove any fullpage-related classes
    document.body.classList.remove('fp-viewing-0', 'fp-viewing-1', 'fp-viewing-2');
    
    // Reset body styles
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.margin = '';
    document.body.style.padding = '';
    
    // Remove any fullpage-related elements
    const fullpageElements = document.querySelectorAll('.fp-section, .fp-slide, .fp-tableCell');
    fullpageElements.forEach(el => el.remove());
    
    // Remove any fullpage-related styles
    const fullpageStyles = document.querySelectorAll('style[data-fullpage]');
    fullpageStyles.forEach(style => style.remove());

    // Add fade-in animation for elements
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => {
      el.classList.add('animate-fade-in');
      el.classList.remove('opacity-0');
    });

    // Cleanup function
    return () => {
      elements.forEach(el => {
        el.classList.remove('animate-fade-in');
        el.classList.add('opacity-0');
      });
    };
  }, []);

  const handleAnalysis = async (url: string, analysisType: 'page' | 'site') => {
    try {
      setIsAnalyzing(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock analysis data
      setAnalysisData({
        url,
        type: analysisType,
        layout: {
          structure: 'Grid-based',
          responsive: true,
          columns: '12-column grid'
        },
        colors: {
          primary: '#D946EF',
          secondary: '#1EAEDB',
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
        prompt: `Create a modern web application with a dark theme (#08090c background) and vibrant pink (#D946EF) to blue (#1EAEDB) gradient accent colors. Use glassmorphism for UI elements with subtle transparency and blur effects. Implement a responsive 12-column grid layout with clean typography using Inter font. Add rounded buttons with hover effects and card-based content presentation. The UI should feel futuristic and dynamic with subtle animations for interactions.`
      });

      toast.success('Analysis completed successfully!');
    } catch (error) {
      toast.error('Failed to analyze website');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setAnalysisData(null);
    // Trigger fade-in animation for elements
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => {
      el.classList.add('animate-fade-in');
      el.classList.remove('opacity-0');
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient-pink-blue">Website Analysis</h1>
            <p className="text-white/70 mt-1">Analyze and understand website designs</p>
          </div>
          <Button 
            className="bg-gradient-pink-blue hover:opacity-90 text-white"
            onClick={handleReset}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
        </div>

        {/* Content Area */}
        <div className="w-full">
          {!analysisData ? (
            <div className="fade-in-element opacity-0">
              <WebsiteAnalyzer 
                onAnalyze={handleAnalysis}
                isLoading={isAnalyzing}
              />
            </div>
          ) : (
            <div className="fade-in-element opacity-0">
              <AnalysisResults 
                data={analysisData}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
