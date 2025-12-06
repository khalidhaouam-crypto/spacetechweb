
import React, { useState, useEffect } from 'react';
import { Note, Language } from '../../types';
import { TRANSLATIONS } from '../../constants';

const COLORS = [
  { bg: 'bg-yellow-200', text: 'text-gray-800', hex: '#fef08a' },
  { bg: 'bg-green-200', text: 'text-gray-800', hex: '#bbf7d0' },
  { bg: 'bg-blue-200', text: 'text-gray-800', hex: '#bfdbfe' },
  { bg: 'bg-pink-200', text: 'text-gray-800', hex: '#fbcfe8' },
  { bg: 'bg-purple-200', text: 'text-gray-800', hex: '#e9d5ff' },
  { bg: 'bg-white', text: 'text-gray-800', hex: '#ffffff' },
];

interface NotesModuleProps {
  language?: Language;
}

const NotesModule: React.FC<NotesModuleProps> = ({ language = 'ar' }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  
  // New Note State
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newColor, setNewColor] = useState(COLORS[0].hex);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const saved = localStorage.getItem('spacetech_module_notes_pro');
    if (saved) {
      try { setNotes(JSON.parse(saved)); } catch (e) { setNotes([]); }
    } else {
      // Migrate old single note if exists
      const oldNote = localStorage.getItem('spacetech_module_notes');
      if (oldNote) {
        setNotes([{
          id: Date.now(),
          title: language === 'ar' ? 'ملاحظة عامة' : 'General Note',
          content: oldNote,
          color: COLORS[0].hex,
          date: new Date().toISOString()
        }]);
        localStorage.removeItem('spacetech_module_notes'); // Clean up old key
      }
    }
  }, []);

  const saveNotes = (updated: Note[]) => {
    setNotes(updated);
    localStorage.setItem('spacetech_module_notes_pro', JSON.stringify(updated));
  };

  const addNote = () => {
    if (!newContent.trim()) return;
    const note: Note = {
      id: Date.now(),
      title: newTitle.trim() || (language === 'ar' ? 'بدون عنوان' : 'Untitled'),
      content: newContent,
      color: newColor,
      date: new Date().toISOString()
    };
    saveNotes([note, ...notes]);
    setNewTitle('');
    setNewContent('');
    setNewColor(COLORS[0].hex);
    setIsAdding(false);
  };

  const deleteNote = (id: number) => {
    if (window.confirm(t.notes.deleteConfirm)) {
      saveNotes(notes.filter(n => n.id !== id));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 animate-slideDown">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black text-primary flex items-center gap-3">
            <i className="fas fa-sticky-note"></i>
            <span>{t.notes.title}</span>
          </h2>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition flex items-center gap-2"
        >
          <i className="fas fa-plus"></i>
          <span>{t.notes.addBtn}</span>
        </button>
      </div>

      {isAdding && (
        <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-xl border-2 border-primary mb-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <input 
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder={t.notes.titlePlaceholder}
                className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 font-bold focus:border-primary outline-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
              />
              <textarea 
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
                placeholder={t.notes.contentPlaceholder}
                className={`w-full p-3 h-32 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 focus:border-primary outline-none resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
              />
            </div>
            <div className="w-full md:w-48 flex flex-col gap-4">
               <div>
                 <label className="block text-sm font-bold text-gray-500 mb-2">{t.notes.colorLabel}</label>
                 <div className="flex flex-wrap gap-2">
                   {COLORS.map(c => (
                     <button 
                       key={c.hex}
                       onClick={() => setNewColor(c.hex)}
                       className={`w-8 h-8 rounded-full border-2 transition ${newColor === c.hex ? 'border-primary scale-110 shadow-md' : 'border-gray-200'}`}
                       style={{ backgroundColor: c.hex }}
                     />
                   ))}
                 </div>
               </div>
               <button 
                 onClick={addNote}
                 className="w-full bg-accent text-white py-3 rounded-xl font-bold hover:shadow-lg transition"
               >
                 {t.notes.saveBtn}
               </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.length === 0 && !isAdding && (
          <div className="col-span-full text-center py-20 text-gray-400">
            <i className="fas fa-pencil-alt text-4xl mb-4 opacity-50"></i>
            <p>{t.notes.noNotes}</p>
          </div>
        )}

        {notes.map(note => {
          return (
            <div 
              key={note.id}
              className="relative p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-h-[200px] flex flex-col group"
              style={{ backgroundColor: note.color }}
            >
              <div className="flex justify-between items-start mb-3">
                 <h3 className="font-black text-lg text-gray-800 line-clamp-1">{note.title}</h3>
                 <button 
                   onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
                   className="w-8 h-8 rounded-full bg-black/5 hover:bg-red-500 hover:text-white flex items-center justify-center transition text-gray-600"
                 >
                   <i className="fas fa-times"></i>
                 </button>
              </div>
              <p className={`text-gray-800 leading-relaxed text-sm whitespace-pre-wrap flex-1 overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {note.content}
              </p>
              <div className="mt-4 text-[10px] font-bold text-gray-500 border-t border-black/5 pt-2 flex justify-between">
                <span>{new Date(note.date).toLocaleDateString(language === 'ar' ? 'ar-MA' : 'en-US')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesModule;
