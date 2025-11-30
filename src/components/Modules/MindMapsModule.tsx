
import React, { useState } from 'react';
import { Language } from '../../types';
import { TRANSLATIONS, DATA_TRANSLATIONS } from '../../constants';

// أنواع البيانات
type ViewState = 'SUBJECTS' | 'LESSONS' | 'MAP';

interface MindMapNode {
  name: string;
  sub: string[];
}

interface MindMapData {
  title: string;
  root: string;
  branches: MindMapNode[];
}

// بيانات المواد والدروس (نموذج مصغر للثالثة إعدادي)
const THIRD_YEAR_SUBJECTS = [
  { id: 'islamic', name: 'التربية الإسلامية', icon: 'fas fa-mosque', color: '#2ecc71' },
  { id: 'history', name: 'الاجتماعيات', icon: 'fas fa-globe-africa', color: '#e67e22' },
  { id: 'arabic', name: 'اللغة العربية', icon: 'fas fa-pen-nib', color: '#3498db' },
  { id: 'french', name: 'اللغة الفرنسية', icon: 'fas fa-book', color: '#9b59b6' },
  { id: 'math', name: 'الرياضيات', icon: 'fas fa-square-root-alt', color: '#e74c3c' },
  { id: 'pc', name: 'الفيزياء والكيمياء', icon: 'fas fa-flask', color: '#f1c40f' },
  { id: 'svt', name: 'علوم الحياة والأرض', icon: 'fas fa-dna', color: '#1abc9c' },
];

// بيانات الدروس والخطاطات (Mock Data)
const LESSONS_DATA: { [subjectId: string]: string[] } = {
  'islamic': ['مدخل التزكية (القرآن الكريم)', 'مدخل الاقتداء (السيرة)', 'مدخل الاستجابة (الفقه)', 'مدخل القسط', 'مدخل الحكمة'],
  'history': ['الحرب العالمية الأولى', 'الحرب العالمية الثانية', 'القضية الفلسطينية', 'المغرب: الكفاح من أجل الاستقلال'],
  'arabic': ['الإضافة', 'الممنوع من الصرف', 'اسم التفضيل', 'أسلوب التعجب'],
  'math': ['النشر والتعميل', 'القوى', 'الجذور المربعة', 'مبرهنة طاليس', 'المعادلات والمتراجحات'],
  'pc': ['المواد والكهرباء', 'الذرات والأيونات', 'تفاعل بعض المواد مع الهواء', 'السرعة المتوسطة'],
  'svt': ['التربية الغذائية', 'الهضم والامتصاص', 'التنفس', 'الدم والدوران'],
  'french': ['La boite à merveilles', 'Antigone', 'Le dernier jour d\'un condamné']
};

// دالة لإنشاء خطاطة افتراضية في حالة عدم وجود بيانات حقيقية
const getMindMap = (subjectId: string, lessonTitle: string): MindMapData => {
  // بيانات حقيقية لبعض الأمثلة
  if (subjectId === 'islamic' && lessonTitle.includes('التزكية')) {
    return {
      title: lessonTitle,
      root: 'سورة الحشر',
      branches: [
        { name: 'التعريف بالسورة', sub: ['مدنية', 'عدد آياتها 24', 'ترتيبها 59'] },
        { name: 'مضامين السورة', sub: ['جلاء بني النضير', 'عظمة الله تعالى', 'التقوى'] },
        { name: 'القيم المستفادة', sub: ['التوكل', 'اليقين', 'خشية الله'] }
      ]
    };
  }

  if (subjectId === 'history' && lessonTitle.includes('الثانية')) {
    return {
      title: lessonTitle,
      root: 'الحرب العالمية الثانية',
      branches: [
        { name: 'الأسباب', sub: ['توسعات الأنظمة الديكتاتورية', 'فشل عصبة الأمم', 'غزو بولونيا'] },
        { name: 'المراحل', sub: ['مرحلة تفوق المحور', 'مرحلة تفوق الحلفاء'] },
        { name: 'النتائج', sub: ['خسائر بشرية', 'تأسيس الأمم المتحدة', 'الحرب الباردة'] }
      ]
    };
  }

  // خطاطة افتراضية لباقي الدروس
  return {
    title: lessonTitle,
    root: 'محاور الدرس',
    branches: [
      { name: 'المحور الأول', sub: ['مفهوم أساسي 1', 'مفهوم أساسي 2'] },
      { name: 'المحور الثاني', sub: ['عنصر فرعي 1', 'عنصر فرعي 2', 'عنصر فرعي 3', 'عنصر فرعي 4'] },
      { name: 'المحور الثالث', sub: ['استنتاج', 'خلاصة'] },
      { name: 'المحور الرابع', sub: ['فكرة إضافية 1', 'فكرة إضافية 2'] }
    ]
  };
};

interface MindMapsModuleProps {
  language?: Language;
}

const MindMapsModule: React.FC<MindMapsModuleProps> = ({ language = 'ar' }) => {
  const [view, setView] = useState<ViewState>('SUBJECTS');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');

  const t = TRANSLATIONS[language];

  const handleSubjectSelect = (id: string) => {
    setSelectedSubject(id);
    setView('LESSONS');
  };

  const handleLessonSelect = (lesson: string) => {
    setSelectedLesson(lesson);
    setView('MAP');
  };

  const goBack = () => {
    if (view === 'MAP') setView('LESSONS');
    else if (view === 'LESSONS') setView('SUBJECTS');
  };

  const currentMap = view === 'MAP' ? getMindMap(selectedSubject, selectedLesson) : null;
  const currentSubjectName = THIRD_YEAR_SUBJECTS.find(s => s.id === selectedSubject)?.name;
  const translatedSubjectName = currentSubjectName ? (DATA_TRANSLATIONS[currentSubjectName]?.[language] || currentSubjectName) : '';

  return (
    <div className="w-full h-full min-h-screen p-6 animate-slideDown flex flex-col">
      {/* Header Section - Always Full Width */}
      <div className="w-full max-w-7xl mx-auto mb-8 flex justify-between items-center border-b-2 border-primary pb-4">
        <div className="flex items-center gap-4">
           {view !== 'SUBJECTS' && (
             <button onClick={goBack} className="bg-white dark:bg-[#333] hover:bg-gray-100 dark:hover:bg-[#444] shadow-sm border border-gray-200 dark:border-gray-700 p-3 rounded-full w-12 h-12 flex items-center justify-center transition text-gray-800 dark:text-white">
               <i className={`fas fa-arrow-${language === 'ar' ? 'right' : 'left'} text-lg`}></i>
             </button>
           )}
           <div>
             <div className="text-3xl font-black text-primary flex items-center gap-3">
               <i className="fas fa-project-diagram"></i>
               <span>{t.mindmaps.title}</span>
             </div>
             <div className="text-gray-500 dark:text-gray-400 mt-1 font-medium text-sm">
               {view === 'SUBJECTS' ? t.mindmaps.selectSubject : view === 'LESSONS' ? `${t.mindmaps.lessonsFor} ${translatedSubjectName}` : currentMap?.title}
             </div>
           </div>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-7xl mx-auto">
        {/* VIEW 1: SUBJECTS GRID */}
        {view === 'SUBJECTS' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THIRD_YEAR_SUBJECTS.map((subject) => (
              <button 
                key={subject.id}
                onClick={() => handleSubjectSelect(subject.id)}
                className="group bg-white dark:bg-[#2d2d2d] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center gap-6 h-full"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: subject.color }}>
                  <i className={subject.icon}></i>
                </div>
                <span className="font-bold text-xl text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                  {DATA_TRANSLATIONS[subject.name]?.[language] || subject.name}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* VIEW 2: LESSONS LIST */}
        {view === 'LESSONS' && (
          <div className="bg-white dark:bg-[#2d2d2d] rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {LESSONS_DATA[selectedSubject]?.map((lesson, idx) => (
                 <button 
                   key={idx}
                   onClick={() => handleLessonSelect(lesson)}
                   className={`p-6 rounded-2xl bg-gray-50 dark:bg-[#3d3d3d] hover:bg-primary hover:text-white text-gray-800 dark:text-white font-bold text-lg transition-all duration-200 border-2 border-transparent hover:border-primary/50 flex items-center justify-between group shadow-sm hover:shadow-md ${language === 'ar' ? 'text-right' : 'text-left'}`}
                 >
                   <span>{lesson}</span>
                   <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-gray-300 group-hover:text-white/80 transition`}></i>
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* VIEW 3: MIND MAP VISUALIZATION (Refined Desktop View - Full Width No Scroll) */}
        {view === 'MAP' && currentMap && (
          <div className="w-full h-full bg-white dark:bg-[#2d2d2d] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col min-h-[600px]">
            <div className="bg-gray-50 dark:bg-[#333] p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
               <div className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                 <i className="fas fa-expand-arrows-alt mr-2"></i>
                 {t.mindmaps.desktopView}
               </div>
               <button className="text-primary hover:underline text-sm font-bold" onClick={() => window.print()}>
                 <i className="fas fa-print mr-1"></i> {t.mindmaps.print}
               </button>
            </div>

            <div className="flex-1 p-8 flex flex-col items-center justify-start bg-grid-pattern">
              
                {/* Root Node */}
                <div className="bg-gradient-to-br from-primary to-accent text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl mb-16 relative z-10 animate-fadeIn transform hover:scale-105 transition-transform cursor-default border-4 border-white dark:border-[#2d2d2d] max-w-[80%] text-center">
                  {currentMap.root}
                  {/* Connector to branches */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 bg-primary/30"></div>
                </div>

                {/* Branches Container - Full Width, Evenly Spaced */}
                <div className="w-full flex justify-between items-start gap-4 animate-fadeIn delay-100 relative px-4">
                  
                  {/* Horizontal Connecting Bar - Spans from first to last child center */}
                  {currentMap.branches.length > 1 && (
                    <div className="absolute top-0 left-[12%] right-[12%] h-1 bg-primary/30 rounded-full"></div>
                  )}

                  {currentMap.branches.map((branch, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      {/* Vertical Line from horizontal bar to node */}
                      <div className="w-1 h-8 bg-primary/30 -mt-0 mb-0"></div>
                      
                      {/* Branch Node */}
                      <div className="bg-white dark:bg-[#3d3d3d] border-t-4 border-primary p-4 rounded-xl font-bold text-gray-900 dark:text-white shadow-lg w-full text-center hover:shadow-xl transition-all cursor-default relative z-10 mb-4 mt-2 min-h-[60px] flex items-center justify-center">
                        <h4 className="text-lg leading-tight">{branch.name}</h4>
                      </div>

                      {/* Connection to children */}
                      {branch.sub.length > 0 && <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>}

                      {/* Sub Items (Leaves) */}
                      <div className="flex flex-col gap-3 w-full">
                        {branch.sub.map((item, subIdx) => (
                          <div key={subIdx} className="bg-gray-50 dark:bg-[#444] p-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border-l-4 border-gray-300 dark:border-gray-500 text-center shadow-sm hover:bg-white dark:hover:bg-[#555] transition-colors relative group">
                             {item}
                             {/* Simple connector line visual */}
                             {subIdx < branch.sub.length - 1 && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-200 dark:bg-gray-600 translate-y-full z-0"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapsModule;