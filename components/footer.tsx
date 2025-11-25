'use client';

import React from 'react';
import { Crosshair, MessageSquare, Share2, Instagram, Facebook, Globe, Megaphone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Crosshair className="w-8 h-8 text-gold-500" />
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-widest">TESKILAT-I ALA</h3>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Türkiye'nin en köklü ve kaliteli CS 1.6 topluluğu. Kalite tesadüf değildir, bir seçimdir.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <h4 className="text-white font-bold font-display tracking-widest mb-2">HIZLI MENÜ</h4>
            <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Ana Sayfa
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Ban Listesi
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Adminlik Satın Al
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Top15
            </a>
          </div>

          {/* Sponsor */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <h4 className="text-purple-400 font-bold font-display tracking-widest mb-2 flex items-center gap-2">
              <Megaphone size={16} /> RESMİ SPONSOR
            </h4>
            <div className="p-4 border border-purple-500/20 bg-purple-500/5 rounded-lg group hover:border-purple-500/50 transition-colors">
              <p className="text-white font-bold mb-2">KARASU REKLAM AJANSI</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.karasureklamajansi.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs hover:text-purple-400 transition-colors">
                  <Globe size={12} /> karasureklamajansi.com
                </a>
                <a href="https://www.instagram.com/karasureklamajansi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs hover:text-purple-400 transition-colors">
                  <Instagram size={12} /> @karasureklamajansi
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold font-display tracking-widest">TAKİP ET</h4>
            <div className="flex gap-4">
              <SocialButton icon={<MessageSquare size={18} />} />
              <SocialButton icon={<Share2 size={18} />} />
              <SocialButton icon={<Instagram size={18} />} />
              <SocialButton icon={<Facebook size={18} />} />
            </div>
            <button className="px-6 py-3 bg-white/5 border border-white/10 hover:border-gold-500 text-white text-sm font-bold tracking-wider transition-all clip-button">
              YÖNETİME MESAJ AT
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono">
            &copy; {new Date().getFullYear()} TESKILAT-I ALA GAMING. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            DESIGNED BY <span className="text-gray-500">AI STUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all hover:-translate-y-1">
    {icon}
  </a>
);
