'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, Terminal } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING...");

  useEffect(() => {
    const steps = [
      { p: 20, t: "CONNECTING TO SECURE SERVER..." },
      { p: 45, t: "LOADING ASSETS [DUST2, INFERNO, ASSAULT]..." },
      { p: 70, t: "VERIFYING ANTI-CHEAT SYSTEMS..." },
      { p: 90, t: "ESTABLISHING UPLINK TO 95.173.173.16..." },
      { p: 100, t: "ACCESS GRANTED." }
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setTimeout(onComplete, 800);
        return;
      }

      setProgress(steps[currentStep].p);
      setText(steps[currentStep].t);
      currentStep++;
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-md p-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-gold-500 animate-pulse flex items-center gap-2">
            <Terminal size={16} />
            SYSTEM_BOOT
          </span>
          <span className="text-gold-500 font-bold">{progress}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-800 mb-8 relative overflow-hidden">
          <div 
            className="h-full bg-gold-500 transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_10px_#fff]"></div>
          </div>
        </div>

        <div className="h-8">
          <p className="text-xs text-gray-400 tracking-widest typewriter">{text}</p>
        </div>
      </div>
      
      <div className="absolute bottom-10 text-center opacity-30">
        <ShieldCheck className="mx-auto mb-2 w-8 h-8" />
        <p className="text-[10px] tracking-[0.5em]">TESKILAT-I ALA SECURITY</p>
      </div>
    </div>
  );
};
