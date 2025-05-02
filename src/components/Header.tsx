
import React from 'react';
import { MapPin, Bell, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center glass-dark rounded-lg">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gradient-primary mr-10">InspireUI</Link>
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            My Analyses
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Settings
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Help
          </Button>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center bg-darkbg-light glass rounded-full p-2 px-4">
          <Search size={16} className="text-teal mr-2" />
          <span className="text-sm text-white/80">Search analyses...</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
          <Bell size={20} className="text-white/80" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-darkbg-light hover:bg-darkbg-lighter">
          <User size={20} className="text-white/80" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
