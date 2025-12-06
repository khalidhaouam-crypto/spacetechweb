

import React, { useState, useEffect, useRef } from 'react';
import { LINKS_DATA, TRANSLATIONS } from '../constants';
import { SearchResult, Language } from '../types';

interface SearchOverlayProps {
  onNavigate: (subject: string, type: string) => void;
  onOpenDoc: (url: string, title: string) => void;
  language: Language;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onNavigate, onOpenDoc, language }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language];

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setQuery(''); // Simple way to hide results is to clear query
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    
    const term = query.toLowerCase();
    const found: SearchResult[] = [];

    // Helper to traverse data
    const traverse = () => {
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
    traverse();
    setResults(found);

  }, [query]);

  return (
    <div className="fixed top-[50px] left-0 right-0 z-[9000] bg-[#f5f5f5] dark:bg-[#1b1b1b] p-3 shadow-sm border-b-2 border-primary">
       <div className="container mx-auto max-w-[600px] relative">
         <input 
           value={query}
           onChange={e => setQuery(e.target.value)}
           placeholder={t.searchPlaceholder}
           className={`w-full p-2.5 ${language === 'ar' ? 'pr-10 text-right' : 'pl-10 text-left'} rounded-xl bg-white text-gray-900 dark:bg-[#2d2d2d] dark:text-white border-2 border-primary outline-none font-bold shadow-inner transition-all`}
         />
         <i className={`fas fa-search absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-primary`}></i>

         {/* Results Dropdown */}
         {query && results.length > 0 && (
             <div ref={resultsRef} className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#2d2d2d] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[60vh] overflow-y-auto z-[9001]">
                {results.map((res, idx) => (
                    <div key={idx} onClick={() => { 
                        if (res.url && res.url !== '#') {
                            if (res.url.includes('drive.google.com')) {
                                onOpenDoc(res.url, res.title);
                            } else {
                                window.open(res.url, '_blank');
                            }
                        }
                        else onNavigate(res.subject, 'دروس'); 
                        setQuery(''); // Hide results after click
                    }} className={`p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#3d3d3d] cursor-pointer transition ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        <div className="font-bold text-gray-800 dark:text-white text-sm">
                            <i className={`text-primary ml-2 ${res.type === 'فيديو' ? 'fas fa-play-circle' : 'fas fa-file-alt'}`}></i>
                            {res.title}
                        </div>
                        <div className="text-[10px] text-gray-500 mt-1">
                            {res.type} - {res.context}
                        </div>
                    </div>
                ))}
             </div>
         )}
         
         {query && results.length === 0 && (
             <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#2d2d2d] p-4 rounded-xl shadow-xl text-center text-gray-500 font-bold text-sm z-[9001]">
                 {language === 'ar' ? 'لا توجد نتائج' : 'No results found'}
             </div>
         )}
       </div>
    </div>
  );
};

export default SearchOverlay;