import React, { useState } from 'react';
import {
  Activity, Zap, Trophy, Terminal, Cpu, Crosshair, Target, Flame, Swords, Wind,
  Heart, Eye, Map, Users, ShieldAlert, Skull, Radio, Shield, Thermometer, Package,
  Droplets, Sword, Wand2, Star, Sparkles, Battery, Weight, Baby, Hexagon,
  CircleDot, GitBranch, Layers
} from 'lucide-react';

type GameKey = 'eafc25' | 'cyberpunk' | 'helldivers' | 'forza' | 'wukong' | 'rdr2' | 'ghost'
  | 'witcher3' | 'godofwar' | 'spiderman' | 'doom' | 'horizon' | 're4' | 'ff7r' | 'deathstranding';

interface GameTab {
  key: GameKey;
  label: string;
  activeClass: string;
}

const gameTabs: GameTab[] = [
  { key: 'eafc25', label: 'EA FC 25', activeClass: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-lg shadow-teal-500/20' },
  { key: 'cyberpunk', label: 'Cyberpunk 2077', activeClass: 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20' },
  { key: 'helldivers', label: 'Helldivers 2', activeClass: 'bg-yellow-500 text-black font-mono shadow-[0_0_10px_rgba(234,179,8,0.5)]' },
  { key: 'forza', label: 'Forza Horizon 5', activeClass: 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-pink-500/30 italic' },
  { key: 'wukong', label: 'Wukong', activeClass: 'bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 border border-amber-500/50' },
  { key: 'rdr2', label: 'RDR 2', activeClass: 'bg-[#3b1715] text-[#d4c4a8] border border-[#d4c4a8]/30 font-serif' },
  { key: 'ghost', label: 'Tsushima', activeClass: 'bg-white text-black border-2 border-red-600' },
  { key: 'witcher3', label: 'Witcher 3', activeClass: 'bg-gradient-to-r from-red-800 to-red-600 text-white' },
  { key: 'godofwar', label: 'God of War', activeClass: 'bg-gradient-to-r from-blue-800 to-blue-600 text-white' },
  { key: 'spiderman', label: 'Spider-Man', activeClass: 'bg-red-600 text-white' },
  { key: 'doom', label: 'DOOM', activeClass: 'bg-gradient-to-r from-red-700 to-orange-600 text-white font-black' },
  { key: 'horizon', label: 'Horizon', activeClass: 'bg-gradient-to-r from-orange-500 to-sky-500 text-white' },
  { key: 're4', label: 'RE4', activeClass: 'bg-red-900 text-red-200 border border-red-700' },
  { key: 'ff7r', label: 'FF7 Remake', activeClass: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' },
  { key: 'deathstranding', label: 'Death Stranding', activeClass: 'bg-gray-700 text-cyan-300 border border-cyan-800' },
];

export default function CompanionDashboard() {
  const [selectedGame, setSelectedGame] = useState<GameKey>('eafc25');

  return (
    <div className="h-full flex items-center justify-center p-8 bg-gray-950/50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-15 pointer-events-none transition-all duration-1000">
        {selectedGame === 'eafc25' && <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 blur-[100px]"></div>}
        {selectedGame === 'cyberpunk' && <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-600 blur-[100px]"></div>}
        {selectedGame === 'helldivers' && <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-black blur-[100px]"></div>}
        {selectedGame === 'forza' && <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-yellow-500 blur-[100px]"></div>}
        {selectedGame === 'wukong' && <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-stone-900 blur-[100px]"></div>}
        {selectedGame === 'rdr2' && <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 blur-[100px]"></div>}
        {selectedGame === 'ghost' && <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-400 blur-[100px]"></div>}
        {selectedGame === 'witcher3' && <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-gray-900 blur-[100px]"></div>}
        {selectedGame === 'godofwar' && <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-orange-800 blur-[100px]"></div>}
        {selectedGame === 'spiderman' && <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-800 blur-[100px]"></div>}
        {selectedGame === 'doom' && <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-black blur-[100px]"></div>}
        {selectedGame === 'horizon' && <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-teal-600 blur-[100px]"></div>}
        {selectedGame === 're4' && <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-gray-950 blur-[100px]"></div>}
        {selectedGame === 'ff7r' && <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-900 blur-[100px]"></div>}
        {selectedGame === 'deathstranding' && <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-cyan-900 blur-[100px]"></div>}
      </div>

      {/* Mobile Device Mockup */}
      <div className="w-[375px] h-[812px] bg-black border-[12px] border-gray-900 rounded-[3.5rem] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col z-10 ring-1 ring-white/10">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3 border border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/10"></div>
        </div>

        {/* Game Selector */}
        <div className="pt-12 pb-3 px-4 bg-gray-950/80 backdrop-blur-md flex flex-col border-b border-white/5 z-40 relative">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
            {gameTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedGame(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedGame === tab.key ? tab.activeClass : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GAME VIEWS */}
        {selectedGame === 'eafc25' && <EAFC25View />}
        {selectedGame === 'cyberpunk' && <CyberpunkView />}
        {selectedGame === 'helldivers' && <HelldiversView />}
        {selectedGame === 'forza' && <ForzaView />}
        {selectedGame === 'wukong' && <WukongView />}
        {selectedGame === 'rdr2' && <RDR2View />}
        {selectedGame === 'ghost' && <GhostView />}
        {selectedGame === 'witcher3' && <Witcher3View />}
        {selectedGame === 'godofwar' && <GodOfWarView />}
        {selectedGame === 'spiderman' && <SpiderManView />}
        {selectedGame === 'doom' && <DoomView />}
        {selectedGame === 'horizon' && <HorizonView />}
        {selectedGame === 're4' && <RE4View />}
        {selectedGame === 'ff7r' && <FF7RView />}
        {selectedGame === 'deathstranding' && <DeathStrandingView />}
      </div>
    </div>
  );
}

/* ============================================================
   INDIVIDUAL GAME COMPANION VIEWS
   ============================================================ */

function EAFC25View() {
  const players = [
    { id: 1, name: 'Haaland', pos: 'ST', stamina: 85, rating: 91 },
    { id: 2, name: 'Foden', pos: 'LW', stamina: 72, rating: 85 },
    { id: 3, name: 'Silva', pos: 'RW', stamina: 68, rating: 86 },
    { id: 4, name: 'De Bruyne', pos: 'CM', stamina: 60, rating: 91 },
    { id: 5, name: 'Rodri', pos: 'CDM', stamina: 88, rating: 89 },
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 px-5 py-6 custom-scrollbar">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
        <h2 className="text-2xl font-black italic tracking-tight text-white">CLUB TACTICS</h2>
      </div>
      <div className="mb-6 flex justify-between items-center bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Formation</span>
        <select className="bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-sm font-bold text-emerald-400 cursor-pointer focus:outline-none">
          <option>4-3-3 ATTACK</option><option>4-4-2 FLAT</option><option>3-5-2</option>
        </select>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-emerald-400" />
        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Live Squad Fitness</h3>
      </div>
      <div className="space-y-3">
        {players.map(p => (
          <div key={p.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
            <div className="flex justify-between items-end mb-3">
              <div className="flex items-center gap-3">
                <span className={`w-9 text-center text-xs font-black py-1 rounded-lg ${p.pos === 'ST' || p.pos === 'LW' || p.pos === 'RW' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{p.pos}</span>
                <span className="font-bold text-lg text-white">{p.name}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">OVR</span>
                <span className="text-xl font-black text-yellow-400">{p.rating}</span>
              </div>
            </div>
            <div className="flex justify-between text-xs mb-1.5 font-bold">
              <span className="text-gray-400 uppercase tracking-wider text-[10px]">Stamina</span>
              <span className={p.stamina < 70 ? 'text-yellow-400' : 'text-emerald-400'}>{p.stamina}%</span>
            </div>
            <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
              <div className={`h-full rounded-full ${p.stamina < 65 ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' : 'bg-gradient-to-r from-emerald-600 to-emerald-400'}`} style={{ width: `${p.stamina}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] cursor-pointer">Apply Quick Tactics</button>
    </div>
  );
}

function CyberpunkView() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0a] px-5 py-6 custom-scrollbar font-mono relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6 border-b-2 border-red-500/50 pb-2">
          <Terminal className="w-6 h-6 text-red-500" />
          <h2 className="text-xl font-bold tracking-widest text-red-500 uppercase">Personal Link</h2>
        </div>
        <div className="bg-red-950/20 border-l-4 border-red-500 p-4 mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-red-500 font-bold text-xs tracking-widest">SYS.HEALTH</span>
            <span className="text-red-400 font-bold">245 / 300</span>
          </div>
          <div className="h-3 w-full bg-black border border-red-900/50"><div className="h-full bg-red-500 w-[80%] relative"><div className="absolute right-0 top-0 bottom-0 w-2 bg-white"></div></div></div>
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
        <div className="flex items-center gap-2 mb-3 mt-6"><Cpu className="w-4 h-4 text-yellow-500" /><h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Active Cyberware</h3></div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-[#1a1a1a] p-3 border-l-2 border-yellow-500"><span className="text-sm font-bold text-gray-300">QIAN-T SANDEVISTAN</span><span className="text-xs bg-yellow-500 text-black px-2 py-0.5 font-bold animate-pulse">READY</span></div>
          <div className="flex justify-between items-center bg-[#1a1a1a] p-3 border-l-2 border-gray-600 opacity-75"><span className="text-sm font-bold text-gray-400">OPTICAL CAMO</span><span className="text-xs text-red-500 font-bold">CD: 12.4s</span></div>
        </div>
        <button className="w-full mt-8 py-4 bg-yellow-400 text-black font-black text-lg uppercase tracking-widest hover:bg-yellow-300 transition-colors cursor-pointer">CALL VEHICLE</button>
      </div>
    </div>
  );
}

function HelldiversView() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1c1c1a] px-5 py-6 custom-scrollbar font-mono relative border-4 border-t-0 border-[#2a2a28]">
      <div className="flex justify-between items-start mb-6 border-b-2 border-yellow-500/30 pb-4">
        <div><h2 className="text-2xl font-black text-yellow-500 uppercase tracking-tighter">Super Earth</h2><p className="text-[10px] text-gray-400 tracking-widest">MINISTRY OF TRUTH LINK</p></div>
        <Skull className="w-8 h-8 text-yellow-500" />
      </div>
      <div className="bg-[#0f0f0e] border-2 border-[#33322e] p-4 mb-6 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#eab308_10px,#eab308_20px)]"></div>
        <div className="flex justify-between items-center mt-2">
          <div><span className="text-[10px] text-yellow-500/70 uppercase tracking-widest block mb-1">Mission Time</span><span className="text-red-500 text-3xl font-black">14:23</span></div>
          <div className="text-right"><span className="text-[10px] text-yellow-500/70 uppercase tracking-widest block mb-1">Reinforcements</span><div className="flex items-center gap-2 justify-end"><Users className="w-5 h-5 text-blue-400" /><span className="text-blue-400 text-3xl font-black">12</span></div></div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3"><Crosshair className="w-4 h-4 text-yellow-500" /><h3 className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Stratagems</h3></div>
      <div className="space-y-3">
        <div className="bg-[#262624] p-3 border-l-4 border-green-500 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]"><Target className="w-5 h-5 text-green-500" /></div><span className="text-sm font-bold text-gray-200 uppercase">500kg Bomb</span></div><span className="text-green-400 font-bold tracking-widest text-lg">↑→↓↓↓</span></div>
        <div className="bg-[#262624] p-3 border-l-4 border-red-500 flex justify-between items-center opacity-50 grayscale"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]"><Zap className="w-5 h-5 text-red-500" /></div><span className="text-sm font-bold text-gray-200 uppercase">Orbital Laser</span></div><span className="text-red-500 font-bold text-sm uppercase">CD: 45s</span></div>
        <div className="bg-[#262624] p-3 border-l-4 border-blue-500 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-black flex items-center justify-center border border-[#333]"><ShieldAlert className="w-5 h-5 text-blue-500" /></div><span className="text-sm font-bold text-gray-200 uppercase">Reinforce</span></div><span className="text-blue-400 font-bold tracking-widest text-lg">↑↓→←↑</span></div>
      </div>
      <button className="w-full mt-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors cursor-pointer border-b-4 border-yellow-700 flex justify-center items-center gap-2"><Radio className="w-5 h-5" />Request Extraction</button>
    </div>
  );
}

function ForzaView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#1a001a] via-[#3d003d] to-[#1a0033] px-5 py-6 custom-scrollbar">
      <h2 className="text-3xl font-black italic mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 tracking-tighter">HORIZON TELEMETRY</h2>
      <div className="relative mb-8 flex justify-center">
        <div className="w-48 h-48 rounded-full border-[12px] border-gray-900 bg-black/50 shadow-[0_0_30px_rgba(236,72,153,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100"><path d="M 20 80 A 45 45 0 1 1 80 80" fill="none" stroke="#4c1d95" strokeWidth="8" strokeLinecap="round" /><path d="M 20 80 A 45 45 0 1 1 90 60" fill="none" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="50" /></svg>
          <div className="font-black text-6xl text-white italic z-10 tracking-tighter">215</div><div className="text-sm font-bold text-pink-500 italic z-10">KM/H</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center skew-x-[-5deg]"><span className="text-[10px] text-pink-300 uppercase tracking-widest font-bold block mb-1">GEAR</span><span className="text-4xl font-black text-white italic">5</span></div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center skew-x-[-5deg]"><span className="text-[10px] text-pink-300 uppercase tracking-widest font-bold block mb-1">RPM</span><span className="text-4xl font-black text-white italic">7200</span></div>
      </div>
      <div className="flex items-center gap-2 mb-3"><Thermometer className="w-4 h-4 text-yellow-400" /><h3 className="text-xs font-bold text-yellow-400 uppercase tracking-widest italic">Tire Temperature</h3></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-green-900/40 to-transparent border-l-4 border-green-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]"><span className="text-xs font-black text-white italic">FL</span><span className="font-bold text-green-400">82°C</span></div>
        <div className="bg-gradient-to-l from-green-900/40 to-transparent border-r-4 border-green-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]"><span className="font-bold text-green-400">83°C</span><span className="text-xs font-black text-white italic">FR</span></div>
        <div className="bg-gradient-to-r from-yellow-900/40 to-transparent border-l-4 border-yellow-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]"><span className="text-xs font-black text-white italic">RL</span><span className="font-bold text-yellow-400">95°C</span></div>
        <div className="bg-gradient-to-l from-yellow-900/40 to-transparent border-r-4 border-yellow-500 p-3 rounded flex justify-between items-center skew-x-[-5deg]"><span className="font-bold text-yellow-400">96°C</span><span className="text-xs font-black text-white italic">RR</span></div>
      </div>
      <button className="w-full mt-8 py-4 bg-white text-black font-black text-lg italic uppercase tracking-widest rounded hover:bg-pink-100 transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] skew-x-[-5deg]">Open Quick Tune</button>
    </div>
  );
}

function WukongView() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1a1412] px-6 py-8 custom-scrollbar font-serif relative">
      <div className="text-center mb-8 border-b border-[#3d2f25] pb-6"><h2 className="text-2xl font-bold text-[#e5c07b] tracking-widest uppercase mb-1">Destined One</h2><p className="text-[10px] text-[#8b6f53] tracking-[0.2em] uppercase">Journey to the West</p></div>
      <div className="space-y-4 mb-8">
        {[{ label: 'Health', w: '85%', from: '#2e4024', to: '#4a6b36' }, { label: 'Mana', w: '60%', from: '#1e3a5f', to: '#346096' }, { label: 'Stamina', w: '100%', from: '#7a5923', to: '#b38634' }].map(bar => (
          <div key={bar.label}><div className="flex justify-between items-center mb-1"><span className="text-[10px] text-[#a88d73] uppercase tracking-widest">{bar.label}</span></div><div className="h-1.5 w-full bg-[#2a201b] rounded-full overflow-hidden border border-[#3d2f25]"><div className="h-full" style={{ width: bar.w, background: `linear-gradient(to right, ${bar.from}, ${bar.to})` }}></div></div></div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#211a17] border border-[#3d2f25] p-4 rounded text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"><Flame className="w-5 h-5 text-[#e5c07b] mx-auto mb-2 opacity-80" /><span className="text-[10px] text-[#8b6f53] uppercase tracking-widest block mb-1">Gourd</span><span className="text-xl font-bold text-[#e5c07b]">4 / 5</span></div>
        <div className="bg-[#211a17] border border-[#3d2f25] p-4 rounded text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"><Zap className="w-5 h-5 text-white mx-auto mb-2 opacity-80" /><span className="text-[10px] text-[#8b6f53] uppercase tracking-widest block mb-1">Focus</span><div className="flex justify-center gap-1.5 mt-2"><div className="w-3 h-3 rotate-45 bg-white shadow-[0_0_8px_white]"></div><div className="w-3 h-3 rotate-45 bg-white shadow-[0_0_8px_white]"></div><div className="w-3 h-3 rotate-45 bg-[#3d2f25]"></div></div></div>
      </div>
      <div className="text-center"><h3 className="text-[10px] font-bold text-[#a88d73] uppercase tracking-[0.2em] mb-4">Staff Stance</h3><div className="flex justify-center gap-3"><div className="w-20 h-20 rounded-full border-2 border-[#e5c07b] bg-[#e5c07b]/10 flex items-center justify-center shadow-[0_0_15px_rgba(229,192,123,0.2)] cursor-pointer"><span className="text-[#e5c07b] font-bold text-sm">SMASH</span></div><div className="w-16 h-16 rounded-full border border-[#3d2f25] bg-[#211a17] flex items-center justify-center opacity-60 cursor-pointer"><span className="text-[#8b6f53] text-xs">PILLAR</span></div><div className="w-16 h-16 rounded-full border border-[#3d2f25] bg-[#211a17] flex items-center justify-center opacity-60 cursor-pointer"><span className="text-[#8b6f53] text-xs">THRUST</span></div></div></div>
    </div>
  );
}

function RDR2View() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1c1410] px-6 py-6 custom-scrollbar font-serif relative">
      <div className="text-center mb-8 border-b-2 border-double border-[#5c4230] pb-4 mt-2"><h2 className="text-2xl font-bold text-[#d4c4a8] tracking-widest uppercase">Arthur Morgan</h2><p className="text-xs text-[#8c6d54] italic mt-1">Wanted Dead or Alive</p></div>
      <div className="flex gap-6 mb-8 justify-center">
        {[{ icon: Heart, color: 'red-700', fill: 'red-900', clip: '100%' }, { icon: Zap, color: 'yellow-600', fill: 'yellow-900', clip: '80%' }, { icon: Eye, color: '[#a39481]', fill: '[#54493c]', clip: '40%' }].map((core, i) => (
          <div key={i} className="flex flex-col items-center"><div className="w-14 h-14 rounded-full border-2 border-[#4a3525] bg-[#211712] flex items-center justify-center relative shadow-inner"><core.icon className={`w-5 h-5 text-${core.color} relative z-10`} /></div></div>
        ))}
      </div>
      <div className="bg-[#241913] border border-[#4a3525] p-5 rounded mb-6 shadow-lg"><div className="flex items-center gap-2 mb-2"><Map className="w-4 h-4 text-[#8c6d54]" /><span className="text-[10px] text-[#8c6d54] uppercase tracking-widest font-sans">Location</span></div><p className="text-xl font-bold text-[#d4c4a8]">Valentine, New Hanover</p><div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-[#4a3525]"><span className="text-sm text-[#a39481]">Bounty</span><span className="text-red-700 font-bold font-mono text-xl">$ 45.00</span></div></div>
      <div className="bg-[#241913] border border-[#4a3525] p-4 rounded shadow-lg flex justify-between items-center"><div><span className="text-[10px] text-[#8c6d54] uppercase tracking-widest font-sans block mb-1">Mount</span><p className="text-lg font-bold text-[#d4c4a8]">White Arabian</p><p className="text-xs text-green-700 font-bold uppercase tracking-wider font-sans mt-1">Bonding Lvl 4</p></div><button className="px-4 py-3 bg-[#4a3525] text-[#d4c4a8] rounded font-bold uppercase tracking-widest text-xs hover:bg-[#5c4230] cursor-pointer">Whistle</button></div>
    </div>
  );
}

function GhostView() {
  return (
    <div className="flex-1 overflow-y-auto bg-black px-6 py-8 custom-scrollbar font-serif relative">
      <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4"><div><h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Ghost</h2><p className="text-xs text-gray-400 tracking-[0.2em] uppercase mt-1">Jin Sakai</p></div><Wind className="w-8 h-8 text-gray-500" /></div>
      <div className="mb-8"><span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Health</span><div className="h-1.5 w-full bg-white/10 overflow-hidden mt-2 mb-6"><div className="h-full bg-red-600 w-[75%]"></div></div><span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Resolve</span><div className="flex gap-2 mt-3">{[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>)}{[4,5].map(i => <div key={i} className="w-5 h-5 rounded-full bg-white/10"></div>)}</div></div>
      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Combat Stance</h3>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white text-black p-3 text-center border-l-4 border-red-600 cursor-pointer"><span className="text-sm font-bold uppercase tracking-wider">Stone</span></div>
        {['Water', 'Wind', 'Moon'].map(s => <div key={s} className="bg-white/5 border border-white/10 p-3 text-center text-gray-400 cursor-pointer hover:bg-white/10"><span className="text-sm font-bold uppercase tracking-wider">{s}</span></div>)}
      </div>
      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><Swords className="w-3 h-3" /> Ghost Weapons</h3>
      <div className="space-y-1">{[{ n: 'Kunai', v: '3 / 5' }, { n: 'Smoke Bomb', v: '1 / 2' }].map(w => <div key={w.n} className="flex justify-between items-center py-2 border-b border-white/5"><span className="text-sm text-gray-200 tracking-wider">{w.n}</span><span className="text-sm font-bold text-white">{w.v}</span></div>)}</div>
    </div>
  );
}

/* ============================================================
   NEW AAA GAME COMPANION VIEWS
   ============================================================ */

function Witcher3View() {
  const signs = [
    { name: 'Igni', active: true, color: 'text-orange-400 bg-orange-500/20 border-orange-500/50' },
    { name: 'Quen', active: false, color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' },
    { name: 'Aard', active: false, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    { name: 'Yrden', active: false, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
    { name: 'Axii', active: false, color: 'text-green-400 bg-green-500/10 border-green-500/30' },
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] px-5 py-6 custom-scrollbar relative">
      <div className="flex items-center gap-3 mb-6 border-b border-red-900/50 pb-4">
        <div className="w-10 h-10 rounded-full bg-red-900/30 border border-red-700/50 flex items-center justify-center"><Hexagon className="w-6 h-6 text-red-500" /></div>
        <div><h2 className="text-xl font-bold text-white">Geralt of Rivia</h2><p className="text-[10px] text-red-400 uppercase tracking-widest">White Wolf • Witcher</p></div>
      </div>
      <div className="space-y-3 mb-6">
        <div><div className="flex justify-between text-xs mb-1"><span className="text-red-400 uppercase tracking-widest font-bold text-[10px]">Vitality</span><span className="text-red-400 font-bold">3800 / 4200</span></div><div className="h-2 bg-black rounded-full overflow-hidden border border-red-900/30"><div className="h-full bg-gradient-to-r from-red-800 to-red-500 w-[90%]"></div></div></div>
        <div><div className="flex justify-between text-xs mb-1"><span className="text-green-400 uppercase tracking-widest font-bold text-[10px]">Toxicity</span><span className="text-green-400 font-bold">45%</span></div><div className="h-2 bg-black rounded-full overflow-hidden border border-green-900/30"><div className="h-full bg-gradient-to-r from-green-900 to-green-500 w-[45%]"></div></div></div>
        <div><div className="flex justify-between text-xs mb-1"><span className="text-yellow-500 uppercase tracking-widest font-bold text-[10px]">Adrenaline</span><span className="text-yellow-500 font-bold">2 / 3</span></div><div className="h-2 bg-black rounded-full overflow-hidden border border-yellow-900/30"><div className="h-full bg-gradient-to-r from-yellow-800 to-yellow-500 w-[66%]"></div></div></div>
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Active Sign</h3>
      <div className="flex gap-2 mb-6 flex-wrap">
        {signs.map(s => (<button key={s.name} className={`px-3 py-2 rounded-lg border text-xs font-bold cursor-pointer transition-all ${s.active ? s.color + ' shadow-lg' : 'bg-white/5 text-gray-500 border-gray-700 hover:border-gray-500'}`}>{s.name}</button>))}
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Equipped Swords</h3>
      <div className="space-y-2">
        <div className="bg-white/5 border border-gray-700 p-3 rounded-lg flex justify-between items-center"><div><p className="text-sm font-bold text-gray-200">Aerondight</p><p className="text-[10px] text-gray-500">Silver Sword • Relic</p></div><div className="text-right"><span className="text-xs text-green-400 font-bold">92%</span><p className="text-[10px] text-gray-500">Durability</p></div></div>
        <div className="bg-white/5 border border-gray-700 p-3 rounded-lg flex justify-between items-center"><div><p className="text-sm font-bold text-gray-200">Iris' Default</p><p className="text-[10px] text-gray-500">Steel Sword • Relic</p></div><div className="text-right"><span className="text-xs text-yellow-400 font-bold">67%</span><p className="text-[10px] text-gray-500">Durability</p></div></div>
      </div>
    </div>
  );
}

function GodOfWarView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#0d1117] to-[#161b22] px-5 py-6 custom-scrollbar relative">
      <div className="flex items-center gap-3 mb-6 border-b border-blue-900/50 pb-4">
        <Shield className="w-8 h-8 text-blue-400" />
        <div><h2 className="text-xl font-bold text-white tracking-wider">KRATOS</h2><p className="text-[10px] text-blue-400 uppercase tracking-widest">God of War • Ghost of Sparta</p></div>
      </div>
      <div className="space-y-3 mb-6">
        <div><div className="flex justify-between text-xs mb-1"><span className="text-green-400 uppercase tracking-widest font-bold text-[10px]">Health</span></div><div className="h-2.5 bg-black rounded-full overflow-hidden border border-green-900/50"><div className="h-full bg-gradient-to-r from-green-700 to-green-400 w-[70%] shadow-[0_0_8px_rgba(74,222,128,0.3)]"></div></div></div>
        <div><div className="flex justify-between text-xs mb-1"><span className="text-orange-400 uppercase tracking-widest font-bold text-[10px]">Spartan Rage</span></div><div className="h-2.5 bg-black rounded-full overflow-hidden border border-orange-900/50"><div className="h-full bg-gradient-to-r from-orange-700 to-orange-400 w-[85%] shadow-[0_0_10px_rgba(251,146,60,0.5)] animate-pulse"></div></div></div>
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Runic Attacks</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-blue-900/20 border border-blue-700/30 p-3 rounded-xl text-center"><p className="text-xs font-bold text-blue-300">Leviathan's Wake</p><p className="text-[10px] text-blue-400 mt-1">Light Runic</p><span className="text-xs text-green-400 mt-2 block font-bold">READY</span></div>
        <div className="bg-blue-900/20 border border-blue-700/30 p-3 rounded-xl text-center"><p className="text-xs font-bold text-blue-300">Breath of Thamur</p><p className="text-[10px] text-blue-400 mt-1">Heavy Runic</p><span className="text-xs text-yellow-400 mt-2 block font-bold">CD: 22s</span></div>
        <div className="bg-orange-900/20 border border-orange-700/30 p-3 rounded-xl text-center"><p className="text-xs font-bold text-orange-300">Flames of Ares</p><p className="text-[10px] text-orange-400 mt-1">Blades Light</p><span className="text-xs text-green-400 mt-2 block font-bold">READY</span></div>
        <div className="bg-orange-900/20 border border-orange-700/30 p-3 rounded-xl text-center"><p className="text-xs font-bold text-orange-300">Meteoric Slam</p><p className="text-[10px] text-orange-400 mt-1">Blades Heavy</p><span className="text-xs text-red-400 mt-2 block font-bold">CD: 48s</span></div>
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Atreus</h3>
      <div className="bg-white/5 border border-gray-700 p-3 rounded-lg flex justify-between items-center"><div><p className="text-sm font-bold text-gray-200">Arrow Type</p><p className="text-[10px] text-gray-500 mt-1">Light Arrows (Shock)</p></div><div className="flex gap-1">{[1,2,3].map(i => <div key={i} className="w-2 h-8 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.5)]"></div>)}{[4,5].map(i => <div key={i} className="w-2 h-8 bg-gray-700 rounded-full"></div>)}</div></div>
    </div>
  );
}

function SpiderManView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-red-950/50 via-[#0a0a0a] to-blue-950/30 px-5 py-6 custom-scrollbar relative">
      <div className="flex items-center gap-3 mb-6 border-b border-red-900/50 pb-4">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center"><CircleDot className="w-6 h-6 text-white" /></div>
        <div><h2 className="text-xl font-bold text-white">SPIDER-MAN</h2><p className="text-[10px] text-red-400 uppercase tracking-widest">Peter Parker • Advanced Suit</p></div>
      </div>
      <div className="space-y-3 mb-6">
        <div><div className="flex justify-between text-xs mb-1"><span className="text-red-400 uppercase tracking-widest font-bold text-[10px]">Health</span><span className="text-red-400 font-bold">80%</span></div><div className="h-2.5 bg-black rounded-full overflow-hidden border border-red-900/30"><div className="h-full bg-gradient-to-r from-red-700 to-red-500 w-[80%]"></div></div></div>
        <div><div className="flex justify-between text-xs mb-1"><span className="text-yellow-400 uppercase tracking-widest font-bold text-[10px]">Focus</span><span className="text-yellow-400 font-bold">2 / 3 Bars</span></div><div className="flex gap-1">{[1,2].map(i => <div key={i} className="flex-1 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.4)]"></div>)}<div className="flex-1 h-2 bg-gray-800 rounded-full"></div></div></div>
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Suit Power</h3>
      <div className="bg-red-900/20 border border-red-700/30 p-4 rounded-xl mb-6"><p className="text-sm font-bold text-white">Web Blossom</p><p className="text-[10px] text-red-300 mt-1">Releases web all directions for instant crowd control.</p><span className="text-xs text-green-400 font-bold mt-2 block">CHARGED</span></div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Gadgets</h3>
      <div className="space-y-2">
        {[{ name: 'Impact Web', ammo: '8 / 10', color: 'text-cyan-400' }, { name: 'Web Bomb', ammo: '3 / 5', color: 'text-blue-400' }, { name: 'Spider Drone', ammo: '2 / 3', color: 'text-purple-400' }, { name: 'Trip Mine', ammo: '5 / 5', color: 'text-green-400' }].map(g => (
          <div key={g.name} className="flex justify-between items-center bg-white/5 border border-gray-700/50 p-3 rounded-lg"><span className="text-sm text-gray-200">{g.name}</span><span className={`text-sm font-bold font-mono ${g.color}`}>{g.ammo}</span></div>
        ))}
      </div>
    </div>
  );
}

function DoomView() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0000] px-5 py-6 custom-scrollbar font-mono relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ff0000,transparent_70%)] pointer-events-none"></div>
      <div className="relative z-10">
        <div className="text-center mb-6 border-b-2 border-red-800 pb-4"><h2 className="text-3xl font-black text-red-600 uppercase tracking-[0.3em]">DOOM</h2><p className="text-[10px] text-red-400/70 tracking-widest uppercase mt-1">SLAYER LINK ACTIVE</p></div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-red-950/50 border border-red-900 p-3 text-center"><span className="text-[10px] text-red-400 uppercase tracking-widest block mb-1">Health</span><span className="text-3xl font-black text-green-500">125</span></div>
          <div className="bg-red-950/50 border border-red-900 p-3 text-center"><span className="text-[10px] text-red-400 uppercase tracking-widest block mb-1">Armor</span><span className="text-3xl font-black text-blue-400">200</span></div>
        </div>
        <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">Equipment</h3>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center bg-[#1a0000] border-l-4 border-red-500 p-3"><span className="text-sm font-bold text-gray-200 uppercase">Blood Punch</span><div className="flex gap-1"><div className="w-4 h-4 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div><div className="w-4 h-4 bg-gray-800"></div></div></div>
          <div className="flex justify-between items-center bg-[#1a0000] border-l-4 border-yellow-600 p-3"><span className="text-sm font-bold text-gray-200 uppercase">Chainsaw Fuel</span><div className="flex gap-1">{[1,2,3].map(i => <div key={i} className="w-2 h-5 bg-yellow-500 rounded-sm shadow-[0_0_5px_rgba(234,179,8,0.4)]"></div>)}</div></div>
          <div className="flex justify-between items-center bg-[#1a0000] border-l-4 border-orange-500 p-3"><span className="text-sm font-bold text-gray-200 uppercase">Flame Belch</span><span className="text-xs text-green-400 font-bold">READY</span></div>
          <div className="flex justify-between items-center bg-[#1a0000] border-l-4 border-cyan-500 p-3"><span className="text-sm font-bold text-gray-200 uppercase">Dash</span><div className="flex gap-1"><div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.5)]"></div><div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.5)]"></div></div></div>
        </div>
        <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">Crucible</h3>
        <div className="bg-[#1a0000] border border-red-900 p-3 flex justify-between items-center"><span className="text-sm font-bold text-orange-400 uppercase">Blade Charges</span><div className="flex gap-2">{[1,2].map(i => <div key={i} className="w-2 h-6 bg-orange-500 rounded-sm shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>)}<div className="w-2 h-6 bg-gray-800 rounded-sm"></div></div></div>
      </div>
    </div>
  );
}

function HorizonView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1a1510] to-[#0d1117] px-5 py-6 custom-scrollbar relative">
      <div className="flex items-center gap-3 mb-6 border-b border-orange-900/40 pb-4">
        <Eye className="w-8 h-8 text-orange-400" />
        <div><h2 className="text-xl font-bold text-white">ALOY</h2><p className="text-[10px] text-orange-400 uppercase tracking-widest">Machine Hunter • Nora Outcast</p></div>
      </div>
      <div className="space-y-3 mb-6">
        <div><div className="flex justify-between text-xs mb-1"><span className="text-green-400 uppercase tracking-widest font-bold text-[10px]">Health</span><span className="text-green-400 font-bold">420 / 500</span></div><div className="h-2 bg-black rounded-full overflow-hidden border border-green-900/30"><div className="h-full bg-gradient-to-r from-green-700 to-green-400 w-[84%]"></div></div></div>
        <div><div className="flex justify-between text-xs mb-1"><span className="text-purple-400 uppercase tracking-widest font-bold text-[10px]">Concentration</span></div><div className="h-2 bg-black rounded-full overflow-hidden border border-purple-900/30"><div className="h-full bg-gradient-to-r from-purple-700 to-purple-400 w-[100%] shadow-[0_0_8px_rgba(192,132,252,0.3)]"></div></div></div>
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Weapon Wheel</h3>
      <div className="space-y-2 mb-6">
        {[{ name: 'Sharpshot Bow', ammo: 'Precision: 12 | Tearblast: 5', active: true }, { name: 'Hunter Bow', ammo: 'Fire: 24 | Hardpoint: 18', active: false }, { name: 'Tripcaster', ammo: 'Shock Wire: 8 | Blast: 3', active: false }, { name: 'Ropecaster', ammo: 'Tie-Down: 15', active: false }].map(w => (
          <div key={w.name} className={`p-3 rounded-lg flex flex-col border ${w.active ? 'bg-orange-900/20 border-orange-500/50' : 'bg-white/5 border-gray-700/50'}`}><span className={`text-sm font-bold ${w.active ? 'text-orange-300' : 'text-gray-300'}`}>{w.name}</span><span className="text-[10px] text-gray-400 mt-1 font-mono">{w.ammo}</span></div>
        ))}
      </div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Resources</h3>
      <div className="grid grid-cols-3 gap-2">
        {[{ n: 'Metal Shards', v: '2,450', c: 'text-gray-300' }, { n: 'Ridgewood', v: '38', c: 'text-green-400' }, { n: 'Wire', v: '15', c: 'text-cyan-400' }].map(r => (
          <div key={r.n} className="bg-white/5 border border-gray-700/50 p-2 rounded text-center"><span className="text-[9px] text-gray-500 block">{r.n}</span><span className={`text-sm font-bold ${r.c}`}>{r.v}</span></div>
        ))}
      </div>
    </div>
  );
}

function RE4View() {
  const gridItems = [
    { name: 'Handgun', w: 2, h: 1, color: 'bg-gray-600' },
    { name: 'Shotgun', w: 2, h: 2, color: 'bg-gray-600' },
    { name: 'Herb (G)', w: 1, h: 1, color: 'bg-green-700' },
    { name: 'Herb (R)', w: 1, h: 1, color: 'bg-red-700' },
    { name: 'Ammo', w: 1, h: 1, color: 'bg-yellow-700' },
    { name: 'Ammo', w: 1, h: 1, color: 'bg-yellow-700' },
    { name: 'First Aid', w: 1, h: 1, color: 'bg-green-600' },
    { name: 'Key', w: 1, h: 1, color: 'bg-purple-700' },
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0a] px-5 py-6 custom-scrollbar relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,transparent_50%,#000_100%)] pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 border-b border-red-900/30 pb-4">
          <Package className="w-7 h-7 text-red-400" />
          <div><h2 className="text-xl font-bold text-white">Attaché Case</h2><p className="text-[10px] text-red-400 uppercase tracking-widest">Leon S. Kennedy</p></div>
        </div>
        <div className="bg-[#1a1512] border-2 border-[#3a2d20] p-3 rounded-lg mb-6 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-5 gap-1">
            {gridItems.map((item, i) => (
              <div key={i} className={`${item.color} border border-black/50 rounded-sm flex items-center justify-center p-1 shadow-inner`} style={{ gridColumn: `span ${item.w}`, gridRow: `span ${item.h}` }}>
                <span className="text-[8px] text-white/80 font-bold text-center leading-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 border border-gray-700 p-3 rounded-lg text-center"><span className="text-[10px] text-gray-500 uppercase block mb-1">Pesetas</span><span className="text-xl font-bold text-yellow-400 font-mono">₧ 84,500</span></div>
          <div className="bg-white/5 border border-gray-700 p-3 rounded-lg text-center"><span className="text-[10px] text-gray-500 uppercase block mb-1">Knife</span><span className="text-xl font-bold text-red-400 font-mono">62%</span><p className="text-[9px] text-gray-500">Durability</p></div>
        </div>
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Ammunition</h3>
        <div className="space-y-2">
          {[{ n: 'Handgun Ammo', v: '48' }, { n: 'Shotgun Shells', v: '15' }, { n: 'Rifle Ammo', v: '22' }, { n: 'Magnum Ammo', v: '6' }].map(a => (
            <div key={a.n} className="flex justify-between items-center bg-white/5 border border-gray-800 p-2 rounded"><span className="text-xs text-gray-300">{a.n}</span><span className="text-sm font-bold text-white font-mono">{a.v}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FF7RView() {
  const characters = [
    { name: 'Cloud', hp: 4850, maxHp: 5200, mp: 78, maxMp: 120, atb: 2, limit: 85, color: 'border-blue-500' },
    { name: 'Tifa', hp: 3900, maxHp: 4100, mp: 55, maxMp: 90, atb: 1, limit: 40, color: 'border-red-500' },
    { name: 'Aerith', hp: 3200, maxHp: 3600, mp: 145, maxMp: 180, atb: 2, limit: 92, color: 'border-green-500' },
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#0a0d1a] to-[#0d0a1a] px-5 py-6 custom-scrollbar relative">
      <div className="flex items-center gap-3 mb-6 border-b border-blue-900/30 pb-4">
        <Sparkles className="w-7 h-7 text-blue-400" />
        <div><h2 className="text-xl font-bold text-white">Party Status</h2><p className="text-[10px] text-blue-400 uppercase tracking-widest">Midgar Sector 7</p></div>
      </div>
      <div className="space-y-4">
        {characters.map(ch => (
          <div key={ch.name} className={`bg-white/5 border-l-4 ${ch.color} p-4 rounded-r-xl`}>
            <div className="flex justify-between items-center mb-3"><span className="text-lg font-bold text-white">{ch.name}</span><div className="flex gap-1">{Array.from({ length: ch.atb }).map((_, i) => <div key={i} className="w-5 h-5 bg-gradient-to-t from-orange-500 to-yellow-400 rounded shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>)}{Array.from({ length: 2 - ch.atb }).map((_, i) => <div key={i} className="w-5 h-5 bg-gray-800 rounded border border-gray-700"></div>)}</div></div>
            <div className="space-y-2">
              <div><div className="flex justify-between text-[10px] mb-0.5"><span className="text-green-400 font-bold">HP</span><span className="text-gray-400">{ch.hp} / {ch.maxHp}</span></div><div className="h-1.5 bg-black rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-600 to-green-400" style={{ width: `${(ch.hp/ch.maxHp)*100}%` }}></div></div></div>
              <div><div className="flex justify-between text-[10px] mb-0.5"><span className="text-blue-400 font-bold">MP</span><span className="text-gray-400">{ch.mp} / {ch.maxMp}</span></div><div className="h-1.5 bg-black rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${(ch.mp/ch.maxMp)*100}%` }}></div></div></div>
              <div><div className="flex justify-between text-[10px] mb-0.5"><span className="text-pink-400 font-bold">Limit Break</span><span className="text-gray-400">{ch.limit}%</span></div><div className="h-1.5 bg-black rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r from-pink-600 to-pink-400 ${ch.limit > 80 ? 'animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.5)]' : ''}`} style={{ width: `${ch.limit}%` }}></div></div></div>
            </div>
            <div className="flex gap-1 mt-3">{['green', 'blue', 'red', 'yellow'].slice(0, 3 + (ch.name === 'Aerith' ? 1 : 0)).map((c, i) => <div key={i} className={`w-4 h-4 rounded-full bg-${c}-500 shadow-[0_0_6px_rgba(0,0,0,0.5)] border border-${c}-300`}></div>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeathStrandingView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#0d1117] to-[#1a1a2e] px-5 py-6 custom-scrollbar relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,#06b6d4,transparent_60%)] pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 border-b border-cyan-900/30 pb-4">
          <GitBranch className="w-7 h-7 text-cyan-400" />
          <div><h2 className="text-xl font-bold text-white">Sam Porter Bridges</h2><p className="text-[10px] text-cyan-400 uppercase tracking-widest">Bridges • Porter</p></div>
        </div>

        {/* BB Status */}
        <div className="bg-cyan-900/10 border border-cyan-800/30 p-4 rounded-xl mb-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-cyan-900/30 border-2 border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.15)]"><Baby className="w-7 h-7 text-cyan-400" /></div>
          <div className="flex-1"><p className="text-sm font-bold text-cyan-300">BB-28</p><div className="flex justify-between text-[10px] mb-1 mt-1"><span className="text-gray-400">Stress Level</span><span className="text-green-400 font-bold">Low (12%)</span></div><div className="h-1.5 bg-black rounded-full overflow-hidden border border-cyan-900/30"><div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[12%]"></div></div></div>
        </div>

        {/* Cargo */}
        <div className="bg-white/5 border border-gray-700 p-4 rounded-xl mb-5">
          <div className="flex justify-between items-center mb-3"><h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cargo Load</h3><span className="text-xs font-bold text-yellow-400">78.4 kg / 120 kg</span></div>
          <div className="h-3 bg-black rounded-full overflow-hidden border border-gray-800 mb-3"><div className="h-full bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 w-[65%]"></div></div>
          <div className="flex justify-between text-[10px] text-gray-500"><span>Balance: Stable</span><span>Packages: 6</span></div>
        </div>

        {/* Chiral Network */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-white/5 border border-gray-700 p-3 rounded-lg text-center"><Layers className="w-5 h-5 text-cyan-400 mx-auto mb-1" /><span className="text-[9px] text-gray-500 uppercase block">Chiral Network</span><span className="text-sm font-bold text-cyan-400">CONNECTED</span></div>
          <div className="bg-white/5 border border-gray-700 p-3 rounded-lg text-center"><Battery className="w-5 h-5 text-yellow-400 mx-auto mb-1" /><span className="text-[9px] text-gray-500 uppercase block">Battery</span><span className="text-sm font-bold text-yellow-400">64%</span></div>
        </div>

        {/* Likes */}
        <div className="bg-blue-900/10 border border-blue-800/30 p-4 rounded-xl text-center">
          <p className="text-3xl font-black text-blue-400">12,847</p>
          <p className="text-[10px] text-blue-300/70 uppercase tracking-widest mt-1">Total Likes Received</p>
        </div>
      </div>
    </div>
  );
}
