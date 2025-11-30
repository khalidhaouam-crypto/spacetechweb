
import React, { useState, useEffect, useRef } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TopBar from './components/TopBar';
import SocialIcons from './components/SocialIcons';
import VideoCard from './components/VideoCard';
import TasksModule from './components/Modules/TasksModule';
import NotesModule from './components/Modules/NotesModule';
import FlashcardsModule from './components/Modules/FlashcardsModule';
import PomodoroModule from './components/Modules/PomodoroModule';
import MindMapsModule from './components/Modules/MindMapsModule';
import GradeCalculatorModule from './components/Modules/GradeCalculatorModule';
import SearchOverlay from './components/SearchOverlay';
import HolidaysModal from './components/HolidaysModal';
import { SUBJECTS_DATA, LINKS_DATA, VIDEOS_DATA, HS_LEVELS, HS_BRANCHES, TRANSLATIONS, DATA_TRANSLATIONS } from './constants';
import { EducationType, CycleType, LevelType, LinkItem, NestedSubjectData, Language, Task, SubjectInfo, NotificationItem } from './types';
import { NotificationService } from './services/NotificationService';

type View = 'WELCOME' | 'HOME' | 'BRANCHES' | 'SUBJECTS' | 'OPTIONS' | 'CONTENT' | 'ABOUT' | 'TASKS' | 'NOTES' | 'FLASHCARDS' | 'POMODORO' | 'MINDMAPS' | 'CALCULATOR';

const App: React.FC = () => {
  const [view, setView] = useState<View>('WELCOME');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);
  const [language, setLanguage] = useState<Language>('ar');

  // User Selection State
  const [name, setName] = useState('');
  const [education, setEducation] = useState<EducationType>('');
  const [cycle, setCycle] = useState<CycleType>('');
  const [level, setLevel] = useState<LevelType>('');
  const [branch, setBranch] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedContentType, setSelectedContentType] = useState('');
  const [contentList, setContentList] = useState<LinkItem[]>([]);
  const [nestedContent, setNestedContent] = useState<{[key:string]: LinkItem[]} | null>(null);

  // --- Notification State ---
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // --- Global Pomodoro State (Lifted) ---
  const [pomoTimeLeft, setPomoTimeLeft] = useState(25 * 60);
  const [pomoIsActive, setPomoIsActive] = useState(false);
  const [pomoMode, setPomoMode] = useState<'FOCUS' | 'BREAK'>('FOCUS');
  const [pomoFocusDur, setPomoFocusDur] = useState(25);
  const [pomoBreakDur, setPomoBreakDur] = useState(5);
  const pomoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Translation Helper
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const savedName = localStorage.getItem('spacetech_name');
    if (savedName) setName(savedName);
    
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const savedLang = localStorage.getItem('spacetech_language');
    if (savedLang && (savedLang === 'ar' || savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang as Language);
    }
  }, []);

  // Update Direction and HTML Lang based on selected language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('spacetech_language', language);
  }, [language]);

  // --- Notification Watcher ---
  useEffect(() => {
    // Check for notifications every 30 seconds for better precision
    const notificationInterval = setInterval(() => {
        const savedTasks = localStorage.getItem('spacetech_module_tasks');
        if (savedTasks) {
            try {
                const tasks: Task[] = JSON.parse(savedTasks);
                const now = new Date();
                let updated = false;
                let shouldNotify = false;
                let lastTaskTitle = '';

                const newTasks = tasks.map(task => {
                    // Check if task has reminder, not done, not notified, and time has passed (or is now)
                    if (task.reminderTime && !task.done && !task.notified) {
                        const reminderDate = new Date(task.reminderTime);
                        if (reminderDate <= now) {
                            // Trigger Notification Logic
                            shouldNotify = true;
                            lastTaskTitle = task.title;
                            
                            // Send System Notification
                            const notifTitle = language === 'ar' ? 'تذكير بمهمة' : 'Task Reminder';
                            NotificationService.sendNotification(notifTitle, task.title);
                            
                            updated = true;
                            return { ...task, notified: true };
                        }
                    }
                    return task;
                });

                if (shouldNotify) {
                    // 1. Play Sound
                    const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
                    audio.play().catch(() => {});
                    
                    // 2. Add to Notifications List
                    setNotifications(prev => [{
                      id: Date.now(),
                      title: language === 'ar' ? 'تذكير' : 'Reminder',
                      message: lastTaskTitle,
                      timestamp: new Date().toISOString()
                    }, ...prev]);
                }

                if (updated) {
                    localStorage.setItem('spacetech_module_tasks', JSON.stringify(newTasks));
                }
            } catch (e) {
                console.error("Error processing task notifications", e);
            }
        }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(notificationInterval);
  }, [language]);


  const toggleLanguage = () => {
    if (language === 'ar') setLanguage('fr');
    else if (language === 'fr') setLanguage('en');
    else setLanguage('ar');
  };

  // Pomodoro Ticking Logic
  useEffect(() => {
    if (pomoIsActive && pomoTimeLeft > 0) {
        pomoTimerRef.current = setInterval(() => {
            setPomoTimeLeft(prev => prev - 1);
        }, 1000);
    } else if (pomoTimeLeft === 0) {
        if (pomoIsActive) {
            const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            audio.play().catch(() => {});
            setPomoIsActive(false);
            if (pomoMode === 'FOCUS') {
                alert('🎉 انتهت جلسة التركيز! خذ استراحة.');
                setPomoMode('BREAK');
                setPomoTimeLeft(pomoBreakDur * 60);
            } else {
                alert('⏰ انتهت الاستراحة! لنعد للعمل.');
                setPomoMode('FOCUS');
                setPomoTimeLeft(pomoFocusDur * 60);
            }
        }
    }
    return () => {
        if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    };
  }, [pomoIsActive, pomoTimeLeft, pomoMode, pomoBreakDur, pomoFocusDur]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const handleStart = () => {
    if (name) localStorage.setItem('spacetech_name', name);
    if (education === 'الثانوي التأهيلي') {
      setView('BRANCHES');
    } else {
      setView('SUBJECTS');
    }
  };

  const selectBranch = (b: string) => {
    setBranch(b);
    setView('SUBJECTS');
  };

  const selectSubject = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setView('OPTIONS');
  };

  const selectOption = (typeKey: string) => {
    
    let dataKey = typeKey;
    // Reverse lookup for data keys based on translation
    // We compare the selected option string against all translations to find the arabic data key
    if (typeKey === t.videos) dataKey = 'فيديوهات';
    else if (typeKey === t.lessons) dataKey = 'دروس';
    else if (typeKey === t.exercises) dataKey = 'تمارين';
    else if (typeKey === t.exams) dataKey = 'فروض + التصحيح';
    else if (typeKey === t.localExams) dataKey = 'امتحانات محلية + التصحيح';
    else if (typeKey === t.regionalExams) dataKey = 'امتحانات جهوية + التصحيح';
    else if (typeKey === t.nationalExams) dataKey = 'امتحانات وطنية + التصحيح';

    setSelectedContentType(typeKey);

    let subjectData: NestedSubjectData | undefined;
    if (education === 'الثانوي الإعدادي') {
      subjectData = LINKS_DATA['الثانوي الإعدادي']?.[cycle]?.[level]?.[selectedSubject] as NestedSubjectData;
    } else {
      subjectData = undefined; 
    }
    if (!subjectData) {
      setContentList([]);
      setView('CONTENT');
      return;
    }
    
    if (dataKey === 'فيديوهات') {
      const videos = subjectData['فيديوهات'] || VIDEOS_DATA[selectedSubject] || [];
      setContentList(videos);
      setNestedContent(null);
    } else if (dataKey === 'دروس' && subjectData['دروس'] && !Array.isArray(subjectData['دروس'])) {
      setNestedContent(subjectData['دروس'] as {[key:string]: LinkItem[]});
      setContentList([]);
    } else if (dataKey === 'فروض + التصحيح' && subjectData['فروض + التصحيح']) {
      setNestedContent(subjectData['فروض + التصحيح']);
      setContentList([]);
    } else {
      const data = (subjectData as any)[dataKey];
      setContentList(Array.isArray(data) ? data : []);
      setNestedContent(null);
    }
    setView('CONTENT');
  };

  const renderContent = () => {
    if (selectedContentType === t.videos) {
        if (contentList.length === 0) return <div className="p-8 text-center bg-orange-50 text-orange-600 rounded-xl font-bold border border-orange-200">{t.noLinks}</div>;
        return (
            <div>
                 <h3 className={`text-primary border-b-2 border-primary/20 pb-3 mb-5 font-extrabold text-xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>📹 {t.videos}</h3>
                 {contentList.map((video, idx) => (
                     <VideoCard key={idx} video={video} />
                 ))}
            </div>
        );
    }
    if (nestedContent) {
        return Object.keys(nestedContent).map(key => (
            <div key={key} className="mb-6">
                <div className={`p-4 mb-3 rounded-xl cursor-pointer font-bold border-r-4 transition-all hover:translate-x-[-5px] bg-gradient-to-r from-[#f3e5f5] to-white text-[#8e44ad] border-primary shadow-sm hover:shadow-md`}>
                    {key}
                </div>
                <div className="pr-4 space-y-2">
                    {nestedContent[key].map((item, idx) => (
                         <a key={idx} href={item.url} target="_blank" rel="noreferrer" className={`block p-4 rounded-xl bg-white dark:bg-[#3d3d3d] border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:text-primary hover:border-primary transition shadow-sm hover:shadow-md font-semibold flex items-center justify-between group ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <span>{item.title}</span>
                            <i className="fas fa-external-link-alt text-gray-300 group-hover:text-primary transition"></i>
                         </a>
                    ))}
                </div>
            </div>
        ));
    }
    if (contentList.length === 0) return <div className="p-8 text-center bg-orange-50 text-orange-600 rounded-xl font-bold border border-orange-200">{t.noLinks}</div>;
    return contentList.map((item, idx) => (
        <a key={idx} href={item.url || item.urls?.[0]} target="_blank" rel="noreferrer" className={`block p-4 mb-3 rounded-xl bg-gradient-to-l from-white to-[#f8f9fa] dark:from-[#3d3d3d] dark:to-[#333] border-r-4 border-primary text-gray-800 dark:text-white hover:translate-x-[-5px] hover:shadow-lg transition-all duration-300 font-bold flex items-center justify-between group ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <span>{item.title}</span>
            <i className="fas fa-chevron-left text-gray-300 group-hover:text-primary transition"></i>
        </a>
    ));
  };

  const getSubjectsList = () => {
    // Translation logic for Subjects
    // We get the data key (e.g., 'الرياضيات') then find its translation in DATA_TRANSLATIONS
    let list: SubjectInfo[] = [];
    if (education === 'الثانوي الإعدادي') {
      list = SUBJECTS_DATA['الثانوي الإعدادي'] || [];
    } else {
      list = SUBJECTS_DATA[branch] || [];
    }

    // Map the names to the current language
    return list.map(sub => ({
        ...sub,
        name: DATA_TRANSLATIONS[sub.name]?.[language] || sub.name
    }));
  };
  
  const getBranchName = (b: string) => {
      return DATA_TRANSLATIONS[b]?.[language] || b;
  };

  const isStartEnabled = () => {
    if (!name || !education || !cycle || !level) return false;
    return true;
  };

  if (view === 'WELCOME') return <WelcomeScreen onComplete={() => setView('HOME')} />;

  const isWideView = ['MINDMAPS', 'CALCULATOR', 'TASKS', 'NOTES', 'FLASHCARDS', 'POMODORO'].includes(view);

  return (
    <div className="min-h-screen pb-10 font-sans selection:bg-primary/20 relative">
      <TopBar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode}
        onToggleSearch={() => setIsSearchOpen(true)}
        language={language}
        onToggleLanguage={toggleLanguage}
        notifications={notifications}
        onClearNotifications={() => setNotifications([])}
        onHome={() => {
            if (education === 'الثانوي التأهيلي' && branch) {
                setView('BRANCHES');
            } else if (education === 'الثانوي التأهيلي' && !branch) {
                setView('HOME');
            } else if (education === 'الثانوي الإعدادي' && level) {
                setView('HOME');
            } else {
                setView('HOME');
            }
        }}
        onToggleOptions={(e) => { e.stopPropagation(); setIsOptionsMenuOpen(!isOptionsMenuOpen); }}
      />

      <SearchOverlay active={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={(sub, type) => { setSelectedSubject(sub); setView('OPTIONS'); }} language={language} />
      {showHolidays && <HolidaysModal onClose={() => setShowHolidays(false)} />}

      {isOptionsMenuOpen && (
        <div className={`fixed top-[60px] ${language === 'ar' ? 'left-4' : 'right-4'} bg-white/90 dark:bg-[#2d2d2d]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-[10001] w-[260px] animate-slideDown overflow-hidden`} onClick={() => setIsOptionsMenuOpen(false)}>
            {[
                { name: t.modules.tasks, icon: 'fas fa-tasks', action: () => setView('TASKS') },
                { name: t.modules.notes, icon: 'fas fa-sticky-note', action: () => setView('NOTES') },
                { name: t.modules.flashcards, icon: 'fas fa-layer-group', action: () => setView('FLASHCARDS') },
                { name: t.modules.pomodoro, icon: 'fas fa-clock', action: () => setView('POMODORO') },
                { name: t.modules.mindmaps, icon: 'fas fa-project-diagram', action: () => setView('MINDMAPS') },
                { name: t.modules.calculator, icon: 'fas fa-calculator', action: () => setView('CALCULATOR') },
            ].map((opt, i) => (
                <div key={i} onClick={opt.action} className="p-4 flex items-center gap-4 hover:bg-primary/5 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0 transition-all active:scale-95">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <i className={`${opt.icon} text-primary text-sm`}></i>
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200">{opt.name}</span>
                </div>
            ))}
        </div>
      )}

      {/* Main Container - Dynamic Width */}
      <div className={`container mx-auto p-5 pt-8 transition-all duration-500 ${isWideView ? 'max-w-[1400px]' : 'max-w-[550px]'}`}>
        
        {view === 'HOME' && (
          <div className="animate-fadeIn relative z-10">
            <h2 className="text-3xl text-center font-black mb-8 text-primary dark:text-white drop-shadow-sm">
                {t.welcome} <br/> <span className="text-4xl text-accent">SPACETECH</span>
            </h2>
            
            <div className="bg-white dark:bg-[#2d2d2d] rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="mb-5 relative">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.nameLabel}</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder={t.namePlaceholder} 
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary focus:bg-white dark:focus:bg-[#333] outline-none font-bold transition-all text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                </div>
                
                <div className="mb-4">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.stageLabel}</label>
                    <select 
                    value={education} 
                    onChange={(e) => { 
                        setEducation(e.target.value as EducationType); 
                        setLevel(''); 
                        setBranch('');
                    }}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.stagePlaceholder}</option>
                    <option value="الثانوي الإعدادي">{t.middleSchool}</option>
                    <option value="الثانوي التأهيلي">{t.highSchool}</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.cycleLabel}</label>
                    <select 
                    value={cycle} 
                    onChange={(e) => setCycle(e.target.value as CycleType)}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.cyclePlaceholder}</option>
                    <option value="1">{t.cycle1}</option>
                    <option value="2">{t.cycle2}</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.levelLabel}</label>
                    <select 
                    value={level}
                    onChange={(e) => { 
                        setLevel(e.target.value as LevelType); 
                        setBranch('');
                    }}
                    disabled={!education}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.levelPlaceholder}</option>
                    {education === 'الثانوي الإعدادي' ? (
                        <>
                        <option value="1">{t.middle1}</option>
                        <option value="2">{t.middle2}</option>
                        <option value="3">{t.middle3}</option>
                        </>
                    ) : education === 'الثانوي التأهيلي' ? (
                        HS_LEVELS.map(l => <option key={l.value} value={l.value}>{DATA_TRANSLATIONS[l.label]?.[language] || l.label}</option>)
                    ) : null}
                    </select>
                </div>

                <button 
                onClick={handleStart}
                disabled={!isStartEnabled()}
                className="w-full p-4 rounded-xl font-black text-white bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] hover:bg-right shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                {t.startBtn}
                </button>
            </div>

            <div className="mt-6">
                 <button onClick={() => setView('ABOUT')} className="w-full py-3 rounded-xl font-bold text-primary border-2 border-primary bg-white hover:bg-primary hover:text-white transition shadow-lg">
                    {t.aboutBtn}
                 </button>
            </div>

            <SocialIcons />
          </div>
        )}

        {view === 'BRANCHES' && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-center mb-6 text-primary drop-shadow-sm">{t.selectBranch}</h2>
            <div className="flex flex-col gap-4">
              {HS_BRANCHES[level]?.map((b, idx) => (
                <button 
                  key={idx}
                  onClick={() => selectBranch(b)}
                  className={`p-5 rounded-2xl bg-white dark:bg-[#2d2d2d] border border-gray-100 dark:border-gray-700 shadow-md hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold text-lg flex items-center justify-between group ${language === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-gray-800 dark:text-white group-hover:text-primary transition">{getBranchName(b)}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#3d3d3d] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                     <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-sm`}></i>
                  </div>
                </button>
              ))}
              {(!HS_BRANCHES[level] || HS_BRANCHES[level].length === 0) && (
                <div className="text-center text-gray-500 py-10 bg-gray-50 rounded-xl">لا توجد مسالك متاحة لهذا المستوى حالياً.</div>
              )}
            </div>
            <button onClick={() => setView('HOME')} className="mt-8 w-full py-3 bg-white border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-sm">{t.changeLevel}</button>
          </div>
        )}

        {view === 'SUBJECTS' && (
           <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-center mb-2 text-gray-800 dark:text-white bg-white/80 dark:bg-[#333]/80 rounded-full inline-block px-6 py-2 backdrop-blur-sm">{t.subjectsTitle}</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm font-bold bg-white/50 dark:bg-[#333]/50 inline-block px-4 py-1 rounded-full">{education === 'الثانوي الإعدادي' ? t.middleSchool : t.highSchool} - {branch ? getBranchName(branch) : (level === '1' ? '1' : level === '2' ? '2' : '3')}</p>
              
              <div className="grid grid-cols-1 gap-4">
                 {getSubjectsList().map((sub, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => selectSubject(sub.name)}
                      className="group relative overflow-hidden p-5 rounded-2xl text-white font-bold text-lg flex items-center gap-4 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${sub.color}, ${adjustColor(sub.color, -20)})` }}
                    >
                       <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                       <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                            <i className={`${sub.icon} text-2xl`}></i>
                       </div>
                       <span className="flex-1 text-xl">{sub.name}</span>
                       <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'} opacity-0 group-hover:opacity-100 ${language === 'ar' ? '-translate-x-4' : 'translate-x-4'} group-hover:translate-x-0 transition-all duration-300`}></i>
                    </div>
                 ))}
                 {getSubjectsList().length === 0 && <div className="text-center text-gray-500 py-10">{t.noSubjects}</div>}
              </div>
              <button onClick={() => { education === 'الثانوي التأهيلي' ? setView('BRANCHES') : setView('HOME') }} className="mt-8 w-full py-3 border-2 border-gray-300 bg-white text-gray-600 rounded-xl font-bold hover:border-primary hover:text-primary hover:bg-white transition shadow-lg">{t.backBtn}</button>
           </div>
        )}

        {view === 'OPTIONS' && (
            <div className="animate-fadeIn">
                <h2 className="text-2xl font-black text-center mb-6 text-primary bg-white/90 dark:bg-[#333]/90 rounded-xl py-2 shadow-lg">{selectedSubject}</h2>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { title: t.lessons, icon: 'fas fa-book-open', desc: t.descLessons },
                        { title: t.exercises, icon: 'fas fa-pen-fancy', desc: t.descExercises },
                        { title: t.exams, icon: 'fas fa-file-signature', desc: t.descExams },
                        { title: t.videos, icon: 'fas fa-play-circle', desc: t.descVideos }
                    ].map(opt => (
                        <button key={opt.title} onClick={() => selectOption(opt.title)} className={`group p-5 rounded-2xl bg-white dark:bg-[#2d2d2d] border border-gray-100 dark:border-gray-700 shadow-md hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <i className={`${opt.icon} text-xl`}></i>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg text-gray-800 dark:text-white">{opt.title}</div>
                                <div className="text-xs text-gray-500 font-normal mt-1">{opt.desc}</div>
                            </div>
                            <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-gray-300 group-hover:text-primary transition`}></i>
                        </button>
                    ))}
                    
                    {level === '3' && education === 'الثانوي الإعدادي' && (
                        <button onClick={() => selectOption(cycle === '1' ? t.localExams : t.regionalExams)} className={`group p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-award text-xl"></i>
                            </div>
                            <div className="flex-1 font-bold text-lg">
                                {cycle === '1' ? t.localExams : t.regionalExams}
                            </div>
                        </button>
                    )}

                    {(level === '2_Bac') && (
                        <button onClick={() => selectOption(t.nationalExams)} className={`group p-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-graduation-cap text-xl"></i>
                            </div>
                            <div className="flex-1 font-bold text-lg">
                                {t.nationalExams}
                            </div>
                        </button>
                    )}
                </div>
                <button onClick={() => setView('SUBJECTS')} className="mt-8 w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-lg">{t.backBtn}</button>
            </div>
        )}

        {view === 'CONTENT' && (
            <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white bg-white dark:bg-[#333] py-2 px-4 rounded-full shadow-sm inline-block mx-auto">{selectedSubject} <span className="text-primary mx-2">•</span> {selectedContentType}</h2>
                <div className="bg-white/80 dark:bg-[#2d2d2d]/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700 min-h-[400px]">
                    {renderContent()}
                </div>
                <button onClick={() => setView('OPTIONS')} className="mt-6 w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-sm">{t.backBtn}</button>
            </div>
        )}

        {view === 'TASKS' && <TasksModule language={language} />}
        {view === 'NOTES' && <NotesModule language={language} />}
        {view === 'FLASHCARDS' && <FlashcardsModule language={language} />}
        {view === 'POMODORO' && (
            <PomodoroModule 
                timeLeft={pomoTimeLeft} 
                setTimeLeft={setPomoTimeLeft}
                isActive={pomoIsActive}
                setIsActive={setPomoIsActive}
                mode={pomoMode}
                setMode={setPomoMode}
                focusDuration={pomoFocusDur}
                setFocusDuration={setPomoFocusDur}
                breakDuration={pomoBreakDur}
                setBreakDuration={setPomoBreakDur}
                language={language}
            />
        )}
        {view === 'MINDMAPS' && <MindMapsModule language={language} />}
        {view === 'CALCULATOR' && <GradeCalculatorModule language={language} />}

        {view === 'ABOUT' && (
             <div className="animate-fadeIn">
                <h2 className="text-2xl font-black text-center mb-8 text-primary bg-white/90 rounded-lg py-2">{t.aboutTitle}</h2>
                <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-lg mb-6 border border-gray-100 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {t.aboutText}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button onClick={() => setShowHolidays(true)} className="p-4 bg-orange-100 text-orange-600 rounded-xl font-bold hover:bg-orange-200 transition flex flex-col items-center gap-2">
                            <i className="fas fa-calendar-alt text-2xl"></i>
                            <span>{t.holidaysBtn}</span>
                        </button>
                        <button onClick={() => alert(t.privacyAlert)} className="p-4 bg-blue-100 text-blue-600 rounded-xl font-bold hover:bg-blue-200 transition flex flex-col items-center gap-2">
                            <i className="fas fa-user-shield text-2xl"></i>
                            <span>{t.privacyBtn}</span>
                        </button>
                    </div>
                </div>
                <button onClick={() => setView('HOME')} className="w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-lg">{t.backBtn}</button>
             </div>
        )}

      </div>
    </div>
  );
};

function adjustColor(color: string, amount: number) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export default App;