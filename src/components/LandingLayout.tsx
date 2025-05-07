import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    if (!isLandingPage) {
      // Clean up fullpage effects when not on landing page
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
    }
  }, [isLandingPage]);

  if (!isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <div id="fixed-elements">
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
      </div>
      {children}
    </>
  );
};

export default LandingLayout; 