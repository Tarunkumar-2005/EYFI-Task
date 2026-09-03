import React from 'react';
import { Trophy, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 pt-12 pb-24 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-eyfi-600 text-white font-display font-black text-sm shadow-glow-blue">
                EY
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                EYFI <span className="text-eyfi-400 font-extrabold">CHALLENGE</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              <b>Earn Your First Income (EYFI)</b> is on a mission to empower 100,000+ Indian college students to achieve financial independence before graduation through real, verified digital skills.
            </p>

            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Fair Play & Rigorous Client Verification Protocol</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Challenge Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="#leaderboard" className="hover:text-eyfi-400 transition-colors">Live Leaderboard</a></li>
              <li><a href="#guidelines" className="hover:text-eyfi-400 transition-colors">Earning Verification FAQ</a></li>
              <li><a href="#prizes" className="hover:text-eyfi-400 transition-colors">Prizes & Grants</a></li>
              <li><a href="#partner-colleges" className="hover:text-eyfi-400 transition-colors">Campus Chapter Directory</a></li>
            </ul>
          </div>

          {/* Student Help & Integrity */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Integrity & Support
            </h4>
            <ul className="space-y-2">
              <li><a href="#code-of-conduct" className="hover:text-eyfi-400 transition-colors">Challenge Code of Conduct</a></li>
              <li><a href="#submit-invoice" className="hover:text-eyfi-400 transition-colors">Submit GST/UPI Invoice</a></li>
              <li><a href="#report-discrepancy" className="hover:text-eyfi-400 transition-colors">Report Earnings Discrepancy</a></li>
              <li><a href="#contact" className="hover:text-eyfi-400 transition-colors">Contact Challenge Concierge</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-slate-400">
            <span>© 2026 EYFI. Built with pride for student entrepreneurs across India.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => triggerConfetti()}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Cheer All Students</span>
            </button>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Season 3 Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
