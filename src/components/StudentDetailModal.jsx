import React from 'react';
import { 
  X, 
  Trophy, 
  Crown, 
  Medal, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  IndianRupee,
  Share2
} from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export const StudentDetailModal = ({ student, onClose }) => {
  if (!student) return null;

  const handleCheer = () => {
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-eyfi-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative shrink-0">
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-eyfi-500/80 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-black text-white flex items-center gap-1 shadow">
              {student.rank === 1 ? '👑 #1' : `#${student.rank}`}
            </div>
          </div>

          <div className="min-w-0 pr-6">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white font-display truncate">
                {student.name}
              </h3>
              <ShieldCheck className="w-4 h-4 text-eyfi-400 shrink-0" title="Verified Earning" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="truncate">{student.college}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{student.city}</span>
            </div>
          </div>
        </div>

        {/* Income & Growth Metric Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Verified Revenue
            </span>
            <div className="text-2xl font-black font-display text-emerald-400 mt-0.5">
              ₹{student.income.toLocaleString('en-IN')}
            </div>
            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              100% Client Paid
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Sprint Momentum
            </span>
            <div className="text-2xl font-black font-display text-amber-400 mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              +{student.growthPercent || 24}%
            </div>
            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
              <Flame className="w-3 h-3 text-amber-400" />
              {student.streakDays || 10} day streak
            </span>
          </div>
        </div>

        {/* Bio / Niche */}
        {student.bio && (
          <div className="mb-5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
            <span className="font-bold text-eyfi-400 block mb-1">Focus & Skills: {student.niche}</span>
            {student.bio}
          </div>
        )}

        {/* Verified Wins Breakdown */}
        {student.recentWins && student.recentWins.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Recent Client Contracts</span>
              <span className="text-emerald-400 font-normal">All Verified</span>
            </div>
            <div className="space-y-2">
              {student.recentWins.map((win, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs"
                >
                  <div className="min-w-0 pr-2">
                    <div className="font-medium text-slate-200 truncate">{win.title}</div>
                    <div className="text-[10px] text-slate-500">{win.date}</div>
                  </div>
                  <div className="font-bold text-emerald-400 shrink-0">
                    ₹{win.amount.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Badges Earned */}
        {student.badges && student.badges.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {student.badges.map((badge, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={handleCheer}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-glow-gold transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Send Cheer & Confetti</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
