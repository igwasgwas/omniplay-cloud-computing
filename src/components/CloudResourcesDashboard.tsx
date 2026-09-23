import React from 'react';
import { Cloud, Cpu, Zap, HardDrive, Globe, Network, Server, Activity, ArrowUpRight, ArrowDownRight, Terminal, MonitorSmartphone } from 'lucide-react';

export default function CloudResourcesDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cloud Infrastructure Manager</h1>
        <p className="text-gray-400">Manage your active cloud computing instances, storage, and network topology.</p>
      </header>

      {/* Network Topology & Live Nodes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Primary GPU Node */}
        <div className="xl:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)]">
          <div className="absolute top-0 right-0 p-6">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              ACTIVE (STREAMING)
            </span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-xl">
              <Server className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">OmniRig-X1 (Primary Edge Node)</h2>
              <p className="text-cyan-400 font-mono text-sm">IP: 192.168.cloud.42</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Cpu className="w-4 h-4" /> <span className="text-xs uppercase">Compute</span>
              </div>
              <p className="font-bold text-sm">AMD EPYC™ 9654</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-xs text-gray-500">Load</span>
                <span className="text-xs font-bold text-yellow-400">72%</span>
              </div>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-1">
                <div className="h-full bg-yellow-400 rounded-full w-[72%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)] relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                 <Zap className="w-24 h-24 text-cyan-500" />
              </div>
              <div className="flex items-center gap-2 mb-2 text-gray-400 relative z-10">
                <Zap className="w-4 h-4 text-cyan-400" /> <span className="text-xs uppercase">Graphics</span>
              </div>
              <p className="font-bold text-sm text-cyan-400 relative z-10">RTX 4090 Virtual</p>
              <div className="mt-2 flex items-end justify-between relative z-10">
                <span className="text-xs text-gray-500">VRAM</span>
                <span className="text-xs font-bold text-cyan-400">22.4/24 GB</span>
              </div>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-1 relative z-10">
                <div className="h-full bg-cyan-400 rounded-full w-[94%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <HardDrive className="w-4 h-4" /> <span className="text-xs uppercase">Storage</span>
              </div>
              <p className="font-bold text-sm">2 TB NVMe SAN</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-xs text-gray-500">I/O Wait</span>
                <span className="text-xs font-bold text-green-400">0.4ms</span>
              </div>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-1">
                <div className="h-full bg-green-400 rounded-full w-[10%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Globe className="w-4 h-4" /> <span className="text-xs uppercase">Location</span>
              </div>
              <p className="font-bold text-sm">Singapore (ap-se-1)</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-xs text-gray-500">RTT</span>
                <span className="text-xs font-bold text-green-400">12ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Terminal Logs */}
        <div className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-4 flex flex-col relative font-mono overflow-hidden">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
            <Terminal className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400 font-bold tracking-widest">SYSLOG_TAIL</span>
            <div className="ml-auto flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto text-[10px] space-y-1.5 custom-scrollbar pb-2 text-gray-400 opacity-90 h-[200px]">
             <p><span className="text-gray-500">[14:02:11]</span> <span className="text-blue-400">INFO</span> Establishing WebRTC handshakes...</p>
             <p><span className="text-gray-500">[14:02:12]</span> <span className="text-green-400">SUCCESS</span> PeerConnection established (ICE: connected)</p>
             <p><span className="text-gray-500">[14:02:12]</span> <span className="text-blue-400">INFO</span> Negotiating video codec (AV1 preferred)</p>
             <p><span className="text-gray-500">[14:02:13]</span> <span className="text-purple-400">STREAM</span> Initializing NvFBC capture...</p>
             <p><span className="text-gray-500">[14:02:13]</span> <span className="text-yellow-400">WARN</span> Slight jitter detected on eth0, compensating buffer.</p>
             <p><span className="text-gray-500">[14:02:15]</span> <span className="text-green-400">SUCCESS</span> Stream stable at 4K @ 120fps (45.2 Mbps)</p>
             <p><span className="text-gray-500">[14:03:00]</span> <span className="text-blue-400">INFO</span> Allocating 12GB VRAM paging file...</p>
             <p><span className="text-gray-500">[14:04:15]</span> <span className="text-cyan-400">SYS</span> CPU scaling governor active. Clock boosted to 4.8GHz.</p>
             <p className="animate-pulse">_</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bandwidth Monitor */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
           <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Network className="text-cyan-400 w-5 h-5" />
            Network Topology & Throughput
          </h3>
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 border border-gray-700">
                <MonitorSmartphone className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs font-bold text-gray-300">Client Device</p>
            </div>
            
            <div className="flex-1 px-4 relative flex items-center justify-center">
               <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden absolute">
                 <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:200%_100%] animate-[flow_2s_linear_infinite]"></div>
               </div>
               <div className="bg-gray-900 px-3 py-1 rounded-full text-[10px] font-mono text-cyan-400 border border-cyan-900 relative z-10 flex gap-2">
                 <span>↓ 45.2 Mbps</span>
                 <span>↑ 2.1 Mbps</span>
               </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center mx-auto mb-2 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Cloud className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs font-bold text-cyan-400">Edge Node</p>
            </div>
          </div>

          <div className="space-y-4">
             <div className="flex justify-between items-end pb-2 border-b border-gray-800">
               <div>
                 <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Packet Loss</span>
                 <span className="text-lg font-bold text-green-400">0.00%</span>
               </div>
               <Activity className="w-8 h-4 text-green-500/50" />
             </div>
             <div className="flex justify-between items-end pb-2 border-b border-gray-800">
               <div>
                 <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Network Jitter</span>
                 <span className="text-lg font-bold text-yellow-400">1.2 ms</span>
               </div>
               <Activity className="w-8 h-4 text-yellow-500/50" />
             </div>
          </div>
        </div>

        {/* Temperature Monitor Mockup */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
           <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Activity className="text-red-400 w-5 h-5" />
            Thermal Management
          </h3>
          
          <div className="flex flex-col gap-6">
            <div className="relative pt-6">
              <div className="absolute top-0 left-0 w-full flex justify-between text-xs text-gray-500">
                <span>0°C</span>
                <span>50°C</span>
                <span>100°C</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold">GPU Core</span>
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[65%] bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                </div>
                <span className="w-10 text-right text-sm font-bold text-yellow-400">65°C</span>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold">VRAM</span>
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[82%] bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
                <span className="w-10 text-right text-sm font-bold text-red-400">82°C</span>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold">CPU Pkg</span>
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
                </div>
                <span className="w-10 text-right text-sm font-bold text-green-400">55°C</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-3 bg-cyan-900/20 border border-cyan-800 rounded-lg flex items-start gap-3">
            <span className="flex-shrink-0 text-cyan-400 text-xl">ℹ️</span>
            <p className="text-xs text-cyan-200/80 leading-relaxed">
              Liquid cooling loop operating at nominal pressure. Thermal throttling disabled. Sustained boost clocks available indefinitely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
