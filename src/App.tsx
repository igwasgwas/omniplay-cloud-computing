import React, { useState, useRef, useEffect } from 'react';
import { 
  Gamepad2, Server, Thermometer, MonitorSmartphone, 
  BarChart3, Download, ChevronDown, Activity, 
  Zap, FileText, FileJson, Cloud, Cpu, HardDrive, Network, Globe,
  Heart, Eye, Terminal, Crosshair, Shield, Target, Map, Gauge, Flame, Swords, Wind, Trophy, Users, ShieldAlert, Skull, Navigation, Radio
} from 'lucide-react';

export default function OmniPlayApp() {
  const [activeTab, setActiveTab] = useState('companion'); // Set default to companion for testing

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

// --- 2. Cloud Resources Dashboard ---
function CloudResourcesDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cloud Infrastructure Manager</h1>
        <p className="text-gray-400">Manage your active cloud computing instances and virtual machines.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Active Cloud Instance */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)]">
          <div className="absolute top-0 right-0 p-6">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              INSTANCE ACTIVE
            </span>
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-cyan-500/20 rounded-xl">
              <Cloud className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">OmniRig-X1 (Premium)</h2>
              <p className="text-cyan-400 font-mono text-sm">IP: 192.168.cloud.42</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Cpu className="w-4 h-4" /> <span className="text-sm">Compute</span>
              </div>
              <p className="font-bold text-lg">AMD EPYC™ 9654</p>
              <p className="text-xs text-gray-500 mt-1">16 vCores Dedicated</p>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Zap className="w-4 h-4 text-green-400" /> <span className="text-sm">Graphics</span>
              </div>
              <p className="font-bold text-lg text-green-400">NVIDIA RTX 4090</p>
              <p className="text-xs text-gray-500 mt-1">24GB GDDR6X VRAM</p>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <HardDrive className="w-4 h-4" /> <span className="text-sm">Storage</span>
              </div>
              <p className="font-bold text-lg">2 TB NVMe SSD</p>
              <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2">
                <div className="h-full bg-cyan-400 rounded-full w-[45%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">900 GB Used</p>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Globe className="w-4 h-4" /> <span className="text-sm">Data Center</span>
              </div>
              <p className="font-bold text-lg">Singapore (ap-southeast-1)</p>
              <p className="text-xs text-gray-500 mt-1">Ping to device: 12ms</p>
            </div>
          </div>
        </div>

        {/* Network & Resource Usage Graph Mockup */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Network className="text-cyan-400 w-5 h-5" />
            Cloud Streaming Telemetry
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Bandwidth Usage (Down/Up)</span>
                <span className="text-cyan-400 font-bold">45.2 Mbps / 2.1 Mbps</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[60%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Cloud GPU Utilization</span>
                <span className="text-green-400 font-bold">98%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full w-[98%] shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Video Encoding Bitrate</span>
                <span className="text-purple-400 font-bold">Variable (AV1)</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full w-[85%] shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
             <p className="text-yellow-400 text-sm font-medium">Auto-scaling is enabled. Your rig will automatically scale resources based on game demands.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 3. Tactical Companion Dashboard ---
function CompanionDashboard() {
  const [selectedGame, setSelectedGame] = useState('eafc25');

  const players = [
    { id: 1, name: 'Haaland', pos: 'ST', stamina: 85, rating: 91 },
    { id: 2, name: 'Foden', pos: 'LW', stamina: 72, rating: 85 },
    { id: 3, name: 'Silva', pos: 'RW', stamina: 68, rating: 86 },
    { id: 4, name: 'De Bruyne', pos: 'CM', stamina: 60, rating: 91 },
    { id: 5, name: 'Rodri', pos: 'CDM', stamina: 88, rating: 89 },
  ];

  return (
    <div className="h-full flex items-center justify-center p-8 bg-gray-950/50 relative overflow-hidden">
      
      {/* Background Ambience based on selected game */}
      <div className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-1000">
        {selectedGame === 'eafc25' && <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 blur-[100px]"></div>}
        {selectedGame === 'cyberpunk' && <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-600 blur-[100px]"></div>}
        {selectedGame === 'helldivers' && <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-black blur-[100px]"></div>}
        {selectedGame === 'forza' && <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-yellow-500 blur-[100px]"></div>}
        {selectedGame === 'wukong' && <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-stone-900 blur-[100px]"></div>}
        {selectedGame === 'rdr2' && <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 blur-[100px]"></div>}
        {selectedGame === 'ghost' && <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-400 blur-[100px]"></div>}
      </div>

      {/* Mobile Device Mockup */}
      <div className="w-[375px] h-[812px] bg-black border-[12px] border-gray-900 rounded-[3.5rem] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col z-10 ring-1 ring-white/10">
        {/* Notch/Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3 border border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/10"></div>
        </div>
        
        {/* Game Selector Navbar */}
        <div className="pt-12 pb-3 px-4 bg-gray-950/80 backdrop-blur-md flex flex-col border-b border-white/5 z-40 relative">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
            <button onClick={() => setSelectedGame('eafc25')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedGame === 'eafc25' ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-lg shadow-teal-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>EA FC 25</button>
            <button onClick={() => setSelectedGame('cyberpunk')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedGame === 'cyberpunk' ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 border-b-2 border-red-500' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>Cyberpunk 2077</button>
            <button onClick={() => setSelectedGame('helldivers')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedGame === 'helldivers' ? 'bg-yellow-500 text-black font-mono shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>Helldivers 2</button>
            <button onClick={() => setSelectedGame('forza')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer italic ${selectedGame === 'forza' ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-pink-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>Forza Horizon 5</button>
            <button onClick={() => setSelectedGame('wukong')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedGame === 'wukong' ? 'bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 border border-amber-500/50' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>Black Myth: Wukong</button>
            <button onClick={() => setSelectedGame('rdr2')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer font-serif ${selectedGame === 'rdr2' ? 'bg-[#3b1715] text-[#d4c4a8] border border-[#d4c4a8]/30 shadow-inner' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>RDR 2</button>
            <button onClick={() => setSelectedGame('ghost')} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedGame === 'ghost' ? 'bg-white text-black border-2 border-red-600' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>Ghost of Tsushima</button>
          </div>
        </div>

        {/* ---------------- EA FC 25 VIEW ---------------- */}
        {selectedGame === 'eafc25' && (
          <div className="flex-1 overflow-y-auto bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 px-5 py-6 custom-scrollbar animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              <h2 className="text-2xl font-black italic tracking-tight text-white drop-shadow-md">CLUB TACTICS</h2>
            </div>
            
            <div className="mb-6 flex justify-between items-center bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Formation</span>
              <select className="bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-emerald-400 cursor-pointer focus:outline-none">
                <option>4-3-3 ATTACK</option>
                <option>4-4-2 FLAT</option>
                <option>3-5-2</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Live Squad Fitness</h3>
            </div>
            
            <div className="space-y-3">
              {players.map(player => (
                <div key={player.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col shadow-lg relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
                  <div className="flex justify-between items-end mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 text-center text-xs font-black py-1 rounded-lg ${
                        player.pos === 'ST' || player.pos === 'LW' || player.pos === 'RW' ? 'bg-blue-500/20 text-blue-400' :
                        player.pos === 'CM' || player.pos === 'CDM' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>{player.pos}</span>
                      <span className="font-bold text-lg text-white tracking-tight">{player.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">OVR</span>
                      <span className="text-xl font-black text-yellow-400">{player.rating}</span>
                    </div>
                  </div>
                  
                  {/* Stamina Bar */}
                  <div className="relative z-10">
                    <div className="flex justify-between text-xs mb-1.5 font-bold">
                      <span className="text-gray-400 uppercase tracking-wider text-[10px]">Stamina</span>
                      <span className={player.stamina < 70 ? 'text-yellow-400' : 'text-emerald-400'}>{player.stamina}%</span>
                    </div>
                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 relative ${
                          player.stamina < 65 ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' : 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                        }`}
                        style={{ width: `${player.stamina}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 w-1/2 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] cursor-pointer">
              Apply Quick Tactics
            </button>
          </div>
        )}

        {/* ---------------- CYBERPUNK 2077 VIEW ---------------- */}
        {selectedGame === 'cyberpunk' && (
          <div className="flex-1 overflow-y-auto bg-[#0a0a0a] px-5 py-6 custom-scrollbar animate-in fade-in duration-300 relative font-mono">
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 border-b-2 border-red-500/50 pb-2">
                <Terminal className="w-6 h-6 text-red-500" />
                <h2 className="text-xl font-bold tracking-widest text-red-500 uppercase">Personal Link</h2>
              </div>
              
              <div className="bg-red-950/20 border-l-4 border-red-500 p-4 mb-5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-red-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-red-500 font-bold text-xs tracking-widest">SYS.HEALTH</span>
                   <span className="text-red-400 font-bold">245 / 300</span>
                 </div>
                 <div className="h-3 w-full bg-black border border-red-900/50">
                   <div className="h-full bg-red-500 w-[80%] relative">
                     <div className="absolute right-0 top-0 bottom-0 w-2 bg-white"></div>
                   </div>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-[#111] border border-[#333] p-4 relative">
                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500"></div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500"></div>
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">RAM Alloc</span>
                   <span className="text-cyan-400 text-2xl font-bold">8<span className="text-sm text-cyan-700">/12</span></span>
                 </div>
                 <div className="bg-[#111] border border-[#333] p-4 relative">
                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500"></div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500"></div>
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">FUNDS</span>
                   <span className="text-green-400 text-xl font-bold">€$ 45.2K</span>
                 </div>
              </div>

              <div className="flex items-center gap-2 mb-3 mt-6">
                <Cpu className="w-4 h-4 text-yellow-500" />
                <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Active Cyberware</h3>
              </div>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center bg-[#1a1a1a] p-3 border-l-2 border-yellow-500">
                   <span className="text-sm font-bold text-gray-300">QIAN-T SANDEVISTAN</span>
                   <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 font-bold animate-pulse">READY</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#1a1a1a] p-3 border-l-2 border-gray-600 opacity-75">
                   <span className="text-sm font-bold text-gray-400">OPTICAL CAMO</span>
                   <span className="text-xs text-red-500 font-bold">CD: 12.4s</span>
                 </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-yellow-400 text-black font-black text-lg uppercase tracking-widest hover:bg-yellow-300 transition-colors relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">CALL VEHICLE</span>
                <div className="absolute inset-0 bg-yellow-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
              </button>
            </div>
          </div>
        )}

        {/* ---------------- HELLDIVERS 2 VIEW ---------------- */}
        {selectedGame === 'helldivers' && (
          <div className="flex-1 overflow-y-auto bg-[#1c1c1a] px-5 py-6 custom-scrollbar animate-in fade-in duration-300 font-mono relative border-4 border-t-0 border-[#2a2a28]">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,transparent_20%,#000_100%)] pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-6 border-b-2 border-yellow-500/30 pb-4">
              <div>
                <h2 className="text-2xl font-black text-yellow-500 uppercase tracking-tighter">Super Earth</h2>
                <p className="text-[10px] text-gray-400 tracking-widest">MINISTRY OF TRUTH LINK</p>
              </div>
              <Skull className="w-8 h-8 text-yellow-500" />
            </div>
            
            <div className="bg-[#0f0f0e] border-2 border-[#33322e] p-4 mb-6 relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#eab308_10px,#eab308_20px)]"></div>
               <div className="flex justify-between items-center mt-2">
                 <div>
                   <span className="text-[10px] text-yellow-500/70 uppercase tracking-widest block mb-1">Mission Time</span>
                   <span className="text-red-500 text-3xl font-black tracking-tighter">14:23</span>
                 </div>
                 <div className="text-right">
                   <span className="text-[10px] text-yellow-500/70 uppercase tracking-widest block mb-1">Reinforcements</span>
                   <div className="flex items-center gap-2 justify-end">
                     <Users className="w-5 h-5 text-blue-400" />
                     <span className="text-blue-400 text-3xl font-black tracking-tighter">12</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3 mt-6">
              <Crosshair className="w-4 h-4 text-yellow-500" />
              <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Available Stratagems</h3>
            </div>
            
            <div className="space-y-3">
               <div className="bg-[#262624] p-3 border-l-4 border-green-500 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]">
                     <Target className="w-5 h-5 text-green-500" />
                   </div>
                   <span className="text-sm font-bold text-gray-200 uppercase">500kg Bomb</span>
                 </div>
                 <span className="text-green-400 font-bold tracking-widest text-lg">↑→↓↓↓</span>
               </div>

               <div className="bg-[#262624] p-3 border-l-4 border-red-500 flex justify-between items-center opacity-50 grayscale">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]">
                     <Zap className="w-5 h-5 text-red-500" />
                   </div>
                   <span className="text-sm font-bold text-gray-200 uppercase">Orbital Laser</span>
                 </div>
                 <span className="text-red-500 font-bold text-sm uppercase">CD: 45s</span>
               </div>

               <div className="bg-[#262624] p-3 border-l-4 border-blue-500 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]">
                     <ShieldAlert className="w-5 h-5 text-blue-500" />
                   </div>
                   <span className="text-sm font-bold text-gray-200 uppercase">Reinforce</span>
                 </div>
                 <span className="text-blue-400 font-bold tracking-widest text-lg">↑↓→←↑</span>
               </div>
            </div>
            
            <button className="w-full mt-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors cursor-pointer border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 flex justify-center items-center gap-2">
              <Radio className="w-5 h-5" />
              Request Extraction
            </button>
          </div>
        )}

        {/* ---------------- FORZA HORIZON 5 VIEW ---------------- */}
        {selectedGame === 'forza' && (
          <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#1a001a] via-[#3d003d] to-[#1a0033] px-5 py-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-3xl font-black italic mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 tracking-tighter drop-shadow-sm">HORIZON TELEMETRY</h2>
            
            {/* Speedometer Mockup */}
            <div className="relative mb-8 flex justify-center">
              <div className="w-48 h-48 rounded-full border-[12px] border-gray-900 bg-black/50 shadow-[0_0_30px_rgba(236,72,153,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
                 {/* Fake RPM Gauge Arc */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                   <path d="M 20 80 A 45 45 0 1 1 80 80" fill="none" stroke="#4c1d95" strokeWidth="8" strokeLinecap="round" />
                   <path d="M 20 80 A 45 45 0 1 1 90 60" fill="none" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="50" />
                 </svg>
                 
                 <div className="font-black text-6xl text-white italic z-10 tracking-tighter">215</div>
                 <div className="text-sm font-bold text-pink-500 italic z-10">KM/H</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center skew-x-[-5deg]">
                 <span className="text-[10px] text-pink-300 uppercase tracking-widest font-bold block mb-1">GEAR</span>
                 <span className="text-4xl font-black text-white italic">5</span>
               </div>
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center skew-x-[-5deg]">
                 <span className="text-[10px] text-pink-300 uppercase tracking-widest font-bold block mb-1">RPM</span>
                 <span className="text-4xl font-black text-white italic">7200</span>
               </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Thermometer className="w-4 h-4 text-yellow-400" />
              <h3 className="text-xs font-bold text-yellow-400 uppercase tracking-widest italic">Tire Temperature</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-gradient-to-r from-green-900/40 to-transparent border-l-4 border-green-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]">
                 <span className="text-xs font-black text-white italic">FL</span>
                 <span className="font-bold text-green-400">82°C</span>
               </div>
               <div className="bg-gradient-to-l from-green-900/40 to-transparent border-r-4 border-green-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]">
                 <span className="font-bold text-green-400">83°C</span>
                 <span className="text-xs font-black text-white italic">FR</span>
               </div>
               <div className="bg-gradient-to-r from-yellow-900/40 to-transparent border-l-4 border-yellow-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]">
                 <span className="text-xs font-black text-white italic">RL</span>
                 <span className="font-bold text-yellow-400">95°C</span>
               </div>
               <div className="bg-gradient-to-l from-yellow-900/40 to-transparent border-r-4 border-yellow-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]">
                 <span className="font-bold text-yellow-400">96°C</span>
                 <span className="text-xs font-black text-white italic">RR</span>
               </div>
            </div>

            <button className="w-full mt-8 py-4 bg-white text-black font-black text-lg italic uppercase tracking-widest rounded hover:bg-pink-100 transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] skew-x-[-5deg]">
              Open Quick Tune
            </button>
          </div>
        )}

        {/* ---------------- BLACK MYTH WUKONG VIEW ---------------- */}
        {selectedGame === 'wukong' && (
          <div className="flex-1 overflow-y-auto bg-[#1a1412] px-6 py-8 custom-scrollbar animate-in fade-in duration-300 font-serif relative">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] pointer-events-none mix-blend-overlay"></div>
            
            <div className="text-center mb-8 border-b border-[#3d2f25] pb-6 relative z-10">
              <h2 className="text-2xl font-bold text-[#e5c07b] tracking-widest uppercase mb-1">Destined One</h2>
              <p className="text-[10px] text-[#8b6f53] tracking-[0.2em] uppercase">Journey to the West</p>
            </div>
            
            <div className="space-y-4 mb-8 relative z-10">
               <div>
                 <div className="flex justify-between items-center mb-1">
                   <span className="text-[10px] text-[#a88d73] uppercase tracking-widest">Health</span>
                   <span className="text-[10px] text-[#e5c07b]">85%</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#2a201b] rounded-full overflow-hidden border border-[#3d2f25]">
                   <div className="h-full bg-gradient-to-r from-[#2e4024] to-[#4a6b36] w-[85%]"></div>
                 </div>
               </div>
               
               <div>
                 <div className="flex justify-between items-center mb-1">
                   <span className="text-[10px] text-[#a88d73] uppercase tracking-widest">Mana</span>
                   <span className="text-[10px] text-[#e5c07b]">60%</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#2a201b] rounded-full overflow-hidden border border-[#3d2f25]">
                   <div className="h-full bg-gradient-to-r from-[#1e3a5f] to-[#346096] w-[60%]"></div>
                 </div>
               </div>

               <div>
                 <div className="flex justify-between items-center mb-1">
                   <span className="text-[10px] text-[#a88d73] uppercase tracking-widest">Stamina</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#2a201b] rounded-full overflow-hidden border border-[#3d2f25]">
                   <div className="h-full bg-gradient-to-r from-[#7a5923] to-[#b38634] w-[100%]"></div>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
               <div className="bg-[#211a17] border border-[#3d2f25] p-4 rounded text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                 <Flame className="w-5 h-5 text-[#e5c07b] mx-auto mb-2 opacity-80" />
                 <span className="text-[10px] text-[#8b6f53] uppercase tracking-widest block mb-1">Gourd Charges</span>
                 <span className="text-xl font-bold text-[#e5c07b]">4 / 5</span>
               </div>
               <div className="bg-[#211a17] border border-[#3d2f25] p-4 rounded text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                 <Zap className="w-5 h-5 text-white mx-auto mb-2 opacity-80" />
                 <span className="text-[10px] text-[#8b6f53] uppercase tracking-widest block mb-1">Focus Points</span>
                 <div className="flex justify-center gap-1.5 mt-2">
                   <div className="w-3 h-3 rotate-45 bg-white shadow-[0_0_8px_white]"></div>
                   <div className="w-3 h-3 rotate-45 bg-white shadow-[0_0_8px_white]"></div>
                   <div className="w-3 h-3 rotate-45 bg-[#3d2f25]"></div>
                 </div>
               </div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-[10px] font-bold text-[#a88d73] uppercase tracking-[0.2em] mb-4">Staff Stance</h3>
              <div className="flex justify-center gap-3">
                <div className="w-20 h-20 rounded-full border-2 border-[#e5c07b] bg-[#e5c07b]/10 flex items-center justify-center shadow-[0_0_15px_rgba(229,192,123,0.2)] cursor-pointer">
                  <span className="text-[#e5c07b] font-bold text-sm tracking-wider">SMASH</span>
                </div>
                <div className="w-16 h-16 rounded-full border border-[#3d2f25] bg-[#211a17] flex items-center justify-center opacity-60 cursor-pointer hover:border-[#a88d73]">
                  <span className="text-[#8b6f53] text-xs">PILLAR</span>
                </div>
                <div className="w-16 h-16 rounded-full border border-[#3d2f25] bg-[#211a17] flex items-center justify-center opacity-60 cursor-pointer hover:border-[#a88d73]">
                  <span className="text-[#8b6f53] text-xs">THRUST</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- RED DEAD REDEMPTION 2 VIEW ---------------- */}
        {selectedGame === 'rdr2' && (
          <div className="flex-1 overflow-y-auto bg-[#1c1410] px-6 py-6 custom-scrollbar animate-in fade-in duration-300 font-serif relative">
            <div className="absolute inset-0 bg-[#2b1d14] opacity-40 mix-blend-multiply pointer-events-none"></div>
            
            <div className="text-center mb-8 relative z-10 border-b-2 border-double border-[#5c4230] pb-4 mt-2">
              <h2 className="text-2xl font-bold text-[#d4c4a8] tracking-widest uppercase">Arthur Morgan</h2>
              <p className="text-xs text-[#8c6d54] italic mt-1">Wanted Dead or Alive</p>
            </div>
            
            <div className="flex gap-6 mb-8 justify-center relative z-10">
               <div className="flex flex-col items-center">
                 <div className="w-14 h-14 rounded-full border-2 border-[#4a3525] bg-[#211712] flex items-center justify-center relative shadow-inner">
                   <div className="absolute inset-1 rounded-full bg-[#1c1410]"></div>
                   <div className="absolute inset-0 rounded-full border-[3px] border-red-800" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                   <Heart className="w-5 h-5 text-red-700 relative z-10 fill-red-900" />
                 </div>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-14 h-14 rounded-full border-2 border-[#4a3525] bg-[#211712] flex items-center justify-center relative shadow-inner">
                   <div className="absolute inset-1 rounded-full bg-[#1c1410]"></div>
                   <div className="absolute inset-0 rounded-full border-[3px] border-yellow-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}></div>
                   <Zap className="w-5 h-5 text-yellow-600 relative z-10 fill-yellow-900" />
                 </div>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-14 h-14 rounded-full border-2 border-[#4a3525] bg-[#211712] flex items-center justify-center relative shadow-inner">
                   <div className="absolute inset-1 rounded-full bg-[#1c1410]"></div>
                   <div className="absolute inset-0 rounded-full border-[3px] border-[#a39481]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)' }}></div>
                   <Eye className="w-5 h-5 text-[#a39481] relative z-10 fill-[#54493c]" />
                 </div>
               </div>
            </div>

            <div className="bg-[#241913] border border-[#4a3525] p-5 rounded mb-6 relative z-10 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Map className="w-4 h-4 text-[#8c6d54]" />
                <span className="text-[10px] text-[#8c6d54] uppercase tracking-widest font-sans">Current Location</span>
              </div>
              <p className="text-xl font-bold text-[#d4c4a8]">Valentine, New Hanover</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-[#4a3525]">
                <span className="text-sm text-[#a39481]">Current Bounty</span>
                <span className="text-red-700 font-bold font-mono text-xl tracking-wider">$ 45.00</span>
              </div>
            </div>

            <div className="bg-[#241913] border border-[#4a3525] p-4 rounded relative z-10 flex justify-between items-center shadow-lg">
              <div>
                <span className="text-[10px] text-[#8c6d54] uppercase tracking-widest font-sans block mb-1">Main Mount</span>
                <p className="text-lg font-bold text-[#d4c4a8]">White Arabian</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-700"></div>
                  <p className="text-xs text-green-700 font-bold uppercase tracking-wider font-sans">Bonding Lvl 4</p>
                </div>
              </div>
              <button className="px-4 py-3 bg-[#4a3525] text-[#d4c4a8] rounded font-bold uppercase tracking-widest text-xs hover:bg-[#5c4230] transition-colors cursor-pointer shadow-md">Whistle</button>
            </div>
          </div>
        )}

        {/* ---------------- GHOST OF TSUSHIMA VIEW ---------------- */}
        {selectedGame === 'ghost' && (
          <div className="flex-1 overflow-y-auto bg-black px-6 py-8 custom-scrollbar animate-in fade-in duration-300 font-serif relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent)] pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4 relative z-10">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Ghost</h2>
                <p className="text-xs text-gray-400 tracking-[0.2em] uppercase mt-1">Jin Sakai</p>
              </div>
              <Wind className="w-8 h-8 text-gray-500" />
            </div>
            
            <div className="mb-8 relative z-10">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Health</span>
               </div>
               <div className="h-1.5 w-full bg-white/10 overflow-hidden mb-6">
                 <div className="h-full bg-red-600 w-[75%]"></div>
               </div>
               
               <div className="flex justify-between items-center mb-3">
                 <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Resolve</span>
               </div>
               <div className="flex gap-2">
                 <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                 <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                 <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                 <div className="w-5 h-5 rounded-full bg-white/10"></div>
                 <div className="w-5 h-5 rounded-full bg-white/10"></div>
               </div>
            </div>

            <div className="relative z-10 mb-8">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Combat Stance</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white text-black p-3 text-center border-l-4 border-red-600 cursor-pointer">
                  <span className="text-sm font-bold uppercase tracking-wider">Stone</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 text-center text-gray-400 cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold uppercase tracking-wider">Water</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 text-center text-gray-400 cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold uppercase tracking-wider">Wind</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 text-center text-gray-400 cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold uppercase tracking-wider">Moon</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Swords className="w-3 h-3" /> Ghost Weapons
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-gray-200 tracking-wider">Kunai</span>
                  <span className="text-sm font-bold text-white">3 / 5</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-gray-200 tracking-wider">Smoke Bomb</span>
                  <span className="text-sm font-bold text-white">1 / 2</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- 4. Build Analyzer & Player Stats ---
function AnalyticsDashboard() {
  const [exportOpen, setExportOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-8">
      <header className="mb-10 flex justify-between items-center relative">
        <div>
          <h1 className="text-3xl font-bold mb-2">Build Analyzer</h1>
          <p className="text-gray-400">Performance metrics and playtime statistics.</p>
        </div>

        {/* CONSTRAINT Wajib: Single Export Button dengan 2 opsi */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setExportOpen(!exportOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Export
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${exportOpen ? 'rotate-180' : ''}`} />
          </button>

          {exportOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-20 origin-top-right">
              <button 
                onClick={() => setExportOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gray-400" />
                Export as PDF
              </button>
              <button 
                onClick={() => setExportOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-700 transition-colors border-t border-gray-700/50 cursor-pointer"
              >
                <FileJson className="w-4 h-4 text-cyan-400" />
                Export as JSON
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Analytics Content Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400 w-5 h-5" />
            Session Performance
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Average FPS</span>
                <span className="text-green-400 font-bold">118 fps</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full w-[95%] shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Network Latency</span>
                <span className="text-cyan-400 font-bold">12 ms</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[20%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Packet Loss</span>
                <span className="text-gray-200 font-bold">0.01%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 rounded-full w-[2%]"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500">Advanced telemetry charts will render here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
