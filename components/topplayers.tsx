'use client';

import React from 'react';
import { Trophy, Crosshair, Skull, Crown } from 'lucide-react';

export const TopPlayers: React.FC = () => {
  // Mock Data - In a real app, this would be fetched from an API
  const players = [
    { rank: 1, name: "JOKER", kills: 14052, hs: "42%" },
    { rank: 2, name: "GHOST_RIDER", kills: 12930, hs: "38%" },
    { rank: 3, name: "SNAIPER", kills: 11204, hs: "51%" },
    { rank: 4, name: "Shadow", kills: 9800, hs: "30%" },
    { rank: 5, name: "Kabus", kills: 8750, hs: "25%" },
  ];

  return (
    <div id="top-players" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            TOP 5 <span className="text-gold-500">OYUNCULAR</span>
          </h2>
          <p className="text-gray-400">Bu ayın en ölümcül nişancıları.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-dark-900/50 border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-white/5 border-b border-white/5 font-display font-bold text-gray-400 text-sm tracking-wider">
            <div className="flex justify-center">RANK</div>
            <div className="text-left">OYUNCU</div>
            <div className="flex items-center justify-center gap-2"><Skull size={16}/> FRAG</div>
            <div className="flex items-center justify-center gap-2"><Crosshair size={16}/> HS RATE</div>
          </div>

          {/* List */}
          {players.map((player, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 gap-4 p-6 items-center border-b border-white/5 hover:bg-gold-500/5 transition-colors group ${index === 0 ? 'bg-gradient-to-r from-gold-500/10 to-transparent' : ''}`}
            >
              {/* Rank */}
              <div className="flex justify-center">
                {index === 0 ? (
                  <Crown className="text-gold-500 animate-pulse" />
                ) : index < 3 ? (
                  <Trophy className={index === 1 ? "text-gray-300" : "text-amber-700"} size={20} />
                ) : (
                  <span className="font-mono text-gray-500">#{player.rank}</span>
                )}
              </div>

              {/* Name */}
              <div className="font-bold text-lg text-white group-hover:text-gold-500 transition-colors">
                {player.name}
              </div>

              {/* Kills */}
              <div className="text-center font-mono text-gray-300">
                {player.kills.toLocaleString()}
              </div>

              {/* HS */}
              <div className="text-center">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-400 group-hover:border-gold-500/30 group-hover:text-white transition-colors">
                  {player.hs}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-gold-500 text-sm font-bold hover:underline tracking-widest">
            TAM LİSTEYİ GÖRÜNTÜLE &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
