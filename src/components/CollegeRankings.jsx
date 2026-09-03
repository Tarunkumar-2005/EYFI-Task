import React from 'react';
import { Building2, Users, IndianRupee, Trophy, Medal, Sparkles, TrendingUp } from 'lucide-react';
import { collegeLeaderboard } from '../data/mockData';

export const CollegeRankings = ({ onFilterByCollege }) => {
  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5" />
            CAMPUS CUPS & LEAGUES
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Top Performing College Ecosystems
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ranked by collective verified earnings across all participating students.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegeLeaderboard.map((col, idx) => (
          <div 
            key={col.college}
            onClick={() => onFilterByCollege(col.college)}
            className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer group glass-card-interactive ${
              idx === 0 ? 'bg-amber-500/10 border-amber-500/30' :
              idx === 1 ? 'bg-slate-400/10 border-slate-400/30' :
              idx === 2 ? 'bg-amber-700/10 border-amber-700/30' :
              'bg-slate-900/60 border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                  idx === 0 ? 'bg-amber-400 text-slate-950 font-black' :
                  idx === 1 ? 'bg-slate-300 text-slate-950 font-bold' :
                  idx === 2 ? 'bg-amber-600 text-white font-bold' :
                  'bg-slate-800 text-slate-300 font-medium'
                }`}>
                  #{idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-400">{col.city}</span>
              </div>
              <span className="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                {col.studentsCount} Students
              </span>
            </div>

            <h3 className="font-bold text-white text-base group-hover:text-eyfi-400 transition-colors mb-3">
              {col.college}
            </h3>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 font-semibold block">Total Revenue</span>
                <span className="text-lg font-black font-display text-emerald-400">
                  ₹{(col.totalEarned / 100000).toFixed(2)}L
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase text-slate-400 font-semibold block">Avg / Student</span>
                <span className="text-xs font-bold text-slate-200">
                  ₹{col.avgIncome.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
