import React from 'react';
import { 
  Crown, 
  Medal, 
  TrendingUp, 
  Sparkles, 
  CheckCircle, 
  Building2, 
  Flame, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { triggerGoldConfetti } from '../utils/confetti';

export const TopThree = ({ winners = [], onSelectStudent }) => {
  if (!winners || winners.length < 3) return null;

  const [first, second, third] = winners;

  return (
    <section className="mb-10 sm:mb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-black tracking-wider uppercase mb-1.5">
            <Crown className="w-3.5 h-3.5 fill-amber-400" />
            <span>National Podium • Top 3 Leaders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            The Earning Champions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
            Setting the benchmark with verified freelance & startup client invoices.
          </p>
        </div>

        {/* 3-Column Olympic Podium Layout: #2 Left, #1 Center Elevated, #3 Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-end max-w-5xl mx-auto">
          
          {/* ======================================================== */}
          {/* RANK #2: SILVER PODIUM (Order 2 on mobile, 1 on md)      */}
          {/* ======================================================== */}
          <div 
            onClick={() => onSelectStudent(second)}
            className="order-2 md:order-1 glass-panel-silver rounded-3xl p-5 sm:p-6 relative cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Top Rank Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-400/40 text-slate-200 text-xs font-black uppercase tracking-wider mb-3 shadow">
              <Medal className="w-3.5 h-3.5 text-slate-300" />
              <span>Rank #2 • 1st Runner Up</span>
            </div>

            {/* Avatar with Silver Halo */}
            <div className="relative mb-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-slate-400 via-slate-100 to-slate-500 shadow-glow-silver group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={second.avatar} 
                  alt={second.name} 
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-slate-800 text-slate-200 p-1.5 rounded-full border border-slate-400 shadow">
                <Medal className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>

            {/* Student Info */}
            <div className="w-full">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <h3 className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
                  {second.name}
                </h3>
                <CheckCircle className="w-4 h-4 text-eyfi-400" />
              </div>
              
              <div className="text-xs font-medium text-slate-400 mb-2 truncate">
                {second.college}
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 text-[11px] font-semibold border border-slate-700/60 mb-3">
                {second.niche}
              </div>

              {/* Earnings Box */}
              <div className="w-full p-3 rounded-2xl bg-slate-900/90 border border-slate-700/70">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Total Income</div>
                <div className="text-2xl font-black font-display text-white mt-0.5">
                  ₹{second.income.toLocaleString('en-IN')}
                </div>
                <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-emerald-400 font-bold">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{second.growthPercent}% sprint surge</span>
                </div>
              </div>

              {/* Pedestal Step Base */}
              <div className="mt-3 w-full py-2 rounded-xl bg-slate-800/50 border border-slate-700/40 text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1 group-hover:text-slate-200 group-hover:border-slate-500 transition-colors">
                <span>View Breakdown</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RANK #1: GOLD PODIUM (Center Elevated)                    */}
          {/* ======================================================== */}
          <div 
            onClick={() => {
              triggerGoldConfetti();
              onSelectStudent(first);
            }}
            className="order-1 md:order-2 glass-panel-gold rounded-3xl p-6 sm:p-7 relative cursor-pointer group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center transform md:-translate-y-4 shadow-glow-gold"
          >
            {/* Animated Crown */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="p-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 shadow-glow-gold animate-bounce-subtle">
                <Crown className="w-6 h-6 fill-amber-950 text-slate-950" />
              </div>
            </div>

            {/* Top Tag */}
            <div className="mt-4 mb-3 flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-black uppercase tracking-wider shadow">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>👑 National Champion • Rank #1</span>
            </div>

            {/* Avatar with Gold Halo */}
            <div className="relative mb-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-glow-gold group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={first.avatar} 
                  alt={first.name} 
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 p-1.5 rounded-full border-2 border-slate-900 shadow">
                <Crown className="w-4 h-4 fill-slate-950" />
              </div>
            </div>

            {/* Student Info */}
            <div className="w-full">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-200 transition-colors font-display">
                  {first.name}
                </h3>
                <CheckCircle className="w-5 h-5 text-amber-400" />
              </div>
              
              <div className="text-xs sm:text-sm font-semibold text-amber-300/90 mb-2 truncate">
                {first.college}
              </div>

              <div className="inline-block px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 mb-3">
                🔥 {first.niche}
              </div>

              {/* Earnings Box */}
              <div className="w-full p-3.5 rounded-2xl bg-gradient-to-b from-slate-900/95 to-amber-950/30 border border-amber-500/50 shadow-inner">
                <div className="text-[11px] uppercase tracking-wider font-bold text-amber-300">Verified Income</div>
                <div className="text-3xl sm:text-4xl font-black font-display text-white shimmer-gold mt-0.5">
                  ₹{first.income.toLocaleString('en-IN')}
                </div>
                <div className="mt-1 flex items-center justify-center gap-1 text-xs text-emerald-400 font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+{first.growthPercent}% • {first.streakDays}d streak 🔥</span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-3 w-full py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-amber-300 flex items-center justify-center gap-1 group-hover:bg-amber-500/30 transition-colors">
                <span>Inspect Contracts & Cheer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RANK #3: BRONZE PODIUM (Order 3)                          */}
          {/* ======================================================== */}
          <div 
            onClick={() => onSelectStudent(third)}
            className="order-3 glass-panel-bronze rounded-3xl p-5 sm:p-6 relative cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Top Rank Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-amber-700/60 text-amber-400 text-xs font-black uppercase tracking-wider mb-3 shadow">
              <Medal className="w-3.5 h-3.5 text-amber-500" />
              <span>Rank #3 • 2nd Runner Up</span>
            </div>

            {/* Avatar with Bronze Halo */}
            <div className="relative mb-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-700 via-amber-400 to-amber-800 shadow-glow-bronze group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={third.avatar} 
                  alt={third.name} 
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-slate-800 text-amber-500 p-1.5 rounded-full border border-amber-700 shadow">
                <Medal className="w-3.5 h-3.5 text-amber-500" />
              </div>
            </div>

            {/* Student Info */}
            <div className="w-full">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {third.name}
                </h3>
                <CheckCircle className="w-4 h-4 text-eyfi-400" />
              </div>
              
              <div className="text-xs font-medium text-slate-400 mb-2 truncate">
                {third.college}
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 text-[11px] font-semibold border border-slate-700/60 mb-3">
                {third.niche}
              </div>

              {/* Earnings Box */}
              <div className="w-full p-3 rounded-2xl bg-slate-900/90 border border-slate-700/70">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Total Income</div>
                <div className="text-2xl font-black font-display text-white mt-0.5">
                  ₹{third.income.toLocaleString('en-IN')}
                </div>
                <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-emerald-400 font-bold">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{third.growthPercent}% sprint surge</span>
                </div>
              </div>

              {/* Pedestal Step Base */}
              <div className="mt-3 w-full py-2 rounded-xl bg-slate-800/50 border border-slate-700/40 text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1 group-hover:text-amber-300 group-hover:border-amber-600 transition-colors">
                <span>View Breakdown</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
