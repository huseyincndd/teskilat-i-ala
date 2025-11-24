'use client';

import React from 'react';
import { Zap, ShieldCheck, Users, Trophy, Clock, Headphones } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra Düşük Ping",
      desc: "Türkiye lokasyonlu yüksek performanslı sunucular ile 0 loss, 0 choke garantisi."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "SXe + Özel Koruma",
      desc: "Gelişmiş anti-cheat sistemleri ve aktif admin gözetimi ile %100 temiz oyun."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elit Topluluk",
      desc: "Saygılı, seviyeli ve dostane bir ortam. Toksik oyunculara yer yok."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Haftalık Turnuvalar",
      desc: "Büyük ödüllü 5v5, 1v1 turnuvaları ve sürpriz etkinlikler."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "7/24 Aktif Yönetim",
      desc: "Her an ulaşabileceğiniz, çözüm odaklı profesyonel yönetim kadrosu."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "TeamSpeak Ortamı",
      desc: "Oyun dışı sohbet, müzik odaları ve klan toplantıları için özel alanlar."
    }
  ];

  return (
    <div id="features" className="py-24 bg-dark-950 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">NEDEN <span className="text-gold-500">BİZ?</span></h2>
            <p className="text-gray-400 mt-2 font-light">Teskilat-i Ala ayrıcalıklarını keşfedin.</p>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-5xl font-display font-black text-white/5">FEATURES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl"></div>
              
              <div className="relative h-full bg-dark-900/50 border border-white/5 hover:border-gold-500/40 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                
                {/* Background Number */}
                <span className="absolute -bottom-4 -right-4 text-9xl font-display font-black text-white/5 group-hover:text-gold-500/10 transition-colors select-none">
                  {idx + 1}
                </span>

                <div className="w-16 h-16 bg-gradient-to-br from-dark-800 to-black border border-white/10 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-gold-500/50 group-hover:text-gold-500 transition-all shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
