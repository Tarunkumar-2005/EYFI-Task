import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TopThree } from './components/TopThree';
import { Filters } from './components/Filters';
import { LeaderboardTable } from './components/LeaderboardTable';
import { UserRankCard } from './components/UserRankCard';
import { StudentDetailModal } from './components/StudentDetailModal';
import { CollegeRankings } from './components/CollegeRankings';
import { PrizesSection } from './components/PrizesSection';
import { Footer } from './components/Footer';
import { mockParticipants, currentUser } from './data/mockData';

export function App() {
  // Navigation active tab: 'leaderboard' | 'colleges' | 'rewards'
  const [activeTab, setActiveTab] = useState('leaderboard');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('All');
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [sortBy, setSortBy] = useState('income_desc');
  const [viewMode, setViewMode] = useState('all'); // 'top10' | 'all'

  // Selected student for detail modal
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Extract unique colleges and niches for filter dropdowns
  const collegesList = useMemo(() => {
    const list = Array.from(new Set(mockParticipants.map((p) => p.college)));
    return list.sort();
  }, []);

  const nichesList = useMemo(() => {
    const list = Array.from(new Set(mockParticipants.map((p) => p.niche)));
    return list.sort();
  }, []);

  // Filter & Sort computation
  const filteredParticipants = useMemo(() => {
    let result = [...mockParticipants];

    // 1. Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.college.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.niche.toLowerCase().includes(q)
      );
    }

    // 2. College filter
    if (selectedCollege !== 'All') {
      result = result.filter((p) => p.college === selectedCollege);
    }

    // 3. Niche filter
    if (selectedNiche !== 'All') {
      result = result.filter((p) => p.niche === selectedNiche);
    }

    // 4. View Mode: Top 10 vs All
    if (viewMode === 'top10') {
      result = result.filter((p) => p.rank <= 10);
    }

    // 5. Sorting
    result.sort((a, b) => {
      if (sortBy === 'income_desc') {
        return b.income - a.income;
      }
      if (sortBy === 'rank_asc') {
        return a.rank - b.rank;
      }
      if (sortBy === 'growth_desc') {
        return b.growthPercent - a.growthPercent;
      }
      if (sortBy === 'streak_desc') {
        return b.streakDays - a.streakDays;
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCollege, selectedNiche, sortBy, viewMode]);

  // Top 3 Winners
  const topThreeWinners = useMemo(() => {
    return [...mockParticipants].sort((a, b) => a.rank - b.rank).slice(0, 3);
  }, []);

  const highestIncome = useMemo(() => {
    return Math.max(...mockParticipants.map((p) => p.income), 82500);
  }, []);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCollege('All');
    setSelectedNiche('All');
    setSortBy('income_desc');
    setViewMode('all');
  };

  const handleFilterByCollegeFromRankings = (collegeName) => {
    setSelectedCollege(collegeName);
    setActiveTab('leaderboard');
    const el = document.getElementById('leaderboard-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToUser = () => {
    if (activeTab !== 'leaderboard') {
      setActiveTab('leaderboard');
    }
    setTimeout(() => {
      const el = document.getElementById('current-user-row');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-eyfi-400');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-eyfi-400');
        }, 2500);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col selection:bg-eyfi-500 selection:text-white">
      
      {/* 1. Header */}
      <Header 
        onSelectStudent={setSelectedStudent} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 2. Hero Section with personalized student greeting */}
      <Hero onScrollToUser={handleScrollToUser} />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {activeTab === 'leaderboard' && (
          <div id="leaderboard-section">
            
            {/* 3. Top 3 Winners 3D Podium */}
            <TopThree 
              winners={topThreeWinners} 
              onSelectStudent={setSelectedStudent} 
            />

            {/* 4. Filters & Quick College Pills */}
            <Filters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCollege={selectedCollege}
              setSelectedCollege={setSelectedCollege}
              selectedNiche={selectedNiche}
              setSelectedNiche={setSelectedNiche}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
              collegesList={collegesList}
              nichesList={nichesList}
              totalFilteredCount={filteredParticipants.length}
              onReset={handleResetFilters}
            />

            {/* 5. Detailed Leaderboard Table */}
            <LeaderboardTable
              participants={filteredParticipants}
              highestIncome={highestIncome}
              onSelectStudent={setSelectedStudent}
              currentUserId={currentUser.id}
              onResetFilters={handleResetFilters}
              searchQuery={searchQuery}
            />

          </div>
        )}

        {activeTab === 'colleges' && (
          <div>
            <CollegeRankings onFilterByCollege={handleFilterByCollegeFromRankings} />
          </div>
        )}

        {activeTab === 'rewards' && (
          <div>
            <PrizesSection />
          </div>
        )}

      </main>

      {/* 6. Sticky Floating Current User Card */}
      <UserRankCard onSelectStudent={setSelectedStudent} />

      {/* Student Details Modal */}
      {selectedStudent && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}

export default App;
