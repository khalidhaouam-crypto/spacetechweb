

import React, { useState, useEffect } from 'react';
import { LINKS_DATA, VIDEOS_DATA, TRANSLATIONS } from '../constants';
import { SearchResult, Language } from '../types';

interface SearchOverlayProps {
  active: boolean;
  onClose: () => void;
  onNavigate: (subject: string, type: string) => void;
  language: Language;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ active, onClose, onNavigate, language }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    
    const term = query.toLowerCase();
    const found: SearchResult[] = [];

    // Helper to traverse data
    const traverse = (data: any) => {
        // Implementation simplified for React conversion to iterate over the static constants
        for (const eduType in LINKS_DATA) {
            const cycles = LINKS_DATA[eduType];
            for (const cycle in cycles) {
                const levels = cycles[cycle];
                for (const level in levels) {
                    const subjects = levels[level];
                    for (const subject in subjects) {
                        const content = subjects[subject];
                        
                        // Check Lessons
                        if (content['دروس']) {
                            if (Array.isArray(content['دروس'])) {
                                content['دروس'].forEach((l: any) => {
                                    if (l.title.toLowerCase().includes(term)) {
                                        found.push({ type: 'درس', title: l.title, subject, educationType: eduType, cycle, level, url: l.url || '', context: `مادة: ${subject}` });
                                    }
                                });
                            }
                        }
                        
                        // Check Videos
                         if (content['فيديوهات']) {
                            content['فيديوهات'].forEach((v: any) => {
                                 if (v.title.toLowerCase().includes(term)) {
                                     found.push({ type: 'فيديو', title: v.title, subject, educationType: eduType, cycle, level, url: `https://www.youtube.com/watch?v=${v.id}`, context: `مادة: ${subject}` });
                                 }
                            });
                         }
                    }
                }
            }
        }
    };
    traverse(LINKS_DATA);
    setResults(found);

  }, [query]);

  if (!active) return null;

  return (
    <div className="fixed top-[50px] left-0 right-0 bg-white dark:bg-[#2d2d2d] z-[9999] shadow-lg border-b-4 border-primary p-4 animate-slideDown max-h-[80vh] overflow-hidden flex flex-col">
       <div className="relative max-w-[500px] mx-auto w-full">
         <input 
           autoFocus
           value={query}
           onChange={e => setQuery(e.target.value)}
           placeholder={t.searchPlaceholder}
           className={`w-full p-3 ${language === 'ar' ? 'pr-10 text-right' : 'pl-10 text-left'} border-2 border-primary rounded-full bg-white text-gray-900 dark:bg-[#3d3d3d] dark:text-white focus:outline-none focus:shadow-outline font-bold`}
         />
         <i className={`fas fa-search absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-gray-400`}></i>
       </div>
       
       <div className="mt-4 max-w-[500px] mx-auto w-full overflow-y-auto flex-1">
          {results.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                {language === 'ar' ? 'اكتب كلمة للبحث...' : (language === 'fr' ? 'Tapez pour rechercher...' : 'Type to search...')}
              </div>
          ) : (
              results.map((res, idx) => (
                  <div key={idx} onClick={() => { 
                      if (res.url && res.url !== '#') window.open(res.url, '_blank');
                      else onNavigate(res.subject, 'دروس'); // Fallback navigation
                      onClose();
                  }} className={`bg-gray-50 dark:bg-[#3d3d3d] p-3 mb-2 rounded-lg ${language === 'ar' ? 'border-r-4 text-right' : 'border-l-4 text-left'} border-primary cursor-pointer hover:translate-x-[2px] transition shadow-sm hover:shadow-md`}>
                      <div className="font-bold flex items-center gap-2 dark:text-white">
                          <i className={`text-primary ${res.type === 'فيديو' ? 'fas fa-play-circle' : 'fas fa-file-alt'}`}></i>
                          {res.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex gap-2 items-center">
                          <i className="fas fa-tag text-[10px]"></i>
                          {res.type} - {res.context}
                      </div>
                  </div>
              ))
          )}
       </div>
       
       <button onClick={onClose} className="mt-2 text-center text-red-500 text-sm font-bold">{language === 'ar' ? 'إغلاق البحث' : 'Close'}</button>
    </div>
  );
};

export default SearchOverlay;