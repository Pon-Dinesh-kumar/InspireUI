import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Palette, Code } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  // Animation effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.initial-hidden');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-darkbg overflow-hidden">
      {/* Navigation Bar */}
      <nav className="w-full py-4 px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gradient-pink-blue">InspireUI</Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white/80 hover:text-white">Login</Button>
          <Button className="bg-gradient-pink-blue border-gradient hover:opacity-90 text-white">Register</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-pink-blue">Decode</span> and<br />
              <span className="text-gradient-pink-blue">Recreate</span><br />
              <span className="text-white">Website</span><br />
              <span className="text-white">Designs</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              InspireUI helps you understand and recreate website designs. 
              Input a URL to get a detailed UI/UX analysis and a prompt 
              for generating similar designs. Save your analyses and prompts for later use.
            </p>
            
            <div className="flex space-x-4">
              <Button 
                className="bg-gradient-pink-blue hover:opacity-90 text-white border-gradient px-6 py-6 group transition-all duration-300"
                asChild
              >
                <Link to="/dashboard" className="flex items-center text-base">
                  Analyze a Website
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/20 hover:border-pink/30 hover:bg-white/5 px-6 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* UI Preview Area */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-pink/10 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-blue/10 to-transparent opacity-70"></div>
          
          <div className="relative w-full max-w-lg aspect-square glass-animated rounded-2xl overflow-hidden animate-float-motion hover:scale-105 transition-all duration-700 hover:shadow-glow">
            <div className="glass-shine"></div>
            
            {/* Mock UI Elements */}
            <div className="p-8 flex flex-col h-full">
              <div className="h-2 w-1/3 bg-pink/50 rounded mb-6"></div>
              <div className="h-3 w-full bg-gray-700 rounded mb-4"></div>
              <div className="h-2 w-5/6 bg-gray-700 rounded mb-10"></div>
              
              <div className="flex gap-8 mb-6">
                <div className="w-1/2">
                  <div className="h-2 w-1/3 bg-pink rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-4/6 bg-gray-700 rounded"></div>
                </div>
                <div className="w-1/2">
                  <div className="h-2 w-1/3 bg-blue rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-4/6 bg-gray-700 rounded"></div>
                </div>
              </div>
              
              <div className="flex gap-8 mb-10">
                <div className="w-1/2">
                  <div className="h-2 w-1/3 bg-pink rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-4/6 bg-gray-700 rounded"></div>
                </div>
                <div className="w-1/2">
                  <div className="h-2 w-1/3 bg-blue rounded mb-3"></div>
                  <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-4/6 bg-gray-700 rounded"></div>
                </div>
              </div>
              
              <div className="mt-auto glass-pink-blue rounded-lg p-4">
                <div className="h-3 w-1/3 bg-gradient-pink-blue rounded mb-3"></div>
                <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-2 w-5/6 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-darkbg-lighter py-16 px-8 initial-hidden opacity-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-pink-blue">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-pink-blue p-8 rounded-xl hover-scale hover-glow transition duration-300">
              <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Analysis</h3>
              <p className="text-white/70">Extract layout, colors, typography, and UI elements from any website with precision.</p>
            </div>
            
            <div className="glass-pink-blue p-8 rounded-xl hover-scale hover-glow-blue transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Insights</h3>
              <p className="text-white/70">Understand the design patterns and visual hierarchy that make websites effective.</p>
            </div>
            
            <div className="glass-pink-blue p-8 rounded-xl hover-scale hover-glow transition duration-300">
              <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prompt Generation</h3>
              <p className="text-white/70">Generate detailed prompts that can be used with UI generation tools or design teams.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="bg-darkbg py-16 px-8 initial-hidden opacity-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-dark hover:glass-pink-blue p-8 rounded-xl text-center transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-pink-blue flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter URL</h3>
              <p className="text-white/70">Input any website URL and choose between analyzing a single page or the entire site.</p>
            </div>
            
            <div className="glass-dark hover:glass-pink-blue p-8 rounded-xl text-center transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-pink-blue flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Analysis</h3>
              <p className="text-white/70">Our system analyzes the UI/UX elements, extracting colors, layout, and design patterns.</p>
            </div>
            
            <div className="glass-dark hover:glass-pink-blue p-8 rounded-xl text-center transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-pink-blue flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Results</h3>
              <p className="text-white/70">Review the detailed analysis and generated prompt, then save or share your findings.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-gradient-pink-blue hover:opacity-90 text-white border-gradient group" 
              size="lg" 
              asChild
            >
              <Link to="/dashboard" className="flex items-center px-8 py-6">
                Start Your First Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
