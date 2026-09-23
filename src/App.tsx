import React, { useState, useEffect } from 'react';
import { Gamepad2, Server, Thermometer, MonitorSmartphone, BarChart3, Cloud, Minus, Square, X, Bell, User, Loader2, CheckCircle2 } from 'lucide-react';
import CloudResourcesDashboard from './components/CloudResourcesDashboard';
import CompanionDashboard from './components/CompanionDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import PlayerDashboard from './components/PlayerDashboard';

export default function OmniPlayApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [launchingGame, setLaunchingGame] = useState<string | null>(null);
  const [launchStep, setLaunchStep] = useState(0);
  const [globalToast, setGlobalToast] = useState<{message: string, icon: any} | null>(null);

  // Random Global Notifications
  useEffect(() => {
    const notifications = [
      { msg: "Alex just started playing Black Myth: Wukong", icon: <Gamepad2 className="text-blue-400 w-5 h-5"/> },
      { msg: "Achievement Unlocked: 'First Blood'", icon: <TrophyIcon /> },
      { msg: "Cloud Save Synced Successfully", icon: <Cloud className="text-green-400 w-5 h-5"/> },
      { msg: "Sarah is now Online", icon: <User className="text-green-500 w-5 h-5"/> }
    ];

    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const notif = notifications[Math.floor(Math.random() * notifications.length)];
        setGlobalToast(notif);
        setTimeout(() => setGlobalToast(null), 4000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleLaunchGame = (gameTitle: string) => {
    setLaunchingGame(gameTitle);
    setLaunchStep(0);
    
    // Simulate launch sequence
    setTimeout(() => setLaunchStep(1), 1500);
    setTimeout(() => setLaunchStep(2), 3500);
    setTimeout(() => {
      setLaunchStep(3);
      setTimeout(() => {
        setLaunchingGame(null);
        setGlobalToast({ msg: `Now Playing: ${gameTitle}`, icon: <CheckCircle2 className="text-green-500 w-5 h-5"/> });
        setTimeout(() => setGlobalToast(null), 4000);
      }, 1500);
    }, 5500);
  };

  return (
    <div className="h-screen bg-gray-950 text-white font-sans flex flex-col overflow-hidden select-none border border-gray-800 shadow-2xl">
      
      {/* 1. NATIVE WINDOW TOP BAR */}
      <div className="h-10 bg-[#14151a] border-b border-gray-800 flex justify-between items-center px-4 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Gamepad2 className="w-5 h-5 text-cyan-400" />
          <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">OmniPlay</span>
            <span className="hover:text-white cursor-pointer transition-colors">View</span>
            <span className="hover:text-white cursor-pointer transition-colors">Friends</span>
            <span className="hover:text-white cursor-pointer transition-colors">Help</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#14151a]"></div>
            </div>
            <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">Player 1</span>
            <span className="text-xs text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded">Rp 750.000</span>
          </div>

          <div className="flex items-center gap-4 border-l border-gray-700 pl-4 text-gray-400">
            <Bell className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Minus className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Square className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
            <X className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar Navigation */}
        <nav className="w-16 lg:w-60 bg-[#1a1c23] border-r border-gray-800 flex flex-col justify-between py-6 z-20 shrink-0 transition-all duration-300">
          <div>
            <div className="space-y-2 px-2 lg:px-4">
              <NavItem icon={<Server />} label="Library" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
              <NavItem icon={<Cloud />} label="Cloud Edge" active={activeTab === 'cloud'} onClick={() => setActiveTab('cloud')} />
              <NavItem icon={<MonitorSmartphone />} label="Companion" active={activeTab === 'companion'} onClick={() => setActiveTab('companion')} />
              <NavItem icon={<BarChart3 />} label="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
            </div>
          </div>
          <div className="px-4 hidden lg:block">
             <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Friends Online</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-sm text-gray-300 font-medium">Alex</span><span className="text-[10px] text-blue-400 ml-auto bg-blue-500/10 px-1 rounded">In-Game</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-sm text-gray-300 font-medium">Sarah</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-sm text-gray-500 font-medium">David</span><span className="text-[10px] text-gray-500 ml-auto">Away</span></div>
                </div>
             </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative bg-[#14151a]">
          {activeTab === 'dashboard' && <PlayerDashboard onLaunchGame={handleLaunchGame} />}
          {activeTab === 'cloud' && <CloudResourcesDashboard />}
          {activeTab === 'companion' && <CompanionDashboard />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
        </main>
      </div>

      {/* 2. GAME LAUNCH MODAL (Cinematic) */}
      {launchingGame && (
        <div className="absolute inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
          <div className="w-full max-w-2xl bg-gradient-to-b from-[#1a1c23] to-[#14151a] border border-gray-700 rounded-2xl p-10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
             <h2 className="text-3xl font-black italic text-white mb-2 tracking-wider">LAUNCHING CLOUD INSTANCE</h2>
             <h3 className="text-xl text-blue-400 font-bold mb-8">{launchingGame}</h3>

             <div className="space-y-4 mb-8 font-mono text-sm">
                <div className={`flex items-center gap-3 ${launchStep >= 0 ? 'text-white' : 'text-gray-600'}`}>
                   {launchStep === 0 ? <Loader2 className="w-5 h-5 animate-spin text-blue-500" /> : <CheckCircle2 className="w-5 h-5 text-green-500" />}
                   <span>Connecting to SG-Premium-Node-01... {launchStep === 0 && <span className="text-blue-500 animate-pulse">Establishing WebRTC</span>}</span>
                </div>
                <div className={`flex items-center gap-3 ${launchStep >= 1 ? 'text-white' : 'text-gray-600'}`}>
                   {launchStep === 1 ? <Loader2 className="w-5 h-5 animate-spin text-blue-500" /> : launchStep > 1 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <div className="w-5 h-5" />}
                   <span>Allocating NVIDIA RTX 4090 vGPU... {launchStep === 1 && <span className="text-blue-500 animate-pulse">Loading VRAM Profile</span>}</span>
                </div>
                <div className={`flex items-center gap-3 ${launchStep >= 2 ? 'text-white' : 'text-gray-600'}`}>
                   {launchStep === 2 ? <Loader2 className="w-5 h-5 animate-spin text-blue-500" /> : launchStep > 2 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <div className="w-5 h-5" />}
                   <span>Syncing Cloud Saves from OmniPlay Vault...</span>
                </div>
             </div>

             <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: `${(launchStep / 3) * 100}%` }}></div>
             </div>
          </div>
        </div>
      )}

      {/* 3. GLOBAL NOTIFICATION (Steam-style Toast) */}
      <div className={`absolute bottom-6 right-6 bg-[#1a1c23] border border-gray-700 shadow-2xl rounded-lg p-4 flex items-center gap-4 transition-all duration-500 z-[110] ${globalToast ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'}`}>
         <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">
            {globalToast?.icon}
         </div>
         <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-0.5">OmniPlay Network</p>
            <p className="text-sm font-bold text-white">{globalToast?.msg}</p>
         </div>
      </div>
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
          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="hidden lg:block ml-3 font-bold">{label}</span>
    </button>
  );
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
  );
}
