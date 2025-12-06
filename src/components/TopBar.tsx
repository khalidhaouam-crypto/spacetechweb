

import React from 'react';
import { Language } from '../types';

interface TopBarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onHome: () => void;
  onToggleOptions: (e: React.MouseEvent) => void;
  language: Language;
  onToggleLanguage: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ 
  onToggleDarkMode, 
  isDarkMode, 
  onHome, 
  onToggleOptions, 
  language, 
  onToggleLanguage
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-br from-[#6c3483] to-[#8e44ad] text-white px-4 py-2 flex justify-between items-center z-[10000] shadow-md h-[50px] backdrop-blur-sm">
      
      {/* Left Group: Dark Mode & Language (Swapped) */}
      <div className="flex gap-2 items-center relative">
        <button onClick={onToggleDarkMode} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
        
        <button onClick={onToggleLanguage} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all font-bold text-xs uppercase" title="Change Language">
          {language}
        </button>
      </div>

      {/* Center Group: Title */}
      <div className="flex-1 flex items-center justify-center gap-2 font-bold text-lg">
        <i className="fas fa-rocket text-[#ffd700] animate-float"></i>
        <span className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent font-extrabold hidden sm:inline">SPACETECH</span>
        <i className="fas fa-star text-[#ffd700] text-sm animate-twinkle"></i>
      </div>

      {/* Right Group: Home & Options (Swapped) */}
      <div className="flex gap-2 items-center">
        <button onClick={onHome} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className="fas fa-home"></i>
        </button>
        <button onClick={(e) => { e.stopPropagation(); onToggleOptions(e); }} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>

    </div>
  );
};

export default TopBar;