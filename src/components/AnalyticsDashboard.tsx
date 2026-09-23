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
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-xs uppercase tracking-widest font-bold">Sessions</span>
          </div>
          <p className="text-3xl font-black text-white">312</p>
          <p className="text-xs text-gray-500 mt-1">Avg 2.7 hrs/session</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* FPS Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="text-green-400 w-5 h-5" />
            FPS Timeline (Last Session)
          </h3>
          <div className="flex items-end gap-1 h-40">
            {fpsHistory.map((fps, i) => {
              const height = ((fps - 90) / 40) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                  <span className="text-[9px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{fps}</span>
                  <div
                    className="w-full rounded-t transition-all duration-300 group-hover:opacity-100 opacity-80"
                    style={{
                      height: `${height}%`,
                      background: fps >= 120 ? 'linear-gradient(to top, #22c55e, #4ade80)' :
                                  fps >= 110 ? 'linear-gradient(to top, #06b6d4, #22d3ee)' :
                                  'linear-gradient(to top, #eab308, #facc15)',
                      boxShadow: fps >= 120 ? '0 0 8px rgba(34,197,94,0.4)' : 'none'
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 mt-2 border-t border-gray-800 pt-2">
            <span>0:00</span>
            <span>Session Duration</span>
            <span>2:45:00</span>
          </div>
        </div>

        {/* Frametime Distribution */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Activity className="text-purple-400 w-5 h-5" />
            Frametime Distribution
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">{"< 8.3ms (120+ fps)"}</span>
                <span className="text-green-400 font-bold">72%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full w-[72%] shadow-[0_0_10px_rgba(74,222,128,0.3)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">8.3ms - 16.7ms (60-120 fps)</span>
                <span className="text-cyan-400 font-bold">24%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full w-[24%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">{"16.7ms - 33.3ms (30-60 fps)"}</span>
                <span className="text-yellow-400 font-bold">3%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full w-[3%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">{"> 33.3ms (stutter)"}</span>
                <span className="text-red-400 font-bold">1%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full w-[1%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Flame className="text-orange-400 w-5 h-5" />
          Weekly Activity Heatmap
        </h3>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex gap-0.5 mb-1 pl-10">
              {hours.filter((_, i) => i % 3 === 0).map(h => (
                <div key={h} className="text-[9px] text-gray-500 text-center" style={{ width: `${(3/24)*100}%` }}>
                  {h.toString().padStart(2, '0')}:00
                </div>
              ))}
            </div>
            {weekDays.map((day, di) => (
              <div key={day} className="flex items-center gap-1 mb-0.5">
                <span className="w-8 text-[10px] text-gray-500 text-right shrink-0">{day}</span>
                <div className="flex-1 flex gap-0.5">
                  {heatmapData[di].map((val, hi) => (
                    <div
                      key={hi}
                      className={`flex-1 h-4 rounded-sm ${getHeatColor(val)} transition-all hover:ring-1 hover:ring-cyan-400 cursor-pointer`}
                      title={`${day} ${hi}:00 - Intensity: ${val}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-3 pl-10">
              <span className="text-[10px] text-gray-500">Less</span>
              {[0,1,2,3,4,5].map(v => (
                <div key={v} className={`w-3 h-3 rounded-sm ${getHeatColor(v)}`}></div>
              ))}
              <span className="text-[10px] text-gray-500">More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game-Specific Insights */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Trophy className="text-yellow-400 w-5 h-5" />
          Game-Specific Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gameInsights.map((insight, i) => (
            <div key={i} className="bg-gray-800/50 border border-gray-700/50 p-4 rounded-xl flex items-center gap-4 hover:border-gray-600 transition-colors">
              <div className={`p-3 bg-gray-900 rounded-lg ${insight.color}`}>
                {insight.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{insight.game}</p>
                <p className="text-sm font-bold text-gray-300">{insight.stat}</p>
                <p className={`text-lg font-black ${insight.color}`}>{insight.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
