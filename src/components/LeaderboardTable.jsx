import React from 'react';
import { 
  Trophy, 
  SearchX, 
  Flame, 
  ArrowUpDown, 
  ShieldCheck, 
  Info,
  Sparkles
} from 'lucide-react';
import { LeaderboardRow } from './LeaderboardRow';

export const LeaderboardTable = ({ 
  participants = [], 
  highestIncome, 
  onSelectStudent, 
  currentUserId,
  onResetFilters,
  searchQuery
}) => {
  if (participants.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-12 text-center border border-slate-800 my-6">
        <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-slate-400">
          <SearchX className="w-8 h-8 text-eyfi-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1 font-display">
          No participants found
        </h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
          We couldn't find any students matching "{searchQuery}". Try searching for another name, college, or reset the filters.
        </p>
        <button
          onClick={onResetFilters}
          className="px-5 py-2.5 rounded-xl bg-eyfi-600 hover:bg-eyfi-500 text-white text-xs font-bold transition-all shadow-glow-blue"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mb-12">
      
      {/* Table header bar */}
      <div className="px-5 py-4 border-b border-slate-800/80 bg-slate-900/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider">
            Verified Standings
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Live calculations synced</span>
        </div>
      </div>

      {/* Table responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3.5 px-3 sm:px-4 w-16">Rank</th>
              <th className="py-3.5 px-3 sm:px-4">Student & Niche</th>
              <th className="py-3.5 px-3 sm:px-4 hidden sm:table-cell">College & City</th>
              <th className="py-3.5 px-3 sm:px-4">Total Income</th>
              <th className="py-3.5 px-3 sm:px-4 text-right sm:text-left">Sprint Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {participants.map((student) => (
              <LeaderboardRow
                key={student.id}
                participant={student}
                highestIncome={highestIncome}
                onSelectStudent={onSelectStudent}
                isCurrentUser={student.id === currentUserId || student.isCurrentUser}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Table footer info */}
      <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>All income data audited via client GST invoices & transaction receipts.</span>
        </div>
        <span className="text-slate-500 font-mono text-[11px]">Updated every 15 mins</span>
      </div>

    </div>
  );
};
