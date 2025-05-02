
import React from 'react';
import { MapPin, Bell, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center glass-dark rounded-lg">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gradient-primary mr-10">InspireUI</h1>
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Calendar
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Reports
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Emergency
          </Button>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center bg-darkbg-light glass rounded-full p-2 px-4">
          <MapPin size={16} className="text-teal mr-2" />
          <span className="text-sm text-white/80">13 Skyline, Chicago, 60611</span>
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
