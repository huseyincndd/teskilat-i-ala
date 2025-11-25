'use client';

import React from 'react';
import { Check, X, Crown, Gem, Shield, Star } from 'lucide-react';

export const PartnerShip: React.FC = () => {
  const features = [
    { label: "+3 Adminlik Yazma Hakkı", included: true },
    { label: "Skin Paketi", included: true },
    { label: "Maç Öncelik Hakkı", included: true },
    { label: "Özel Silah Skini", included: true },
    { label: "Yönetim Paneli", included: false },
    { label: "SteamID Yetki", included: true },
    { label: "Dokunulmazlık", included: true },
    { label: "Gag Yetkisi", included: true },
    { label: "Team Komutları", included: true },
    { label: "Weapon Menüsü", included: true },
    { label: "Kick Yetkisi", included: true },
    { label: "Ban Yetkisi", included: true },
    { label: "Yeşil Yazı (Chat)", included: true },
    { label: "Oylama (Vote) Yetkisi", included: true },
    { label: "Map Değiştirme", included: true },
    { label: "Slay / Slap", included: true },
    { label: "TS3 Sunucu Ortağı Yetkisi", included: true, special: true },
  ];

  return (
    <div id="partnership" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-gold-500 mb-2">
             <Crown className="w-6 h-6 animate-pulse" />
             <span className="tracking-[0.5em] font-mono text-sm font-bold">PREMIUM MEMBERSHIP</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white">
            SUNUCU <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-700">ORTAĞI</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-amber-600 to-gold-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className="relative bg-dark-900 border border-gold-500/30 rounded-xl p-8 md:p-12 clip-diagonal overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 bg-grid opacity-10"></div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield size={200} />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Pricing & Title */}
                <div className="text-center md:text-left relative z-10">
                  <div className="inline-block px-4 py-1 rounded bg-gold-500/20 border border-gold-500 text-gold-500 font-mono text-xs tracking-widest mb-4">
                    MOST POPULAR
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">SUNUCU ORTAĞI</h3>
                  <p className="text-gray-400 text-sm mb-6">Sunucunun bir parçası ol, yönetime katıl ve ayrıcalıkların tadını çıkar.</p>
                  
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-8">
                    <span className="text-5xl md:text-6xl font-display font-black text-white">1500</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl font-bold text-gold-500">TL</span>
                      <span className="text-xs text-gray-500">/ 30 GÜN</span>
                    </div>
                  </div>

                  <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-white hover:to-gray-200 text-black font-display font-bold text-lg tracking-widest clip-button transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group/btn">
                    <Gem className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    SATIN AL
                  </button>
                  
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    * Ödemeler Shopier veya IBAN ile yapılabilir.
                  </p>
                </div>

                {/* Right Side: Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  {features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 p-2 rounded border transition-colors ${
                        feature.included 
                          ? feature.special 
                            ? 'bg-gold-500/10 border-gold-500/40' 
                            : 'border-white/5 bg-white/5' 
                          : 'border-transparent opacity-50'
                      }`}
                    >
                      <div className={`p-1 rounded-full ${feature.included ? 'bg-green-500/20 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                      </div>
                      <span className={`text-sm font-medium ${feature.special ? 'text-gold-400 font-bold' : 'text-gray-300'}`}>
                        {feature.label}
                      </span>
                      {feature.special && <Star size={12} className="text-gold-500 ml-auto animate-pulse" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

