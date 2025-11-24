'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Rules: React.FC = () => {
  const rules = [
    "Hile, script veya 3. parti yazılım kullanımı kalıcı uzaklaştırma sebebidir.",
    "Ailevi, dini ve siyasi değerlere hakaret kesinlikle yasaktır.",
    "Yetkililerin kararlarına saygı duyulmalıdır. İtirazlar TeamSpeak üzerinden yapılır.",
    "Mikrofonu gereksiz meşgul etmek, 'troll' yapmak yasaktır.",
    "Başka sunucu veya site reklamı yapmak yasaktır."
  ];

  return (
    <div id="rules" className="py-24 bg-dark-900 relative clip-diagonal bg-grid-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-full opacity-50"></div>
             <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" 
              alt="Rules visual" 
              className="relative rounded-sm shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Text */}
            <div className="absolute bottom-10 left-0 bg-gold-500 text-black px-6 py-2 font-display font-bold tracking-widest text-xl transform -skew-x-12 origin-bottom-left shadow-lg">
              DİSİPLİN VE SAYGI
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-10 h-10 text-gold-500" />
              <h2 className="font-display text-4xl font-bold text-white">SUNUCU <span className="text-gold-500">KURALLARI</span></h2>
            </div>
            
            <div className="space-y-4">
              {rules.map((rule, idx) => (
                <div key={idx} className="group flex items-center gap-6 p-5 bg-black/40 border-l-2 border-white/10 hover:border-gold-500 hover:bg-white/5 transition-all duration-300">
                  <span className="font-display text-4xl font-bold text-white/10 group-hover:text-gold-500 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-4 bg-gold-500/10 border border-gold-500/20 rounded text-center">
              <p className="text-gold-400 text-sm italic font-mono">
                * Sunucuya giriş yapan her oyuncu bu kuralları kabul etmiş sayılır.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
