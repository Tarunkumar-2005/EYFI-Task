import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  Coins, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { currentUser, challengeStats } from '../data/mockData';
import { triggerConfetti } from '../utils/confetti';

export const Header = ({ onSelectStudent, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-brand-dark/85 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Challenge Title */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); triggerConfetti(); }}
              className="group flex items-center gap-3 focus:outline-none"
              title="Click for EYFI confetti!"
            >
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-eyfi-500 via-eyfi-600 to-indigo-600 shadow-glow-blue group-hover:scale-105 transition-transform duration-200">
                <span className="font-display font-extrabold text-white text-lg tracking-tight">EY</span>
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border border-slate-900"></span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    EYFI <span className="text-eyfi-400 font-extrabold">CHALLENGE</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="font-medium text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {challengeStats.season} LIVE
                  </span>
                  <span>•</span>
                  <span>{challengeStats.daysRemaining}d {challengeStats.hoursRemaining}h left</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'leaderboard'
                  ? 'bg-eyfi-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Leaderboard
            </button>
            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'colleges'
                  ? 'bg-eyfi-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              College Rankings
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'rewards'
                  ? 'bg-eyfi-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-eyfi-400" />
              Prizes & Perks
            </button>
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
            
            {/* Quick celebration trigger */}
            <button 
              onClick={() => triggerConfetti()} 
              aria-label="Trigger celebration"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-amber-300 text-xs font-medium border border-slate-700/60 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Cheer</span>
            </button>

            {/* Profile Avatar Card */}
            <button 
              onClick={() => onSelectStudent(currentUser)}
              className="flex items-center gap-3 p-1.5 sm:pr-3 rounded-full sm:rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-eyfi-500/60 hover:bg-slate-850 transition-all duration-200 group text-left"
            >
              <div className="relative">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-eyfi-500/70"
                />
                <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-1 rounded-full ring-1 ring-slate-900">
                  #{currentUser.rank}
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white group-hover:text-eyfi-400 transition-colors">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] bg-eyfi-500/20 text-eyfi-300 px-1.5 py-0.5 rounded font-semibold border border-eyfi-500/30">
                    You
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-emerald-400">
                  ₹{currentUser.income.toLocaleString('en-IN')}
                </div>
              </div>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-brand-dark/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-fadeIn">
          <button
            onClick={() => { setActiveTab('leaderboard'); setMobileMenuOpen(false); }}
            className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              activeTab === 'leaderboard' ? 'bg-eyfi-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            Leaderboard
          </button>
          <button
            onClick={() => { setActiveTab('colleges'); setMobileMenuOpen(false); }}
            className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              activeTab === 'colleges' ? 'bg-eyfi-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            College Rankings
          </button>
          <button
            onClick={() => { setActiveTab('rewards'); setMobileMenuOpen(false); }}
            className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-3 ${
              activeTab === 'rewards' ? 'bg-eyfi-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-eyfi-400" />
            Prizes & Perks
          </button>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Logged in as <b>Aarav Patel</b></span>
            <span className="text-emerald-400 font-bold">Rank #{currentUser.rank}</span>
          </div>
        </div>
      )}
    </header>
  );
};
