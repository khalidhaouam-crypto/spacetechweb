
import React, { useState, useEffect } from 'react';
import { Task, Language } from '../../types';
import { TRANSLATIONS } from '../../constants';

interface PomodoroProps {
    timeLeft: number;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    mode: 'FOCUS' | 'BREAK';
    setMode: React.Dispatch<React.SetStateAction<'FOCUS' | 'BREAK'>>;
    focusDuration: number;
    setFocusDuration: React.Dispatch<React.SetStateAction<number>>;
    breakDuration: number;
    setBreakDuration: React.Dispatch<React.SetStateAction<number>>;
    language?: Language;
}

const PomodoroModule: React.FC<PomodoroProps> = ({
    timeLeft, setTimeLeft,
    isActive, setIsActive,
    mode, setMode,
    focusDuration, setFocusDuration,
    breakDuration, setBreakDuration,
    language = 'ar'
}) => {
  // Tasks Integration
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const t = TRANSLATIONS[language];
  const totalTime = mode === 'FOCUS' ? focusDuration * 60 : breakDuration * 60;
  
  // Circular Progress Calculation
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress = totalTime > 0 ? timeLeft / totalTime : 0;
  const dashOffset = circumference * (1 - progress);

  useEffect(() => {
    // Load tasks for dropdown
    const savedTasks = localStorage.getItem('spacetech_module_tasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        setTasks(parsed.filter((t: Task) => !t.done)); // Only show active tasks
      } catch(e) {}
    }
  }, []);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'FOCUS' ? focusDuration * 60 : breakDuration * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-slideDown">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Left Side: Timer Visualization */}
        <div className="flex-1 flex flex-col items-center">
           <div className="relative w-[300px] h-[300px]">
              {/* Background Circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="150"
                  cy="150"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="15"
                  fill="transparent"
                  className="text-gray-100 dark:text-[#3d3d3d]"
                />
                {/* Progress Circle */}
                <circle
                  cx="150"
                  cy="150"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="15"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ${mode === 'FOCUS' ? 'text-primary' : 'text-green-500'}`}
                />
              </svg>
              
              {/* Center Text */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                 <div className={`text-6xl font-black tracking-tighter ${mode === 'FOCUS' ? 'text-gray-800 dark:text-white' : 'text-green-600'}`}>
                   {formatTime(timeLeft)}
                 </div>
                 <div className={`text-sm font-bold mt-2 px-3 py-1 rounded-full ${mode === 'FOCUS' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-600'}`}>
                   {mode === 'FOCUS' ? t.pomodoro.focusSession : t.pomodoro.breakTime}
                 </div>
              </div>
           </div>

           <div className="flex gap-4 mt-8">
              <button 
                onClick={toggleTimer}
                className={`w-32 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition ${mode === 'FOCUS' ? 'bg-primary' : 'bg-green-500'}`}
              >
                {isActive ? t.pomodoro.pause : t.pomodoro.start}
              </button>
              <button 
                onClick={resetTimer}
                className="w-32 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-[#3d3d3d] transition"
              >
                {t.pomodoro.reset}
              </button>
           </div>
        </div>

        {/* Right Side: Settings & Task */}
        <div className="w-full md:w-80 bg-white dark:bg-[#2d2d2d] rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-600 pb-2">{t.pomodoro.settingsTitle}</h3>
           
           <div className="space-y-6">
              {/* Task Selector */}
              <div>
                 <label className="block text-xs font-bold text-gray-500 mb-2">{t.pomodoro.taskLabel}</label>
                 <select 
                   value={selectedTaskId || ''}
                   onChange={e => setSelectedTaskId(Number(e.target.value))}
                   className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}
                 >
                   <option value="">{t.pomodoro.selectTask}</option>
                   {tasks.map(t => (
                     <option key={t.id} value={t.id}>{t.title}</option>
                   ))}
                 </select>
                 {selectedTaskId && (
                   <div className="mt-2 text-xs text-primary font-bold flex items-center gap-1">
                     <i className="fas fa-bullseye"></i>
                     <span>{t.pomodoro.focusMsg}</span>
                   </div>
                 )}
              </div>

              {/* Duration Sliders */}
              <div>
                 <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500">{t.pomodoro.focusDuration}</span>
                    <span className="text-primary">{focusDuration} {t.pomodoro.minutes}</span>
                 </div>
                 <input 
                   type="range" 
                   min="5" max="60" step="5"
                   value={focusDuration}
                   onChange={e => { setFocusDuration(Number(e.target.value)); if(!isActive && mode === 'FOCUS') setTimeLeft(Number(e.target.value)*60); }}
                   className="w-full accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                 />
              </div>

              <div>
                 <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500">{t.pomodoro.breakDuration}</span>
                    <span className="text-green-500">{breakDuration} {t.pomodoro.minutes}</span>
                 </div>
                 <input 
                   type="range" 
                   min="1" max="15" step="1"
                   value={breakDuration}
                   onChange={e => { setBreakDuration(Number(e.target.value)); if(!isActive && mode === 'BREAK') setTimeLeft(Number(e.target.value)*60); }}
                   className="w-full accent-green-500 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroModule;
