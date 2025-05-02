
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Hero Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Welcome to InspireUI
            </h1>
            <p className="text-lg text-white/80 mb-8">
              A modern, futuristic web application with dynamic UI/UX design. 
              Experience the future of interface design with our glassmorphism effects and sleek animations.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-purple hover:bg-purple-dark text-white" asChild>
                <Link to="/dashboard" className="flex items-center">
                  Launch Dashboard
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
              alt="Voedo Horizon 3000 FX" 
              className="object-contain w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-6 left-0 w-full text-center">
              <h3 className="text-lg font-semibold text-gradient">Voedo Horizon 3000 FX</h3>
              <p className="text-sm text-white/70">Premium Parking Management</p>
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
                <div className="w-6 h-6 text-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
              <p className="text-white/70">Real-time monitoring and instant alerts for any security issues with your vehicle.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Reservation</h3>
              <p className="text-white/70">Reserve parking spots in advance and manage your parking time efficiently.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Usage Analytics</h3>
              <p className="text-white/70">Detailed insights about your parking history and usage patterns.</p>
            </div>
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
