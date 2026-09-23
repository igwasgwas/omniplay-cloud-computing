import React, { useState, useRef, useEffect } from 'react';
import { BarChart3, Download, ChevronDown, FileText, FileJson, Zap, Activity, Clock, Flame, Trophy, Target, Crosshair, Gauge } from 'lucide-react';

export default function AnalyticsDashboard() {
  const [exportOpen, setExportOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const heatmapData = [
    [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,2,3,4,4,3,2,1],
    [0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,1,2,3,3,4,5,4,3,1],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,2,2,3,4,4,3,2],
    [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,1,2,3,4,5,5,4,3,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,2,3,4,5,5,5,4,2],
    [0,0,0,0,0,0,1,2,3,4,4,3,3,2,2,3,4,5,5,5,5,4,3,1],
    [0,0,0,0,0,0,1,2,3,4,5,4,4,3,3,4,5,5,4,4,3,2,1,0],
  ];
  const getHeatColor = (val: number) => {
    const colors = ['bg-gray-800/50', 'bg-cyan-900/40', 'bg-cyan-700/50', 'bg-cyan-600/60', 'bg-cyan-500/70', 'bg-cyan-400/80'];
    return colors[val] || colors[0];
  };

  const gameInsights = [
    { game: 'Forza Horizon 5', stat: 'Best Lap Time', value: '1:32.458', icon: <Gauge className="w-4 h-4" />, color: 'text-pink-400' },
    { game: 'Helldivers 2', stat: 'Headshot %', value: '34.2%', icon: <Crosshair className="w-4 h-4" />, color: 'text-yellow-400' },
    { game: 'Black Myth: Wukong', stat: 'Boss Defeated', value: '12 / 28', icon: <Trophy className="w-4 h-4" />, color: 'text-amber-500' },
    { game: 'Cyberpunk 2077', stat: 'Missions Completed', value: '47 / 65', icon: <Target className="w-4 h-4" />, color: 'text-yellow-500' },
    { game: 'EA FC 25', stat: 'Win Rate (FUT)', value: '68.5%', icon: <Trophy className="w-4 h-4" />, color: 'text-emerald-400' },
    { game: 'Elden Ring', stat: 'Deaths', value: '247', icon: <Flame className="w-4 h-4" />, color: 'text-red-400' },
  ];

  const fpsHistory = [105, 112, 118, 115, 120, 119, 117, 121, 118, 116, 119, 122, 120, 118, 115, 117, 119, 121, 118, 120];

  return (
    <div className="p-8">
      <header className="mb-8 flex justify-between items-center relative">
        <div>
          <h1 className="text-3xl font-bold mb-2">Performance Analytics</h1>
          <p className="text-gray-400">Deep insights into your gameplay and system performance.</p>
        </div>

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
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-20">
              <button onClick={() => setExportOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-700 transition-colors cursor-pointer">
                <FileText className="w-4 h-4 text-gray-400" /> Export as PDF
              </button>
              <button onClick={() => setExportOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-700 transition-colors border-t border-gray-700/50 cursor-pointer">
                <FileJson className="w-4 h-4 text-cyan-400" /> Export as JSON
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-bold">Total Playtime</span>
          </div>
          <p className="text-3xl font-black text-white">847<span className="text-lg text-gray-400 ml-1">hrs</span></p>
          <p className="text-xs text-green-400 mt-1 flex items-center gap-1"><span>↑ 12%</span> vs last month</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-xs uppercase tracking-widest font-bold">Avg FPS</span>
          </div>
          <p className="text-3xl font-black text-green-400">118<span className="text-lg text-gray-400 ml-1">fps</span></p>
          <p className="text-xs text-gray-500 mt-1">1% Low: 94 fps</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest font-bold">Input Latency</span>
          </div>
          <p className="text-3xl font-black text-cyan-400">4.2<span className="text-lg text-gray-400 ml-1">ms</span></p>
          <p className="text-xs text-gray-500 mt-1">End-to-end (cloud)</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-widest font-bold">Bandwidth</span>
          </div>
          <p className="text-3xl font-black text-purple-400">48<span className="text-lg text-gray-400 ml-1">Mbps</span></p>
          <p className="text-xs text-gray-500 mt-1">Peak: 65 Mbps</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* FPS Custom Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg">Framerate Stability (Last Session)</h3>
            <span className="text-xs font-bold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">Cyberpunk 2077</span>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-1 mt-4 relative">
            {/* Y-Axis lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="border-b border-gray-800/50 w-full flex-1"></div>
              <div className="border-b border-gray-800/50 w-full flex-1"></div>
              <div className="border-b border-gray-800/50 w-full flex-1"></div>
              <div className="border-b border-gray-800/50 w-full flex-1"></div>
            </div>
            {/* Y-Axis labels */}
            <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-[10px] text-gray-600 pb-6 font-mono pointer-events-none">
              <span>144</span>
              <span>120</span>
              <span>90</span>
              <span>60</span>
              <span>0</span>
            </div>

            {/* Bars */}
            {fpsHistory.map((fps, i) => (
              <div key={i} className="group relative w-full flex flex-col justify-end h-full cursor-crosshair z-10">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-300 group-hover:brightness-125 ${
                    fps >= 120 ? 'bg-green-500' : fps >= 100 ? 'bg-cyan-500' : 'bg-yellow-500'
                  }`}
                  style={{ height: `${(fps / 144) * 100}%` }}
                ></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black border border-gray-700 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                  {fps} FPS
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-gray-700 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono pl-2">
            <span>0m</span>
            <span>10m</span>
            <span>20m</span>
            <span>30m</span>
            <span>40m</span>
            <span>50m</span>
            <span>60m</span>
          </div>
        </div>

        {/* Game Specific Insights */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-6">Game Insights</h3>
          <div className="space-y-4">
            {gameInsights.map((insight, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-950/50 p-3 rounded-lg border border-gray-800/50 hover:bg-gray-800 transition-colors cursor-default">
                <div className={`p-2 rounded-lg bg-gray-900 border border-gray-800 ${insight.color}`}>
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">{insight.game}</p>
                  <p className="text-sm font-bold text-white">{insight.stat}</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono font-bold ${insight.color}`}>{insight.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-6 overflow-x-auto">
        <h3 className="font-bold text-lg mb-6">Activity Heatmap (Current Week)</h3>
        <div className="flex gap-2 min-w-max pb-4">
          <div className="flex flex-col gap-1 pr-2 border-r border-gray-800">
            {weekDays.map(day => (
              <div key={day} className="h-6 flex items-center text-[10px] font-bold text-gray-500">{day}</div>
            ))}
          </div>
          
          <div className="flex-1">
            <div className="flex gap-1 mb-2">
              {hours.map(h => (
                <div key={h} className="flex-1 text-center text-[10px] text-gray-600">{h}</div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {heatmapData.map((dayData, dayIndex) => (
                <div key={dayIndex} className="flex gap-1">
                  {dayData.map((val, hourIndex) => (
                    <div 
                      key={`${dayIndex}-${hourIndex}`} 
                      className={`group relative flex-1 h-6 rounded-sm ${getHeatColor(val)} hover:ring-1 hover:ring-white transition-all cursor-crosshair`}
                    >
                      {/* Tooltip */}
                      {val > 0 && (
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black border border-gray-700 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                          {val} hrs played at {hours[hourIndex]}:00
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 justify-end">
          <span>Less</span>
          <div className="flex gap-1">
            {[0,1,2,3,4,5].map(v => (
              <div key={v} className={`w-3 h-3 rounded-sm ${getHeatColor(v)}`}></div>
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

    </div>
  );
}
