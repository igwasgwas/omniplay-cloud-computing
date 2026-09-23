import React, { useState, useEffect } from 'react';
import { Cloud, Cpu, Zap, HardDrive, Globe, Network, Server, Activity, ArrowUpRight, ArrowDownRight, Terminal, MonitorSmartphone, Power, Loader2 } from 'lucide-react';

export default function CloudResourcesDashboard() {
  const [rebooting, setRebooting] = useState(false);
  const [rebootStep, setRebootStep] = useState(0);

  const handleReboot = () => {
    setRebooting(true);
    setRebootStep(1);
    setTimeout(() => setRebootStep(2), 2000);
    setTimeout(() => setRebootStep(3), 4000);
    setTimeout(() => {
      setRebooting(false);
      setRebootStep(0);
    }, 6000);
  };

  return (
    <div className="p-8 pb-20">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">Cloud Infrastructure Manager</h1>
          <p className="text-gray-400">Manage your active cloud computing instances, storage, and network topology.</p>
        </div>
        <button 
          onClick={handleReboot}
          disabled={rebooting}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${rebooting ? 'bg-red-900/50 text-red-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)] active:scale-95 cursor-pointer'}`}
        >
          {rebooting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Power className="w-4 h-4" />}
          {rebooting ? 'REBOOTING...' : 'REBOOT SERVER'}
        </button>
      </header>

      {/* Network Topology & Live Nodes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Primary GPU Node */}
        <div className={`xl:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border ${rebooting ? 'border-red-500/50' : 'border-cyan-500/30'} rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-colors duration-500`}>
          <div className="absolute top-0 right-0 p-6">
            <span className={`px-3 py-1 ${rebooting ? 'bg-red-500/20 text-red-500 border-red-500/50' : 'bg-green-500/20 text-green-400 border-green-500/30'} border rounded-full text-xs font-bold flex items-center gap-2`}>
              <span className={`w-2 h-2 rounded-full ${rebooting ? 'bg-red-500' : 'bg-green-400 animate-pulse'}`}></span>
              {rebooting ? 'OFFLINE' : 'ACTIVE (STREAMING)'}
            </span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-xl transition-colors duration-500 ${rebooting ? 'bg-red-900/30' : 'bg-cyan-500/20'}`}>
              <Server className={`w-8 h-8 ${rebooting ? 'text-red-500' : 'text-cyan-400'}`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">OmniRig-X1 (Primary Edge Node)</h2>
              <p className={`${rebooting ? 'text-red-500' : 'text-cyan-400'} font-mono text-sm`}>IP: 192.168.cloud.42</p>
            </div>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${rebooting ? 'opacity-30 grayscale' : ''} transition-all duration-500`}>
            {/* Same internal widgets, just grayed out when rebooting */}
            <div className="bg-gray-950/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Cpu className="w-4 h-4" /> <span className="text-xs uppercase">Compute</span>
              </div>
              <p className="font-bold text-sm text-white">AMD EPYC™ 9654</p>
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
              <p className="font-bold text-sm text-white">2 TB NVMe SAN</p>
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
              <p className="font-bold text-sm text-white">Singapore (ap-se-1)</p>
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
          
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c] z-10 pointer-events-none h-full"></div>
            
            <div className="text-[10px] sm:text-xs text-green-500/80 leading-relaxed space-y-1 h-full overflow-hidden absolute bottom-0 w-full flex flex-col justify-end">
              {rebooting ? (
                <>
                  <div className="text-red-500 font-bold">[!] SYSTEM HALT INITIATED...</div>
                  <div className="text-red-500">Stopping all active containers...</div>
                  {rebootStep > 1 && <div className="text-yellow-500">Restarting hardware controller...</div>}
                  {rebootStep > 1 && <div className="text-gray-500">Bios check OK.</div>}
                  {rebootStep > 2 && <div className="text-cyan-400">Booting OmniOS v4.12...</div>}
                  {rebootStep > 2 && <div className="text-green-500">Mounting drives... OK</div>}
                  {rebootStep > 2 && <div className="text-green-500 animate-pulse">Waiting for connection...</div>}
                </>
              ) : (
                <>
                  <div>[14:22:01] kernel: [  0.000000] Linux version 6.5.0-cloud</div>
                  <div>[14:22:15] nvidia: loading out-of-tree module taints kernel</div>
                  <div>[14:22:15] nvidia: module license 'NVIDIA' taints kernel</div>
                  <div>[14:23:42] webrtc-streamer: Client connected (Axioo-Pongo-725)</div>
                  <div>[14:23:42] webrtc-streamer: Negotiated codec: H265 Main10 @ 60fps</div>
                  <div className="text-yellow-400">[14:35:12] vgpu_alloc: Process (EA FC 25) requesting 16GB VRAM</div>
                  <div className="text-cyan-400">[14:35:14] vgpu_alloc: Granted. Active profiles: 1</div>
                  <div>[14:40:02] pcieport 0000:00:01.0: AER: Corrected error received</div>
                  <div>[14:40:05] webrtc-streamer: Latency spike detected (18ms)</div>
                  <div className="text-green-400">[14:40:08] webrtc-streamer: Latency stabilized (12ms)</div>
                  <div className="animate-pulse">_</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Connection Topology */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-6 text-white">Active Connection Topology</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between relative px-4 md:px-12 py-8">
          {/* Animated connection lines */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="h-0.5 w-full bg-gray-800 relative">
              {!rebooting && (
                <>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-cyan-400 shadow-[0_0_10px_cyan] w-24 animate-[slideRight_2s_linear_infinite]"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 h-1 bg-blue-500 shadow-[0_0_10px_blue] w-24 animate-[slideLeft_2s_linear_infinite]"></div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center z-10 bg-gray-900 p-2 relative">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-600 mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <MonitorSmartphone className="w-8 h-8 text-gray-400" />
            </div>
            <span className="font-bold text-white">Local Client</span>
            <span className="text-xs text-gray-500">192.168.1.5</span>
          </div>

          <div className="flex flex-col items-center z-10 bg-gray-900 p-2 relative my-8 md:my-0">
            <div className={`w-20 h-20 rounded-full ${rebooting ? 'bg-red-900/20 border-red-500/30' : 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]'} flex items-center justify-center border-2 mb-3 transition-colors duration-500`}>
              <Network className={`w-10 h-10 ${rebooting ? 'text-red-500' : 'text-purple-400'}`} />
            </div>
            <span className="font-bold text-purple-300">OmniPlay Gateway</span>
            <span className="text-xs text-purple-400/50">WSS (Port 443)</span>
          </div>

          <div className="flex flex-col items-center z-10 bg-gray-900 p-2 relative">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 mb-3 transition-colors duration-500 ${rebooting ? 'bg-red-900/20 border-red-500/30' : 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]'}`}>
              <Cloud className={`w-8 h-8 ${rebooting ? 'text-red-500' : 'text-cyan-400'}`} />
            </div>
            <span className="font-bold text-cyan-300">Edge Node</span>
            <span className="text-xs text-cyan-500/50">GPU Instance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
