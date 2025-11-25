'use client';

import React from 'react';
import { Shield, ShieldCheck, Crown, Star, Ghost, Paintbrush, ChevronRight } from 'lucide-react';

export const PricingPackages: React.FC = () => {
  const packages = [
    {
      title: "SİLAH SKİNİ",
      price: "200",
      icon: <Paintbrush className="w-8 h-8" />,
      desc: "Özel silah görünümleri ile farkını ortaya koy.",
      highlight: false
    },
    {
      title: "NORMAL ADMİNLİK",
      price: "500",
      icon: <Shield className="w-8 h-8" />,
      desc: "Temel yönetim yetkileri ve giriş önceliği.",
      highlight: false
    },
    {
      title: "FULL YETKİ ADMİNLİK",
      price: "750",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "Genişletilmiş komut erişimi ve yönetim gücü.",
      highlight: false
    },
    {
      title: "VİP ADMİNLİK",
      price: "1000",
      icon: <Crown className="w-8 h-8" />,
      desc: "Ayrıcalıklı özellikler ve VIP statüsü.",
      highlight: true
    },
    {
      title: "ÜST DÜZEY ADMİNLİK",
      price: "1500",
      icon: <Star className="w-8 h-8" />,
      desc: "Yüksek yönetim kademesi ve tam kontrol.",
      highlight: true
    },
    {
      title: "TAGSIZ ADMİNLİK",
      price: "2000",
      icon: <Ghost className="w-8 h-8" />,
      desc: "Gizli yönetim. Kimliğin gizli, yetkin sonsuz.",
      highlight: true,
      special: true // For ghost effect
    }
  ];

  return (
    <div id="packages" className="py-24 bg-dark-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-[0.3em] mb-2">MAĞAZA</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center">
            DİĞER <span className="text-white">PAKETLER</span>
          </h2>
          <div className="h-1 w-24 bg-gold-500 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`group relative p-1 rounded-xl transition-all duration-300 hover:-translate-y-2 ${pkg.special ? 'hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]' : ''}`}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pkg.special ? 'from-purple-600 via-gold-500 to-purple-600' : 'from-gold-500/50 to-transparent'}`}></div>
              
              <div className="relative h-full bg-dark-900 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-150 transition-transform duration-700">
                  {pkg.icon}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${pkg.highlight ? 'bg-gold-500/10 text-gold-500' : 'bg-white/5 text-gray-400 group-hover:bg-gold-500/20 group-hover:text-gold-500'}`}>
                  {pkg.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-2 tracking-wide group-hover:text-gold-500 transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">
                  {pkg.desc}
                </p>

                <div className="mt-auto flex flex-col items-center w-full">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-3xl font-display font-bold ${pkg.special ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gold-500' : 'text-white'}`}>
                      {pkg.price}
                    </span>
                    <span className="text-gold-500 font-bold text-sm">TL</span>
                  </div>

                  <button className="w-full py-3 border border-white/10 hover:border-gold-500 bg-transparent hover:bg-gold-500 hover:text-black text-white font-bold tracking-widest text-xs transition-all flex items-center justify-center gap-2 group/btn clip-button">
                    SATIN AL
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

