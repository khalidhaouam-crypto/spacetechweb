
import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { TRANSLATIONS, DATA_TRANSLATIONS } from '../../constants';

interface SubjectMark {
  id: number;
  name: string;
  mark: string;
  coef: string;
}

type CalcMode = 'SEMESTER' | 'ANNUAL';

interface GradeCalculatorModuleProps {
  language?: Language;
}

const GradeCalculatorModule: React.FC<GradeCalculatorModuleProps> = ({ language = 'ar' }) => {
  const [mode, setMode] = useState<CalcMode>('SEMESTER');
  const t = TRANSLATIONS[language];

  // --- Semester State ---
  const [subjects, setSubjects] = useState<SubjectMark[]>([
    { id: 1, name: 'الرياضيات', mark: '', coef: '7' },
    { id: 2, name: 'الفيزياء والكيمياء', mark: '', coef: '5' },
    { id: 3, name: 'علوم الحياة والأرض', mark: '', coef: '3' },
    { id: 4, name: 'الفرنسية', mark: '', coef: '4' },
    { id: 5, name: 'اللغة العربية', mark: '', coef: '2' },
    { id: 6, name: 'التربية الإسلامية', mark: '', coef: '2' },
    { id: 7, name: 'الاجتماعيات', mark: '', coef: '2' },
  ]);
  const [semesterResult, setSemesterResult] = useState<number | null>(null);

  // --- Annual State ---
  const [sem1, setSem1] = useState('');
  const [sem2, setSem2] = useState('');
  const [annualResult, setAnnualResult] = useState<number | null>(null);

  // Update default subjects when language changes
  useEffect(() => {
    setSubjects(prev => prev.map(sub => {
       // Check if the current name corresponds to a key in DATA_TRANSLATIONS (by checking if it matches any value for any language for a key)
       // Simplified: we check if the current name is a value in DATA_TRANSLATIONS, find the key, and update to new language
       // OR simply iterate over DATA_TRANSLATIONS keys to find a match in any language
       let key = '';
       for (const k in DATA_TRANSLATIONS) {
         if (Object.values(DATA_TRANSLATIONS[k]).includes(sub.name)) {
           key = k;
           break;
         }
         // Fallback: check if sub.name is the key itself (Arabic)
         if (k === sub.name) {
             key = k;
             break;
         }
       }
       
       if (key) {
           return { ...sub, name: DATA_TRANSLATIONS[key][language] || sub.name };
       }
       return sub;
    }));
  }, [language]);


  // --- Semester Logic ---
  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now(), name: '', mark: '', coef: '1' }]);
  };

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter(s => s.id !== id));
  };

  const updateSubject = (id: number, field: keyof SubjectMark, value: string) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const calculateSemester = () => {
    let totalScore = 0;
    let totalCoef = 0;

    subjects.forEach(sub => {
      const mark = parseFloat(sub.mark);
      const coef = parseFloat(sub.coef);
      
      if (!isNaN(mark) && !isNaN(coef)) {
        totalScore += mark * coef;
        totalCoef += coef;
      }
    });

    if (totalCoef === 0) {
      alert(language === 'ar' ? 'المرجو إدخال المعاملات بشكل صحيح' : t.calculator.ensureData);
      return;
    }

    setSemesterResult(parseFloat((totalScore / totalCoef).toFixed(2)));
  };

  const clearSemester = () => {
    setSubjects(subjects.map(s => ({ ...s, mark: '' })));
    setSemesterResult(null);
  };

  // --- Annual Logic ---
  const calculateAnnual = () => {
    const s1 = parseFloat(sem1);
    const s2 = parseFloat(sem2);

    if (isNaN(s1) || isNaN(s2)) {
      alert(language === 'ar' ? 'المرجو إدخال معدلات الدورات بشكل صحيح' : t.calculator.enterAnnualData);
      return;
    }

    setAnnualResult(parseFloat(((s1 + s2) / 2).toFixed(2)));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 animate-slideDown">
      <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-primary">
        <div className="text-3xl font-black text-primary flex items-center gap-4">
          <i className="fas fa-calculator"></i>
          <span>{t.calculator.title}</span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white dark:bg-[#2d2d2d] p-1.5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex gap-2">
           <button 
             onClick={() => setMode('SEMESTER')}
             className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${mode === 'SEMESTER' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d3d3d]'}`}
           >
             {t.calculator.modeSemester}
           </button>
           <button 
             onClick={() => setMode('ANNUAL')}
             className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${mode === 'ANNUAL' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d3d3d]'}`}
           >
             {t.calculator.modeAnnual}
           </button>
        </div>
      </div>
      
      {/* SEMESTER MODE */}
      {mode === 'SEMESTER' && (
        <div className="flex flex-col lg:flex-row gap-8 animate-fadeIn">
          {/* Main Calculation Table */}
          <div className="flex-[2] bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col min-h-[500px]">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-5 bg-gray-50 dark:bg-[#333] border-b border-gray-200 dark:border-gray-600 text-base font-bold text-gray-700 dark:text-gray-200">
              <div className={`col-span-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t.calculator.colSubject}</div>
              <div className="col-span-3 text-center">{t.calculator.colMark}</div>
              <div className="col-span-3 text-center">{t.calculator.colCoef}</div>
              <div className="col-span-1"></div>
            </div>

            {/* Rows */}
            <div className="flex-1 overflow-y-auto max-h-[600px] p-5 space-y-4 custom-scrollbar">
              {subjects.map((sub) => (
                <div key={sub.id} className="grid grid-cols-12 gap-4 items-center group">
                  <div className="col-span-5">
                    <input 
                      value={sub.name}
                      onChange={e => updateSubject(sub.id, 'name', e.target.value)}
                      placeholder={t.calculator.colSubject}
                      className={`w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3d3d3d] text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-primary/50 outline-none transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="col-span-3">
                    <input 
                      type="number"
                      value={sub.mark}
                      onChange={e => updateSubject(sub.id, 'mark', e.target.value)}
                      placeholder="0"
                      className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3d3d3d] text-gray-900 dark:text-white text-center font-black text-lg focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div className="col-span-3">
                    <input 
                      type="number"
                      value={sub.coef}
                      onChange={e => updateSubject(sub.id, 'coef', e.target.value)}
                      placeholder="1"
                      className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#444] text-gray-700 dark:text-gray-300 text-center font-bold focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <button onClick={() => removeSubject(sub.id)} className="w-10 h-10 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <i className="fas fa-trash-alt text-lg"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="p-5 bg-gray-50 dark:bg-[#333] border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
               <button onClick={addSubject} className="flex items-center gap-2 text-primary font-bold hover:bg-primary/10 px-5 py-2.5 rounded-xl transition">
                 <i className="fas fa-plus-circle text-xl"></i>
                 <span>{t.calculator.addSubject}</span>
               </button>
               <button onClick={clearSemester} className="text-red-500 font-semibold text-sm hover:underline hover:text-red-600">
                 {t.calculator.clear}
               </button>
            </div>
          </div>

          {/* Sidebar / Results Panel */}
          <div className="lg:flex-1 flex flex-col gap-6">
             {/* Action Card */}
             <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-xl text-center">
               <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <i className="fas fa-chart-line text-4xl"></i>
               </div>
               <h3 className="text-2xl font-bold mb-3">{t.calculator.calculateBtn}</h3>
               <p className="text-white/90 mb-8 leading-relaxed">{t.calculator.ensureData}</p>
               <button onClick={calculateSemester} className="w-full bg-white text-primary font-black py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all active:scale-95 text-lg">
                 {t.calculator.calculateBtn}
               </button>
             </div>

             {/* Result Card */}
             <div className={`bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center transition-all duration-500 ${semesterResult !== null ? 'opacity-100 translate-y-0' : 'opacity-50'}`}>
                <div className="text-gray-500 dark:text-gray-400 font-bold mb-4 text-lg">{t.calculator.resultSemester}</div>
                <div className={`text-7xl font-black mb-6 tracking-tight ${semesterResult !== null && semesterResult >= 10 ? 'text-green-500' : 'text-red-500'}`}>
                  {semesterResult !== null ? semesterResult : '--.--'}
                </div>
                {semesterResult !== null && (
                  <div className={`px-6 py-3 rounded-xl font-bold text-lg inline-block ${semesterResult >= 10 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {semesterResult >= 10 ? t.calculator.congrats : t.calculator.hardLuck}
                  </div>
                )}
             </div>
          </div>
        </div>
      )}

      {/* ANNUAL MODE */}
      {mode === 'ANNUAL' && (
        <div className="max-w-2xl mx-auto bg-white dark:bg-[#2d2d2d] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn">
           <div className="bg-gradient-to-r from-primary to-accent p-8 text-white text-center">
              <i className="fas fa-graduation-cap text-5xl mb-4 opacity-80"></i>
              <h3 className="text-2xl font-black">{t.calculator.modeAnnual}</h3>
              <p className="opacity-90 mt-2">{t.calculator.enterAnnualData}</p>
           </div>
           
           <div className="p-10 flex flex-col gap-8">
              <div className="flex gap-6 items-center">
                 <div className="flex-1">
                    <label className={`block text-gray-600 dark:text-gray-300 font-bold mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t.calculator.sem1}</label>
                    <input 
                      type="number" 
                      value={sem1}
                      onChange={e => setSem1(e.target.value)}
                      placeholder="00.00"
                      className="w-full p-5 rounded-2xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary text-center text-2xl font-black text-gray-800 dark:text-white outline-none transition-all"
                    />
                 </div>
                 <div className="text-gray-400 font-black text-2xl mt-8">+</div>
                 <div className="flex-1">
                    <label className={`block text-gray-600 dark:text-gray-300 font-bold mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t.calculator.sem2}</label>
                    <input 
                      type="number" 
                      value={sem2}
                      onChange={e => setSem2(e.target.value)}
                      placeholder="00.00"
                      className="w-full p-5 rounded-2xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary text-center text-2xl font-black text-gray-800 dark:text-white outline-none transition-all"
                    />
                 </div>
              </div>

              <button onClick={calculateAnnual} className="w-full bg-gray-800 dark:bg-white dark:text-black text-white font-black py-5 rounded-2xl text-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all">
                 {t.calculator.calculateAnnualBtn}
              </button>

              {annualResult !== null && (
                 <div className="mt-4 text-center animate-slideDown">
                    <div className="text-gray-500 dark:text-gray-400 font-bold mb-2">{t.calculator.resultAnnual}</div>
                    <div className={`text-8xl font-black mb-4 tracking-tighter ${annualResult >= 10 ? 'text-green-500' : 'text-red-500'}`}>
                       {annualResult}
                    </div>
                    <div className={`text-xl font-bold ${annualResult >= 10 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                       {annualResult >= 10 ? t.calculator.congratsAnnual : t.calculator.hardLuckAnnual}
                    </div>
                 </div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default GradeCalculatorModule;