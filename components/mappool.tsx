'use client';

import React from 'react';

export const MapPool: React.FC = () => {
  const maps = [
    { name: "de_dust2", img: "https://media.moddb.com/images/downloads/1/220/219748/loadmap.png" },
    { name: "de_inferno", img: "https://media.moddb.com/images/downloads/1/253/252186/20230721032514_1.jpg" },
    { name: "cs_assault", img: "https://img.dsncdn.net/full/c6/d3/c2/d1/31/61/5840.jpg" },
  ];

  return (
    <div id="maps" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold text-white">AKTİF <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">HARİTALAR</span></h2>
            <p className="text-gray-500 mt-2">Sunucumuzda rotasyonda olan popüler haritalar.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maps.map((map, idx) => (
            <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-gold-500 active:border-gold-500 transition-colors">
              {/* Image */}
              <img 
                src={map.img} 
                alt={map.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale md:group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 md:opacity-80 md:group-hover:opacity-60 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-display text-2xl font-bold text-white mb-1 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform">
                  {map.name}
                </h3>
                <div className="h-0.5 w-full md:w-0 bg-gold-500 md:group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 border border-green-500/30 backdrop-blur-md rounded text-xs text-green-400 font-mono font-bold">
                ACTIVE
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
