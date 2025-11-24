'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ServerInfo } from '@/components/serverinfo';
import { Features } from '@/components/features';
import { TopPlayers } from '@/components/topplayers';
import { MapPool } from '@/components/mappool';
import { Rules } from '@/components/rules';
import { Footer } from '@/components/footer';
import { IntroLoader } from '@/components/introloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex flex-col gap-0">
          <div id="home">
            <Hero />
          </div>
          <div id="server-info">
            <ServerInfo />
          </div>
          <div id="top-players">
            <TopPlayers />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="maps">
            <MapPool />
          </div>
          <div id="rules">
            <Rules />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
