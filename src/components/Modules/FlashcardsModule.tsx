
import React, { useState, useEffect } from 'react';
import { Flashcard, MasteryLevel, Language } from '../../types';
import { SUBJECTS_DATA, TRANSLATIONS, DATA_TRANSLATIONS } from '../../constants';

// Get a flat list of subjects from constants for the dropdown
const ALL_SUBJECTS = Array.from(new Set(
  Object.values(SUBJECTS_DATA).flat().map(s => s.name)
));

interface FlashcardsModuleProps {
  language?: Language;
}

const FlashcardsModule: React.FC<FlashcardsModuleProps> = ({ language = 'ar' }) => {
  const [cards, setCards] = useState<Flashcard[]>([]);
  
  // Create/Edit State
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [subject, setSubject] = useState(ALL_SUBJECTS[0] || 'عام');
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Review State
  const [activeSubject, setActiveSubject] = useState('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const saved = localStorage.getItem('spacetech_module_flashcards_pro');
    if (saved) {
      try { 
        let parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) parsed = [];
        
        // Sanitize IDs: Ensure every card has a unique numeric ID to prevent deletion bugs
        const seenIds = new Set();
        const sanitized = parsed.map((c: any) => {
             let id = c.id;
             // Generate new ID if missing or duplicate
             if (!id || seenIds.has(id)) {
                 id = Date.now() + Math.floor(Math.random() * 10000);
             }
             seenIds.add(id);
             return { 
                 ...c, 
                 id, 
                 subject: c.subject || 'عام', 
                 mastery: c.mastery || 'New' 
             };
        });
        
        // Save back if we fixed any IDs
        if (JSON.stringify(sanitized) !== JSON.stringify(parsed)) {
             localStorage.setItem('spacetech_module_flashcards_pro', JSON.stringify(sanitized));
        }
        setCards(sanitized);
      } catch(e) { setCards([]); }
    } else {
      // Migrate old data
      const old = localStorage.getItem('spacetech_module_flashcards');
      if (old) {
        try {
          const parsed = JSON.parse(old);
          // Sanitize old data
          const sanitized = parsed.map((c: any, idx: number) => ({ 
              ...c, 
              id: Date.now() + idx, 
              subject: 'عام', 
              mastery: 'New' 
          }));
          setCards(sanitized);
          localStorage.setItem('spacetech_module_flashcards_pro', JSON.stringify(sanitized));
        } catch (e) { setCards([]); }
      }
    }
  }, []);

  // Derived State: Calculate filtered cards on the fly to ensure sync with cards state
  const filteredCards = activeSubject === 'ALL' ? cards : cards.filter(c => c.subject === activeSubject);

  // Derived State: Safe Index
  // Ensure we never access out of bounds, especially after deletion
  const safeIndex = filteredCards.length > 0 
    ? Math.max(0, Math.min(currentIndex, filteredCards.length - 1)) 
    : 0;

  // Reset index when subject filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeSubject]);

  const saveCards = (newCards: Flashcard[]) => {
    setCards(newCards);
    localStorage.setItem('spacetech_module_flashcards_pro', JSON.stringify(newCards));
  };

  const handleSubmitCard = () => {
    if (!question.trim() || !answer.trim()) return;

    if (editingId) {
      // Update existing
      const updatedCards = cards.map(c => 
        c.id === editingId ? { ...c, question, answer, subject } : c
      );
      saveCards(updatedCards);
      setEditingId(null);
      setIsCreating(false);
    } else {
      // Create new
      const newCard: Flashcard = { 
        id: Date.now(), 
        question, 
        answer, 
        subject, 
        mastery: 'New' 
      };
      saveCards([...cards, newCard]);
    }
    
    setQuestion('');
    setAnswer('');
  };

  const startEdit = (card: Flashcard) => {
    setQuestion(card.question);
    setAnswer(card.answer);
    setSubject(card.subject);
    setEditingId(card.id);
    setIsCreating(true);
    // Ensure the form is visible on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setIsCreating(false);
    setEditingId(null);
    setQuestion('');
    setAnswer('');
  };

  const deleteCurrentCard = () => {
    if (filteredCards.length === 0) return;
    
    if (window.confirm(t.flashcards.deleteConfirm)) {
      const cardToDelete = filteredCards[safeIndex];
      // Use ID for deletion to be precise
      const newCards = cards.filter(c => c.id !== cardToDelete.id);
      
      saveCards(newCards);
      setIsFlipped(false);
      
      // Update index state to prevent visual jumps, although safeIndex handles the rendering
      if (newCards.length === 0) {
          setCurrentIndex(0);
      } else if (safeIndex >= filteredCards.length - 1) {
          // If we were at the last card, step back
          setCurrentIndex(Math.max(0, safeIndex - 1));
      }
    }
  };

  const updateMastery = (level: MasteryLevel) => {
    if (filteredCards.length === 0) return;
    const currentCard = filteredCards[safeIndex];
    
    // Optimistic update
    const updatedCards = cards.map(c => c.id === currentCard.id ? { ...c, mastery: level } : c);
    saveCards(updatedCards);
    
    nextCard();
  };

  const nextCard = () => {
    if (filteredCards.length === 0 || isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      // Use safeIndex to ensure we start from valid position
      setCurrentIndex((safeIndex + 1) % filteredCards.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevCard = () => {
    if (filteredCards.length === 0 || isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      // Use safeIndex to ensure we start from valid position
      setCurrentIndex((safeIndex - 1 + filteredCards.length) % filteredCards.length);
      setIsAnimating(false);
    }, 300);
  };

  const shuffleCards = () => {
    if (filteredCards.length < 2) return;
    let newIndex = Math.floor(Math.random() * filteredCards.length);
    if (newIndex === safeIndex && filteredCards.length > 1) {
        newIndex = (newIndex + 1) % filteredCards.length;
    }
    setCurrentIndex(newIndex);
    setIsFlipped(false);
  };

  const stats = {
    total: cards.length,
    mastered: cards.filter(c => c.mastery === 'Mastered').length,
    learning: cards.filter(c => c.mastery === 'Learning').length,
    new: cards.filter(c => c.mastery === 'New').length,
  };

  const getSubjectName = (name: string) => {
    if (name === 'عام') return t.flashcards.general;
    return DATA_TRANSLATIONS[name]?.[language] || name;
  };

  // Safe Access to current card
  const currentCard = filteredCards[safeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 animate-slideDown">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <div className="bg-white dark:bg-[#2d2d2d] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
            <div className="text-3xl font-black text-gray-800 dark:text-white">{stats.total}</div>
            <div className="text-xs text-gray-500 font-bold">{t.flashcards.total}</div>
         </div>
         <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl shadow-sm border border-green-100 dark:border-green-800 text-center">
            <div className="text-3xl font-black text-green-600 dark:text-green-400">{stats.mastered}</div>
            <div className="text-xs text-green-600 dark:text-green-400 font-bold">{t.flashcards.mastered}</div>
         </div>
         <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-800 text-center">
            <div className="text-3xl font-black text-orange-600 dark:text-orange-400">{stats.learning}</div>
            <div className="text-xs text-orange-600 dark:text-orange-400 font-bold">{t.flashcards.learning}</div>
         </div>
         <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800 text-center">
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{stats.new}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-bold">{t.flashcards.new}</div>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Controls & Form Side */}
        <div className="w-full lg:w-1/3 space-y-6">
           <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <button 
                onClick={() => isCreating ? cancelEdit() : setIsCreating(true)}
                className={`w-full py-3 rounded-xl font-bold hover:shadow-lg transition mb-4 flex items-center justify-center gap-2 ${isCreating ? 'bg-gray-100 text-gray-600 dark:bg-[#444] dark:text-white' : 'bg-primary text-white'}`}
              >
                {isCreating ? (
                  <><i className="fas fa-times"></i> {t.flashcards.cancelBtn}</>
                ) : (
                  <><i className="fas fa-plus"></i> {t.flashcards.addBtn}</>
                )}
              </button>

              {isCreating && (
                <div className="space-y-4 animate-fadeIn">
                   <h3 className="font-bold text-gray-700 dark:text-white border-b pb-2">
                     {editingId ? (language === 'ar' ? 'تعديل البطاقة' : 'Edit Card') : (language === 'ar' ? 'بطاقة جديدة' : 'New Card')}
                   </h3>
                   <div>
                     <label className="text-xs font-bold text-gray-500 mb-1 block">{t.flashcards.subjectLabel}</label>
                     <select 
                       value={subject} 
                       onChange={(e) => setSubject(e.target.value)}
                       className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none focus:border-primary ${language === 'ar' ? 'text-right' : 'text-left'}`}
                     >
                       {ALL_SUBJECTS.map(s => <option key={s} value={s}>{getSubjectName(s)}</option>)}
                       <option value="عام">{t.flashcards.general}</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="text-xs font-bold text-gray-500 mb-1 block">{t.flashcards.questionPlaceholder}</label>
                     <textarea 
                       value={question}
                       onChange={(e) => setQuestion(e.target.value)}
                       placeholder="..."
                       rows={3}
                       className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none focus:border-primary resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
                     />
                   </div>

                   <div>
                     <label className="text-xs font-bold text-gray-500 mb-1 block">{t.flashcards.answerPlaceholder}</label>
                     <textarea 
                       value={answer}
                       onChange={(e) => setAnswer(e.target.value)}
                       placeholder="..."
                       rows={3}
                       className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none focus:border-primary resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
                     />
                   </div>

                   <button onClick={handleSubmitCard} className="w-full bg-accent text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition">
                     {t.flashcards.saveBtn}
                   </button>
                </div>
              )}
              
              {!isCreating && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                  <label className="block text-xs font-bold text-gray-500 mb-2">{t.flashcards.filterLabel}</label>
                  <select 
                    value={activeSubject}
                    onChange={(e) => setActiveSubject(e.target.value)}
                    className={`w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none focus:border-primary ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    <option value="ALL">{t.flashcards.allSubjects}</option>
                    {Array.from(new Set(cards.map(c => c.subject))).map((s: string) => (
                      <option key={s} value={s}>{getSubjectName(s)}</option>
                    ))}
                  </select>
                </div>
              )}
           </div>
        </div>

        {/* Review Deck Area */}
        <div className="w-full lg:w-2/3">
           {filteredCards.length > 0 && currentCard ? (
             <div className="flex flex-col items-center">
                
                {/* 3D Flip Card */}
                {/* Key prop is crucial here to force re-render when card changes, ensuring visuals update correctly */}
                <div 
                  key={currentCard.id}
                  className="w-full max-w-lg h-[400px] perspective-1000 cursor-pointer group mb-6 relative" 
                  onClick={() => !isAnimating && setIsFlipped(!isFlipped)}
                >
                   <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                      
                      {/* Front Side */}
                      <div className="absolute w-full h-full backface-hidden bg-white dark:bg-[#333] rounded-3xl shadow-xl border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                         
                         {/* Card Header (Subject & Edit) */}
                         <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                                {getSubjectName(currentCard.subject)}
                            </span>
                            <button 
                              onClick={(e) => { e.stopPropagation(); startEdit(currentCard); }}
                              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300 hover:bg-primary hover:text-white transition flex items-center justify-center"
                              title="Edit"
                            >
                              <i className="fas fa-pen text-xs"></i>
                            </button>
                         </div>

                         <div className="text-6xl mb-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">❓</div>
                         <h3 className="text-2xl font-black text-gray-800 dark:text-white leading-relaxed select-none">
                            {currentCard.question}
                         </h3>
                         <div className="absolute bottom-6 text-gray-400 text-sm font-bold animate-pulse">{t.flashcards.flipHint}</div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#8e44ad] to-[#9b59b6] rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center rotate-y-180 text-white border border-white/10">
                         <div className="text-6xl mb-6 opacity-20">💡</div>
                         <h3 className="text-2xl font-black leading-relaxed select-none">
                            {currentCard.answer}
                         </h3>
                      </div>
                   </div>
                </div>

                {/* Navigation Bar */}
                <div className="flex items-center justify-between gap-4 w-full max-w-lg bg-white dark:bg-[#2d2d2d] p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevCard(); }}
                      className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] hover:bg-primary hover:text-white text-gray-600 dark:text-gray-200 transition flex items-center justify-center active:scale-95"
                    >
                      <i className={`fas fa-arrow-${language === 'ar' ? 'right' : 'left'}`}></i>
                    </button>

                    <div className="flex gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); shuffleCards(); }}
                          className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition flex items-center justify-center"
                          title="Shuffle"
                        >
                           <i className="fas fa-random"></i>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); deleteCurrentCard(); }}
                          className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 transition flex items-center justify-center"
                          title="Delete"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextCard(); }}
                      className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] hover:bg-primary hover:text-white text-gray-600 dark:text-gray-200 transition flex items-center justify-center active:scale-95"
                    >
                      <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'}`}></i>
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-lg mt-4 flex items-center gap-3">
                   <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${((safeIndex + 1) / filteredCards.length) * 100}%` }}
                      ></div>
                   </div>
                   <div className="text-xs font-bold text-gray-500">
                     {safeIndex + 1} / {filteredCards.length}
                   </div>
                </div>

                {/* Mastery Actions (Only visible when flipped) */}
                <div className={`flex gap-4 mt-6 w-full max-w-lg transition-all duration-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <button 
                      onClick={() => updateMastery('Learning')}
                      className="flex-1 bg-white dark:bg-[#333] border-b-4 border-red-400 text-red-500 py-3 rounded-xl font-black hover:bg-red-50 dark:hover:bg-red-900/20 transition shadow-sm"
                    >
                      {t.flashcards.difficult} 😓
                    </button>
                    <button 
                      onClick={() => updateMastery('Mastered')}
                      className="flex-1 bg-white dark:bg-[#333] border-b-4 border-green-400 text-green-500 py-3 rounded-xl font-black hover:bg-green-50 dark:hover:bg-green-900/20 transition shadow-sm"
                    >
                      {t.flashcards.easy} 😎
                    </button>
                </div>
                
             </div>
           ) : (
             <div className="h-[400px] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#2d2d2d] rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-400 p-8 text-center">
               <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-layer-group text-4xl opacity-50 text-gray-500 dark:text-gray-300"></i>
               </div>
               <h3 className="font-bold text-xl text-gray-700 dark:text-gray-200 mb-2">{t.flashcards.emptyList}</h3>
               <p className="text-sm max-w-xs mx-auto">{t.flashcards.emptyHint}</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default FlashcardsModule;
