'use client';

import React from 'react';
import { Crown, Star, Shield, Briefcase, Users, UserCog, Flag, Terminal } from 'lucide-react';

interface StaffMember {
  role: string;
  name: string;
  realName?: string;
  icon: React.ReactNode;
  color: string;
}

export const StaffTeam: React.FC = () => {
  // Data Structure based on user input
  const founder: StaffMember = { 
    role: "SERVER KURUCU", 
    name: "SerkanQWSK1", 
    icon: <Crown className="w-8 h-8" />, 
    color: "text-gold-500" 
  };

  const highCommand: StaffMember[] = [
    { role: "AJANS BAŞKANI", name: "Dosteyeviski*", realName: "Mehmet", icon: <Shield className="w-6 h-6" />, color: "text-purple-400" },
    { role: "SERVER ORTAK", name: "AdnanBey", icon: <Star className="w-6 h-6" />, color: "text-red-500" },
    { role: "SERVER ORTAK", name: "INargaroth", realName: "Kerem", icon: <Star className="w-6 h-6" />, color: "text-red-500" },
  ];

  const management: StaffMember[] = [
    { role: "SERVER YÖNETİCİSİ", name: "Nenvarzeze", realName: "Yaşar", icon: <Terminal className="w-6 h-6" />, color: "text-blue-400" },
    { role: "GENEL SORUMLU", name: "HakooO", realName: "Hakan", icon: <UserCog className="w-6 h-6" />, color: "text-blue-400" },
    { role: "GENEL SORUMLU", name: "Fred", realName: "Kadir", icon: <UserCog className="w-6 h-6" />, color: "text-blue-400" },
    { role: "GENEL SORUMLU", name: "OzgunCFC", realName: "Ozgun", icon: <UserCog className="w-6 h-6" />, color: "text-blue-400" },
    { role: "ÜST YÖNETİM", name: "Baffy Suat", icon: <Shield className="w-6 h-6" />, color: "text-indigo-400" },
    { role: "ÜST YÖNETİM", name: "Fastcup.dll Yiğit", icon: <Shield className="w-6 h-6" />, color: "text-indigo-400" },
  ];

  const fieldOps: StaffMember[] = [
    { role: "YÖNETİM EKİBİ", name: "ReisYek", realName: "Vahit", icon: <Shield className="w-5 h-5" />, color: "text-green-500" },
    { role: "YÖNETİM EKİBİ", name: "Piyade Komando", realName: "Muhammet", icon: <Shield className="w-5 h-5" />, color: "text-green-500" },
    { role: "YÖNETİM EKİBİ", name: "Ertugrul Gazi", realName: "İsmail", icon: <Shield className="w-5 h-5" />, color: "text-green-500" },
    { role: "KLAN KAPTANI", name: "Hake", realName: "Emre", icon: <Flag className="w-5 h-5" />, color: "text-orange-500" },
  ];

  return (
    <div id="staff" className="py-24 bg-dark-900 relative border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-500 font-mono text-sm tracking-[0.3em] mb-2">CHAIN OF COMMAND</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            YÖNETİM <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-700">KADROSU</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          
          {/* Level 1: Founder */}
          <div className="flex justify-center">
            <div className="group relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-yellow-300 to-gold-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-dark-950 border border-gold-500/50 rounded-xl p-8 text-center clip-diagonal">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-950 p-2 border border-gold-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <Crown className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white tracking-widest">{founder.name}</h3>
                <p className="text-gold-500 font-mono text-sm tracking-widest mt-1">{founder.role}</p>
              </div>
            </div>
          </div>

          {/* Level 2: High Command */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highCommand.map((staff, idx) => (
              <StaffCard key={idx} staff={staff} />
            ))}
          </div>

          {/* Level 3: Management Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {management.map((staff, idx) => (
              <StaffCard key={idx} staff={staff} variant="compact" />
            ))}
          </div>

          {/* Level 4: Field Ops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fieldOps.map((staff, idx) => (
              <StaffCard key={idx} staff={staff} variant="mini" />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const StaffCard: React.FC<{ staff: StaffMember, variant?: 'default' | 'compact' | 'mini' }> = ({ staff, variant = 'default' }) => {
  if (variant === 'mini') {
    return (
      <div className="group bg-dark-950 border border-white/5 hover:border-gold-500/30 p-4 rounded flex items-center gap-4 transition-all hover:bg-white/5">
        <div className={`${staff.color} opacity-80 group-hover:opacity-100`}>{staff.icon}</div>
        <div>
          <div className="font-bold text-white text-sm">{staff.name}</div>
          <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{staff.role} {staff.realName && `- ${staff.realName}`}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-dark-900 border border-white/10 hover:border-gold-500/30 p-6 rounded-lg text-center transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:scale-150 transition-transform duration-500">
        {staff.icon}
      </div>
      
      <div className={`mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 ${staff.color} group-hover:bg-white/10 transition-colors`}>
        {staff.icon}
      </div>
      
      <h4 className="font-display font-bold text-lg text-white group-hover:text-gold-500 transition-colors">
        {staff.name}
      </h4>
      {staff.realName && <p className="text-gray-400 text-sm mb-1">{staff.realName}</p>}
      
      <div className="w-8 h-0.5 bg-white/10 mx-auto my-3 group-hover:bg-gold-500 transition-colors"></div>
      
      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-gray-300">
        {staff.role}
      </p>
    </div>
  );
};

