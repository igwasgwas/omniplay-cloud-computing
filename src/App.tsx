import React, { useState, useRef, useEffect } from 'react';
import { 
  Gamepad2, Server, Thermometer, MonitorSmartphone, 
  BarChart3, Download, ChevronDown, Activity, 
  Zap, FileText, FileJson, Cloud, Cpu, HardDrive, Network, Globe,
  Heart, Eye
} from 'lucide-react';

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

// --- 2. Cloud Resources Dashboard (Fitur Cloud Computing Baru) ---
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
    <div className="h-full flex items-center justify-center p-8 bg-gray-950/50">
      {/* Mobile Device Mockup */}
      <div className="w-[375px] h-[812px] bg-gray-900 border-[8px] border-gray-950 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">
        {/* Notch/Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-950 rounded-b-3xl z-50"></div>
        
        {/* Mobile Header */}
        <div className="pt-12 pb-2 px-6 bg-gradient-to-b from-cyan-900/30 to-transparent flex flex-col">
          <div className="flex justify-between items-center mb-4">
             <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">OmniPlay Companion</p>
             <Activity className="text-cyan-400 w-5 h-5 animate-pulse" />
          </div>
          
          {/* Game Selector */}
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-3 mb-2">
            <button onClick={() => setSelectedGame('eafc25')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'eafc25' ? 'bg-cyan-500 text-gray-950' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>EA FC 25</button>
            <button onClick={() => setSelectedGame('cyberpunk')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'cyberpunk' ? 'bg-yellow-500 text-gray-950' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>Cyberpunk 2077</button>
            <button onClick={() => setSelectedGame('helldivers')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'helldivers' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>Helldivers 2</button>
            <button onClick={() => setSelectedGame('forza')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'forza' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>Forza Horizon 5</button>
            <button onClick={() => setSelectedGame('wukong')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'wukong' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>Black Myth: Wukong</button>
            <button onClick={() => setSelectedGame('rdr2')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'rdr2' ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>RDR 2</button>
            <button onClick={() => setSelectedGame('ghost')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${selectedGame === 'ghost' ? 'bg-gray-200 text-gray-950' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'}`}>Ghost of Tsushima</button>
          </div>
        </div>

        {/* ---------------- EA FC 25 VIEW ---------------- */}
        {selectedGame === 'eafc25' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4">EA FC 25</h2>
            <div className="mb-6 flex justify-between items-center bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
              <span className="text-sm text-gray-300">Formation</span>
              <select className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:border-cyan-500 text-cyan-400 cursor-pointer">
                <option>4-3-3 Attack</option>
                <option>4-4-2 Flat</option>
                <option>3-5-2</option>
              </select>
            </div>

            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Live Squad Fitness</h3>
            
            <div className="space-y-4">
              {players.map(player => (
                <div key={player.id} className="bg-gray-800/40 border border-gray-700/30 p-4 rounded-xl">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-center text-xs font-bold text-cyan-400 bg-cyan-500/10 py-1 rounded">{player.pos}</span>
                      <span className="font-medium text-gray-200">{player.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">OVR {player.rating}</span>
                  </div>
                  
                  {/* Stamina Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Stamina</span>
                      <span className={player.stamina < 70 ? 'text-yellow-400' : 'text-green-400'}>{player.stamina}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          player.stamina < 65 ? 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]'
                        }`}
                        style={{ width: `${player.stamina}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-gray-950 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer">
              Apply Quick Tactics
            </button>
          </div>
        )}

        {/* ---------------- CYBERPUNK 2077 VIEW ---------------- */}
        {selectedGame === 'cyberpunk' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">Cyberpunk 2077</h2>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-yellow-500 font-mono text-sm">HEALTH</span>
                 <span className="text-yellow-400 font-bold font-mono">245 / 300</span>
               </div>
               <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-red-500 w-[80%] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
               <div className="bg-gray-800/50 border border-gray-700/50 p-3 rounded-xl flex flex-col justify-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">RAM (Quickhacks)</span>
                 <span className="text-cyan-400 font-mono text-lg font-bold">8 / 12</span>
               </div>
               <div className="bg-gray-800/50 border border-gray-700/50 p-3 rounded-xl flex flex-col justify-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Eurodollars</span>
                 <span className="text-green-400 font-mono text-lg font-bold">€$ 45,230</span>
               </div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 mt-6">Active Cyberware</h3>
            <div className="space-y-3">
               <div className="flex justify-between items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700/30">
                 <span className="text-sm font-medium text-gray-200">Sandevistan</span>
                 <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded">READY</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700/30">
                 <span className="text-sm font-medium text-gray-200">Optical Camo</span>
                 <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded">CD: 12s</span>
               </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 font-bold rounded-xl hover:bg-yellow-500 hover:text-gray-950 transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] cursor-pointer">
              Call Vehicle (Yaiba Kusanagi)
            </button>
          </div>
        )}

        {/* ---------------- HELLDIVERS 2 VIEW ---------------- */}
        {selectedGame === 'helldivers' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">Helldivers 2</h2>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 mb-4 flex justify-between items-center">
               <div>
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Mission Time</span>
                 <span className="text-red-400 font-mono text-xl font-bold">14:23</span>
               </div>
               <div className="text-right">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Reinforcements</span>
                 <span className="text-blue-400 font-mono text-xl font-bold">12 / 20</span>
               </div>
            </div>
            
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 mt-4">Stratagems</h3>
            <div className="space-y-3">
               <div className="flex justify-between items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700/30">
                 <span className="text-sm font-medium text-gray-200">Eagle 500kg Bomb</span>
                 <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded font-mono">↑→↓↓↓</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700/30 opacity-60">
                 <span className="text-sm font-medium text-gray-200">Orbital Laser</span>
                 <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded">CD: 45s</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700/30">
                 <span className="text-sm font-medium text-gray-200">Reinforce</span>
                 <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded font-mono">↑↓→←↑</span>
               </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)] cursor-pointer">
              Request Extraction
            </button>
          </div>
        )}

        {/* ---------------- FORZA HORIZON 5 VIEW ---------------- */}
        {selectedGame === 'forza' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-pink-500">Forza Horizon 5</h2>
            
            {/* Speedometer Mockup */}
            <div className="relative mb-6">
              <div className="w-full h-32 bg-gray-800/50 rounded-xl flex flex-col items-center justify-center border border-gray-700">
                 <div className="font-mono text-4xl font-bold text-white">215<span className="text-sm text-gray-400 ml-1">km/h</span></div>
                 <div className="w-3/4 h-2 bg-gray-900 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-pink-500 w-[70%]"></div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-gray-800/40 border border-gray-700/30 p-3 rounded-xl text-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block">GEAR</span>
                 <span className="text-2xl font-bold text-white font-mono">5</span>
               </div>
               <div className="bg-gray-800/40 border border-gray-700/30 p-3 rounded-xl text-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block">RPM</span>
                 <span className="text-2xl font-bold text-white font-mono">7200</span>
               </div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tire Telemetry (Temp)</h3>
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-gray-800/40 border-l-2 border-green-500 p-2 rounded flex justify-between items-center">
                 <span className="text-xs text-gray-500">FL</span>
                 <span className="font-mono text-sm text-green-400 font-bold">82°C</span>
               </div>
               <div className="bg-gray-800/40 border-l-2 border-green-500 p-2 rounded flex justify-between items-center">
                 <span className="text-xs text-gray-500">FR</span>
                 <span className="font-mono text-sm text-green-400 font-bold">83°C</span>
               </div>
               <div className="bg-gray-800/40 border-l-2 border-yellow-500 p-2 rounded flex justify-between items-center">
                 <span className="text-xs text-gray-500">RL</span>
                 <span className="font-mono text-sm text-yellow-400 font-bold">95°C</span>
               </div>
               <div className="bg-gray-800/40 border-l-2 border-yellow-500 p-2 rounded flex justify-between items-center">
                 <span className="text-xs text-gray-500">RR</span>
                 <span className="font-mono text-sm text-yellow-400 font-bold">96°C</span>
               </div>
            </div>

            <button className="w-full mt-6 py-3 bg-pink-500/10 border border-pink-500/50 text-pink-400 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)] cursor-pointer">
              Open Quick Tune
            </button>
          </div>
        )}

        {/* ---------------- BLACK MYTH WUKONG VIEW ---------------- */}
        {selectedGame === 'wukong' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-orange-500">Black Myth: Wukong</h2>
            
            <div className="bg-gray-800/40 border border-gray-700/30 rounded-xl p-4 mb-4">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider">Health</span>
               </div>
               <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden mb-3">
                 <div className="h-full bg-green-500 w-[100%]"></div>
               </div>
               
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider">Mana</span>
               </div>
               <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden mb-3">
                 <div className="h-full bg-blue-500 w-[60%]"></div>
               </div>

               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider">Stamina</span>
               </div>
               <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 w-[85%]"></div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-gray-800/40 border border-gray-700/30 p-3 rounded-xl text-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Gourd Charges</span>
                 <span className="text-2xl font-bold text-green-400 font-mono">4 / 5</span>
               </div>
               <div className="bg-gray-800/40 border border-gray-700/30 p-3 rounded-xl text-center">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Focus Points</span>
                 <div className="flex justify-center gap-1 mt-2">
                   <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                   <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                   <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                 </div>
               </div>
            </div>
            
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Active Stance</h3>
            <div className="flex gap-2">
              <div className="flex-1 bg-orange-500/20 border border-orange-500/50 p-2 rounded text-center text-orange-400 text-sm font-bold">Smash</div>
              <div className="flex-1 bg-gray-800/50 border border-gray-700 p-2 rounded text-center text-gray-500 text-sm">Pillar</div>
              <div className="flex-1 bg-gray-800/50 border border-gray-700 p-2 rounded text-center text-gray-500 text-sm">Thrust</div>
            </div>
          </div>
        )}

        {/* ---------------- RED DEAD REDEMPTION 2 VIEW ---------------- */}
        {selectedGame === 'rdr2' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-red-700">Red Dead Redemption 2</h2>
            
            <div className="flex gap-4 mb-6 justify-center">
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-2 border-red-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                   <Heart className="w-5 h-5 text-red-500" />
                 </div>
                 <span className="text-[10px] text-gray-400 mt-1 uppercase">Health</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-2 border-yellow-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}></div>
                   <Zap className="w-5 h-5 text-yellow-500" />
                 </div>
                 <span className="text-[10px] text-gray-400 mt-1 uppercase">Stamina</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-2 border-gray-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)' }}></div>
                   <Eye className="w-5 h-5 text-gray-300" />
                 </div>
                 <span className="text-[10px] text-gray-400 mt-1 uppercase">Dead Eye</span>
               </div>
            </div>

            <div className="bg-gray-800/40 border border-gray-700/30 p-4 rounded-xl mb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2">Location</span>
              <p className="text-lg font-bold text-gray-200 font-serif">Valentine, New Hanover</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700/50">
                <span className="text-sm text-gray-400">Current Bounty</span>
                <span className="text-red-500 font-bold font-mono">$ 45.00</span>
              </div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Horse Status</h3>
            <div className="bg-gray-800/40 border border-gray-700/30 p-3 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-gray-200">White Arabian</p>
                <p className="text-xs text-gray-400 mt-1">Bonding Level 4</p>
              </div>
              <button className="px-3 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600 transition-colors cursor-pointer">Call Horse</button>
            </div>
          </div>
        )}

        {/* ---------------- GHOST OF TSUSHIMA VIEW ---------------- */}
        {selectedGame === 'ghost' && (
          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-200">Ghost of Tsushima</h2>
            
            <div className="bg-gray-800/40 border border-gray-700/30 rounded-xl p-4 mb-4">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider">Health</span>
               </div>
               <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden mb-4 border border-gray-700">
                 <div className="h-full bg-red-600 w-[75%] shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
               </div>
               
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase tracking-wider">Resolve</span>
               </div>
               <div className="flex gap-1">
                 <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                 <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                 <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                 <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                 <div className="w-6 h-6 rounded-full bg-gray-700"></div>
               </div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Combat Stance</h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-gray-200/10 border border-gray-200/30 p-2 rounded text-center text-gray-200 text-sm font-bold">Stone Stance</div>
              <div className="bg-gray-800/50 border border-gray-700 p-2 rounded text-center text-gray-500 text-sm">Water Stance</div>
              <div className="bg-gray-800/50 border border-gray-700 p-2 rounded text-center text-gray-500 text-sm">Wind Stance</div>
              <div className="bg-gray-800/50 border border-gray-700 p-2 rounded text-center text-gray-500 text-sm">Moon Stance</div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Ghost Weapons</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-gray-800/30 p-2 rounded-lg">
                <span className="text-sm text-gray-300">Kunai</span>
                <span className="text-sm font-mono text-gray-400">3 / 5</span>
              </div>
              <div className="flex justify-between items-center bg-gray-800/30 p-2 rounded-lg">
                <span className="text-sm text-gray-300">Smoke Bomb</span>
                <span className="text-sm font-mono text-gray-400">1 / 2</span>
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
