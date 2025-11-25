'use client';

import React from 'react';
import { ExternalLink, Instagram, Megaphone } from 'lucide-react';

export const SponsorBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-dark-900 to-purple-900 border-y border-purple-500/30 relative overflow-hidden group">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[2s]"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Label */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 border border-purple-500/50 rounded-full animate-pulse">
              <Megaphone className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-purple-400 text-xs font-mono tracking-widest uppercase mb-1">Resmi Sponsor</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">
                KARASU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">REKLAM AJANSI</span>
              </h3>
            </div>
          </div>
          
          {/* Right: Actions */}
          <div className="flex gap-4">
            <a 
              href="https://www.karasureklamajansi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 hover:bg-purple-600 border border-purple-500/30 text-white font-bold tracking-wider transition-all clip-button flex items-center gap-2 group/btn"
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 transition-transform" />
              WEB SİTESİ
            </a>
            
            <a 
              href="https://www.instagram.com/karasureklamajansi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-white hover:to-white hover:text-purple-900 text-white font-bold tracking-wider transition-all clip-button flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              <Instagram className="w-4 h-4" />
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

