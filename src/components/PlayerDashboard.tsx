import React, { useState } from 'react';
import { Gamepad2, Server, Thermometer, Play, Clock, Trophy, Search, SlidersHorizontal } from 'lucide-react';

export default function PlayerDashboard({ onLaunchGame }: { onLaunchGame?: (title: string) => void }) {
  const [filter, setFilter] = useState('Recent');
  const [search, setSearch] = useState('');

  const games = [
    { 
      id: 2, title: 'EA FC 25', genre: 'Sports / Simulator', status: 'Playing Now', active: true, played: 'Last played: Today', hours: '124 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg',
      logo: 'EA FC 25'
    },
    { 
      id: 1, title: 'Cyberpunk 2077', genre: 'RPG / Action', status: 'Ready to Play', played: 'Last played: Yesterday', hours: '86 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
      logo: 'CYBERPUNK 2077'
    },
    { 
      id: 3, title: 'Helldivers 2', genre: 'Co-op / Shooter', status: 'Ready to Play', played: 'Last played: 2 days ago', hours: '45 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg',
      logo: 'HELLDIVERS 2'
    },
    { 
      id: 4, title: 'Forza Horizon 5', genre: 'Racing / Open World', status: 'Update Available', played: 'Last played: 5 days ago', hours: '210 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg'
    },
    { 
      id: 5, title: 'Black Myth: Wukong', genre: 'Action RPG', status: 'Ready to Play', played: 'Last played: 1 week ago', hours: '32 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg'
    },
    { 
      id: 6, title: 'Red Dead Redemption 2', genre: 'Action / Adventure', status: 'Cloud Syncing...', played: 'Last played: 2 weeks ago', hours: '180 hrs',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg'
    },
    { id: 7, title: 'Ghost of Tsushima', genre: 'Action', status: 'Ready', played: 'Last played: Oct 2', hours: '40 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg' },
    { id: 8, title: 'Baldur\'s Gate 3', genre: 'RPG', status: 'Ready', played: 'Last played: Sep 28', hours: '150 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
    { id: 9, title: 'Elden Ring', genre: 'Action RPG', status: 'Ready', played: 'Last played: Sep 15', hours: '220 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
    { id: 10, title: 'Grand Theft Auto V', genre: 'Action', status: 'Ready', played: 'Last played: Sep 10', hours: '800 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg' },
    { id: 11, title: 'Apex Legends', genre: 'Shooter', status: 'Ready', played: 'Last played: Aug 20', hours: '450 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg' },
    { id: 12, title: 'Hogwarts Legacy', genre: 'RPG', status: 'Ready', played: 'Last played: Aug 5', hours: '65 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg' },
    { id: 13, title: 'Monster Hunter: World', genre: 'Action RPG', status: 'Ready', played: 'Last played: Jul 18', hours: '320 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg' },
    { id: 14, title: 'The Witcher 3: Wild Hunt', genre: 'Action RPG', status: 'Ready', played: 'Last played: Jun 30', hours: '280 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
    { id: 15, title: 'God of War', genre: 'Action', status: 'Ready', played: 'Last played: Jun 12', hours: '55 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg' },
    { id: 16, title: 'Marvel\'s Spider-Man', genre: 'Action', status: 'Ready', played: 'Last played: May 8', hours: '45 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg' },
    { id: 17, title: 'DOOM Eternal', genre: 'Shooter', status: 'Ready', played: 'Last played: Apr 22', hours: '38 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg' },
    { id: 18, title: 'Horizon Zero Dawn', genre: 'Action RPG', status: 'Ready', played: 'Last played: Mar 15', hours: '60 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg' },
    { id: 19, title: 'Resident Evil 4', genre: 'Survival Horror', status: 'Ready', played: 'Last played: Feb 28', hours: '25 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg' },
    { id: 20, title: 'Final Fantasy VII Remake', genre: 'RPG', status: 'Ready', played: 'Last played: Jan 10', hours: '85 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg' },
    { id: 21, title: 'Death Stranding', genre: 'Action', status: 'Ready', played: 'Last played: Dec 2025', hours: '110 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/header.jpg' }
  ];

  const filteredGames = games.filter(g => {
    if (search && !g.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === 'Recent') return true; // Just show all in recent order for now
    if (filter === 'Action') return g.genre.includes('Action');
    if (filter === 'RPG') return g.genre.includes('RPG');
    if (filter === 'Shooter') return g.genre.includes('Shooter');
    return true;
  });

  return (
    <div className="flex-1 min-h-screen bg-[#14151a] overflow-y-auto pb-12">
      
      {/* 1. HERO SECTION (Steam-like Big Banner) */}
      <div className="relative w-full h-[500px] mb-8 group overflow-hidden border-b border-gray-800">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105 ease-linear" style={{ backgroundImage: `url('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/page_bg_generated_v6b.jpg')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-[#14151a]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#14151a] via-[#14151a]/80 to-transparent w-2/3"></div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 p-10 w-full lg:w-2/3 z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/50 rounded text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.3)]">Now Playing in Cloud</span>
            <span className="text-gray-400 text-sm flex items-center gap-1"><Server className="w-3 h-3"/> SG-Premium-Node-01</span>
          </div>
          
          <h1 className="text-6xl font-black italic tracking-tighter mb-2 text-white drop-shadow-lg">EA FC 25</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">Experience the most true-to-life football simulation with HyperMotionV and PlayStyles optimized for cloud rendering.</p>
          
          <div className="flex items-end gap-6 mb-8">
            <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Play Time</p><p className="text-2xl font-bold text-white">124 hrs</p></div>
            <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Achievements</p><p className="text-2xl font-bold text-white">28 <span className="text-gray-500 text-lg">/ 45</span></p></div>
            <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Last Session</p><p className="text-2xl font-bold text-white">Today</p></div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => onLaunchGame && onLaunchGame('EA FC 25')} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-12 rounded-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(37,99,235,0.4)] cursor-pointer">
              <Play className="w-6 h-6 fill-white" />
              <span className="text-lg tracking-wider">RESUME</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-6 rounded-lg transition-all active:scale-95 cursor-pointer">
              Game Details
            </button>
          </div>
        </div>
      </div>

      {/* 2. SYSTEM MINI-WIDGETS (Sleek Telemetry) */}
      <div className="px-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#21242d] border border-white/5 rounded-lg p-4 flex justify-between items-center hover:bg-[#282c37] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20"><Server className="w-5 h-5 text-cyan-400" /></div>
              <div><p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Cloud Connection</p><p className="text-green-400 font-bold font-mono">12ms Ping</p></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,1)] animate-pulse"></div>
          </div>
          <div className="bg-[#21242d] border border-white/5 rounded-lg p-4 flex justify-between items-center hover:bg-[#282c37] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20"><Thermometer className="w-5 h-5 text-blue-400" /></div>
              <div><p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Client Temp (Local)</p><p className="text-blue-400 font-bold font-mono">38°C (Idle)</p></div>
            </div>
            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Optimal</span>
          </div>
          <div className="bg-[#21242d] border border-white/5 rounded-lg p-4 flex justify-between items-center hover:bg-[#282c37] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20"><Gamepad2 className="w-5 h-5 text-purple-400" /></div>
              <div><p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Input Device</p><p className="text-white font-bold font-mono">Fantech WGP13S</p></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,1)]"></div>
          </div>
        </div>
      </div>

      {/* 3. STEAM-STYLE GAME LIBRARY */}
      <div className="px-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Library</h2>
            <div className="flex gap-2">
              {['Recent', 'Action', 'RPG', 'Shooter'].map(f => (
                <button 
                  key={f} onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer ${filter === f ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-[#21242d] text-gray-400 hover:bg-[#2a2e39] hover:text-white border border-white/5'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" placeholder="Find a game..." 
                value={search} onChange={e => setSearch(e.target.value)}
                className="bg-[#21242d] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors w-64"
              />
            </div>
            <button className="p-2 bg-[#21242d] border border-white/10 rounded-full hover:bg-gray-700 transition-colors cursor-pointer text-gray-400 hover:text-white"><SlidersHorizontal className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {filteredGames.map(game => (
            <div key={game.id} className="group relative rounded-md overflow-hidden cursor-pointer aspect-[2/3] bg-[#1a1c23]">
              
              {/* Cover Image */}
              <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50" />
              
              {/* Top Gradient for text readability */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Bottom Gradient for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              {/* Hover Content (Play Button) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                 <button onClick={() => onLaunchGame && onLaunchGame(game.title)} className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-110 active:scale-95 cursor-pointer">
                   <Play className="w-6 h-6 fill-white ml-1" />
                 </button>
              </div>

              {/* Static Content (Always visible at bottom) */}
              <div className="absolute bottom-0 left-0 p-3 w-full z-10">
                <h3 className="text-sm font-bold text-white line-clamp-1 mb-1 group-hover:text-blue-400 transition-colors">{game.title}</h3>
                <div className="flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-gray-300">{game.hours}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${game.active ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]' : game.status.includes('Cloud') ? 'bg-yellow-500' : 'bg-transparent'}`}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
