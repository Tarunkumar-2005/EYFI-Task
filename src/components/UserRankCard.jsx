import React, { useState } from 'react';
import { 
  TrendingUp, 
  Zap, 
  ArrowUp, 
  ChevronUp, 
  ChevronDown, 
  Share2, 
  Check, 
  Target,
  Sparkles
} from 'lucide-react';
import { currentUser } from '../data/mockData';
import { triggerConfetti } from '../utils/confetti';

export const UserRankCard = ({ onSelectStudent }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const scrollToUser = () => {
    const el = document.getElementById('current-user-row');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-eyfi-400');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-eyfi-400');
      }, 2500);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `🎓 I'm currently Rank #${currentUser.rank} in the EYFI Earning Challenge with ₹${currentUser.income.toLocaleString('en-IN')} earned! https://eyfi.in/challenge`
    );
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-sm z-30 transition-all duration-300">
      <div className="bg-slate-900/95 backdrop-blur-2xl border-2 border-eyfi-500 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-eyfi-950/60 relative overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-eyfi-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-eyfi-400"
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-black px-1 rounded-full ring-1 ring-slate-900">
                #{currentUser.rank}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">
                  You ({currentUser.name})
                </span>
                <span className="text-[10px] bg-eyfi-500/20 text-eyfi-300 px-1.5 py-0.2 rounded font-black border border-eyfi-500/30">
                  BMSCE
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-black text-emerald-400 text-sm">
                  ₹{currentUser.income.toLocaleString('en-IN')}
                </span>
                <span className="flex items-center text-[11px] text-emerald-400 font-bold">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  +{currentUser.trendCount} spots
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={scrollToUser}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
              title="Jump to my position in the leaderboard"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 rounded-xl bg-eyfi-600 hover:bg-eyfi-500 text-white text-xs font-semibold shadow-glow-blue transition-all"
              title="Share rank"
            >
              {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs transition-colors"
              aria-label="Toggle user details"
            >
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>

        </div>

        {/* Expandable gamification nudge */}
        {isExpanded && (
          <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs space-y-2 animate-fadeIn">
            
            {/* Gamification Nudge */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
                <span className="text-slate-200 text-[11px] leading-tight">
                  Only <b className="text-amber-300">₹{currentUser.nextMilestone.gap.toLocaleString('en-IN')}</b> away from <b>Rank #{currentUser.nextMilestone.targetRank}</b> (Top 10)!
                </span>
              </div>
              <button
                onClick={() => onSelectStudent(currentUser)}
                className="shrink-0 px-2 py-1 rounded-lg bg-amber-500/25 hover:bg-amber-500/40 text-amber-300 text-[10px] font-black border border-amber-500/40"
              >
                Inspect
              </button>
            </div>

            {/* Quick streak info */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-0.5">
              <span>🔥 {currentUser.streakDays} Day Sprint Streak</span>
              <span className="text-eyfi-400 font-semibold">
                {copied ? 'Copied link!' : 'Top 1% Fast Mover'}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
