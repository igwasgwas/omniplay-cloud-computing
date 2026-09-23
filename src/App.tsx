import React, { useState } from 'react';
import { Gamepad2, Server, Thermometer, MonitorSmartphone, BarChart3, Cloud } from 'lucide-react';
import CloudResourcesDashboard from './components/CloudResourcesDashboard';
import CompanionDashboard from './components/CompanionDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import PlayerDashboard from './components/PlayerDashboard';

export default function OmniPlayApp() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex overflow-hidden">
      {/* Sidebar Navigation */}
      <nav className="w-20 lg:w-64 bg-gray-900 border-r border-gray-800 flex flex-col justify-between py-6 z-20">
        <div>
          <div className="flex items-center justify-center lg:justify-start lg:px-6 mb-10">
            <Gamepad2 className="w-8 h-8 text-cyan-400" />
            <span className="hidden lg:block ml-3 text-xl font-bold tracking-wider text-cyan-400">OmniPlay</span>
          </div>
          
          <div className="space-y-2 px-3">
            <NavItem 
              icon={<Server />} label="Dashboard" 
              active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Cloud />} label="Cloud Resources" 
              active={activeTab === 'cloud'} onClick={() => setActiveTab('cloud')} 
            />
            <NavItem 
              icon={<MonitorSmartphone />} label="Companion" 
              active={activeTab === 'companion'} onClick={() => setActiveTab('companion')} 
            />
            <NavItem 
              icon={<BarChart3 />} label="Analytics" 
              active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} 
            />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {activeTab === 'dashboard' && <PlayerDashboard />}
        {activeTab === 'cloud' && <CloudResourcesDashboard />}
        {activeTab === 'companion' && <CompanionDashboard />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}
      </main>
    </div>
  );
}

// --- Navigation Item Component ---
function NavItem({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer ${
        active 
          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="hidden lg:block ml-3 font-medium">{label}</span>
    </button>
  );
}

