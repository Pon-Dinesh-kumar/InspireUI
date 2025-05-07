import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Palette, Code } from "lucide-react";
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const Index = () => {
  const fullpageApiRef = useRef<any>(null);

  // Clean up fullpage when unmounting
  useEffect(() => {
    return () => {
      if (fullpageApiRef.current) {
        fullpageApiRef.current.destroy('all');
      }
      // Clean up any remaining fullpage elements
      document.body.classList.remove('fp-viewing-0', 'fp-viewing-1', 'fp-viewing-2');
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
    };
  }, []);

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
    <div className="min-h-screen bg-darkbg text-white">
      {/* Landing page header */}
      <nav className="w-full py-6 px-8 flex justify-between items-center bg-darkbg/50 fixed top-0 z-50">
        <Link to="/" className="text-2xl font-bold text-gradient-pink-blue hover:scale-105 transition-transform">
          InspireUI
        </Link>
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">Login</Button>
          <Button className="bg-gradient-pink-blue border-gradient hover:opacity-90 text-white hover:scale-105 transition-transform">
            Register
          </Button>
        </div>
      </nav>

      {/* Landing page footer */}
      <footer className="w-full py-4 px-8 flex justify-between items-center backdrop-blur-lg bg-darkbg/50 fixed bottom-0 z-50">
        <div className="flex items-center gap-4 text-white/70">
          <span>© 2024 InspireUI</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Discord</a>
        </div>
      </footer>

      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        credits={{ enabled: true }}
        paddingTop="80px"
        paddingBottom="80px"
        fixedElements="#fixed-elements"
        navigation={true}
        navigationPosition="right"
        navigationTooltips={['Home', 'Features', 'How It Works']}
        showActiveTooltip={true}
        render={({ state, fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                {/* Hero Section */}
                <div className="flex-1 flex flex-col md:flex-row pt-16">
                  <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16">
                    <div className="max-w-3xl">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-gradient-pink-blue animate-gradient">Decode</span>
                          <span className="text-white opacity-90">and</span>
                        </div>
                        <div className="text-gradient-pink-blue animate-gradient delay-100 mb-2">Recreate</div>
                        <div className="flex items-baseline gap-4 text-white opacity-90">
                          <span>Website</span>
                          <span>Designs</span>
                        </div>
                      </h1>
                      
                      <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-2xl">
                        InspireUI helps you understand and recreate website designs. 
                        Input a URL to get a detailed UI/UX analysis and a prompt 
                        for generating similar designs.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mt-12">
                        <Button 
                          className="bg-gradient-pink-blue hover:opacity-90 text-white border-gradient px-8 py-7 group transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <Link to="/dashboard" className="flex items-center text-lg font-medium">
                            Start Analyzing
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="border-white/20 hover:border-pink/30 hover:bg-white/5 px-8 py-7 text-lg font-medium hover:scale-105 transition-transform"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced UI Preview Area */}
                  <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
                    <div className="relative w-full max-w-lg aspect-square glass-animated rounded-2xl overflow-hidden animate-float-motion hover:scale-105 transition-all duration-700">
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
              </div>
              
              <div className="section">
                {/* Features Section */}
                <div className="bg-darkbg py-24 px-8 pt-32">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-20 text-gradient-pink-blue animate-gradient">
                      Powerful Features
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="glass-dark hover:glass-pink-blue p-10 rounded-2xl hover-scale hover-glow transition-all duration-500 group">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 flex items-center justify-center mb-6 group-hover:bg-pink/20 transition-colors">
                          <Search className="w-8 h-8 text-pink" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gradient-pink-blue">Deep Analysis</h3>
                        <p className="text-white/70 leading-relaxed">Extract layout, colors, typography, and UI elements from any website with precision.</p>
                      </div>
                      
                      <div className="glass-dark hover:glass-pink-blue p-10 rounded-2xl hover-scale hover-glow-blue transition-all duration-500 group">
                        <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-6 group-hover:bg-blue/20 transition-colors">
                          <Palette className="w-8 h-8 text-blue" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gradient-pink-blue">Design Insights</h3>
                        <p className="text-white/70 leading-relaxed">Understand the design patterns and visual hierarchy that make websites effective.</p>
                      </div>
                      
                      <div className="glass-dark hover:glass-pink-blue p-10 rounded-2xl hover-scale hover-glow transition-all duration-500 group">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 flex items-center justify-center mb-6 group-hover:bg-pink/20 transition-colors">
                          <Code className="w-8 h-8 text-pink" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gradient-pink-blue">Prompt Generation</h3>
                        <p className="text-white/70 leading-relaxed">Generate detailed prompts that can be used with UI generation tools or design teams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="section">
                {/* How It Works Section */}
                <div className="bg-darkbg py-16 px-8 pt-32">
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
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Index;
