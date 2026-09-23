import React, { useState, useEffect } from 'react';
import { Gamepad2, Server, Play, Clock, Trophy, Search, SlidersHorizontal, LayoutGrid, List, MessageSquare, Share2, Users, Star, ArrowDownToLine, Settings } from 'lucide-react';

export default function PlayerDashboard({ onLaunchGame }: { onLaunchGame?: (title: string) => void }) {
  const [filter, setFilter] = useState('All Games');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  
  // Games Data
  const games = [
    { id: 1, title: 'Cyberpunk 2077', genre: 'RPG', status: 'Ready', played: 'Yesterday', hours: '86 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_hero.jpg' },
    { id: 2, title: 'EA FC 25', genre: 'Sports', status: 'Playing Now', active: true, played: 'Today', hours: '124 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/page_bg_generated_v6b.jpg' },
    { id: 3, title: 'Helldivers 2', genre: 'Shooter', status: 'Ready', played: '2 days ago', hours: '45 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/library_hero.jpg' },
    { id: 4, title: 'Forza Horizon 5', genre: 'Racing', status: 'Update Available', played: '5 days ago', hours: '210 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_hero.jpg' },
    { id: 5, title: 'Black Myth: Wukong', genre: 'Action RPG', status: 'Ready', played: '1 week ago', hours: '32 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/library_hero.jpg' },
    { id: 6, title: 'Red Dead Redemption 2', genre: 'Action', status: 'Cloud Syncing...', played: '2 weeks ago', hours: '180 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_hero.jpg' },
    { id: 7, title: 'Ghost of Tsushima', genre: 'Action', status: 'Ready', played: 'Oct 2', hours: '40 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/library_hero.jpg' },
    { id: 8, title: 'Baldur\'s Gate 3', genre: 'RPG', status: 'Ready', played: 'Sep 28', hours: '150 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_hero.jpg' },
    { id: 9, title: 'Elden Ring', genre: 'Action RPG', status: 'Ready', played: 'Sep 15', hours: '220 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_hero.jpg' },
    { id: 10, title: 'Grand Theft Auto V', genre: 'Action', status: 'Ready', played: 'Sep 10', hours: '800 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_hero.jpg' },
    { id: 11, title: 'Apex Legends', genre: 'Shooter', status: 'Ready', played: 'Aug 20', hours: '450 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/library_hero.jpg' },
    { id: 12, title: 'Hogwarts Legacy', genre: 'RPG', status: 'Ready', played: 'Aug 5', hours: '65 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/library_hero.jpg' },
    { id: 13, title: 'Monster Hunter: World', genre: 'Action RPG', status: 'Ready', played: 'Jul 18', hours: '320 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/library_hero.jpg' },
    { id: 14, title: 'The Witcher 3: Wild Hunt', genre: 'Action RPG', status: 'Ready', played: 'Jun 30', hours: '280 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/library_hero.jpg' },
    { id: 15, title: 'God of War', genre: 'Action', status: 'Ready', played: 'Jun 12', hours: '55 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/library_hero.jpg' },
    { id: 16, title: 'Marvel\'s Spider-Man', genre: 'Action', status: 'Ready', played: 'May 8', hours: '45 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/library_hero.jpg' },
    { id: 17, title: 'DOOM Eternal', genre: 'Shooter', status: 'Ready', played: 'Apr 22', hours: '38 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/library_hero.jpg' },
    { id: 18, title: 'Horizon Zero Dawn', genre: 'Action RPG', status: 'Ready', played: 'Mar 15', hours: '60 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/library_hero.jpg' },
    { id: 19, title: 'Resident Evil 4', genre: 'Survival Horror', status: 'Ready', played: 'Feb 28', hours: '25 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/library_hero.jpg' },
    { id: 20, title: 'Final Fantasy VII Remake', genre: 'RPG', status: 'Ready', played: 'Jan 10', hours: '85 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/library_hero.jpg' },
    { id: 21, title: 'Death Stranding', genre: 'Action', status: 'Ready', played: 'Dec 2025', hours: '110 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190460/library_hero.jpg' },
    { id: 22, title: 'Grand Theft Auto VI', genre: 'Action', status: 'Ready', played: 'Never', hours: '0 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_hero.jpg' },
    { id: 23, title: 'Call of Duty: Black Ops 6', genre: 'Shooter', status: 'Ready', played: 'Yesterday', hours: '12 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/library_hero.jpg' },
    { id: 24, title: 'Starfield', genre: 'RPG', status: 'Ready', played: 'Last week', hours: '145 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/library_hero.jpg' },
    { id: 25, title: 'Valorant', genre: 'Shooter', status: 'Ready', played: 'Today', hours: '320 hrs', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg', banner: 'https://images.igdb.com/igdb/image/upload/t_1080p/ar82p.jpg' },
    { id: 26, title: 'Minecraft', genre: 'Sandbox', status: 'Ready', played: 'Last month', hours: '950 hrs', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg', banner: 'https://images.igdb.com/igdb/image/upload/t_1080p/ar523.jpg' },
    { id: 27, title: 'Palworld', genre: 'Action RPG', status: 'Ready', played: 'Feb 2', hours: '88 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg' },
    { id: 28, title: 'Tekken 8', genre: 'Fighting', status: 'Ready', played: 'Mar 1', hours: '45 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/library_hero.jpg' },
    { id: 29, title: 'Street Fighter 6', genre: 'Fighting', status: 'Ready', played: 'Jan 15', hours: '60 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/library_hero.jpg' },
    { id: 30, title: 'Sekiro: Shadows Die Twice', genre: 'Action', status: 'Ready', played: 'Aug 2024', hours: '85 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/library_hero.jpg' },
    { id: 31, title: 'Hollow Knight', genre: 'Action', status: 'Ready', played: 'Jul 2024', hours: '40 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_hero.jpg' },
    { id: 32, title: 'Stardew Valley', genre: 'RPG', status: 'Ready', played: 'Oct 1', hours: '250 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/library_hero.jpg' },
    { id: 33, title: 'Rust', genre: 'Survival', status: 'Update Available', played: 'Dec 2023', hours: '1200 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/library_hero.jpg' },
    { id: 34, title: 'Terraria', genre: 'Sandbox', status: 'Ready', played: 'Never', hours: '0 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/library_hero.jpg' },
    { id: 35, title: 'Left 4 Dead 2', genre: 'Shooter', status: 'Ready', played: 'Long ago', hours: '450 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/library_hero.jpg' },
    { id: 36, title: 'Garry\'s Mod', genre: 'Sandbox', status: 'Ready', played: 'Long ago', hours: '800 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/library_hero.jpg' },
    { id: 37, title: 'Destiny 2', genre: 'Shooter', status: 'Ready', played: 'Apr 2024', hours: '600 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/library_hero.jpg' },
    { id: 38, title: 'Warframe', genre: 'Action', status: 'Ready', played: 'May 2024', hours: '350 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/library_hero.jpg' },
    { id: 39, title: 'Dota 2', genre: 'MOBA', status: 'Ready', played: 'Sep 20', hours: '2100 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/library_hero.jpg' },
    { id: 40, title: 'Counter-Strike 2', genre: 'Shooter', status: 'Ready', played: 'Today', hours: '1850 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/library_hero.jpg' },
    { id: 41, title: 'The Elder Scrolls V: Skyrim', genre: 'RPG', status: 'Ready', played: '2023', hours: '450 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/library_hero.jpg' },
    { id: 42, title: 'Fallout 4', genre: 'RPG', status: 'Ready', played: '2022', hours: '200 hrs', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/library_hero.jpg' }
  ];

  const [selectedGame, setSelectedGame] = useState<any>(games[1]); // EA FC 25 by default

  const filteredGames = games.filter(g => {
    if (search && !g.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === 'All Games' || filter === 'Recent') return true; 
    if (filter === 'Action') return g.genre.includes('Action');
    if (filter === 'RPG') return g.genre.includes('RPG');
    if (filter === 'Shooter') return g.genre.includes('Shooter');
    return true;
  });

  return (
    <div className="flex-1 h-full flex flex-col bg-[#1a1c23]">
      
      {/* Top Header & Toggles */}
      <div className="h-14 shrink-0 bg-[#14151a] border-b border-gray-800 flex items-center justify-between px-6 z-20">
        <div className="flex gap-4">
          <button onClick={() => setViewMode('list')} className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'}`}>
            <List className="w-5 h-5" />
          </button>
          <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'}`}>
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2">
          {['All Games', 'Recent', 'Action', 'RPG', 'Shooter'].map(f => (
            <button 
              key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${filter === f ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50' : 'bg-transparent text-gray-400 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'list' ? (
        // ==============================================
        // TRUE STEAM SPLIT-PANE LAYOUT
        // ==============================================
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT SIDEBAR: Game List */}
          <div className="w-64 bg-[#14151a]/50 border-r border-gray-800 flex flex-col shrink-0">
            <div className="p-3 border-b border-gray-800">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" placeholder="Search" 
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full bg-[#1a1c23] border border-gray-800 rounded py-1.5 pl-9 pr-3 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 px-2">GAMES ({filteredGames.length})</div>
              {filteredGames.map(g => (
                <button 
                  key={g.id} 
                  onClick={() => setSelectedGame(g)}
                  className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer transition-colors ${selectedGame.id === g.id ? 'bg-blue-600/20 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
                >
                  <div className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 ${g.active ? 'bg-green-500' : 'bg-gray-800'}`}>
                    <Gamepad2 className={`w-3 h-3 ${g.active ? 'text-black' : 'text-gray-500'}`} />
                  </div>
                  <span className={`text-sm truncate ${g.active ? 'font-bold text-green-400' : ''}`}>{g.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANE: Game Details (The Hero) */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-[#1a1c23]">
            {/* Massive Hero Banner */}
            <div className="relative w-full h-[400px] shrink-0 border-b border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
               <img src={selectedGame.banner || selectedGame.image} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-[#1a1c23]/40 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c23] via-transparent to-transparent w-1/2"></div>
               
               <div className="absolute bottom-0 left-0 p-10 w-full flex items-end justify-between z-10">
                  <div>
                    {selectedGame.active && (
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/50 rounded text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.3)] mb-4">
                        Running in Cloud
                      </span>
                    )}
                    <h2 className="text-5xl font-black text-white drop-shadow-xl mb-6">{selectedGame.title}</h2>
                    <div className="flex gap-4">
                      <button onClick={() => onLaunchGame && onLaunchGame(selectedGame.title)} className={`bg-gradient-to-r ${selectedGame.active ? 'from-green-600 to-green-500 hover:from-green-500 hover:to-green-400' : 'from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400'} text-white font-bold py-3 px-12 rounded text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform hover:scale-105 active:scale-95 cursor-pointer`}>
                         <Play className="w-5 h-5 fill-white" /> {selectedGame.active ? 'RESUME' : 'PLAY'}
                      </button>
                      <button className="bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded transition-colors cursor-pointer backdrop-blur"><ArrowDownToLine className="w-5 h-5" /></button>
                      <button className="bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded transition-colors cursor-pointer backdrop-blur"><Settings className="w-5 h-5" /></button>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex gap-6 text-right bg-black/40 p-4 rounded-lg backdrop-blur border border-white/10">
                     <div>
                       <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Play Time</p>
                       <p className="text-2xl font-bold text-white">{selectedGame.hours}</p>
                     </div>
                     <div className="w-px bg-gray-700"></div>
                     <div>
                       <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Last Session</p>
                       <p className="text-2xl font-bold text-white">{selectedGame.played}</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Pane Body (Activity, Achievements, Friends) */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-8">
                  <div className="bg-[#14151a] border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Activity Feed</h3>
                    <div className="space-y-4">
                       <div className="bg-[#1a1c23] p-4 rounded border border-gray-800 flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/50"><Trophy className="w-5 h-5 text-blue-400" /></div>
                          <div>
                            <p className="text-sm text-gray-300">You unlocked an achievement!</p>
                            <p className="text-lg font-bold text-white">First Blood</p>
                            <p className="text-xs text-gray-500 mt-1">Earned on Oct 24 @ 8:14pm</p>
                          </div>
                       </div>
                       <div className="bg-[#1a1c23] p-4 rounded border border-gray-800 flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/50"><Users className="w-5 h-5 text-green-400" /></div>
                          <div>
                            <p className="text-sm text-gray-300"><span className="text-white font-bold">Sarah</span> played {selectedGame.title} for the first time.</p>
                            <p className="text-xs text-gray-500 mt-1">Oct 22</p>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="space-y-6">
                  <div className="bg-[#14151a] border border-gray-800 rounded-lg p-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Friends who play</h3>
                    <div className="flex gap-2">
                       <div className="w-10 h-10 rounded bg-gradient-to-tr from-green-400 to-blue-500 border border-gray-700"></div>
                       <div className="w-10 h-10 rounded bg-gradient-to-tr from-purple-400 to-pink-500 border border-gray-700"></div>
                       <div className="w-10 h-10 rounded bg-gradient-to-tr from-yellow-400 to-red-500 border border-gray-700"></div>
                    </div>
                  </div>
                  
                  <div className="bg-[#14151a] border border-gray-800 rounded-lg p-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Achievements</h3>
                    <div className="flex items-end gap-2 mb-2">
                       <span className="text-3xl font-bold text-white">12</span>
                       <span className="text-gray-500 mb-1">/ 45</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>

                  <div className="bg-[#14151a] border border-gray-800 rounded-lg p-6">
                    <p className="text-xs text-gray-500 mb-1">Cloud Sync Status</p>
                    <p className="text-sm font-bold text-green-400 flex items-center gap-2"><Star className="w-4 h-4" /> Up to date</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      ) : (

        // ==============================================
        // GRID VIEW (Collections/Home Style)
        // ==============================================
        <div className="flex-1 overflow-y-auto px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {filteredGames.map(game => (
              <div 
                key={game.id} 
                onClick={() => { setSelectedGame(game); setViewMode('list'); }} 
                className="group relative rounded-md overflow-hidden cursor-pointer aspect-[2/3] bg-[#14151a] border border-transparent hover:border-blue-500/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                   <button onClick={(e) => { e.stopPropagation(); onLaunchGame && onLaunchGame(game.title); }} className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-110 active:scale-95 cursor-pointer">
                     <Play className="w-6 h-6 fill-white ml-1" />
                   </button>
                </div>

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

      )}
    </div>
  );
}
