import React, { useState } from 'react';
import { Gamepad2, Server, Thermometer, MonitorSmartphone, BarChart3, Cloud } from 'lucide-react';
import CloudResourcesDashboard from './components/CloudResourcesDashboard';
import CompanionDashboard from './components/CompanionDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';

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

// --- 1. Player Dashboard & Launcher ---
function PlayerDashboard() {
  const games = [
    { 
      id: 1, title: 'Cyberpunk 2077', genre: 'RPG / Action', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg'
    },
    { 
      id: 2, title: 'EA FC 25', genre: 'Sports / Simulator', status: 'Playing Now', active: true,
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg'
    },
    { 
      id: 3, title: 'Helldivers 2', genre: 'Co-op / Shooter', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg'
    },
    { 
      id: 4, title: 'Forza Horizon 5', genre: 'Racing / Open World', status: 'Update Available',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg'
    },
    { 
      id: 5, title: 'Black Myth: Wukong', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg'
    },
    { 
      id: 6, title: 'Red Dead Redemption 2', genre: 'Action / Adventure', status: 'Cloud Syncing...',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg'
    },
    { 
      id: 7, title: 'Ghost of Tsushima', genre: 'Action / Open World', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg'
    },
    { 
      id: 8, title: 'Baldur\'s Gate 3', genre: 'RPG / Strategy', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg'
    },
    { 
      id: 9, title: 'Elden Ring', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg'
    },
    { 
      id: 10, title: 'Grand Theft Auto V', genre: 'Action / Open World', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg'
    },
    { 
      id: 11, title: 'Apex Legends', genre: 'Battle Royale', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg'
    },
    { 
      id: 12, title: 'Hogwarts Legacy', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg'
    },
    { 
      id: 13, title: 'Monster Hunter: World', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg'
    },
    { 
      id: 14, title: 'The Witcher 3: Wild Hunt', genre: 'Action RPG', status: 'Cloud Syncing...',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg'
    },
    { 
      id: 15, title: 'God of War', genre: 'Action / Adventure', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg'
    },
    { 
      id: 16, title: 'Marvel\'s Spider-Man Remastered', genre: 'Action / Adventure', status: 'Update Available',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg'
    },
    { 
      id: 17, title: 'DOOM Eternal', genre: 'Action / Shooter', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg'
    },
    { 
      id: 18, title: 'Horizon Zero Dawn', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg'
    },
    { 
      id: 19, title: 'Resident Evil 4', genre: 'Survival Horror', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg'
    },
    { 
      id: 20, title: 'Final Fantasy VII Remake', genre: 'Action RPG', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg'
    },
    { 
      id: 21, title: 'Death Stranding', genre: 'Action / Adventure', status: 'Ready to Play',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/header.jpg'
    }
  ];

  return (
    <div className="p-8">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Player 1</h1>
          <p className="text-gray-400">Your cloud rig is ready and waiting.</p>
        </div>
      </header>

      {/* System Status Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center">
          <div className="p-4 bg-cyan-500/10 rounded-full mr-5">
            <Server className="text-cyan-400 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Cloud GPU Connection</p>
            <p className="text-xl font-bold text-green-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Ultra-Low Latency (12ms)
            </p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="p-4 bg-blue-500/10 rounded-full mr-5 relative z-10">
            <Thermometer className="text-blue-400 w-6 h-6" />
          </div>
          <div className="relative z-10">
            <p className="text-sm text-gray-400">Client Device (Axioo Pongo 725)</p>
            <p className="text-xl font-bold text-blue-400">Stable & Cool (38°C)</p>
            <p className="text-xs text-gray-500 mt-1">Render processed in cloud</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center">
          <div className="p-4 bg-purple-500/10 rounded-full mr-5">
            <Gamepad2 className="text-purple-400 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Peripheral Detected</p>
            <p className="text-lg font-bold text-white">Fantech Shooter III</p>
            <p className="text-xs text-purple-400 mt-1">Profile: WGP13S (Auto-mapped)</p>
          </div>
        </div>
      </div>

      {/* Game Library */}
      <h2 className="text-2xl font-bold mb-6">Your Cloud Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
        {games.map(game => (
          <div key={game.id} className={`group relative bg-gray-900 rounded-xl overflow-hidden border ${game.active ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'border-gray-800 hover:border-gray-700'} transition-all duration-300 hover:-translate-y-1`}>
            <div className="w-full h-48 bg-gray-800 overflow-hidden relative">
               <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
               <span className="absolute bottom-3 left-4 text-xs font-bold px-2 py-1 bg-black/60 backdrop-blur rounded text-gray-300 border border-gray-700">{game.genre}</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-1">{game.title}</h3>
              <p className={`text-sm ${game.active ? 'text-cyan-400 font-medium' : 'text-gray-400'}`}>{game.status}</p>
              <button className={`cursor-pointer w-full mt-4 py-2 rounded-lg font-medium transition-colors ${
                game.active 
                  ? 'bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10' 
                  : 'bg-cyan-500 text-gray-950 hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              }`}>
                {game.active ? 'Resume Session' : 'Play in Cloud'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
