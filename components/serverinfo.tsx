import React, { useState } from 'react';
import { Copy, Check, Server, Mic, Globe, Cpu, Wifi, Activity } from 'lucide-react';

export const ServerInfo: React.FC = () => {
  return (
    <div id="server-info" className="py-32 bg-dark-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark-900 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <span className="text-gold-500 font-mono text-sm tracking-[0.3em] mb-2">BAĞLANTI MERKEZİ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center">
            SUNUCU <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">BİLGİLERİ</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Server Card */}
          <ServerCard 
            title="CS 1.6 PRO PUBLIC"
            address="95.173.173.16"
            status="ONLINE"
            players="32/32"
            ping="5ms"
            map="de_dust2"
            type="GAME"
          />

          {/* TS3 Card */}
          <ServerCard 
            title="TEAMSPEAK 3"
            address="tapro"
            status="ONLINE"
            players="Aktif"
            ping="2ms"
            map="Lobby"
            type="VOICE"
          />
        </div>
      </div>
    </div>
  );
};

interface ServerCardProps {
  title: string;
  address: string;
  status: string;
  players: string;
  ping: string;
  map: string;
  type: 'GAME' | 'VOICE';
}

const ServerCard: React.FC<ServerCardProps> = ({ title, address, status, players, ping, map, type }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isGame = type === 'GAME';

  return (
    <div className="group relative bg-dark-900/40 border border-white/5 hover:border-gold-500/50 p-1 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] clip-diagonal">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="bg-dark-900/80 backdrop-blur-xl p-8 h-full flex flex-col clip-diagonal">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 ${isGame ? 'bg-amber-500/10 text-gold-500' : 'bg-blue-500/10 text-blue-400'}`}>
              {isGame ? <Server className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white tracking-wide">{title}</h3>
              <p className="text-xs font-mono text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {status}
              </p>
            </div>
          </div>
          {isGame && <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono rounded text-gray-400">{map}</span>}
        </div>

        {/* Address Display */}
        <div className="bg-black/50 border border-white/10 rounded-lg p-6 mb-8 relative group-hover:border-gold-500/30 transition-colors">
          <p className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-widest">Bağlantı Adresi</p>
          <div className="flex justify-between items-end">
             <div className="font-mono text-3xl md:text-4xl text-white font-bold tracking-tighter">
              {address}
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Cpu size={14} className="text-gold-500" />
              <span>1000 FPS</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Wifi size={14} className="text-gold-500" />
              <span>{ping}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Activity size={14} className="text-gold-500" />
              <span>{players}</span>
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <button 
          onClick={handleCopy}
          className={`mt-auto w-full py-4 font-bold tracking-widest text-sm uppercase transition-all flex items-center justify-center gap-3 clip-button
            ${copied 
              ? 'bg-green-500 text-black' 
              : 'bg-gold-500 hover:bg-white text-black'
            }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'ADRES KOPYALANDI' : 'ADRESİ KOPYALA'}
        </button>
      </div>
    </div>
  );
};

