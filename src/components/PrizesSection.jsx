import React from 'react';
import { Gift, Award, Zap, Briefcase, Laptop, Crown, Sparkles, Check } from 'lucide-react';
import { triggerGoldConfetti } from '../utils/confetti';

export const PrizesSection = () => {
  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 mb-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-2">
          <Gift className="w-3.5 h-3.5" />
          EYFI CHALLENGE REWARDS
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Prizes, Grants & Fast-Track Perks
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Top performers unlock real cash grants, seed capital introductions, and direct agency client referrals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1 */}
        <div className="glass-panel-gold p-6 rounded-2xl border-2 border-amber-500/40 relative flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Crown className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Grand Champion (#1)</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">₹1,50,000 Cash Grant</h3>
            <p className="text-xs text-slate-300 mt-2">Plus full MacBook Air M3, EYFI Gold Trophy, and exclusive 1-on-1 mentorship with Series-A startup founders.</p>
            
            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>₹1,50,000 equity-free cash prize</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Featured on EYFI National Hall of Fame</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>₹10L angel pool investor showcase</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => triggerGoldConfetti()} 
            className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-glow-gold transition-all"
          >
            Celebrate #1 Prize
          </button>
        </div>

        {/* Tier 2 */}
        <div className="glass-panel-silver p-6 rounded-2xl border border-slate-400/30 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-700/50 text-slate-200 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Top 3 Podium (#2 & #3)</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">₹75,000 & ₹50,000</h3>
            <p className="text-xs text-slate-300 mt-2">Silver & Bronze laurels, 4K Creator Monitor, and verified portfolio certifications.</p>
            
            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Direct client referral pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Verified EYFI Fellowship badge</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-slate-300 shrink-0" />
                <span>1-year free SaaS toolkit bundle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-eyfi-500/20 text-eyfi-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-eyfi-400 uppercase tracking-wider">Top 10 Finalists</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">Top 10 Club Perks</h3>
            <p className="text-xs text-slate-300 mt-2">Guaranteed freelance client retainers, EYFI swag kit, and access to private angel network.</p>
            
            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-eyfi-400 shrink-0" />
                <span>Top 10 Gold verified badge</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-eyfi-400 shrink-0" />
                <span>Exclusive EYFI hoodie + merch box</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-eyfi-400 shrink-0" />
                <span>Priority access to high-ticket gigs</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
