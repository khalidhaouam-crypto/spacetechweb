
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

// بيانات المواد والدروس (الثالثة إعدادي - جميع المواد)
const THIRD_YEAR_SUBJECTS = [
  { id: 'islamic', name: 'التربية الإسلامية', icon: 'fas fa-mosque', color: '#2ecc71' },
  { id: 'history', name: 'الاجتماعيات', icon: 'fas fa-globe-africa', color: '#e67e22' },
  { id: 'arabic', name: 'اللغة العربية', icon: 'fas fa-pen-nib', color: '#3498db' },
  { id: 'french', name: 'اللغة الفرنسية', icon: 'fas fa-book', color: '#9b59b6' },
  { id: 'math', name: 'الرياضيات', icon: 'fas fa-square-root-alt', color: '#e74c3c' },
  { id: 'math_fr', name: 'Mathématiques (Fr)', icon: 'fas fa-calculator', color: '#c0392b' },
  { id: 'pc', name: 'الفيزياء والكيمياء', icon: 'fas fa-flask', color: '#f1c40f' },
  { id: 'pc_fr', name: 'Physique et Chimie (Fr)', icon: 'fas fa-atom', color: '#f39c12' },
  { id: 'svt', name: 'علوم الحياة والأرض', icon: 'fas fa-dna', color: '#1abc9c' },
  { id: 'svt_fr', name: 'Sciences de la vie et de la Terre (SVT Fr)', icon: 'fas fa-microscope', color: '#16a085' },
];

// بيانات الدروس والخطاطات (الدورة الأولى كاملة)
const LESSONS_DATA: { [subjectId: string]: string[] } = {
  'islamic': [
    'سورة الحشر (الشطر 1-2-3)',
    'أسماء الله الحسنى',
    'التدين في حياة الفرد والمجتمع',
    'الهجرة النبوية: المعاني والعبر',
    'بناء الدولة: المسجد والوثيقة',
    'الزكاة: أحكامها ومقاصدها',
    'حق الله: التقوى',
    'حق النفس: التخطيط والتنظيم',
    'الهجرة المتجددة',
    'الإيثار والتضحية'
  ],
  'history': [
    'تاريخ: ازدهار الرأسمالية الأوربية',
    'تاريخ: الإمبريالية وليدة الرأسمالية',
    'تاريخ: الضغط الاستعماري على المغرب',
    'تاريخ: الحرب العالمية الأولى',
    'تاريخ: انهيار الإمبراطورية العثمانية',
    'تاريخ: أزمة 1929',
    'جغرافيا: المغرب العربي (الوحدة والتنوع)',
    'جغرافيا: المغرب العربي (التكامل والتحديات)',
    'جغرافيا: اتحاد المغرب العربي (خيار استراتيجي)',
    'جغرافيا: الاتحاد الأوربي (إمكانيات ومكانة)',
    'جغرافيا: الاتحاد الأوربي (المعيقات)',
    'مواطنة: المشاركة حق وواجب',
    'مواطنة: معالجة مشكل اجتماعي',
    'مواطنة: مسؤولية الدولة والمجتمع',
    'مواطنة: تخليق الحياة العامة (الرشوة)'
  ],
  'svt': [
    'التربية الغذائية',
    'الهضم والامتصاص',
    'التنفس عند الإنسان',
    'الدم والدوران الدموي',
    'الإبراز البولي'
  ],
  'svt_fr': [
    'L\'éducation nutritionnelle',
    'La digestion et l\'absorption',
    'La respiration chez l\'homme',
    'Le sang et la circulation',
    'L\'excrétion urinaire'
  ],
  'arabic': [
      'اسم الفاعل وصيغ المبالغة', 
      'اسم المفعول', 
      'أسماء الزمان والمكان', 
      'اسم الآلة', 
      'النسبة', 
      'الإعلال والإبدال',
      'المعاجم'
  ],
  'french': [
      'La structure de la lettre', 
      'La demande d\'autorisation', 
      'La lettre d\'invitation', 
      'La lettre de remerciement'
  ],
  'math': [
      'النشر والتعميل والمتطابقات الهامة', 
      'القوى', 
      'الجذور المربعة', 
      'مبرهنة طاليس', 
      'الترتيب والعمليات', 
      'المثلث القائم والحساب المثلثي', 
      'الزوايا المركزية والمحيطية', 
      'المثلثات المتقايسة والمتشابهة'
  ],
  'math_fr': [
      'Développement et Factorisation', 
      'Les Puissances', 
      'Les Racines Carrées', 
      'Théorème de Thalès', 
      'Ordre et Opérations', 
      'Théorème de Pythagore', 
      'Trigonométrie', 
      'Angles inscrits et au centre', 
      'Triangles isométriques et semblables'
  ],
  'pc': [
      'أمثلة لبعض المواد المستعملة في حياتنا', 
      'المواد والكهرباء (الذرات والأيونات)', 
      'أكسدة الفلزات في الهواء', 
      'تفاعل المواد العضوية مع الهواء', 
      'المحاليل الحمضية والقاعدية', 
      'تفاعل الفلزات مع المحاليل', 
      'روائز الكشف عن الأيونات', 
      'خطورة بعض المواد'
  ],
  'pc_fr': [
      'Quelques matériaux au quotidien', 
      'Atomes et Ions', 
      'Oxydation des métaux', 
      'Combustion des matériaux organiques', 
      'Solutions acides et basiques', 
      'Action des solutions sur les métaux', 
      'Tests de reconnaissance des ions', 
      'Dangers de quelques matériaux'
  ]
};

// دالة لإنشاء خطاطة افتراضية ذكية
const getMindMap = (subjectId: string, lessonTitle: string): MindMapData => {
  
  // ================= التربية الإسلامية =================
  if (subjectId === 'islamic') {
    return {
      title: lessonTitle,
      root: lessonTitle.split(':')[0], // أخذ الجزء الأول من العنوان
      branches: [
        { name: 'المفهوم / التعريف', sub: ['التعريف اللغوي', 'التعريف الشرعي', 'الأركان والشروط'] },
        { name: 'الأهمية والمقاصد', sub: ['أثره على الفرد', 'أثره على المجتمع', 'الغاية الدينية'] },
        { name: 'القيم المستفادة', sub: ['التقوى', 'التوكل', 'الإخلاص'] },
        { name: 'أدلة شرعية', sub: ['من القرآن الكريم', 'من السنة النبوية'] }
      ]
    };
  }

  // ================= الاجتماعيات =================
  if (subjectId === 'history') {
    if (lessonTitle.includes('تاريخ')) {
       return {
        title: lessonTitle,
        root: lessonTitle.replace('تاريخ: ', ''),
        branches: [
            { name: 'الإطار الزمني والمكاني', sub: ['القرن 19/20', 'أوروبا / العالم / المغرب'] },
            { name: 'الأسباب والعوامل', sub: ['أسباب مباشرة', 'أسباب غير مباشرة', 'عوامل مساعدة'] },
            { name: 'المظاهر والمراحل', sub: ['أهم الأحداث', 'التطورات', 'المراحل الكبرى'] },
            { name: 'النتائج والانعكاسات', sub: ['سياسياً', 'اقتصادياً', 'اجتماعياً'] }
        ]
       };
    }
    if (lessonTitle.includes('جغرافيا')) {
       return {
        title: lessonTitle,
        root: lessonTitle.replace('جغرافيا: ', ''),
        branches: [
            { name: 'المؤهلات الطبيعية', sub: ['الموقع', 'التضاريس', 'المناخ والثروات'] },
            { name: 'المؤهلات البشرية', sub: ['عدد السكان', 'اليد العاملة', 'السوق الاستهلاكية'] },
            { name: 'المكانة الاقتصادية', sub: ['الفلاحة', 'الصناعة', 'التجارة'] },
            { name: 'المشاكل والتحديات', sub: ['الطبيعية', 'الاقتصادية', 'الديمغرافية'] }
        ]
       };
    }
    if (lessonTitle.includes('مواطنة')) {
       return {
        title: lessonTitle,
        root: lessonTitle.replace('مواطنة: ', ''),
        branches: [
            { name: 'المفهوم والدلالة', sub: ['تعريف المصطلح', 'المرجعية القانونية'] },
            { name: 'الحقوق والواجبات', sub: ['ما يضمنه القانون', 'ما يلتزم به المواطن'] },
            { name: 'خطوات العمل', sub: ['التشخيص', 'الاقتراح', 'التنفيذ'] },
            { name: 'دور المؤسسات', sub: ['الدولة', 'المجتمع المدني', 'المواطن'] }
        ]
       };
    }
  }

  // ================= الرياضيات (Arabic & French) =================
  if (subjectId === 'math' || subjectId === 'math_fr') {
    const isFr = subjectId === 'math_fr';
    return {
        title: lessonTitle,
        root: lessonTitle,
        branches: [
            { name: isFr ? 'Définitions' : 'تعاريف ومفاهيم', sub: isFr ? ['Notion clé 1', 'Notion clé 2'] : ['مفهوم أساسي 1', 'مفهوم أساسي 2'] },
            { name: isFr ? 'Règles & Propriétés' : 'قواعد وخاصيات', sub: isFr ? ['Règle 1', 'Propriété fondamentale', 'Théorème'] : ['قاعدة 1', 'خاصية أساسية', 'مبرهنة'] },
            { name: isFr ? 'Exemples' : 'أمثلة تطبيقية', sub: isFr ? ['Cas simple', 'Cas particulier'] : ['مثال بسيط', 'حالة خاصة'] },
            { name: isFr ? 'Techniques de calcul' : 'تقنيات الحساب', sub: isFr ? ['Méthode 1', 'Astuce'] : ['طريقة 1', 'تنبيه هام'] }
        ]
    };
  }

  // ================= الفيزياء والكيمياء (Arabic & French) =================
  if (subjectId === 'pc' || subjectId === 'pc_fr') {
    const isFr = subjectId === 'pc_fr';
    return {
        title: lessonTitle,
        root: lessonTitle,
        branches: [
            { name: isFr ? 'Concepts clés' : 'مفاهيم أساسية', sub: isFr ? ['Définition', 'Symbole / Formule'] : ['التعريف', 'الرمز / الصيغة'] },
            { name: isFr ? 'Expérience' : 'التجربة', sub: isFr ? ['Montage', 'Observation', 'Interprétation'] : ['العدة التجريبية', 'الملاحظة', 'التفسير'] },
            { name: isFr ? 'Conclusion' : 'استنتاج', sub: isFr ? ['Loi physique', 'Réaction chimique'] : ['قانون فيزيائي', 'معادلة التفاعل'] },
            { name: isFr ? 'Dangers & Précautions' : 'أخطار ووقاية', sub: isFr ? ['Risques', 'Sécurité'] : ['المخاطر', 'احتياطات السلامة'] }
        ]
    };
  }

  // ================= SVT (Arabic & French) =================
  if (subjectId === 'svt' || subjectId === 'svt_fr') {
    const isFr = subjectId === 'svt_fr';
    return {
        title: lessonTitle,
        root: lessonTitle,
        branches: [
            { name: isFr ? 'Anatomie / Structure' : 'البنية والتشريح', sub: isFr ? ['Organes', 'Tissus', 'Cellules'] : ['الأعضاء', 'الأنسجة', 'الخلايا'] },
            { name: isFr ? 'Fonctionnement' : 'الوظيفة', sub: isFr ? ['Rôle principal', 'Mécanisme'] : ['الدور الأساسي', 'الآلية'] },
            { name: isFr ? 'Phénomènes' : 'الظواهر', sub: isFr ? ['Echanges', 'Réactions'] : ['التبادلات', 'التفاعلات'] },
            { name: isFr ? 'Hygiène & Santé' : 'الوقاية والصحة', sub: isFr ? ['Maladies', 'Prévention'] : ['الأمراض', 'سبل الوقاية'] }
        ]
    };
  }

  // ================= الفرنسية =================
  if (subjectId === 'french') {
      // Specific logic for letters
      if (lessonTitle.includes('lettre') || lessonTitle.includes('demande') || lessonTitle.includes('invitation')) {
        return {
            title: lessonTitle,
            root: 'La Lettre Conventionnelle',
            branches: [
                { name: 'La Forme (Structure)', sub: ['Lieu et date', 'Coordonnées (Émetteur/Récepteur)', 'Objet', 'Signature'] },
                { name: 'Formules d\'appel', sub: ['Monsieur le Directeur,', 'Monsieur le Président,'] },
                { name: 'Le Corps du texte', sub: ['L\'intention (J\'ai l\'honneur...)', 'L\'argumentation', 'L\'attente'] },
                { name: 'Formules de politesse', sub: ['Veuillez agréer...', 'Mes salutations distinguées'] }
            ]
        };
      }
      return {
        title: lessonTitle,
        root: lessonTitle,
        branches: [
            { name: 'Définition', sub: ['Concept clé', 'Usage'] },
            { name: 'Caractéristiques', sub: ['Forme', 'Structure', 'Langue'] },
            { name: 'Exemples', sub: ['Exemple 1', 'Exemple 2'] },
            { name: 'Moyens linguistiques', sub: ['Lexique', 'Grammaire'] }
        ]
      };
  }
  
  // ================= العربية =================
  if (subjectId === 'arabic') {
    return {
      title: lessonTitle,
      root: lessonTitle,
      branches: [
        { name: 'التعريف', sub: ['لغة', 'اصطلاحاً'] },
        { name: 'الشروط والأحكام', sub: ['شروط الصياغة', 'الحالات الإعرابية'] },
        { name: 'الأنواع / الأوزان', sub: ['الأوزان القياسية', 'الأوزان السماعية'] },
        { name: 'أمثلة ونماذج', sub: ['جمل مفيدة', 'إعراب نموذجي'] }
      ]
    };
  }

  // Default Generic Map
  return {
    title: lessonTitle,
    root: lessonTitle,
    branches: [
      { name: 'المحور الأول', sub: ['مفهوم أساسي', 'عنصر 1'] },
      { name: 'المحور الثاني', sub: ['عنصر 2', 'عنصر 3'] },
      { name: 'المحور الثالث', sub: ['خلاصة', 'استنتاج'] }
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
      {/* Header Section */}
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
                <span className="font-bold text-xl text-gray-800 dark:text-white group-hover:text-primary transition-colors text-center">
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

        {/* VIEW 3: MIND MAP VISUALIZATION (Responsive) */}
        {view === 'MAP' && currentMap && (
          <div className="w-full h-full bg-white dark:bg-[#2d2d2d] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col min-h-[600px] overflow-hidden">
            {/* Map Toolbar */}
            <div className="bg-gray-50 dark:bg-[#333] p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center z-20 relative">
               <div className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                 <i className="fas fa-expand-arrows-alt mr-2"></i>
                 {t.mindmaps.desktopView}
               </div>
               <button className="text-primary hover:underline text-sm font-bold" onClick={() => window.print()}>
                 <i className="fas fa-print mr-1"></i> {t.mindmaps.print}
               </button>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-auto bg-grid-pattern relative">
                <div className="min-w-full min-h-full p-8 flex flex-col items-center justify-start">
                  
                    {/* Root Node */}
                    <div className="bg-gradient-to-br from-primary to-accent text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-2xl mb-8 md:mb-16 relative z-10 animate-fadeIn transform hover:scale-105 transition-transform cursor-default border-4 border-white dark:border-[#2d2d2d] max-w-[90%] md:max-w-[80%] text-center">
                      {currentMap.root}
                      {/* Connector to branches */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-8 md:h-16 bg-primary/30"></div>
                    </div>

                    {/* Branches Container - Vertical on mobile, Horizontal on desktop */}
                    <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-4 animate-fadeIn delay-100 relative md:px-4">
                      
                      {/* Horizontal Connecting Bar (Desktop Only) */}
                      {currentMap.branches.length > 1 && (
                        <div className="hidden md:block absolute top-0 left-[12%] right-[12%] h-1 bg-primary/30 rounded-full"></div>
                      )}

                      {currentMap.branches.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center flex-1 w-full md:w-auto relative">
                          
                          {/* Desktop Vertical Line (From horizontal bar) */}
                          <div className="hidden md:block w-1 h-8 bg-primary/30 -mt-0 mb-0"></div>
                          
                          {/* Mobile Connector (From previous element or root) */}
                          <div className="md:hidden w-1 h-8 bg-primary/30 -mt-8 mb-0 absolute -top-8 left-1/2 -translate-x-1/2"></div>

                          {/* Branch Node */}
                          <div className="bg-white dark:bg-[#3d3d3d] border-t-4 border-primary p-4 rounded-xl font-bold text-gray-900 dark:text-white shadow-lg w-full md:w-auto min-w-[200px] text-center hover:shadow-xl transition-all cursor-default relative z-10 mb-4 mt-2 min-h-[60px] flex items-center justify-center">
                            <h4 className="text-lg leading-tight">{branch.name}</h4>
                          </div>

                          {/* Connection to children */}
                          {branch.sub.length > 0 && <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>}

                          {/* Sub Items (Leaves) */}
                          <div className="flex flex-col gap-3 w-full max-w-[250px]">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapsModule;
