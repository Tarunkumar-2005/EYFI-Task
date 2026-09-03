import React from 'react';
import { 
  TrendingUp, 
  Users, 
  IndianRupee, 
  Zap, 
  Target, 
  Sparkles, 
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';
import { challengeStats, currentUser } from '../data/mockData';
import { triggerConfetti } from '../utils/confetti';

export const Hero = ({ onScrollToUser }) => {
  const percentComplete = Math.min(
    100,
    Math.round((challengeStats.totalIncomeGenerated / challengeStats.targetMilestone) * 100)
  );

  return (
    <section className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-eyfi-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Personalized Student Greeting Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300">
              ⚡ India's Official Student Earning Arena
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold text-amber-400">
              {challengeStats.season}
            </span>
          </div>

          {/* Current User Quick Snapshot Pill */}
          <button
            onClick={onScrollToUser}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-eyfi-950/70 border border-eyfi-500/40 hover:border-eyfi-400 text-xs text-slate-200 transition-all shadow-sm"
          >
            <span className="text-amber-400">🔥</span>
            <span>Hey <b>{currentUser.name}</b>, you're </span>
            <span className="px-1.5 py-0.2 rounded bg-eyfi-500 text-slate-950 font-black text-[11px]">
              Rank #{currentUser.rank}
            </span>
            <span className="text-emerald-400 font-semibold">(₹{currentUser.income.toLocaleString('en-IN')})</span>
            <ArrowRight className="w-3.5 h-3.5 text-eyfi-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white mb-3 leading-[1.1]">
            EYFI Challenge <br className="hidden sm:block" />
            <span className="shimmer-text">National Leaderboard</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Live, verified rankings of Indian college students turning digital skills into real client revenue. Ranked strictly by <span className="text-emerald-400 font-semibold">total verified income generated</span>.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          
          {/* Stat 1: Total Revenue */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl relative group hover:border-emerald-500/40 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">Total Income Earned</span>
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <IndianRupee className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-emerald-400 transition-colors">
              ₹{(challengeStats.totalIncomeGenerated / 100000).toFixed(2)}L
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
              <TrendingUp className="w-3 h-3" />
              <span>+38.4% this sprint</span>
            </div>
          </div>

          {/* Stat 2: Active Participants */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl relative group hover:border-eyfi-500/40 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">Active Students</span>
              <div className="p-1.5 rounded-lg bg-eyfi-500/10 text-eyfi-400 border border-eyfi-500/20">
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-eyfi-400 transition-colors">
              {challengeStats.totalParticipants.toLocaleString('en-IN')}
            </div>
            <div className="mt-1.5 text-[11px] text-slate-400">
              <span className="text-eyfi-400 font-bold">{challengeStats.topCollegesCount}</span> Indian colleges
            </div>
          </div>

          {/* Stat 3: Average Income */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl relative group hover:border-amber-500/40 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">Avg. Student Earnings</span>
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Zap className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-amber-400 transition-colors">
              ₹{challengeStats.averageIncome.toLocaleString('en-IN')}
            </div>
            <div className="mt-1.5 text-[11px] text-amber-400 font-medium">
              <span>Top day: ₹{challengeStats.highestSingleDayIncome.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Stat 4: Sprint Countdown */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl relative group hover:border-rose-500/40 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">Sprint Closes In</span>
              <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Target className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-rose-400 transition-colors">
              {challengeStats.daysRemaining}d {challengeStats.hoursRemaining}h
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
              <span>Final sprint rush</span>
            </div>
          </div>

        </div>

        {/* Sprint Milestone Target Banner */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-eyfi-400">
                Sprint Goal Tracker
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
                {percentComplete}% Complete
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                Target: <b className="text-white">₹50.00 Lakhs</b> (₹{((challengeStats.targetMilestone - challengeStats.totalIncomeGenerated) / 100000).toFixed(2)}L to go)
              </span>
              <button
                onClick={() => triggerConfetti()}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-eyfi-600 to-indigo-600 hover:from-eyfi-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-glow-blue transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cheer</span>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-eyfi-500 via-emerald-400 to-amber-400 transition-all duration-1000 relative shadow-sm"
              style={{ width: `${percentComplete}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
