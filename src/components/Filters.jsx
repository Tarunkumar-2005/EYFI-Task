import React from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  Building2, 
  Sparkles,
  Flame
} from 'lucide-react';

export const Filters = ({
  searchQuery,
  setSearchQuery,
  selectedCollege,
  setSelectedCollege,
  selectedNiche,
  setSelectedNiche,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  collegesList,
  nichesList,
  totalFilteredCount,
  onReset
}) => {
  const hasActiveFilters = searchQuery !== '' || selectedCollege !== 'All' || selectedNiche !== 'All' || sortBy !== 'income_desc' || viewMode !== 'all';

  // Popular quick colleges pills
  const popularColleges = [
    { label: "All Hubs", value: "All" },
    { label: "BMSCE", value: "BMS College of Engineering" },
    { label: "Christ Univ", value: "Christ University" },
    { label: "RV College", value: "RV College of Engineering" },
    { label: "PES Univ", value: "PES University" },
    { label: "IIT Bombay", value: "IIT Bombay" },
  ];

  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-slate-800 mb-6 space-y-3.5">
      
      {/* Search Input & View Mode Toggles */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-eyfi-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student, college, or skill (e.g. BMS, Ananya, Full-Stack, Figma)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-eyfi-400 focus:ring-1 focus:ring-eyfi-400 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setViewMode('top10')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'top10'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⭐ Top 10 Only
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'all'
                ? 'bg-eyfi-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🌐 All ({totalFilteredCount})
          </button>
        </div>

      </div>

      {/* Quick College Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
          <Building2 className="w-3 h-3 text-eyfi-400" />
          Hub:
        </span>
        {popularColleges.map((col) => (
          <button
            key={col.label}
            onClick={() => setSelectedCollege(col.value)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCollege === col.value
                ? 'bg-eyfi-500/20 text-eyfi-300 border border-eyfi-500/60 font-bold'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {col.label}
          </button>
        ))}
      </div>

      {/* Filter Dropdowns & Sort Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2.5 border-t border-slate-800/80">
        
        {/* Niche / Skill Filter */}
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800">
          <SlidersHorizontal className="w-4 h-4 text-emerald-400 shrink-0" />
          <select
            value={selectedNiche}
            onChange={(e) => setSelectedNiche(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
          >
            <option value="All" className="bg-slate-900 text-white">All Skill Niches</option>
            {nichesList.map((niche) => (
              <option key={niche} value={niche} className="bg-slate-900 text-white">
                {niche}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by */}
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800">
          <ArrowUpDown className="w-4 h-4 text-amber-400 shrink-0" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
          >
            <option value="income_desc" className="bg-slate-900 text-white">Sort: Highest Income (Default)</option>
            <option value="rank_asc" className="bg-slate-900 text-white">Sort: Rank (#1 to #20)</option>
            <option value="growth_desc" className="bg-slate-900 text-white">Sort: Biggest Gainers (+%)</option>
            <option value="streak_desc" className="bg-slate-900 text-white">Sort: Longest Streak</option>
          </select>
        </div>

        {/* Reset / Clear Button */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          <span className="text-xs text-slate-400 font-medium">
            Showing <b className="text-white">{totalFilteredCount}</b> students
          </span>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
