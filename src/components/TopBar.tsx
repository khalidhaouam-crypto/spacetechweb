
import React, { useState } from 'react';
import { Language, NotificationItem } from '../types';
import { NotificationService } from '../services/NotificationService';

interface TopBarProps {
  onToggleSearch: () => void;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onHome: () => void;
  onToggleOptions: (e: React.MouseEvent) => void;
  language: Language;
  onToggleLanguage: () => void;
  notifications: NotificationItem[];
  onClearNotifications: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ 
  onToggleSearch, 
  onToggleDarkMode, 
  isDarkMode, 
  onHome, 
  onToggleOptions, 
  language, 
  onToggleLanguage,
  notifications,
  onClearNotifications
}) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  const handleBellClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNotificationsOpen(!isNotificationsOpen);

    // Request permission if not granted
    if (NotificationService.isSupported() && NotificationService.getPermission() !== 'granted') {
      NotificationService.requestPermission();
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-br from-[#6c3483] to-[#8e44ad] text-white px-4 py-2 flex justify-between items-center z-[10000] shadow-md h-[50px] backdrop-blur-sm">
      <div className="flex gap-2 items-center relative">
        <button onClick={onToggleSearch} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className="fas fa-search"></i>
        </button>
        <button onClick={onToggleDarkMode} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
        
        {/* Notification Bell with Badge */}
        <div className="relative">
          <button onClick={handleBellClick} className="relative bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all" title="Notifications">
            <i className={`fas fa-bell ${notifications.length > 0 ? 'animate-swing' : ''}`}></i>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#6c3483]"></span>
            )}
          </button>
          
          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div 
              className={`absolute top-[45px] ${language === 'ar' ? 'right-[-80px]' : 'left-[-80px]'} w-[280px] bg-white dark:bg-[#2d2d2d] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slideDown z-[10002]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-[#333]">
                <span className="text-sm font-black text-gray-700 dark:text-gray-200">{language === 'ar' ? 'التنبيهات' : 'Notifications'}</span>
                {notifications.length > 0 && (
                  <button onClick={() => { onClearNotifications(); setIsNotificationsOpen(false); }} className="text-xs text-red-500 font-bold hover:underline">
                    {language === 'ar' ? 'مسح الكل' : 'Clear All'}
                  </button>
                )}
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-gray-400 text-sm">
                    <i className="fas fa-bell-slash text-2xl mb-2 opacity-50"></i>
                    <p>{language === 'ar' ? 'لا توجد تنبيهات جديدة' : 'No new notifications'}</p>
                  </div>
                ) : (
                  notifications.map((notif, idx) => (
                    <div key={idx} className="p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#3d3d3d] transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-gray-800 dark:text-white text-sm">{notif.title}</span>
                        <span className="text-[10px] text-gray-400">{new Date(notif.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                      <p className="text-xs text-primary font-semibold">{notif.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <button onClick={onToggleLanguage} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all font-bold text-xs uppercase" title="Change Language">
          {language}
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center gap-2 font-bold text-lg">
        <i className="fas fa-rocket text-[#ffd700] animate-float"></i>
        <span className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent font-extrabold hidden sm:inline">SPACETECH</span>
        <i className="fas fa-star text-[#ffd700] text-sm animate-twinkle"></i>
      </div>

      <div className="flex gap-2 items-center">
        <button onClick={onHome} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className="fas fa-home"></i>
        </button>
        <button onClick={onToggleOptions} className="bg-white/10 border border-white/10 rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
