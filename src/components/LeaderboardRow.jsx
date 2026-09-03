import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Crown, 
  Medal, 
  ShieldCheck, 
  Building2,
  ChevronRight,
  Flame,
  Sparkles,
  Zap
} from 'lucide-react';

export const LeaderboardRow = ({ 
  participant, 
  highestIncome = 82500, 
  onSelectStudent, 
  isCurrentUser = false 
}) => {
  const {
    rank,
    name,
    avatar,
    college,
    city,
    income,
    trend,
    trendCount,
    growthPercent,
    niche,
    badges,
    streakDays
  } = participant;

  const incomePercentage = Math.min(100, Math.round((income / highestIncome) * 100));

  // Rank badge styling
  const renderRankBadge = () => {
    if (rank === 1) {
      return (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-slate-950 font-black shadow-glow-gold text-xs">
          <Crown className="w-4 h-4 fill-slate-950" />
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-slate-950 font-black shadow-glow-silver text-xs">
          <Medal className="w-4 h-4 text-slate-950" />
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-black shadow-glow-bronze text-xs">
          <Medal className="w-4 h-4 text-white" />
        </div>
      );
    }
    if (rank <= 10) {
      return (
        <div className="w-8 h-8 rounded-xl bg-slate-800/90 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-xs">
          #{rank}
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 font-semibold text-xs">
        #{rank}
      </div>
    );
  };

  // Trend indicator
  const renderTrend = () => {
    if (trend === 'up') {
      return (
        <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+{trendCount || growthPercent + '%'}</span>
        </div>
      );
    }
    if (trend === 'down') {
      return (
        <div className="flex items-center gap-1 text-rose-400 font-bold text-xs bg-rose-500/10 px-2 py-1 rounded-lg border border-rose-500/20">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>-{trendCount}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-slate-400 text-xs bg-slate-800/50 px-2 py-1 rounded-lg border border-slate-700/40">
        <Minus className="w-3.5 h-3.5" />
        <span>0</span>
      </div>
    );
  };

  return (
    <tr
      id={isCurrentUser ? "current-user-row" : undefined}
      onClick={() => onSelectStudent(participant)}
      className={`group cursor-pointer border-b border-slate-800/60 transition-all duration-200 hover:bg-slate-800/40 ${
        isCurrentUser 
          ? 'user-row-highlight' 
          : rank <= 3 
          ? 'bg-slate-900/30' 
          : ''
      }`}
    >
      {/* Rank Column */}
      <td className="py-4 px-3 sm:px-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          {renderRankBadge()}
        </div>
      </td>

      {/* Student Profile Column */}
      <td className="py-4 px-3 sm:px-4">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img 
              src={avatar} 
              alt={name} 
              className={`w-10 h-10 rounded-full object-cover ring-2 ${
                rank === 1 ? 'ring-amber-400 shadow-glow-gold' :
                rank === 2 ? 'ring-slate-300 shadow-glow-silver' :
                rank === 3 ? 'ring-amber-600 shadow-glow-bronze' :
                isCurrentUser ? 'ring-eyfi-400 shadow-glow-blue' : 'ring-slate-700'
              }`}
            />
            {streakDays >= 10 && (
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-0.5 rounded-full ring-1 ring-slate-900" title={`${streakDays} days streak`}>
                <Flame className="w-2.5 h-2.5 fill-slate-950" />
              </span>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-white group-hover:text-eyfi-400 transition-colors truncate">
                {name}
              </span>
              {isCurrentUser && (
                <span className="bg-eyfi-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider animate-pulse">
                  YOU
                </span>
              )}
              <ShieldCheck className="w-3.5 h-3.5 text-eyfi-400 shrink-0" title="Verified Earning" />
            </div>

            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-slate-400 truncate max-w-[140px] sm:max-w-[190px]">
                {niche}
              </span>
              {badges && badges.length > 0 && (
                <span className="hidden lg:inline-block text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                  {badges[0]}
                </span>
              )}
            </div>
          </div>
        </div>
      </td>

      {/* College Column */}
      <td className="py-4 px-3 sm:px-4 hidden sm:table-cell">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-200 truncate max-w-[220px]">
            {college}
          </span>
          <span className="text-[11px] text-slate-400">
            {city}
          </span>
        </div>
      </td>

      {/* Total Income Column */}
      <td className="py-4 px-3 sm:px-4">
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-black font-display text-emerald-400">
            ₹{income.toLocaleString('en-IN')}
          </span>
          
          {/* Relative visual bar */}
          <div className="w-24 sm:w-32 bg-slate-800/80 rounded-full h-1.5 mt-1 overflow-hidden">
            <div 
              className={`h-full rounded-full ${
                rank === 1 ? 'bg-amber-400' :
                rank === 2 ? 'bg-slate-300' :
                rank === 3 ? 'bg-amber-600' :
                isCurrentUser ? 'bg-eyfi-400' : 'bg-emerald-500'
              }`}
              style={{ width: `${incomePercentage}%` }}
            />
          </div>
        </div>
      </td>

      {/* Trend Column */}
      <td className="py-4 px-3 sm:px-4 text-right sm:text-left whitespace-nowrap">
        <div className="flex items-center justify-end sm:justify-start gap-2">
          {renderTrend()}
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all hidden sm:block" />
        </div>
      </td>
    </tr>
  );
};
