
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Palette, Code, Save } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Hero Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              InspireUI
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Analyze and understand website UI/UX designs with precision. 
              Input any URL and get a detailed breakdown of design elements 
              plus a ready-to-use prompt for recreating similar interfaces.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-purple hover:bg-purple-dark text-white" asChild>
                <Link to="/dashboard" className="flex items-center">
                  Analyze a Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* 3D Preview Area */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-darkbg-light glass-dark md:rounded-l-3xl">
          <div className="relative w-full max-w-lg aspect-square glass rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-purple/20 to-transparent opacity-40"></div>
            <img 
              src="/lovable-uploads/0461f44f-6515-4a2a-97ca-4c8c1a5d6880.png" 
              alt="InspireUI Preview" 
              className="object-contain w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-6 left-0 w-full text-center">
              <h3 className="text-lg font-semibold text-gradient">UI/UX Analyzer</h3>
              <p className="text-sm text-white/70">Detailed Website Analysis</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-darkbg-lighter py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gradient">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Analysis</h3>
              <p className="text-white/70">Extract layout, colors, typography, and UI elements from any website with precision.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Insights</h3>
              <p className="text-white/70">Understand the design patterns and visual hierarchy that make websites effective.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prompt Generation</h3>
              <p className="text-white/70">Generate detailed prompts that can be used with UI generation tools or design teams.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="bg-darkbg py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gradient">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-darkbg-lighter glass-dark p-8 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter URL</h3>
              <p className="text-white/70">Input any website URL and choose between analyzing a single page or the entire site.</p>
            </div>
            
            <div className="bg-darkbg-lighter glass-dark p-8 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Analysis</h3>
              <p className="text-white/70">Our system analyzes the UI/UX elements, extracting colors, layout, and design patterns.</p>
            </div>
            
            <div className="bg-darkbg-lighter glass-dark p-8 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Results</h3>
              <p className="text-white/70">Review the detailed analysis and generated prompt, then save or share your findings.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-purple hover:bg-purple-dark text-white" size="lg" asChild>
              <Link to="/dashboard" className="flex items-center">
                Start Your First Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-darkbg-panel py-6 px-8 text-center">
        <p className="text-white/60 text-sm">© 2025 InspireUI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
