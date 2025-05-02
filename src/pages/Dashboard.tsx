
import React from 'react';
import Header from '@/components/Header';
import TabsPanel from '@/components/TabsPanel';
import ParkingDisplay from '@/components/ParkingDisplay';
import EmergencyPanel from '@/components/EmergencyPanel';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-darkbg text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Parking Display */}
          <div className="lg:col-span-8">
            <div className="h-[500px]">
              <ParkingDisplay />
            </div>
            
            <div className="mt-6">
              <EmergencyPanel />
            </div>
          </div>
          
          {/* Right Column - Details Panel */}
          <div className="lg:col-span-4">
            <TabsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
