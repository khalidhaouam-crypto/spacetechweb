import { LinksData, SubjectInfo, LinkItem } from './types';

// Translations
export const TRANSLATIONS = {
  ar: {
    welcome: "مرحباً بك في",
    nameLabel: "الاسم الشخصي",
    namePlaceholder: "اكتب اسمك هنا...",
    stageLabel: "المرحلة الدراسية",
    stagePlaceholder: "اختر المرحلة الدراسية",
    cycleLabel: "الدورة",
    cyclePlaceholder: "اختر الدورة",
    cycle1: "الدورة الأولى",
    cycle2: "الدورة الثانية",
    levelLabel: "المستوى",
    levelPlaceholder: "اختر المستوى",
    middleSchool: "الثانوي الإعدادي",
    highSchool: "الثانوي التأهيلي",
    middle1: "الأولى إعدادي",
    middle2: "الثانية إعدادي",
    middle3: "الثالثة إعدادي",
    startBtn: "انطلق 🚀",
    aboutBtn: "ℹ️ اعرف المزيد عنا",
    selectBranch: "اختر المسلك / الشعبة",
    changeLevel: "⬅️ تغيير المستوى",
    subjectsTitle: "المواد الدراسية",
    noSubjects: "لا توجد مواد متاحة حالياً.",
    backBtn: "⬅️ رجوع",
    lessons: "دروس",
    exercises: "تمارين",
    exams: "فروض + التصحيح",
    videos: "فيديوهات",
    localExams: "امتحانات محلية + التصحيح",
    regionalExams: "امتحانات جهوية + التصحيح",
    nationalExams: "امتحانات وطنية + التصحيح",
    noLinks: "لا توجد روابط متاحة حالياً.",
    descLessons: "ملخصات وشروحات",
    descExercises: "سلاسل وتمارين تطبيقية",
    descExams: "اختبارات المراقبة المستمرة",
    descVideos: "شروحات مصورة",
    aboutTitle: "حول التطبيق",
    aboutText: "SPACETECH هو رفيقك الذكي للنجاح الدراسي. صمم خصيصاً للتلميذ المغربي، يجمع بين المحتوى التعليمي وأدوات الإنتاجية.",
    holidaysBtn: "لائحة العطل",
    privacyBtn: "الخصوصية",
    privacyAlert: "سياسة الخصوصية: بياناتك آمنة ومحفوظة على جهازك فقط.",
    searchPlaceholder: "ابحث عن درس، تمرين، فروض...",
    footerRights: "جميع الحقوق محفوظة",
    modules: {
      tasks: " المهام الدراسية",
      notes: " الملاحظات",
      flashcards: " مراجعة البطاقات",
      pomodoro: "Pomodoro" ,
      mindmaps: "الخطاطات الذهنية",
      calculator: "حاسبة المعدل"
    },
    // Module Specific Translations
    notes: {
      title: "لوحة الملاحظات",
      addBtn: "ملاحظة جديدة",
      titlePlaceholder: "عنوان الملاحظة",
      contentPlaceholder: "اكتب تفاصيل ملاحظتك هنا...",
      colorLabel: "لون الملاحظة",
      saveBtn: "حفظ الملاحظة",
      noNotes: "لا توجد ملاحظات. اضغط على \"ملاحظة جديدة\" للبدء.",
      deleteConfirm: "حذف هذه الملاحظة؟"
    },
    flashcards: {
      total: "مجموع البطاقات",
      mastered: "تم الحفظ 🏆",
      learning: "قيد التعلم 🧠",
      new: "جديدة 🆕",
      addBtn: "إضافة بطاقة جديدة +",
      cancelBtn: "إلغاء",
      subjectLabel: "المادة",
      questionPlaceholder: "السؤال",
      answerPlaceholder: "الجواب",
      saveBtn: "حفظ",
      filterLabel: "تصفية حسب المادة",
      allSubjects: "كل المواد",
      flipHint: "اضغط لقلب البطاقة",
      difficult: "😓 صعب",
      easy: "😎 سهل",
      cardIndex: "بطاقة",
      of: "من",
      emptyList: "لا توجد بطاقات في هذه القائمة",
      emptyHint: "أضف بطاقة جديدة أو غير التصفية",
      deleteConfirm: "هل أنت متأكد من حذف هذه البطاقة نهائياً؟",
      general: "عام"
    },
    pomodoro: {
      focusSession: "جلسة تركيز 🔥",
      breakTime: "وقت الاستراحة ☕",
      start: "ابدأ",
      pause: "إيقاف مؤقت",
      reset: "إعادة",
      settingsTitle: "إعدادات الجلسة",
      taskLabel: "على ماذا تعمل الآن؟",
      selectTask: "-- اختر مهمة للتركيز عليها --",
      focusMsg: "جيد! ركز فقط على هذه المهمة.",
      focusDuration: "مدة التركيز",
      breakDuration: "مدة الاستراحة",
      minutes: "دقيقة"
    },
    mindmaps: {
      title: "الخطاطات الذهنية",
      selectSubject: "الثالثة إعدادي - اختر المادة",
      lessonsFor: "دروس",
      print: "طباعة",
      desktopView: "نظرة شمولية (Desktop View)"
    },
    calculator: {
      title: "حاسبة المعدل الاحترافية",
      modeSemester: "حساب معدل الدورة",
      modeAnnual: "حساب المعدل السنوي",
      colSubject: "المادة الدراسية",
      colMark: "النقطة /20",
      colCoef: "المعامل",
      addSubject: "إضافة مادة جديدة",
      clear: "تفريغ جميع الحقول",
      calculateBtn: "احسب النتيجة الآن",
      calculateAnnualBtn: "احسب المعدل السنوي",
      resultSemester: "معدل الدورة",
      resultAnnual: "النتيجة النهائية",
      sem1: "معدل الدورة الأولى",
      sem2: "معدل الدورة الثانية",
      congrats: "🎉 مبروك النجاح!",
      hardLuck: "⚠️ يجب بذل مجهود أكبر",
      congratsAnnual: "ألف مبروك، لقد نجحت! 🎓",
      hardLuckAnnual: "للأسف، حظ أوفر في المرة القادمة",
      ensureData: "تأكد من صحة المعاملات للحصول على نتيجة دقيقة.",
      enterAnnualData: "أدخل معدلات الدورات لحساب النتيجة النهائية للسنة الدراسية"
    }
  },
  fr: {
    welcome: "Bienvenue sur",
    nameLabel: "Prénom",
    namePlaceholder: "Entrez votre nom...",
    stageLabel: "Cycle Scolaire",
    stagePlaceholder: "Choisir le cycle",
    cycleLabel: "Semestre",
    cyclePlaceholder: "Choisir le semestre",
    cycle1: "Semestre 1",
    cycle2: "Semestre 2",
    levelLabel: "Niveau",
    levelPlaceholder: "Choisir le niveau",
    middleSchool: "Collège",
    highSchool: "Lycée",
    middle1: "1ère Année Collège",
    middle2: "2ème Année Collège",
    middle3: "3ème Année Collège",
    startBtn: "Démarrer 🚀",
    aboutBtn: "ℹ️ À propos",
    selectBranch: "Choisir la branche",
    changeLevel: "⬅️ Changer niveau",
    subjectsTitle: "Matières",
    noSubjects: "Aucune matière disponible.",
    backBtn: "⬅️ Retour",
    lessons: "Cours",
    exercises: "Exercices",
    exams: "Contrôles + Corrigés",
    videos: "Vidéos",
    localExams: "Examens Locaux",
    regionalExams: "Examens Régionaux",
    nationalExams: "Examens Nationaux",
    noLinks: "Aucun lien disponible.",
    descLessons: "Résumés et explications",
    descExercises: "Séries d'exercices",
    descExams: "Contrôles continus",
    descVideos: "Explications vidéo",
    aboutTitle: "À propos",
    aboutText: "Nous avons commencé avec une vision simple : rendre une éducation de haute qualité accessible à chaque élève marocain. SPACETECH n'est pas seulement une application, c'est un écosystème complet combinant un contenu éducatif riche avec les dernières technologies d'apprentissage intelligent. Nous ne construisons pas seulement une application, nous construisons un avenir.",
    holidaysBtn: "Vacances",
    privacyBtn: "Confidentialité",
    privacyAlert: "Vos données sont sécurisées et stockées uniquement sur votre appareil.",
    searchPlaceholder: "Rechercher un cours, exercice...",
    footerRights: "Tous droits réservés",
    modules: {
      tasks: "Gestion des Tâches",
      notes: "Notes",
      flashcards: "Cartes Mémoire",
      pomodoro: "Pomodoro",
      mindmaps: "Cartes Mentales",
      calculator: "Calculateur de Moyenne"
    },
    // Module Specific Translations
    notes: {
      title: "Tableau de Notes",
      addBtn: "Nouvelle Note",
      titlePlaceholder: "Titre de la note",
      contentPlaceholder: "Écrivez vos détails ici...",
      colorLabel: "Couleur",
      saveBtn: "Enregistrer",
      noNotes: "Aucune note. Cliquez sur \"Nouvelle Note\" pour commencer.",
      deleteConfirm: "Supprimer cette note ?"
    },
    flashcards: {
      total: "Total Cartes",
      mastered: "Maîtrisées 🏆",
      learning: "En Apprentissage 🧠",
      new: "Nouvelles 🆕",
      addBtn: "Ajouter une carte +",
      cancelBtn: "Annuler",
      subjectLabel: "Matière",
      questionPlaceholder: "Question",
      answerPlaceholder: "Réponse",
      saveBtn: "Enregistrer",
      filterLabel: "Filtrer par matière",
      allSubjects: "Toutes les matières",
      flipHint: "Appuyez pour retourner",
      difficult: "😓 Difficile",
      easy: "😎 Facile",
      cardIndex: "Carte",
      of: "sur",
      emptyList: "Aucune carte dans cette liste",
      emptyHint: "Ajoutez une carte ou changez le filtre",
      deleteConfirm: "Êtes-vous sûr de vouloir supprimer cette carte ?",
      general: "Général"
    },
    pomodoro: {
      focusSession: "Session Focus 🔥",
      breakTime: "Pause ☕",
      start: "Démarrer",
      pause: "Pause",
      reset: "Réinitialiser",
      settingsTitle: "Paramètres de session",
      taskLabel: "Sur quoi travaillez-vous ?",
      selectTask: "-- Choisir une tâche --",
      focusMsg: "Bien ! Concentrez-vous uniquement sur cette tâche.",
      focusDuration: "Durée Focus",
      breakDuration: "Durée Pause",
      minutes: "min"
    },
    mindmaps: {
      title: "Cartes Mentales",
      selectSubject: "3ème Année Collège - Choisir la matière",
      lessonsFor: "Leçons de",
      print: "Imprimer",
      desktopView: "Vue Bureau"
    },
    calculator: {
      title: "Calculateur de Moyenne Pro",
      modeSemester: "Moyenne Semestrielle",
      modeAnnual: "Moyenne Annuelle",
      colSubject: "Matière",
      colMark: "Note /20",
      colCoef: "Coefficient",
      addSubject: "Ajouter une matière",
      clear: "Tout effacer",
      calculateBtn: "Calculer Maintenant",
      calculateAnnualBtn: "Calculer Moyenne Annuelle",
      resultSemester: "Moyenne du Semestre",
      resultAnnual: "Résultat Final",
      sem1: "Moyenne Semestre 1",
      sem2: "Moyenne Semestre 2",
      congrats: "🎉 Félicitations!",
      hardLuck: "⚠️ Doit faire mieux",
      congratsAnnual: "Félicitations, vous avez réussi! 🎓",
      hardLuckAnnual: "Malheureusement, meilleure chance la prochaine fois",
      ensureData: "Vérifiez les coefficients pour un résultat précis.",
      enterAnnualData: "Entrez les moyennes semestrielles pour le résultat final"
    }
  },
  en: {
    welcome: "Welcome to",
    nameLabel: "First Name",
    namePlaceholder: "Enter your name...",
    stageLabel: "School Stage",
    stagePlaceholder: "Select Stage",
    cycleLabel: "Semester",
    cyclePlaceholder: "Select Semester",
    cycle1: "Semester 1",
    cycle2: "Semester 2",
    levelLabel: "Level",
    levelPlaceholder: "Select Level",
    middleSchool: "Middle School",
    highSchool: "High School",
    middle1: "1st Year Middle",
    middle2: "2nd Year Middle",
    middle3: "3rd Year Middle",
    startBtn: "Start 🚀",
    aboutBtn: "ℹ️ About Us",
    selectBranch: "Select Branch",
    changeLevel: "⬅️ Change Level",
    subjectsTitle: "Subjects",
    noSubjects: "No subjects available.",
    backBtn: "⬅️ Back",
    lessons: "Lessons",
    exercises: "Exercises",
    exams: "Exams + Solutions",
    videos: "Videos",
    localExams: "Local Exams",
    regionalExams: "Regional Exams",
    nationalExams: "National Exams",
    noLinks: "No links available.",
    descLessons: "Summaries and explanations",
    descExercises: "Exercise series",
    descExams: "Continuous assessment",
    descVideos: "Video tutorials",
    aboutTitle: "About",
    aboutText: "We started with a simple vision: to make high-quality education accessible to every Moroccan student. SPACETECH is not just an app, it represents a complete ecosystem combining rich educational content with the latest smart learning technologies. We are not just building an app, we are building a future.",
    holidaysBtn: "Holidays",
    privacyBtn: "Privacy",
    privacyAlert: "Your data is safe and stored locally on your device.",
    searchPlaceholder: "Search for lessons, exercises...",
    footerRights: "All rights reserved",
    modules: {
      tasks: "Tasks Manager",
      notes: "Notes",
      flashcards: "Flashcards Review",
      pomodoro: "Pomodoro",
      mindmaps: "Mind Maps",
      calculator: "Grade Calculator"
    },
    // Module Specific Translations
    notes: {
      title: "Notes Board",
      addBtn: "New Note",
      titlePlaceholder: "Note Title",
      contentPlaceholder: "Write your details here...",
      colorLabel: "Note Color",
      saveBtn: "Save Note",
      noNotes: "No notes. Click \"New Note\" to start.",
      deleteConfirm: "Delete this note?"
    },
    flashcards: {
      total: "Total Cards",
      mastered: "Mastered 🏆",
      learning: "Learning 🧠",
      new: "New 🆕",
      addBtn: "Add New Card +",
      cancelBtn: "Cancel",
      subjectLabel: "Subject",
      questionPlaceholder: "Question",
      answerPlaceholder: "Answer",
      saveBtn: "Save",
      filterLabel: "Filter by Subject",
      allSubjects: "All Subjects",
      flipHint: "Tap to flip",
      difficult: "😓 Hard",
      easy: "😎 Easy",
      cardIndex: "Card",
      of: "of",
      emptyList: "No cards in this list",
      emptyHint: "Add a card or change filter",
      deleteConfirm: "Are you sure you want to delete this card?",
      general: "General"
    },
    pomodoro: {
      focusSession: "Focus Session 🔥",
      breakTime: "Break Time ☕",
      start: "Start",
      pause: "Pause",
      reset: "Reset",
      settingsTitle: "Session Settings",
      taskLabel: "What are you working on?",
      selectTask: "-- Select a task --",
      focusMsg: "Good! Focus only on this task.",
      focusDuration: "Focus Duration",
      breakDuration: "Focus Duration",
      minutes: "min"
    },
    mindmaps: {
      title: "Mind Maps",
      selectSubject: "3rd Year Middle - Select Subject",
      lessonsFor: "Lessons for",
      print: "Print",
      desktopView: "Desktop View"
    },
    calculator: {
      title: "Pro Grade Calculator",
      modeSemester: "Semester Average",
      modeAnnual: "Annual Average",
      colSubject: "Subject",
      colMark: "Mark /20",
      colCoef: "Coefficient",
      addSubject: "Add New Subject",
      clear: "Clear All",
      calculateBtn: "Calculate Now",
      calculateAnnualBtn: "Calculate Annual Average",
      resultSemester: "Semester Average",
      resultAnnual: "Final Result",
      sem1: "Semester 1 Average",
      sem2: "Semester 2 Average",
      congrats: "🎉 Congratulations!",
      hardLuck: "⚠️ Work Harder",
      congratsAnnual: "Congratulations, you passed! 🎓",
      hardLuckAnnual: "Unfortunately, better luck next time",
      ensureData: "Ensure coefficients are correct for accurate results.",
      enterAnnualData: "Enter semester averages for final yearly result"
    }
  }
};

// High School Configuration
export const HS_LEVELS = [
  { value: 'Jada_Muchtarak', label: 'الجذع المشترك' },
  { value: '1_Bac', label: 'الأولى باكالوريا' },
  { value: '2_Bac', label: 'الثانية باكالوريا' }
];

export const HS_BRANCHES: { [key: string]: string[] } = {
  'Jada_Muchtarak': [
    'العلوم',
    'التكنولوجيا',
    'الآداب والعلوم الإنسانية'
  ],
  '1_Bac': [
    'العلوم الرياضية',
    'العلوم التجريبية',
    'العلوم و التكنولوجيات الكهربائية',
    'العلوم و التكنولوجيات الميكانيكية',
    'العلوم الاقتصادية والتدبير',
    'الآداب والعلوم الإنسانية'
  ],
  '2_Bac': [
    'العلوم الرياضية أ',
    'العلوم الرياضية ب',
    'العلوم الفيزيائية',
    'علوم الحياة والأرض',
    'العلوم الزراعية',
    'العلوم و التكنولوجيات الكهربائية',
    'العلوم و التكنولوجيات الميكانيكية',
    'العلوم الإقتصادية',
    'علوم التدبير المحاسباتي',
    'الآداب',
    'العلوم الإنسانية'
  ]
};

// Generic Subjects for High School with varied colors
const GENERIC_HS_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#27ae60" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "التاريخ والجغرافيا", icon: "fa-solid fa-globe-africa", color: "#d35400" }
];

// --- Specific Subject Lists for Jada Muchtarak (Common Core) ---

const CC_SCIENCE_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" }, // Red
  { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" }, // Dark Red
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" }, // Orange
  { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" }, // Dark Orange
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" }, // Green
  { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" }, // Dark Green
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" }, // Navy
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" }, // Blue
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" }, // Pink
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" }, // Pumpkin
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" }, // Teal
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" } // Purple
];

const CC_TECH_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
  { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
  { name: "علوم المهندس", icon: "fa-solid fa-gears", color: "#7f8c8d" }, // Grey
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const CC_ARTS_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

// --- Specific Subject Lists for 1st Year Bac ---

const BAC1_MATH_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC1_EXP_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC1_TECH_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم المهندس", icon: "fa-solid fa-gears", color: "#7f8c8d" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC1_ECO_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
    { name: "الإقتصاد والتنظيم الإداري للمقاولات", icon: "fas fa-building", color: "#34495e" },
    { name: "المحاسبة والرياضيات المالية", icon: "fas fa-calculator", color: "#16a085" },
    { name: "الإقتصاد العام والإحصاء", icon: "fas fa-chart-line", color: "#2980b9" },
    { name: "القانون", icon: "fas fa-balance-scale", color: "#8e44ad" },
    { name: "معلوميات التدبير", icon: "fas fa-laptop-code", color: "#27ae60" }
];

const BAC1_ARTS_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

// --- Specific Subject Lists for 2nd Year Bac ---

const BAC2_MATH_A_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC2_MATH_B_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم المهندس", icon: "fa-solid fa-gears", color: "#7f8c8d" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC2_PC_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC2_AGRO_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "العلوم النباتية والحيوانية", icon: "fa-solid fa-leaf", color: "#27ae60" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC2_TECH_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم المهندس", icon: "fa-solid fa-gears", color: "#7f8c8d" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const BAC2_ECO_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
    { name: "الإقتصاد والتنظيم الإداري للمقاولات", icon: "fas fa-building", color: "#34495e" },
    { name: "المحاسبة والرياضيات المالية", icon: "fas fa-calculator", color: "#16a085" },
    { name: "الإقتصاد العام والإحصاء", icon: "fas fa-chart-line", color: "#2980b9" },
    { name: "القانون", icon: "fas fa-balance-scale", color: "#8e44ad" },
    { name: "معلوميات التدبير", icon: "fas fa-laptop-code", color: "#27ae60" }
];

const BAC2_ARTS_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];


// Specific subjects can be mapped here if branches have different subjects
const BRANCH_SUBJECT_MAPPING: { [key: string]: SubjectInfo[] } = Object.values(HS_BRANCHES).flat().reduce((acc, branch) => {
    // Default fallback
    let subjects = GENERIC_HS_SUBJECTS;
    
    // Override for Common Core (Jada Muchtarak)
    if (branch === 'العلوم') subjects = CC_SCIENCE_SUBJECTS;
    else if (branch === 'التكنولوجيا') subjects = CC_TECH_SUBJECTS;
    else if (branch === 'الآداب والعلوم الإنسانية') subjects = CC_ARTS_SUBJECTS;

    // Override for 1st Year Bac
    else if (branch === 'العلوم الرياضية') subjects = BAC1_MATH_SUBJECTS;
    else if (branch === 'العلوم التجريبية') subjects = BAC1_EXP_SUBJECTS;
    else if (branch === 'العلوم و التكنولوجيات الكهربائية') subjects = BAC1_TECH_SUBJECTS;
    else if (branch === 'العلوم و التكنولوجيات الميكانيكية') subjects = BAC1_TECH_SUBJECTS;
    else if (branch === 'العلوم الاقتصادية والتدبير') subjects = BAC1_ECO_SUBJECTS;
    else if (branch === 'الآداب والعلوم الإنسانية') subjects = BAC1_ARTS_SUBJECTS;

    // Override for 2nd Year Bac (Keys must match HS_BRANCHES values)
    else if (branch === 'العلوم الرياضية أ') subjects = BAC2_MATH_A_SUBJECTS;
    else if (branch === 'العلوم الرياضية ب') subjects = BAC2_MATH_B_SUBJECTS;
    else if (branch === 'العلوم الفيزيائية') subjects = BAC2_PC_SUBJECTS;
    else if (branch === 'علوم الحياة والأرض') subjects = BAC2_PC_SUBJECTS; // Using same list as PC based on prompt
    else if (branch === 'العلوم الزراعية') subjects = BAC2_AGRO_SUBJECTS;
    else if (branch === 'العلوم و التكنولوجيات الكهربائية') subjects = BAC2_TECH_SUBJECTS; // Same name as 1Bac but specific 2Bac list
    else if (branch === 'العلوم و التكنولوجيات الميكانيكية') subjects = BAC2_TECH_SUBJECTS;
    else if (branch === 'العلوم الإقتصادية') subjects = BAC2_ECO_SUBJECTS;
    else if (branch === 'علوم التدبير المحاسباتي') subjects = BAC2_ECO_SUBJECTS;
    else if (branch === 'الآداب') subjects = BAC2_ARTS_SUBJECTS;
    else if (branch === 'العلوم الإنسانية') subjects = BAC2_ARTS_SUBJECTS;

    acc[branch] = subjects;
    return acc;
}, {} as { [key: string]: SubjectInfo[] });

export const SUBJECTS_DATA: { [key: string]: SubjectInfo[] } = {
  "الثانوي الإعدادي": [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (Fr)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (Fr)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT Fr)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "التاريخ", icon: "fa-solid fa-landmark", color: "#d35400" },
    { name: "الجغرافيا", icon: "fa-solid fa-earth-africa", color: "#e67e22" },
    { name: "التربية على المواطنة", icon: "fa-solid fa-people-group", color: "#9b59b6" }
  ],
  ...BRANCH_SUBJECT_MAPPING
};

// Explicit exports for App.tsx to use if needed for level distinction
export const LEVEL_SUBJECTS: any = {
    'Jada_Muchtarak': {
        'العلوم': CC_SCIENCE_SUBJECTS,
        'التكنولوجيا': CC_TECH_SUBJECTS,
        'الآداب والعلوم الإنسانية': CC_ARTS_SUBJECTS
    },
    '1_Bac': {
        'العلوم الرياضية': BAC1_MATH_SUBJECTS,
        'العلوم التجريبية': BAC1_EXP_SUBJECTS,
        'العلوم و التكنولوجيات الكهربائية': BAC1_TECH_SUBJECTS,
        'العلوم و التكنولوجيات الميكانيكية': BAC1_TECH_SUBJECTS,
        'العلوم الاقتصادية والتدبير': BAC1_ECO_SUBJECTS,
        'الآداب والعلوم الإنسانية': BAC1_ARTS_SUBJECTS
    },
    '2_Bac': {
        'العلوم الرياضية أ': BAC2_MATH_A_SUBJECTS,
        'العلوم الرياضية ب': BAC2_MATH_B_SUBJECTS,
        'العلوم الفيزيائية': BAC2_PC_SUBJECTS,
        'علوم الحياة والأرض': BAC2_PC_SUBJECTS,
        'العلوم الزراعية': BAC2_AGRO_SUBJECTS,
        'العلوم و التكنولوجيات الكهربائية': BAC2_TECH_SUBJECTS,
        'العلوم و التكنولوجيات الميكانيكية': BAC2_TECH_SUBJECTS,
        'العلوم الإقتصادية': BAC2_ECO_SUBJECTS,
        'علوم التدبير المحاسباتي': BAC2_ECO_SUBJECTS,
        'الآداب': BAC2_ARTS_SUBJECTS,
        'العلوم الإنسانية': BAC2_ARTS_SUBJECTS
    }
}

export const VIDEOS_DATA: { [key: string]: LinkItem[] } = {
  "الرياضيات": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - النشر والتعميل", duration: "15:30" },
    { id: "abc123def45", title: "شرح القوى والجذور المربعة", duration: "22:15" },
    { id: "xyz789uvw12", title: "تمارين محلولة في مبرهنة طاليس", duration: "18:45" }
  ],
  "Mathématiques (Fr)": [
    { id: "dQw4w9WgXcQ", title: "Lesson 1", duration: "15:30" }
  ],
  "الفيزياء والكيمياء": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
  "Physique et Chimie (Fr)": [
    { id: "dQw4w9WgXcQ", title: "Lesson 1", duration: "15:30" }
  ],
  "علوم الحياة والأرض": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
  "Sciences de la vie et de la Terre (SVT Fr)": [
    { id: "dQw4w9WgXcQ", title: "Lesson 1", duration: "15:30" }
  ],
  "التاريخ": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
  "الجغرافيا": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
  "التربية على المواطنة": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
   "اللغة العربية": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ],
  "التربية الإسلامية": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - تجريبي ", duration: "15:30" }
  ]
};

// --- DATA STRUCTURES FOR LESSONS ---

// Arabic Lessons Structure (All Levels)
const ARABIC_LESSONS = {
  "المجزوءات": [],
  "الدروس اللغوية": [],
  "دروس النصوص": [],
  "دروس التعبير والإنشاء": []
};

// Middle School Arabic Lessons Structure
const MIDDLE_SCHOOL_ARABIC_LESSONS = {
  "النصوص القرائية": [],
  "الدروس اللغوية": [],
  "التعبير والإنشاء": []
};

// Islamic Education Lessons Structure (All Levels)
const ISLAMIC_LESSONS = {
  "مدخل التزكية (القرآن الكريم)": [],
  "مدخل التزكية (العقيدة)": [],
  "مدخل الإقتداء": [],
  "مدخل الإستجابة": [],
  "مدخل القسط": [],
  "مدخل الحكمة": []
};

// Social Studies Lessons Structure (All Levels)
const HG_LESSONS = {
  "التاريخ": [],
  "الجغرافيا": []
};

// French Lessons - Common Core & 2nd Bac
const FRENCH_CC_2BAC_LESSONS = {
  "Activités de lecture": [],
  "Activités de langue": [],
  "Module 1": [],
  "Module 2": []
};

// French Lessons - 1st Bac
const FRENCH_1BAC_LESSONS = {
  "La Boîte à merveilles": [],
  "Antigone": [],
  "Le dernier jour d’un condamné": [],
  "Cours de langue": []
};

// Helper to generate High School Data Structure
const getHighSchoolData = (level: 'Jada_Muchtarak' | '1_Bac' | '2_Bac') => {
  const is1Bac = level === '1_Bac';
  const frenchLessons = is1Bac ? FRENCH_1BAC_LESSONS : FRENCH_CC_2BAC_LESSONS;

  return {
    "اللغة العربية": { "دروس": ARABIC_LESSONS },
    "التربية الإسلامية": { "دروس": ISLAMIC_LESSONS },
    "الإجتماعيات": { "دروس": HG_LESSONS }, // Some branches call it الإجتماعيات
    "التاريخ والجغرافيا": { "دروس": HG_LESSONS }, // Some call it التاريخ والجغرافيا
    "اللغة الفرنسية": { "دروس": frenchLessons },
    "الفرنسية": { "دروس": frenchLessons },
  };
};

// Helper to generate Middle School Data Structure
const getMiddleSchoolData = () => {
  return {
    "اللغة العربية": { "دروس": MIDDLE_SCHOOL_ARABIC_LESSONS },
    "التربية الإسلامية": { "دروس": ISLAMIC_LESSONS },
    "الاجتماعيات": { "دروس": HG_LESSONS },
    "التاريخ": { "دروس": HG_LESSONS["التاريخ"] || [] },
    "الجغرافيا": { "دروس": HG_LESSONS["الجغرافيا"] || [] },
    "التربية على المواطنة": { "دروس": [] },
    "الرياضيات": { "دروس": [], "تمارين": [], "فروض + التصحيح": {} },
    "Mathématiques (Fr)": { "دروس": [], "تمارين": [], "فروض + التصحيح": {} },
    "الفيزياء والكيمياء": { "دروس": [], "تمارين": [] },
    "Physique et Chimie (Fr)": { "دروس": [], "تمارين": [] },
    "علوم الحياة والأرض": { "دروس": [], "تمارين": [] },
    "Sciences de la vie et de la Terre (SVT Fr)": { "دروس": [], "تمارين": [] },
    "اللغة الفرنسية": { "دروس": [] }
  };
};


export const LINKS_DATA: LinksData = {
  "الثانوي الإعدادي": {
    "1": {
      "1": getMiddleSchoolData(),
      "2": getMiddleSchoolData(),
      "3": {
         ...getMiddleSchoolData(),
         "الرياضيات": {
            "دروس": [
              { title: "النشر والتعميل", url: "https://drive.google.com/file/d/1t3998-i8p4sXeHYm8xncqwOrrhTdbbsE/view?usp=drive_link" },
              { title: "القوى", url: "https://drive.google.com/file/d/1-YpeSe8A0E5DrqfM3Wby1AL37XTzQiuQ/view?usp=drive_link" },
              { title: "الجذور المربعة", url: "https://drive.google.com/file/d/1Voi3T9r24rIUD3CK_HAsiON8mwdDeQsw/view?usp=drive_link" },
              { title: "مبرهنة طاليس", url: "https://drive.google.com/file/d/1oR2K9DUVY5pNAVctONwQG7MCU5Ja3OfD/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس", url: "https://drive.google.com/file/d/1OVde6XGYXrsbPuh0C_IZnl52R2I7oh3l/view?usp=drive_link" },
              { title: "الترتيب والعمليات", url: "https://drive.google.com/file/d/1pX2piyvDmrnUDf_YmD3Fm1zZpSW4vgwp/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي", url: "https://drive.google.com/file/d/1ATouMWxTs5VrQ7vswT5nZAaXzSFwcoL2/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة", url: "https://drive.google.com/file/d/1gOim9_8H1zR5-T-VTQjnWAtHPm5XxlVp/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة", url: "https://drive.google.com/file/d/1yq9FKwqqXK6qenjwhosqNrKfhyP9alqS/view?usp=drive_link" }
            ],
            "تمارين": [
              { title: "النشر والتعميل - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1PUFYqG6YeevPZcM-Ku-F9tfKMG2R5kyJ/view?usp=drive_link" },
              { title: "النشر والتعميل - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1762zZ6BGjKLH86RL3R3YtMg-3gCnYdws/view?usp=drive_link" },
              { title: "النشر والتعميل - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1CQs1mQyDpps7PtjjJq4QbFIj8XjV1VyP/view?usp=drive_link" },
              { title: "النشر والتعميل - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1cA2UAZssn4PKxN3DV1SwU32740PiM-c4/view?usp=drive_link" },
              { title: "النشر والتعميل - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1wRzE0MaBIn3-kWS5xXkKhRcm89TeESKz/view?usp=drive_link" },
              { title: "النشر والتعميل - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1WlwXipAL4L1SU93AsHDt96x8zLXyZ7-C/view?usp=drive_link" },
              
              { title: "القوى - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1SBoJmcELZgzRa7Lzk_SJituoHdCTMs4H/view?usp=drive_link" },
              { title: "القوى - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1Dp0WQxDfjfwdjk0oFPux0XXOswTG2A3y/view?usp=drive_link" },
              { title: "القوى - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1tGvF6J9ngaN4QYx2HLBr_EreKuKz0hGH/view?usp=drive_link" },
              { title: "القوى - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1DMLvXvJz96qHfAd2jazCdOnjZWhCwWoI/view?usp=drive_link" },
              { title: "القوى - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1SV25PzQ5cF3su90kYBnVvwW2bGCkVNuB/view?usp=drive_link" },
              { title: "القوى - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1Z_zfGWys7JIHza8yY_mj9KNi8U2UEtTk/view?usp=drive_link" },

              { title: "الجذور المربعة - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1OvJGZfgMGT-TxCvXkpeCcJdg5MrDtvcu/view?usp=drive_link" },
              { title: "الجذور المربعة - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1OgORd2LH6_uaLt9vV2UP8kjjWneLon5-/view?usp=drive_link" },
              { title: "الجذور المربعة - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1Sbp1nEfkQ7rQ5Im0GKuH82baUYpR5aUA/view?usp=drive_link" },
              { title: "الجذور المربعة - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/14MPp7k1PHcbgeJYin52FaaajTsOLHzrK/view?usp=drive_link" },
              { title: "الجذور المربعة - سلسلة التمارين 3", url: "https://drive.google.com/file/d/18Xxh4Cg8dTaf0DIkk3-c7-7IlO1hdzgL/view?usp=drive_link" },
              { title: "الجذور المربعة - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1EK18vtMxUenEMPoYdkeUlaXx3zzLQs6H/view?usp=drive_link" },

              { title: "مبرهنة طاليس - سلسلة التمارين 1", url: "https://drive.google.com/file/d/19NEqrgQKZyJnPCo78tscvz4FCQbbVno8/view?usp=drive_link" },
              { title: "مبرهنة طاليس - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1Qab-xpQ1pGR8vhtPQSCt8_xcca5kzSsH/view?usp=drive_link" },
              { title: "مبرهنة طاليس - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1SnbmftUd42S_LulXOJ_uuoL5DPHZhQSI/view?usp=drive_link" },
              { title: "مبرهنة طاليس - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/12kGkCwzyE7dFkbdTGffbqQAuOsmUeUZX/view?usp=drive_link" },
              { title: "مبرهنة طاليس - سلسلة التمارين 3", url: "https://drive.google.com/file/d/15rOF2HIuDtjOwT_Xaqq5svVKCj5AI14w/view?usp=drive_link" },
              { title: "مبرهنة طاليس - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1p6SiPSF5MyW4j5NdyElJAxSIKrXCRi9N/view?usp=drive_link" },

              { title: "مبرهنة فيثاغورس - سلسلة التمارين 1", url: "https://drive.google.com/file/d/15OpRupyJOlptkE4ScSSt7sW6zEs6oe3I/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1NISknDDiYKTS9djOTv9aCEnQMf5OjiFZ/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1KHFpSoeXplNYKAQgf68KczGsjqm5tFO4/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/10otv67jNj6CdCCUI494DI8zokbPZTCHj/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1vAhX0w4Eg_sihF4ERZ-KAF_hJvvJ21E1/view?usp=drive_link" },
              { title: "مبرهنة فيثاغورس - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1GDluu0x-HDVB5ikOn0-H1NVAQxknVGGr/view?usp=drive_link" },

              { title: "الترتيب والعمليات - سلسلة التمارين 1", url: "https://drive.google.com/file/d/11sYL9FDGJgVO36cWAUn57M8krHGUjIVi/view?usp=drive_link" },
              { title: "الترتيب والعمليات - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1bfd919_QkIJF9ttEb1p53aRHXafESTCH/view?usp=drive_link" },
              { title: "الترتيب والعمليات - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1bfd919_QkIJF9ttEb1p53aRHXafESTCH/view?usp=drive_link" },
              { title: "الترتيب والعمليات - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1MLOKa91ioXdpYyblVmO98hWa1S4ssbDE/view?usp=drive_link" },
              { title: "الترتيب والعمليات - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1LYR_HSJhcvJPmgt3z1kMCZuGcQUclE3S/view?usp=drive_link" },
              { title: "الترتيب والعمليات - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1vwgTxvxld64dlTv5-fAHDP40E5f-DEhy/view?usp=drive_link" },

              { title: "المثلث القائم الزاوية والحساب المثلثي - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1K8QDOdau5Jg0hwZsiFOmNgh5h2uQICHx/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1ZCHKcD0ixn9dcu4lhJmz_NtNp64hRsgN/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1D26SNWlKd_8wLgYzzisNPsk0Gl-DexaM/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1zcfhTb-7ILYtMevrJ_LZM7yqomEgJLIH/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1NaW0rOb-2vQtqO7RDoGrCzgBcsTGm2Ne/view?usp=drive_link" },
              { title: "المثلث القائم الزاوية والحساب المثلثي - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1LiVPj0Cg3UfWdFXsbe95B0sIBw5a8ReA/view?usp=drive_link" },

              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1qrh6U0xhhIUl4spbxblNx6qcyGl4_Can/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1CYz0LGMZ4Naam1C6J1pBLZZwT2NpDUje/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1xH96QOgm-YIcXLwECKTjQNkL8LI-BLRO/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1FatkDzO2CUBvOTairO-1XmaX9Wmpn03_/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1pU_KsHJO2VXMK8LAdscoP7wo4vUCng3t/view?usp=drive_link" },
              { title: "الزوايا المركزية والزوايا المحيطية في دائرة - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1dKWfFfxAnhROIv5tktpoZgPD6yS7wbtm/view?usp=drive_link" },

              { title: "المثلثات المتقايسة والمثلثات المتشابهة - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1Ay987GRyCUxgtDvLiD5xBA4MbZrYDhgH/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1WseaCQBYkK0N-Q5D1hVCI4vOyS8M_elI/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1_wzhMvgmgwH2tnSXVRvBVd1B9T2qnGf2/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1yLCsvPG7gEq18DAZFKuWqyCoUFwCtw-W/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1BMsLmURju9O0vIVfBEBHlKpUv5FuTikE/view?usp=drive_link" },
              { title: "المثلثات المتقايسة والمثلثات المتشابهة - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1NvbOxnoh99VNNxjjWU8E2Hx9Sjpc2UCR/view?usp=drive_link" }
            ],
            "فروض + التصحيح": {
               "المرحلة الأولى": [
                  { title: "الفرض 1 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/18WiDEl4MvsquCssGJLrqzzlYj1ENZwIX/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1-l-8il3RaLmu3fSiFDZsbXIDgLXhjo6c/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1eZ-Gi6HB8PULMen5N6TAQx3jEYZm9rjy/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1JPxmU4l9AC2GJd05m0s04XcwwBVPGBOd/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1z2X42cdAAMZvodX1KsRo7Wrodk5T2ViS/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/12590sWcJIu3fRkC8CV8jDtNWU1_EX0Y2/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1oDVUCZo37Y-SyByTj7EZKSBdpM6Lww6A/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1A27t4LtRuCyzDp5UFEprgdTwpd2BonxG/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1MQ8XSVrmDI8W-q9vtFN56rKrGQn_e0ap/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1MGrxT5mcuwsob51b4bGtUIXKdOufWhYf/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 6 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1FMOS9cEeNyfyIb4sY1lrZYCiS-xRtSKN/view?usp=drive_link" },
                  { title: "الفرض 1 نموذج 6 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1HpvMIJisRE-TsAYL1XAWuFZrw72Vjw6i/view?usp=drive_link" },
               ],
               "المرحلة الثانية": [
                  { title: "الفرض 2 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1HmQU3GjHxfGd7FrDD3MMl-LywvXZR2Pm/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1QZD9XdrgQvI17RT2CqDYRk2EHtHNPqwb/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1_CKQFFafTPvZ9YAbmjxeTPmXTtta7BmC/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1c6ZM2XTFM8Ds2OCfGRtbq_H5PgbXCIgN/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1NP1jGlO61GLLUG7LTzvPt3eCdox9_Jvv/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1Y1wxQPjtxOetzpnxw55d5YV50aF7AERJ/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1Eb0vphJnsnM8R8cXOskk_MYFdsQJnBFQ/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1FgVKJVE-XNcN12W5BNxlSExW-nzhUZ_v/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1k2MzqWv4mtWBA7Vz7pk1zBzM9M8nghJv/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1_wMERD38JGpjh4_a03Y0lSkVzFqtHKq5/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 6 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1NT5OwXvwnmaf4-_1aHOzAtjWw1lQJYPJ/view?usp=drive_link" },
                  { title: "الفرض 2 نموذج 6 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1HpvMIJisRE-TsAYL1XAWuFZrw72Vjw6i/view?usp=drive_link" },
               ],
               "المرحلة الثالثة": [
                  { title: "الفرض 3 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1akWz2VSqmtPkeuyfhy0oKBYC9UNMhyM1/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 1 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/17sTE4f32jG2wiFZQ2vBgPbttWVAJS6Lv/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1h0VYSRhHrP5cZY8oXTCuAkaX6fJnSZGi/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 2 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1tkJJxQ6lCaVdV7yjEOUpHBqPrzDwNn5G/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1q-mChFqmbrlEehdUwqgh2qQW4eg96F-J/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 3 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1jioTwuab7VktkdH_lx9ARHLXIS3O6mHQ/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1o2EsN7UVhR8QrgIkqhzigh5skrS7uJcz/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 4 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/14MwsdeqrdVqv8N4OfPMr7F_AKOUstfUh/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1w9HJtOEai-nplgEBNbLyqxT_u3Xzovab/view?usp=drive_link" },
                  { title: "الفرض 3 نموذج 5 - الرياضيات ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1rXBn8trA8l2zv85FW9Mh3SghHmbJQIWd/view?usp=drive_link" },          
               ]
            },
            "امتحانات محلية + التصحيح": [
               { title: "امتحان محلي بركان 2015: الموضوع", url: "https://drive.google.com/file/d/18s17J-qVRCnOj2ZYQnFAvsCeRBSDeTZF/view?usp=drive_link" },
               { title: "امتحان محلي بركان 2015: التصحيح", url: "https://drive.google.com/file/d/1XgdF1DiBHRAu00r7xcbLitToj7MNrufS/view?usp=drive_link" },
               { title: "امتحان محلي صفرو 2015: الموضوع", url: "https://drive.google.com/file/d/1gRc-QoR7DVWCii0XK36SAiyhx4pTJW91/view?usp=drive_link" },
               { title: "امتحان محلي صفرو 2015: التصحيح", url: "https://drive.google.com/file/d/1uFN7yyQyqj8VHlaYdX3-V8O5BNGDP-dG/view?usp=drive_link" }
            ],
            "فيديوهات": VIDEOS_DATA["الرياضيات"]
         },
         "Mathématiques (Fr)": {
          "دروس": [  { title: "Développement et factorisation", url: "https://drive.google.com/file/d/1Jd6gwKD72ommWYpS3bvLIApcdybnG88T/view?usp=drive_link" },
              { title: "Les puissances", url: "https://drive.google.com/file/d/1M1UqbhA48kCoCWFU8gE_xtqooY_9B5dG/view?usp=drive_link" },
              { title: "Racines-carrées", url: "https://drive.google.com/file/d/1e3mMAl8J6Kk9_jp7ndQ3bEWM13iz5qSM/view?usp=drive_link" },
              { title: "Théorème de Thalès", url: "https://drive.google.com/file/d/1TY4xsTuusDTSY72RocBcc4hSRcqDnT48/view?usp=drive_link" },
              { title: "Théorème de Pythagore", url: "https://drive.google.com/file/d/1TPTMjt8unF5XW9Bl2ptecIJdjCG0V7KO/view?usp=drive_link" },
              { title: "Ordre et opérations", url: "https://drive.google.com/file/d/16K6HIPb6PQdfiYfFoiJNH0441ogFyIYn/view?usp=drive_link" },
              { title: "Triangles rectangles et trigonométrie", url: "https://drive.google.com/file/d/1uduSjcNC7EfJAHnbh7MCM8nn7PQ68c8c/view?usp=drive_link" },
              { title: "Angles inscrits et angles au centre", url: "https://drive.google.com/file/d/12xThC56lrtEV1kpwUKKqrvTVJbeJqBJf/view?usp=drive_link" },
              { title: "Triangles semblables", url: "https://drive.google.com/file/d/1tcNHYna5F7YB3vQi8Z9r61384PH4CCJn/view?usp=drive_link" }],

          "تمارين": [{ title: "Développement - Série d'exercices 1 ", url: "https://drive.google.com/file/d/1lFVI1l6O_PZoU53tWrnGz8kSBl8DzLoH/view?usp=drive_link" },
              { title: "Développement - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/10EJIUTPSaBOUk-Okho0g2Cc75hsechzj/view?usp=drive_link" },
              { title: "Développement - Série d'exercices 2", url: "https://drive.google.com/file/d/1Sr8bVAjl9IDqN7NoxWNFWzDiOcCEKw6W/view?usp=drive_link" },
              { title: "Développement - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/1rHer0iQXXnAoLdbxNSKQvu4LXyZhWuNw/view?usp=drive_link" },
              { title: "Puissances - Série d'exercices 1", url: "https://drive.google.com/file/d/1XufRvWDgzHs6pKbQKlvlBXwJ9Xx4LzW1/view?usp=drive_link" },
              { title: "Puissances - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1RtWSOFvT2ugVY4GauwqfyWXGg_rS3mwQ/view?usp=drive_link" },

              { title: "Puissances - Série d'exercices 2", url:     "https://drive.google.com/file/d/1W66hfTk-sIeplIA8nuPrGe4IPZtWum1T/view?usp=drive_link" },
              { title: "Puissances - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/1XVAkX-_1viC138w9n3TbbQD079iSxvgX/view?usp=drive_link" },
              { title: "Racines Carrées - Série d'exercices 1", url: "https://drive.google.com/file/d/1uOkUc6_uJi0WPwRS9cedgS7CGzv7QiBs/view?usp=drive_link" },
              { title: "Racines Carrées - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1cq0-hZcigd6euAwqivbvwVz8INb3VszX/view?usp=drive_link" },
              { title: "Racines Carrées - Série d'exercices 2", url: "https://drive.google.com/file/d/1HTNoLhw7Gwd7K8xWuatwK8ZFIUQ2WxCP/view?usp=drive_link" },
              { title: "Racines Carrées - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/1iJi_dl70bv04z00fYjEeVzvEDU0ItLJo/view?usp=drive_link" },

              { title: "Théorème de Thalès - Série d'exercices 1", url: "https://drive.google.com/file/d/1z6Hs3jpgTjKBbeGU64lxId1r23sMHFOX/view?usp=drive_link" },
              { title: "Théorème de Thalès - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1NuBqBolphyEX4oAi6-N8kly8Kt4rWsSV/view?usp=drive_link" },
              { title: "Théorème de Thalès - Série d'exercices 2", url: "https://drive.google.com/file/d/15fpjFOozyDWGxxDPTFS3Elee3YAH3nwZ/view?usp=drive_link" },
              { title: "Théorème de Thalès - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/1uwI9mtrWTNm-4BgqUHy97cUiK3EbDlH8/view?usp=drive_link" },
              { title: "Théorème de Thalès - Série d'exercices 3", url: "https://drive.google.com/file/d/126Qa8HID3mBs0WueXTRz6YX3AZ6s7OBg/view?usp=drive_link" },
              { title: "Théorème de Thalès - Corrigé série d'exercices 3", url: "https://drive.google.com/file/d/1xl5KW5NlkatD9ADShpHV25xBnVG_Ckjg/view?usp=drive_link" },

              { title: "Théorème de Pythagore - Série d'exercices 1", url: "https://drive.google.com/file/d/10ReeQ8jUZTRkaYNd4YZkEmXRG7-5Z0FB/view?usp=drive_link" },
              { title: "Théorème de Pythagore - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1sTYVYiGV5jgmvIzsn2m6HXmx2AKtdNGA/view?usp=drive_link" },
              { title: "Théorème de Pythagore - Série d'exercices 2", url: "https://drive.google.com/file/d/10JfwWRcU1u9cANVd9C5_uqqUJXrLBIXP/view?usp=drive_link" },
              { title: "Théorème de Pythagore - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/163jND3SSjKzuT_AeNUm4Vl5gCjch5uGN/view?usp=drive_link" },
              { title: "Ordre et opérations - Exercices", url: "https://drive.google.com/file/d/1fGV_nfNhbJJIWoNGh5lyr7SLFzCclnZA/view?usp=drive_link" },
              { title: "Triangles isométriques et triangles semblables - Série d'exercices 1", url: "https://drive.google.com/file/d/11o2ixw4_Xc8KGausP5M5y1oIbuzmYg9t/view?usp=drive_link" },

              { title: "Triangles isométriques et triangles semblables - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1jREDuKDwjV-nunruNyuXEe5TG3AQ50ku/view?usp=drive_link" },
              { title: "Angles inscrits et angles au centre - Exercices", url: "https://drive.google.com/file/d/19vbVmqvlcpFMZ2bJsQ5jiypmrgpyLwSe/view?usp=drive_link" },
              { title: "Angles inscrits et angles au centre - Corrigés d'exercices ", url: "https://drive.google.com/file/d/1BWXtoAbgJYXWWL_fAqGINTNSBSv1y-r2/view?usp=drive_link" },
              { title: "Angles inscrits et angles au centre - Exercices d'entraînement", url: "https://drive.google.com/file/d/1a-JJ6VvrTW8v-BXYclb5F1M-G7bZB8o8/view?usp=drive_link" },
              { title: "Angles inscrits et angles au centre - Corrigé d'exercices 2 ", url: "https://drive.google.com/file/d/1QRteg33tx4pIdwSNh4vRdo49YR8CQJAX/view?usp=drive_link" },
              { title: "Trigonométrie - Série d'exercices 1", url:   "https://drive.google.com/file/d/1H6p8nmtTtVvIRqxPyqA_HHqoB_1qA9H3/view?usp=drive_link" },

              { title: "Trigonométrie - Corrigé série d'exercices 1", url: "https://drive.google.com/file/d/1m_ytX6Jr_BDV4_qqxW2sNhHRmq4jJNXa/view?usp=drive_link" },
              { title: "Trigonométrie - Série d'exercices 2", url: "https://drive.google.com/file/d/1bfd919_QkIJF9ttEb1p53aRHXafESTCH/view?usp=drive_link" },
              { title: "Trigonométrie - Corrigé série d'exercices 2", url: "https://drive.google.com/file/d/1S10k5XCtgEopHkpFoqR4exjN925Zj6iG/view?usp=drive_link" },
              { title: "Trigonométrie - Série d'exercices 3", url: "https://drive.google.com/file/d/1OY87nEPyRw6Y1rC8ZKu-0OlWYX2_aeZy/view?usp=drive_link" },
              { title: "Trigonométrie - Corrigé série d'exercices 3 ", url: "https://drive.google.com/file/d/1csIIbzfxuTZHIVK3_OC_LHCOYj7K37le/view?usp=drive_link" } ],
          
          "فروض + التصحيح": {
            "المرحلة الأولى": [
              { title: "Devoir 1 Modèle 1 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1Ppv_QjX_LqhVZq3pJ16_WJFzLeIeLKC8/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 2 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1qJJePSzA8NTSkEsRp9e1L4lT-VXKbLaB/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 3 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1tzUl6ngTqoJGU-bN8Gd8a0YRl0Pmxdt8/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 4 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1d0HbFjiqqmf19TRK6ZDHFyUDpL7HzxUM/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 5 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1SxsMR53xb1JTQGLrZnbjWIBSlKNwjEIP/view?usp=drive_link"},
            ],
            "المرحلة الثانية": [
              { title: "Devoir 2 Modèle 1 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/14irnTj3XnYVqaHnigvVoCowzDBoWA4Dw/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 2 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/170vpNZVb2T-t8ZwoTokO7OcP5P2oVi1R/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 3 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1AfMw4afzAoSkYVSCV2lkxcqzRJEa_34W/view?usp=drive_link"},
            ],
            "المرحلة الثالثة": [
              { title: "Devoir 3 Modèle 1 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1Ulhb8FYwD3JIxsIxElIZcJ26Vc7kHB5q/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 2 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1aLlf89wZaQDF6yfkniTRESrqg_YOEyNs/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 3 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1Zi7jEjH1Q_ecYWHu60U8D7O4yE2v6u4_/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 4 - Mathématiques 3AC Semestre 1", url: "https://drive.google.com/file/d/1Rd2rKFHg9bo2Q7kBO1E0gnsHR3sBo-UH/view?usp=drive_link"},
            ]
          },
          "امتحانات محلية + التصحيح": [
            { title: "Examen-local-1", url:                                             "https://drive.google.com/file/d/1e-K-V2Y-ZjeHJs5kPDLcSEzK2s4XHS0m/view?usp=drive_link" },
            { title: "Examen-local-2 ", url: "https://drive.google.com/file/d/1nK3lNRBsVEk6tLq1noxIpNc2aeirmgoh/view?usp=drive_link" }
           ],
              "فيديوهات": [
                {
                  id: "dQw4w9WgXcQ",
                  title: "Lesson 1",
                  duration: "15:30"
                }
              ]
         },
        "الفيزياء والكيمياء": {
          "دروس": [
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - الدرس 1", url: "https://drive.google.com/file/d/1ukmJXiiTusG2Gb841l6A13fWf5fEdjCT/view?usp=drive_link" },
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - الدرس 2", url: "https://drive.google.com/file/d/1lqZJ7ZpevK44BXPJiEMCATwzFF-t2XrA/view?usp=drive_link" },
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - الدرس 3", url: "https://drive.google.com/file/d/1cqGmkxY2Ei05WrZK3TuL6oovoZE-d2xs/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - الدرس 1", url: "https://drive.google.com/file/d/1DSR2igOMceVDqAKkI8OHvv7IwCIQlUjN/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - الدرس 2", url: "https://drive.google.com/file/d/1egBID6GS15QAIM9D7NDx-UC_meDVcCeW/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - الدرس 3", url: "https://drive.google.com/file/d/1gT9KpTmDJKjorrre0NT_5nW6rRDY55Bj/view?usp=drive_link" },
            { title: "أكسدة الفلزات في الهواء - الدرس 1", url: "https://drive.google.com/file/d/1IReswWnlonwbYT-xudGJyAdDJv4Ch5Nd/view?usp=drive_link" },
            { title: "أكسدة الفلزات في الهواء - الدرس 2", url: "https://drive.google.com/file/d/1uC76aeu3nEbAAgSdBBNkdkY7hjKofjU9/view?usp=drive_link" },
            { title: "تفاعل بعض المواد العضوية مع ثنائي أوكسجين الهواء - الدرس 1", url: "https://drive.google.com/file/d/1gg1QtsEK2YNUfEKGLtI3U8KSn5AwiN-I/view?usp=drive_link" },
            { title: "تفاعل بعض المواد العضوية مع ثنائي أوكسجين الهواء - الدرس 2", url: "https://drive.google.com/file/d/1oli1G5HBdNyfZegnqlIXTpc8PrP0pBDw/view?usp=drive_link" },
            { title: "المحاليل الحمضية والمحاليل القاعدية - الدرس 1", url: "https://drive.google.com/file/d/1jGroQE4xORwFAlHtAe9FClyCCKG3XPTW/view?usp=drive_link" },
            { title: "المحاليل الحمضية والمحاليل القاعدية - الدرس 2", url: "https://drive.google.com/file/d/1uk_hjd5qeeLO8vU3i6wt381u56AcXckp/view?usp=drive_link" },
            { title: "تفاعلات بعض المواد مع المحاليل الحمضية والقاعدية - الدرس 1", url: "https://drive.google.com/file/d/1T2Yjx2_TI4jA68rpbgXrH99P1lDMlj1P/view?usp=drive_link" },
            { title: "تفاعلات بعض المواد مع المحاليل الحمضية والقاعدية - الدرس 2", url: "https://drive.google.com/file/d/1ghRwdng1yO7tk4762ziqIUPF0Cfz-Kb2/view?usp=drive_link" },
            { title: "روائز الكشف عن بعض الأيونات - الدرس 1", url: "https://drive.google.com/file/d/1qaiyA_wnzxKWzrb6LXjeleSRPZ7tRVbi/view?usp=drive_link" },
            { title: "روائز الكشف عن بعض الأيونات - الدرس 2", url: "https://drive.google.com/file/d/1blsIk9bGOC1ddNPNj9zc-uZ4f835O8Ab/view?usp=drive_link" },
            { title: "خطورة بعض المواد المستعملة في حياتنا اليومية - الدرس 1 ", url: "https://drive.google.com/file/d/1yVJxuDRSU2vAKTBze2z8ic3Dcpe0ONtp/view?usp=drive_link" },
            { title: "خطورة بعض المواد المستعملة في حياتنا اليومية - الدرس 2", url: "https://drive.google.com/file/d/1TnYnXVtkDcN94iAhMSGfLp0HWC8aHp8S/view?usp=drive_link" },
            { title: "خطورة بعض المواد المستعملة في حياتنا اليومية - الدرس 3 ", url: "https://drive.google.com/file/d/1eaxKS_CaDJrkK-hYMXsYPfnYeSoS728F/view?usp=drive_link" }
          ],
          "تمارين": [
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1H5tcEIoPCJOB58df9-vIpC23Pi_RF2tC/view?usp=drive_link" },
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1JANc5lY_B9gZSFnu6MyYFT4a18GNqcUG/view?usp=drive_link" },
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1nr8mLpbsXCGzUAMCx0q6B6zyMRVkGJ0B/view?usp=drive_link" },
            { title: "أمثلة لبعض المواد المستعملة في حياتنا اليومية- تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1pNSYpyUURJfL3lxjEywKJtObuz7hCCSg/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - سلسلة التمارين 1", url: "https://drive.google.com/file/d/14uqQTU-fMxWPpGzIm7kNlYi1zzBlpkl-/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1r19tZXOU07f66m77kcICvjpp6i0X2QpD/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1dEbxnQCtHN8lmffttvf_LMKHjWGtZU9_/view?usp=drive_link" },
            { title: "المواد والكهرباء (الذرات والأيونات) - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1Xq2cgkdO3SXbz1GYngisMQ0YV3bzi03N/view?usp=drive_link" },
            { title: "أكسدة الفلزات في الهواء - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1--cgxKFzRkTnBUfPjue72smGeUyt5se5/view?usp=drive_link" },
            { title: "أكسدة الفلزات في الهواء - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1TIiM7mNpCtgbZEwMtU5a3PRqW2WULjze/view?usp=drive_link" },
            { title: "تفاعل بعض المواد العضوية مع ثنائي أوكسجين الهواء - سلسلة التمارين 1", url: "https://drive.google.com/file/d/17qsvAO9wW610OxgPaPHIYjWbNf3U9WXl/view?usp=drive_link" },
            { title: "تفاعل بعض المواد العضوية مع ثنائي أوكسجين الهواء - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1rgy_V51yzqNq4SeQGV2ATLU0BM3f12wK/view?usp=drive_link" },
            { title: "تفاعلات بعض المواد مع المحاليل الحمضية والقاعدية - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1HB4EPmhqDIFyOvSaAM-QHgvZRlB2xxgC/view?usp=drive_link" },
            { title: "تفاعلات بعض المواد مع المحاليل الحمضية والقاعدية - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/14Hpo227QX7X_iWgz9M37cNy-zK466zYd/view?usp=drive_link" },
            { title: "روائز الكشف عن بعض الأيونات - تمارين محلولة 1", url: "https://drive.google.com/file/d/1O77JWllHpbN_0wD2-JQasYIW1sTAxjoe/view?usp=drive_link" },
            { title: "روائز الكشف عن بعض الأيونات - تمارين محلولة 2", url: "https://drive.google.com/file/d/1EhbnuQagumhpK6n9w4Hfa015Bi3hAQTK/view?usp=drive_link" },
            { title: "خطورة بعض المواد المستعملة في حياتنا اليومية - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1rcbZEYfu1G8-WES9hyvq3XHN3cUgVNx-/view?usp=drive_link" },
            { title: "خطورة بعض المواد المستعملة في حياتنا اليومية - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1VlNe4cO9xSWFsxPiDVm-UWzTMNL7FQ1Y/view?usp=drive_link" },
            { title: "سلسلة التمارين 1 – الموضوع", url: "https://drive.google.com/file/d/1XAjJiujs4bRNFj9dGI2jHDt9lHKV8CX5/view?usp=drive_link" },
            { title: "سلسلة التمارين 1 – التصحيح", url: "https://drive.google.com/file/d/1_jk1XkCnCOHa1QDkwUk3y6UIAwWwknXZ/view?usp=drive_link" },
            { title: "سلسلة التمارين 2 – الموضوع", url: "https://drive.google.com/file/d/1DbmJzAy-XmKh_-EhwedN-haYoezM54TC/view?usp=drive_link" },
            { title: "سلسلة التمارين 2 – التصحيح", url: "https://drive.google.com/file/d/1P_ufJxWw6kM2U8wEAnPeWa239zmVprDv/view?usp=drive_link" },
            { title: "سلسلة التمارين 3 - الموضوع", url: "https://drive.google.com/file/d/14hOy3O2MeVOrcXGi6d8I0yO6UToy5aCA/view?usp=drive_link" },
            { title: "سلسلة التمارين 3 - التصحيح ", url: "https://drive.google.com/file/d/1uLyR85h_B7b0vSrot86dJvIBLv6pODuu/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: "الفرض 1 نموذج 1 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1AwlCUELSDke4l1dQAriSx-d2or3L6uBb/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 1 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/14Lgcifs2p11EN7cfKlqoNA_FUI9re0Ce/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1QK6ZPXcJW1lm6odzQ3ymGc7WfzM6hTGj/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 3 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1RSGnRizkaaghCfiPY3wewNdUsfa8HiEb/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1r3y9taE98Dr_Ivsa49Bfxjg_rM8rRYrJ/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
               { title: "الفرض 2 نموذج 1 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1hgUQJHwDWT3c1xu_OnKJjSaocWt5Lbh3/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 1 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1K41f7I-ak5iofmmQH7b_xwjeKQ_xtUNR/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 2 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1spE9oXYSwOCT-Yv3Y_xcmv92L4CwRVuq/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 2 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1DIFvLoQQaTQ4Yehq3jDK5bq_4FRThAjU/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 3 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/16LqbGqv3xO-6Rd8MjIcte571CmyjPw1I/view?usp=drive_link" },
               { title: " الفرض 2 نموذج 3 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1JKBYyWinNJijQ9MMZ7KEpALfXY9qgSwk/view?usp=drive_link" },
            ],
            "المرحلة الثالثة": [
              { title: "الفرض 3 نموذج 1 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1F6PQoE2Z2t_R-k___QnbuNkEbQcLPXpz/view?usp=drive_link" }, 
              { title: "الفرض 3 نموذج 2 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1HWiF6xMo9Xr3DOijzVOppSVb0g3RYdAy/view?usp=drive_link" },  
              { title: "الفرض 3 نموذج 3 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1_BGe8Psvzi4GW5VqiN88Rcncqf6JNtEk/view?usp=drive_link" },
              { title: "الفرض 3 نموذج 4 - الفيزياء والكيمياء ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1XKOEgxdJM6vakNUZkBimyP11qsO8yjLl/view?usp=drive_link" },         
            ]
          },
          "امتحانات محلية + التصحيح": [
            { title: "امتحان محلي طنجة 2015: الموضوع", url: "https://drive.google.com/file/d/11DMvIS7TKI4ADVV2RmgROtkh9VoH6wo1/view?usp=drive_link" },
            { title: "امتحان محلي طنجة 2015: التصحيح", url: "https://drive.google.com/file/d/1SCubQVJvnaWx6WaRnlui5YPPeVJdocgO/view?usp=drive_link" },
            { title: "امتحان محلي تارودانت 2015: الموضوع", url: "https://drive.google.com/file/d/1P4axcMFdaK90O9AApWT476LvuHYwCrAB/view?usp=drive_link" },
            { title: "امتحان محلي تارودانت 2015: التصحيح", url: "https://drive.google.com/file/d/13w0nZyACX6CfN0l8Jk4gTcFflp_ilkfB/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["الفيزياء والكيمياء"]
        },
        "Physique et Chimie (Fr)": {
          "دروس": [
             { title: "Quelques matériaux au quotidien - Cours 1", url: "https://drive.google.com/file/d/1T32JYg-7JXPBoGl7t-mXmrHGpGJnMm5j/view?usp=drive_link" },
              { title: "Quelques matériaux au quotidien - Cours 2", url: "https://drive.google.com/file/d/18tvlsInwsbUzUtHE5tFa2Ip6nNjDK6B2/view?usp=drive_link" },
             { title: "Quelques matériaux au quotidien - Résumé de cours 1", url: "https://drive.google.com/file/d/1Mj33Kut2BncExTOc56j2KgRTdWqojzqg/view?usp=drive_link" },
              { title: "Quelques matériaux au quotidien - Résumé de cours 2", url: "https://drive.google.com/file/d/1rwKSPxxszBKNCrn4d85wAwyn0myc764g/view?usp=drive_link" },
            
             { title: "Les atomes et les ions - Cours 1", url: "https://drive.google.com/file/d/1TZ8_l3j7iX-3cL6VjhkQzDdfVKg7QwA6/view?usp=drive_link" },
              { title: "Les atomes et les ions - Cours 2", url: "https://drive.google.com/file/d/1lf1fqL65A5U39VhNwqTCHZAj34W7yQYF/view?usp=drive_link" },
            { title: "Les atomes et les ions - Résumé de cours 1", url: "https://drive.google.com/file/d/1ba-GKH9cTWxVpxN33pnohehPeI1ByKVF/view?usp=drive_link" },
              { title: "Les atomes et les ions - Résumé de cours 2", url: "https://drive.google.com/file/d/1ewxOfIHg3nB0jqpaVJp4XWGQl7sH-8Ph/view?usp=drive_link" },
            
             { title: " Oxydation des métaux dans l'air - Cours 1", url: "https://drive.google.com/file/d/1WTEXlt9aawkwsAQNpDjvpnrhSgm8guqJ/view?usp=drive_link" },
              { title: " Oxydation des métaux dans l'air - Cours 2", url: "https://drive.google.com/file/d/1y9NVSaUNuEyb4ADHjM7U4MbncXJcjYDE/view?usp=drive_link" },
            { title: "Oxydation des métaux dans l'air - Résumé de cours 1", url: "https://drive.google.com/file/d/16c2ajv-7uaYR_uC5ezVzA9-KuZaAF6bH/view?usp=drive_link" },
              { title: "Oxydation des métaux dans l'air - Résumé de cours 2", url: "https://drive.google.com/file/d/14dsLMB8scvMklHGf2JzIllUjlRJwsJ8k/view?usp=drive_link" },
            
            { title: "Combustion des matériaux organiques dans l’air - Cours 1", url: "https://drive.google.com/file/d/1Z4rsBt7wgwlqOSUtq5lM7GAPQLlPjf5U/view?usp=drive_link" },
              { title: "Combustion des matériaux organiques dans l’air - Cours 2", url: "https://drive.google.com/file/d/1hquiXG-U-FaoqUdR2hNnNoObXqNa32gQ/view?usp=drive_link" },
              { title: "Combustion des matériaux organiques dans l’air - Résumé de cours 1", url: "https://drive.google.com/file/d/1FzkGKX87aartsBwb9J4cNVKrofR8Lbpa/view?usp=drive_link" },
              { title: "Combustion des matériaux organiques dans l’air - Résumé de cours 2", url: "https://drive.google.com/file/d/1juH2afJwAiqgRuIENHdhlSEaKlkpjRRF/view?usp=drive_link" },
             
            { title: "Les solutions acides et basiques - Cours 1", url: "https://drive.google.com/file/d/14oekI71ZcWPpg6oVwkZbCgVHS_Sxv6Ce/view?usp=drive_link" },
              { title: "Les solutions acides et basiques - Cours 2", url: "https://drive.google.com/file/d/1rRah4dxcPzHAYpScrzXR--okSnta8Vnz/view?usp=drive_link" },
            { title: "Les solutions acides et basiques - Résumé de cours 1", url: "https://drive.google.com/file/d/1zlRz0gUf6qOPxClUUzYtkFtRWnV1xSuZ/view?usp=drive_link" },
              { title: "Les solutions acides et basiques - Résumé de cours 2", url: "https://drive.google.com/file/d/1enoww6fy7rTrEXm1U3LWmyvaVLWumPnJ/view?usp=drive_link" },
           
             { title: "Tests de reconnaissance de quelques ions - Cours 1", url: "https://drive.google.com/file/d/178lS_kP7hwGcJyEIaXQmf0VpIElbCZ4B/view?usp=drive_link" },
              { title: "Tests de reconnaissance de quelques ions - Cours 2", url: "https://drive.google.com/file/d/1p8bZdWt7mfDV-sK9ayy7wXo8oQO9Bv7D/view?usp=drive_link" },
             { title: "Tests de reconnaissance de quelques ions - Résumé de cours 1", url: "https://drive.google.com/file/d/1Gin53M7uPzVJ_5UH8CQ5dZUTlerusRzB/view?usp=drive_link" },
              { title: "Tests de reconnaissance de quelques ions - Résumé de cours 2", url: "https://drive.google.com/file/d/1Gin53M7uPzVJ_5UH8CQ5dZUTlerusRzB/view?usp=drive_link" },
            
             { title: "Réactions de quelques métaux avec les solutions acides et basiques - Cours 1", url: "https://drive.google.com/file/d/1RMZN7c6nSFYs3-ldAJuu7dy4NIyLVwro/view?usp=drive_link" },
              { title: "Réactions de quelques métaux avec les solutions acides et basiques - Cours 2", url: "https://drive.google.com/file/d/1MUhe3CSNaEXVqNCS9W1lCusgBTt7iShO/view?usp=drive_link" },
       { title: " Réactions de quelques métaux avec les solutions acides et basiques - Résumé de cours 1", url: "https://drive.google.com/file/d/1rfUCxrkueIP5n06V8mVFbEd0cjARyzXo/view?usp=drive_link" },
              { title: " Réactions de quelques métaux avec les solutions acides et basiques - Résumé de cours 2", url: "https://drive.google.com/file/d/1bjjGvwrGFsCcKKdvInl-g8TooNC2IcNL/view?usp=drive_link" },
               
                { title: "Danger de quelques matériaux utilisés dans la vie quotidienne sur la santé et l’environnement - Cours 1", url: "https://drive.google.com/file/d/1R_YxgsXQe31gVaFhtIBeIDl4AanOeODa/view?usp=drive_link" },
              { title: "Danger de quelques matériaux utilisés dans la vie quotidienne sur la santé et l’environnement - Résumé de cours 1", url: "https://drive.google.com/file/d/1m5vvI-_mfzwz4O5FPc3WfW6xjfYczamo/view?usp=drive_link" }],

          "تمارين": [
            { title: "Quelques matériaux au quotidien - Activités 1", url: "https://drive.google.com/file/d/1fj5EPvqLKmygLGZ82riWOhHjA0m9JUVe/view?usp=drive_link" },
              { title: " Quelques matériaux au quotidien - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1EDlt09MxjjXOKuvugZ1lqyICireBNCl6/view?usp=drive_link" },
              { title: "Les atomes et les ions - Activités 1", url: "https://drive.google.com/file/d/12p4THLWXsFz4lG52678W3VYdBna4Rkdg/view?usp=drive_link" },
              { title: "Les atomes et les ions - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1yJGkPGhwjKtOPYlBGepV9-EAFsAkPh8s/view?usp=drive_link" },
              { title: "Oxydation des métaux dans l'air - Activités 1", url: "https://drive.google.com/file/d/1cnVLQ_Q8kZUsC_CeLfplmHoWgO0N-3bj/view?usp=drive_link" },
              { title: "Oxydation des métaux dans l'air - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1VTlb8pTnFF9EFm0a7WfPa_8O_k6Eo_S9/view?usp=drive_link" },

              { title: "Combustion des matériaux organiques dans l’air - Activités 1", url:     "https://drive.google.com/file/d/1TIB4-Z2vKZYIMHC5zQ0fA1yrTKOYG9bM/view?usp=drive_link" },
              { title: " Combustion des matériaux organiques dans l’air - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1gLf3XZa_xpDAr6JDlW-EluZB__99Nf8u/view?usp=drive_link" },
              { title: "Les solutions acides et basiques - Activités 1", url: "https://drive.google.com/file/d/1cjMrodrLxlxVOTAfl0qRRGQOAfk63hwV/view?usp=drive_link" },
              { title: "Les solutions acides et basiques - Exercices non corrigés 1", url: "https://drive.google.com/file/d/10RUCWXYOVVldLnnyRVXj_cV9deYvwXmN/view?usp=drive_link" },
              { title: "Tests de reconnaissance de quelques ions - Activités 1", url: "https://drive.google.com/file/d/1Nxhe23fnRF_QXXV0x13Tozz7RNy5MADa/view?usp=drive_link" },
              { title: " Tests de reconnaissance de quelques ions - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1Z6auhOcjuYWMDh8FSlwnLeCUT466-Pce/view?usp=drive_link" },

              { title: "Réactions de quelques métaux avec les solutions acides et basiques - Activités 1", url: "https://drive.google.com/file/d/12Crf1X70MARFoW2CifVTVeg_NwwBStOk/view?usp=drive_link" },
              { title: "Réactions de quelques métaux avec les solutions acides et basiques - Exercices non corrigés 1", url: "https://drive.google.com/file/d/1leTvHDxEA4EK5t4y4tWWX4sMhPzJD_qc/view?usp=drive_link" },
              { title: " Danger de quelques matériaux utilisés dans la vie quotidienne sur la santé et l’environnement - Exercices non corrigés ", url: "https://drive.google.com/file/d/1sLiVOXIzxC6xZ3uq0JXKK8iZ29lWmi1k/view?usp=drive_link" } ],
          
          "فروض + التصحيح": {
            "المرحلة الأولى": [
              { title: "Devoir 1 Modèle 1 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1l5LS911U-SA73uFI2aW2G4rIjzXwNIY7/view?usp=drive_link"},
              { title: " Devoir 1 Modèle 1 - Physique-Chimie 3AC Semestre 1 (Corrigé)", url: "https://drive.google.com/file/d/15ZDhnuvD7byTeoJFUhc7597iECxBX3H8/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 2 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1IvtPcKXUBZmP-6jpzyiUu16pUGoWb6EB/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 3 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/18kXF33_KDjggr7Pw92aR8C2zi0l-TU_-/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 4 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/12NOKh3sh5giD7VtQVabhpNyc2kHnjIRu/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 5 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1okTuImvCPotcBJ6LTPhdb-iLTkUREHgC/view?usp=drive_link"},
            ],
            
            "المرحلة الثانية": [
              { title: "Devoir 2 Modèle 1 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1x3r1Enqu5bnbBDFhWjjPAECn3q9nA9BK/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 2 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1M0s4I8U-dLtUu5Slaf3zA-jiGmlKXV_2/view?usp=drive_link"},
              { title: " Devoir 2 Modèle 3 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1JTSqNrYrQm_IQlN6hVENsxVja1PtqoVe/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 4 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1RHNrKfp-O5iOejeTR3wN9yeFwkEMObKQ/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 5 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1_MrOG_ZZJ3MyuVpcnHLjAO1fsIkexKML/view?usp=drive_link"},
            ],
            
            "المرحلة الثالثة": [
              { title: "Devoir 3 Modèle 1 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/12-CgmsWL5gqhJ4Gngic8KjRpR-zIU1g3/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 2 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1XXeDxj3hpmYIX6ekqDs_iUvzC-BlW7gW/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 3 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1hE1c3ambntxVbcmOlUbGjrXhWHgn1kSc/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 4 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1kAtayy0DNq1pqYsGMxUalrTdd2VAjOVR/view?usp=drive_link"},
              { title: "Devoir 3 Modèle 5 - Physique-Chimie 3AC Semestre 1", url: "https://drive.google.com/file/d/1F_7vM2aOUfAwlQCxM484ZdRAKxuF6Ld3/view?usp=drive_link"},
            ]
          },
             
          "امتحانات محلية + التصحيح": [
            { title: "Examen local 1 - Physique-Chimie 3AC - Sujet", url:                                             "https://drive.google.com/file/d/11wxeGnB8YpPfc86l1i5fcsQj_gNfgGnM/view?usp=drive_link" },
            { title: "Examen local 1 - Physique-Chimie 3AC - Corrigé", url:                                             "https://drive.google.com/file/d/1D8cGSDJa5APmH-OXN-1QoVZKtvJIjHH4/view?usp=drive_link" },
            { title: "Examen local 2 - Physique-Chimie 3AC - Sujet", url:                                             "https://drive.google.com/file/d/1uYQfLXClwOyviFzpqMhjvrBSvwCEFftN/view?usp=drive_link" },
            { title: "Examen local 2 - Physique-Chimie 3AC - Corrigé", url:                                             "https://drive.google.com/file/d/1BB6VKq-tdrucf0xKKpdfkoiW1C6bar9j/view?usp=drive_link" },
            { title: "Examen local 3 - Physique-Chimie 3AC - Sujet", url:                                             "https://drive.google.com/file/d/1hY1umdrcbluHBgplKrtPi0xssMzGhQU7/view?usp=drive_link" },
            { title: "Examen local 3 - Physique-Chimie 3AC - Corrigé", url:                                           "https://drive.google.com/file/d/1eAes6eVR1sHvP-IT902Vp_IaIIaN_cJ_/view?usp=drive_link" },
            { title: "Examen local 4 - Physique-Chimie 3AC - Sujet", url:                                             "https://drive.google.com/file/d/1yPhgOVNak26v9TQ3Wr4Vv8NX4XrosXrm/view?usp=drive_link" },
            { title: "Examen local 4 - Physique-Chimie 3AC - Corrigé", url: "https://drive.google.com/file/d/1XyXnXEht8CKYKzlSxJtE-yLpTHWvNPN0/view?usp=drive_link" }
           ],
          "فيديوهات": [
            {
              id: "dQw4w9WgXcQ",
              title: "Lesson 1",
              duration: "15:30"
            }
          ]
        },
        "علوم الحياة والأرض": {
          "دروس": [ 
              { title: "التربية الغذائية - الدرس 1", url: "https://drive.google.com/file/d/1jFf4jRPnXoBWcQqYyFIArXVF7QM7o6JW/view?usp=drive_link" },
              { title: "التربية الغذائية - الدرس 2", url: "https://drive.google.com/file/d/1ZSh8gCLuVj56K51skIyKwhaUht_dxk2N/view?usp=drive_link" },
              { title: "التربية الغذائية - وثائق بالألوان", url: "https://drive.google.com/file/d/1q-Irv-Nu5IwLf22Z8T85tntw_n2PydI1/view?usp=drive_link" },
              { title: "الهضم والامتصاص - الدرس 1", url: "https://drive.google.com/file/d/1tFz26keAWM-0lUzkgSiLBUUHyusK0pXB/view?usp=drive_link" },
              { title: "الهضم والامتصاص - ملخص الدرس 1", url: "https://drive.google.com/file/d/1Dv7drbOufTEfrgKW6NBwMW1iTyESrQ_-/view?usp=drive_link" },
              { title: "الهضم والامتصاص - وثائق بالألوان", url: "https://drive.google.com/file/d/1fzQ4uRJtd6T0Qm-ervP5UIp90jI7-782/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - الدرس 1", url: "https://drive.google.com/file/d/1nklHMf6eWbmGWDDOg8GqxjLflPDdvCWk/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - الدرس 2", url: "https://drive.google.com/file/d/1SG-65F7heNCFRxEAgpc3NitZTcxkK-J3/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - ملخص الدرس 1", url: "https://drive.google.com/file/d/1WjPvOqF0buPpVGaPNIA4omGuUXMWZPaX/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - وثائق بالألوان", url: "https://drive.google.com/file/d/1EqrHhJFiIKM1c9_pdGkdHuucIaKmoXwO/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - الدرس 1", url: "https://drive.google.com/file/d/1e9_Y6YSweLmLzjxb8Ob3pLtnnwiowO3h/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - وثائق بالألوان", url: "https://drive.google.com/file/d/1c-jSchd0KvyUhXDk4rg2ZHme7xnptecx/view?usp=drive_link" },
              { title: "الإبراز البولي - الدرس 1", url: "https://drive.google.com/file/d/1zB8sCZeN_1llqaC6GHYnm1wJ_YqRd0CT/view?usp=drive_link" },
              { title: "الإبراز البولي - الدرس 2", url: "https://drive.google.com/file/d/1FoM6mSjwGp3FbD4avhsBGRkAmjRwSjiP/view?usp=drive_link" },
              { title: " الإبراز البولي - وثائق بالألوان", url: "https://drive.google.com/file/d/1yx2VfmQYOCvXvHHp9c9lJSnCOZgwgNrr/view?usp=drive_link" }
          ],
          "تمارين": [
              { title: "التربية الغذائية - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1bSMWzn-dRM2dXLm9EAM3NpiBUsZnnfPq/view?usp=drive_link" },
              { title: "التربية الغذائية - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1yvzGmoRVfewRnnBHEUKxt784jM2z0vqd/view?usp=drive_link" },
              { title: "التربية الغذائية - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1QadOzIB60wxrtQehj2t3r7wybcDMo9bE/view?usp=drive_link" },
              { title: "التربية الغذائية - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1n7DvTn3mpV8gR2MqKVpsCdV7YuEY_mFh/view?usp=drive_link" },
              { title: "التربية الغذائية - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1I7WqL02NL8bBkcR611BY5vp4eRcUJ96E/view?usp=drive_link" },
              { title: "االتربية الغذائية - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1Zy3HktUXS22iAhb_iaxJKmOOtsgWebPa/view?usp=drive_link" },
              { title: "التربية الغذائية - سلسلة التمارين 4", url: "https://drive.google.com/file/d/1k15mlxjBnEj0DuWHh0paAkk27tifytmF/view?usp=drive_link" },
              { title: "التربية الغذائية - تصحيح سلسلة التمارين 4", url: "https://drive.google.com/file/d/1AxCzAMzBDaP5DgFeu63BHCBf2WTcdygf/view?usp=drive_link" },
              { title: "الهضم والامتصاص - سلسلة التمارين 1", url: "https://drive.google.com/file/d/17PJ52RPgaOmqH4vN63gZq3pTZWaOy1Gs/view?usp=drive_link" },
              { title: "الهضم والامتصاص - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/1JzkoUjoHmJLnWZ2WHR3CVCp-ipJd3xc6/view?usp=drive_link" },
              { title: "الهضم والامتصاص - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1Hw5wUwRcCyg5kUysf83mUnUE0GOsUbqS/view?usp=drive_link" },
              { title: "الهضم والامتصاص - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1v0XyUoUBPcIGqAi35B6tmKxysrDwFodb/view?usp=drive_link" },
              { title: "الهضم والامتصاص - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1TfqWbf3DfOLBwXjR5in97FatmrG21KwH/view?usp=drive_link" },
              { title: "الهضم والامتصاص - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1o_CA6S92IBIL0Ma85qgfyEjnPb40lmez/view?usp=drive_link" },
              { title: "الهضم والامتصاص - سلسلة التمارين 4", url: "https://drive.google.com/file/d/1RsJFPGfhEyyKNCMd1JwywD14CJoaEPPX/view?usp=drive_link" },
              { title: "الهضم والامتصاص - تصحيح سلسلة التمارين 4", url: "https://drive.google.com/file/d/1QF9u9bD2S1-izj_ELGQQPD6ieXfyXi-z/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1APiJg0CZVuIpHdOfPcRewa5ro_9umzdy/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/15QSXtDqHB_AINZxXf6CfTjXya8h53_ny/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1An1Lf-eVLy-Ztv2jB-KA1UMXUSLeHzOu/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/1qRbaTxyRvRx4m0LM5Ek55vulFPZ5LDmZ/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1An1Lf-eVLy-Ztv2jB-KA1UMXUSLeHzOu/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1SHBEFOCv91TaZ1xVxIf3fimev7QtezpF/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - سلسلة التمارين 4", url: "https://drive.google.com/file/d/1T22XaL1lApD1053p82aRg8Ra-K31sw0R/view?usp=drive_link" },
              { title: "التنفس عند الإنسان - تصحيح سلسلة التمارين 4", url: "https://drive.google.com/file/d/19kHtF-zwQ-0ZhdbG0TfqA1qcV96BuLQ4/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1cJem2Ric9Ij91158t-wRHmU5ZtXCsPkr/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - تصحيح سلسلة التمارين 1", url: "https://drive.google.com/file/d/14YRZ5ikXSntN11x4nD7XEkTTJC_117cY/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - سلسلة التمارين 2", url: "https://drive.google.com/file/d/1AQBduuUR-RPNooxg-9CM-rcgxS4tU_pT/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - تصحيح سلسلة التمارين 2", url: "https://drive.google.com/file/d/10jgAPdTQSD6PqR5rvYsONUlWlsQ3VnnP/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - سلسلة التمارين 3", url: "https://drive.google.com/file/d/1L2lDfBDqXbRQeVenFj2tk_Xk2hBZze4e/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - تصحيح سلسلة التمارين 3", url: "https://drive.google.com/file/d/1oLVpA1rzJyFUjCCELtl96nRrybxq_5go/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - سلسلة التمارين 4", url: "https://drive.google.com/file/d/1JbbE8NVUOB-YCgfyYuTNPCcNSFZNTKKK/view?usp=drive_link" },
              { title: "الدم والدوران الدموي - تصحيح سلسلة التمارين 4", url: "https://drive.google.com/file/d/1JdDERM-v5uLJXbRFoiNQnLJVfsYID-P0/view?usp=drive_link" },
              { title: "الإبراز البولي - تمارين غير محلولة ", url: "https://drive.google.com/file/d/1StMKd19I3RhFRifWOkJOl602j97DzYKP/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
              { title: "الفرض 1 نموذج 1 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1ZemjFW0dXwl9YFk50KClBB1SO311LCK5/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 1 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1HBJipgbtwkjd6jMcFl-j3LQfnU8M3D5K/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1bi_IV4bGELNYWuIpVXHNU4TPpi2uAtUo/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1BtYOB8YcapH9Ojds21b694zdImIlZ5S0/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 3 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1gtnxu1QIokcbtxAvCvuP2E5TUYIIc1P6/view?usp=drive_link" },
               { title: " الفرض 1 نموذج 3 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1dGFBn5ARK0fMpRE51Zsfj1NkXZfpnofx/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1UlAzQUBxCK3PDDloiId0F1EgULwQRQO_/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1LJnJxQbjowySiCebHMaa0nsOGgbndDi8/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 5 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1lkp61VHbc7SYBIimnUJjj6jkxCPOdXRv/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 5 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1k3xUrLY6AmmXAEYv_PRdHEf3J09YBXYh/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
               { title: "الفرض 2 نموذج 1 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1lkp61VHbc7SYBIimnUJjj6jkxCPOdXRv/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 1 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1RrxNL76vslFLw6Fs4TMTbXmQm7z5YSkq/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 2 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/14FHe1fgxYH48MGvphMyLBtW-jVt2hIt2/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 2 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/14dos4EeLnkaAELMDBCs8znG9OzPyjAQr/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 3 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1oehQcUjm_kFQIR5I06VdnJXdSGI4MtvQ/view?usp=drive_link" },
               { title: " الفرض 2 نموذج 3 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/18Zub2MS8bJM1-obXxaD-03-2HvswNirD/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 4 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1QSvcCqmw8m81v-oEiAo3nzzdzZ0_LTNd/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 4 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح) ", url: "https://drive.google.com/file/d/1uKSlR1zNMMJxe3QHdxTP2UfqyjzNnshx/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 5 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1zWiNqCZ473LXFEcXu1Z1c_9-7c4H874x/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 5 - علوم الحياة والارض ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1ziPlKn307gwDs97jvCJBG_aAgPFwPYNW/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
            { title: "امتحان محلي بركان 2010: الموضوع", url: "https://drive.google.com/file/d/1tbQtNOp7HRKtdjvXuhybG23ejgyovNdb/view?usp=drive_link" },
            { title: "امتحان محلي بركان 2010: التصحيح", url: "https://drive.google.com/file/d/16PRr6gJERPT8HGa4jyJZobIOKNX7pX13/view?usp=drive_link" },
           { title: "امتحان محلي تارودانت 2012: الموضوع", url: "https://drive.google.com/file/d/1ha8Hb886iYcbBKD5R1ATfQDJQQBt2T2E/view?usp=drive_link" },
            { title: "امتحان محلي تارودانت 2012: التصحيح", url: "https://drive.google.com/file/d/1MLqmD-b6GPzlPQV0M5lQsF24dWPYFFcy/view?usp=drive_link" },
            { title: "امتحان محلي زاكورة 2013: الموضوع", url: "https://drive.google.com/file/d/1ENu_SAFIivn9Ht1g7ArYF3f1M7eGw9b2/view?usp=drive_link" },
            { title: "امتحان محلي زاكورة 2013: التصحيح", url: "https://drive.google.com/file/d/1IT51rHI2nBLjYxEMkkApeXv_4Liy0UTz/view?usp=drive_link" },
           { title: "امتحان محلي سيدي قاسم 2014: الموضوع", url: "https://drive.google.com/file/d/1Na06t-jAUcnlljFEvgekVTlYN_yCVa6s/view?usp=drive_link" },
            { title: "امتحان محلي سيدي قاسم 2014: التصحيح", url: "https://drive.google.com/file/d/1QPucDBMP8sDib4LD3LHFonCQwkVldlDh/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["علوم الحياة والأرض"]
        },
        "Sciences de la vie et de la Terre (SVT Fr)": {
          "دروس": [  { title: "La digestion des aliments et l’absorption intestinale - Cours", url: "https://drive.google.com/file/d/1VdGp8yfo_ASIsFTZ-3iqoILIQZNItdCK/view?usp=drive_link " },
              { title: "Aliments et éducation alimentaire - Cours", url: "https://drive.google.com/file/d/14fKnXa6Rc_j8gKIZZAI3TV62iitQ2tqA/view?usp=drive_link" },
              { title: " Éducation nutritionnelle et hygiène de l’appareil digestif - Cours (Manuel)", url: "https://drive.google.com/file/d/1v68fSl8XRPHDMPNdmBb_N-mNJcsHZPH9/view?usp=drive_link" },
              { title: "Éducation nutritionnelle et hygiène de l’appareil digestif - Cours", url: "https://drive.google.com/file/d/1U9U1EO8V0D13c-WJ5wjq0z6pdp_Em_4K/view?usp=drive_link" },        
              { title: "Fiche technique 1 - Définition du concept d’aliment simple et complexe", url: "https://drive.google.com/file/d/1uzqgcnPzVxMqm0G-cWnMaBYHyJKvbk5z/view?usp=drive_link" },
              { title: "La respiration chez l'Homme - Cours (Manuel)", url: "https://drive.google.com/file/d/1Z7NjarDYu1fdA61RqE0OqBWqJ0pOqrRr/view?usp=drive_link" },
              { title: "La respiration chez l'Homme - Cours", url: "https://drive.google.com/file/d/11isQL817r5tSqYJ7RNebEXzzCHozKsSx/view?usp=drive_link" },      
              { title: "Fiche technique 2 - Étude de la respiration cellulaire", url: "https://drive.google.com/file/d/1wscqOpCLDzZAIviIR2FSlQklZGEldfJV/view?usp=drive_link" },
              { title: "Le sang et la circulation sanguine chez l'Homme - Cours (Manuel)", url: "https://drive.google.com/file/d/143_gWoOPuCe6_WgCj3vpLnOlM6Mg9JA1/view?usp=drive_link" },
              { title: "Le sang et la circulation sanguine chez l'Homme - Cours", url: "https://drive.google.com/file/d/17bCdftZK2d0iTRHFx__p9HVfxEyjFF2Z/view?usp=drive_link" },        
              { title: "Fiche-technique-3-connaitre-les-composants-du-sang", url: "https://drive.google.com/file/d/1nLKHOre7IxPPPsemRPFI3xfxqQFE-jW5/view?usp=drive_link" },
              { title: "L'excrétion urinaire chez l'Homme - Cours (Manuel)", url: "https://drive.google.com/file/d/1UfdVs0wyPAk55nt2_xMFCltvdRIkAZwi/view?usp=drive_link" },
              { title: "L'excrétion urinaire chez l'Homme - Cours ", url: "https://drive.google.com/file/d/1m_5ykhvmscXULiwVBsVLEPgcZQXZ4fz-/view?usp=drive_link" }],

          "تمارين": [
            { title: "La digestion des aliments et l’absorption intestinale – Exercices 1", url: "https://drive.google.com/file/d/1t1pHgyqJ3qBz7zCzBspnRc9IZH8KsKaB/view?usp=drive_link" },
              { title: "La digestion des aliments et l’absorption intestinale – Exercices 2", url: "https://drive.google.com/file/d/1ZFW31MRPomWdneUF8UfLqZYDt32CVOlV/view?usp=drive_link" },
              { title: "La respiration chez l'Homme – Exercices 1", url: "https://drive.google.com/file/d/1zWgiReYijauuBTucVIqx9sPcn0P26ORT/view?usp=drive_link" },
              { title: "La respiration chez l'Homme – Exercices 2", url: "https://drive.google.com/file/d/1adhp_gBQW6BMqNvSfZG8IW7x3Q78RYmG/view?usp=drive_link" },
              { title: "Le sang et la circulation sanguine chez l'Homme – Exercices 1", url: "https://drive.google.com/file/d/1zAVvgH1uJDoGzAJVj9AuY7RtWfuyxJwq/view?usp=drive_link" },
              { title: "Le sang et la circulation sanguine chez l'Homme – Exercices 2", url: "https://drive.google.com/file/d/1LtjFOvAj8oOO6etbtcpnQn5iN7ITH2Ar/view?usp=drive_link" },    
              { title: "L'excrétion urinaire chez l'Homme – Exercices 1", url:          "https://drive.google.com/file/d/11Bv9gvWJZ2IqThbChbofkxqJwkebTYiE/view?usp=drive_link" },
              { title: "L'excrétion urinaire chez l'Homme – Exercices 2", url: "https://drive.google.com/file/d/17hL325hq8i7B9f_liQnz_SZfaj3QxXUS/view?usp=drive_link" } ],
          
          "فروض + التصحيح": {
            "المرحلة الأولى": [
              { title: "Devoir 1 Modèle 1 - SVT 3AC Semestre 1", url: "https://drive.google.com/file/d/1AKxzpu8_1ll07Ea0JbYaSQlUik5J31Pi/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 2 - SVT 3AC Semestre 1", url: "https://drive.google.com/file/d/1Y6csoY0Q0TpsVFjffni-Ot3KyY59kxjB/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 3 - SVT 3AC Semestre 1", url: "https://drive.google.com/file/d/1JL5Yn1O4Zm7a-LpnLaXG9A7IXXsErWqn/view?usp=drive_link"},
              { title: "Devoir 1 Modèle 4 - SVT 3AC Semestre 1", url:           "https://drive.google.com/file/d/1rx-KPNz0tKGV1a3ySrfiI9a3B_i44_sY/view?usp=drive_link"},
            ],
            
            "المرحلة الثانية": [
              { title: "Devoir 2 Modèle 1 - SVT 3AC Semestre 1", url: "https://drive.google.com/file/d/1RnUCn7XAGB149r2eqgLJwjJzk23aLxqa/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 2 - SVT 3AC Semestre 1", url:   "https://drive.google.com/file/d/13CRQboNv2HDVdrl6OlUnID-0pdNRhg0F/view?usp=drive_link"},
              { title: "Devoir 2 Modèle 3 - SVT 3AC Semestre 1", url: "https://drive.google.com/file/d/1bx5EdGlammrds89TuJSDwtW7dvT5-ChT/view?usp=drive_link"},
            ],
            
            "المرحلة الثالثة": [ ]},
              
          "امتحانات محلية + التصحيح": [
            { title: "Examen-Local-SVT-3AC- 2022", url:                                             "https://drive.google.com/file/d/1KsDGus7BkD6NgRvHxDyu03pqLdNpzSsE/view?usp=drive_link" },
            { title: "Corrigé Examen-Local-SVT-3AC 2022", url:                                             "https://drive.google.com/file/d/18NvQe_jNPO6aFvX1JWBiIxZUDE3WZf4t/view?usp=drive_link" },
            { title: "EXAMEN-LOCAL-SVT-2021", url:                                             "https://drive.google.com/file/d/1IlkG-hpDon_n4yQB0nRvAx_BDR_PQKja/view?usp=drive_link" },
            { title: "Corrigé Examen-Local-SVT-3AC 2021", url:                                             "https://drive.google.com/file/d/1qeJwOmiIeCgxQ-kCfEz2UHNGpNQUqS_3/view?usp=drive_link" },
            { title: "EXAMEN-LOCAL-Science-de-la-vie-et-de-la-terre-2020", url:                                     "https://drive.google.com/file/d/1_3SoYIDN7fCTndeY2sX5odwxISBbguks/view?usp=drive_link" },
            { title: "Corrigé EXAMEN-LOCAL-Science-de-la-vie-et-de-la-terre-2020", url: "https://drive.google.com/file/d/1d6Dp4gesbnAd3JJcGb3IfgIEtrdhcyKF/view?usp=drive_link" }
           ],
              
         "فيديوهات": [
            {
              id: "dQw4w9WgXcQ",
              title: "Lesson 1",
              duration: "15:30"
            }
          ]
        },
        "اللغة الفرنسية": {
          "دروس": [
            { title: "La structure de la lettre conventionnelle", url: "https://drive.google.com/file/d/1placeholder_letter_struct/view?usp=drive_link" },
            { title: "Rédiger une lettre de demande d'autorisation", url: "https://drive.google.com/file/d/1placeholder_authorization/view?usp=drive_link" },
            { title: "Rédiger une lettre d'invitation", url: "https://drive.google.com/file/d/1placeholder_invitation/view?usp=drive_link" },
            { title: "Rédiger une lettre de remerciement", url: "https://drive.google.com/file/d/1placeholder_remerciement/view?usp=drive_link" }
          ],
          "تمارين": [
            { title: "Exercices : La demande d'autorisation", url: "https://drive.google.com/file/d/1placeholder_ex_auth/view?usp=drive_link" },
            { title: "Exercices : L'invitation", url: "https://drive.google.com/file/d/1placeholder_ex_inv/view?usp=drive_link" },
            { title: "Exercices : Les remerciements", url: "https://drive.google.com/file/d/1placeholder_ex_rem/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
             "المرحلة الأولى": [
                { title: "Contrôle N°1 - Semestre 1 (Lettre conventionnelle)", url: "https://drive.google.com/file/d/1placeholder_exam1/view?usp=drive_link" },
                { title: "Contrôle N°1 - Semestre 1 (Corrigé)", url: "https://drive.google.com/file/d/1placeholder_exam1_corr/view?usp=drive_link" }
             ],
             "المرحلة الثانية": [],
             "المرحلة الثالثة": []
          },
          "امتحانات محلية + التصحيح": [
             { title: "Examen Local 3AC - Français", url: "https://drive.google.com/file/d/1placeholder_local/view?usp=drive_link" }
          ]
        },
        "التاريخ": {
          "دروس": [ 
              { title: "ازدهار الرأسمالية الأوربية خلال القرن 19م", url: "https://drive.google.com/file/d/12xdEXN7qB8ysHk5q5ln13VhWatH_iQ9z/view?usp=drive_link" },
              { title: "الإمبريالية وليدة الرأسمالية", url: "https://drive.google.com/file/d/1J1qtlMa7No1xtyB4R67BiNJkRs7sgIMN/view?usp=drive_link" },
              { title: "الضغط الاستعماري على المغرب", url: "https://drive.google.com/file/d/1GlVTLvck0YzZ2Lc9_SQ6Y7TRPmrOaiZh/view?usp=drive_link" },
             { title: " الحرب العالمية الأولى (الأسباب والنتائج)", url: "https://drive.google.com/file/d/1gxxmlB2kkoOQasmUpAJga4xFFOiSL3W2/view?usp=drive_link" },
             { title:  "انهيار الإمبراطورية العثمانية والتدخل الاستعماري في المشرق العربي", url: "https://drive.google.com/file/d/1FoTsm5EA5tWuyg94XXg6DiaE8G3JiAxV/view?usp=drive_link" },  
             { title: " أزمة 1929 (الأسباب والمظاهر والنتائج)", url: "https://drive.google.com/file/d/1P5jib7LJOil-zIVSIdXTC8NY5VGmdA6a/view?usp=drive_link" }
          ],
          "تمارين": [ 
              { title: "الاشتغال بوثائق-H", url: "https://drive.google.com/file/d/1SuzgAtl533zEuO6WqqFOCQ-OzyQfMEbs/view?usp=drive_link" },
               { title: "الاشتغال بوثائق-التصحيح-H", url: "https://drive.google.com/file/d/1bgpCJv0AuMO4-yILG3uAGZoofUPlMJMs/view?usp=drive_link" },
              { title: "المفاهيم والأسئلة الموضوعية-H", url: "https://drive.google.com/file/d/1ZJMPezdysVQzCsBynYI-6H6jM1KNPDUG/view?usp=drive_link" },
             { title: " المفاهيم والاسئلة الموضوعية-التصحيح -H", url: "https://drive.google.com/file/d/1_WBdMFJEOR_qevLZ0doZdIp0GNk5XY0d/view?usp=drive_link" },
             { title:  "الموضوع المقالي-H", url: "https://drive.google.com/file/d/1w0YdjU1uTitjE8egs06jW46bYnQL0vW9/view?usp=drive_link" },  
             { title: " الموضوع المقالي-التصحيح-H", url: "https://drive.google.com/file/d/1EwUfp-7u7msnIm4UHvM3oW1ia2Q10I5_/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: "الفرض 1 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1jCkhOuow6Z0siCbiJH9EH7u0UdRl84Kc/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1ayopm2nRtLTb2G1GODuzdxqpZDH0dGwg/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1PbEmfjUjXXC0e-SEilqw0WU-vJ4ypjbb/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/11mc00XzEVSENxJHOdo64egWajxgmcXL8/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1wibRNGhy2WGKVABXQd43Vm3crUHPuw-L/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1A0RlBiWXXSZ0BAwTBFonFioiBCSJRIoE/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
                { title: "الفرض 2 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/10A5UMlMfzx3kx1vVypN8f8P_PQ3qWlvm/view?usp=drive_link" },     
               { title: "الفرض 2 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1-bAo5Y1IqAaWBNeDHyRSZyW8EVMzFmmO/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1YWeFdYzYmM-0fTfi2aEJE7pTIRwxAa63/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1Gl_YqUVEdHsP0KXChvNTg315VA_Ap7vB/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1bnTgWroxwiFbUx-aqn4Fwnd6CHe2Locp/view?usp=drive_link" },
              { title: "الفرض 2 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1RumFjGwphEKy9pCjPGXlacdRvkRcGAFC/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
            { title: "االإجتماعيات ثالثة إعدادي - الامتحان المحلي 1", url: "https://drive.google.com/file/d/1lV3KCRRGbZs_MX3bKElJ06zY-3NfDubl/view?usp=drive_link" },
            { title: " الإجتماعيات ثالثة إعدادي - الامتحان المحلي 2", url: "https://drive.google.com/file/d/1R0Y8zMqTNu2kHdDbSZllqgLs-Uy9HLYO/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["التاريخ"]
        },
        "الجغرافيا": {
          "دروس": [ 
            { title: "المغرب العربي (عناصر الوحدة والتنوع)", url: "https://drive.google.com/file/d/1JQerTD7jHE_kNN8uH4u-n2ls5LFCtUhb/view?usp=drive_link" },
            { title: "المغرب العربي بين التكامل والتحديات", url: "https://drive.google.com/file/d/1NviALQ0toOrMwZjYrnEGxB2vhkAqHodi/view?usp=drive_link" },
            { title: " اتحاد المغرب العربي خيار استراتيجي للتكتل الإقليمي", url: "https://drive.google.com/file/d/1qcOAEgRacMe8xhRS8dTqCKraqB_w8Xgy/view?usp=drive_link" },
            { title: "الاتحاد الأوربي (إمكانياته ومكانته الاقتصادية في العالم)", url: "https://drive.google.com/file/d/1Z5RenMrlaG5_TA67Zlss_P-uu8pJiWuR/view?usp=drive_link" },
            { title: "الاتحاد الأوربي بين الاندماج والمنافسة", url: "https://drive.google.com/file/d/1pci9YWXzlUoF1NqUug-MG6b_ZSjiJfzD/view?usp=drive_link" },  
            { title: "معيقات التكتلات الجهوية (مقارنة بين الاتحاد الأوربي والمغرب العربي)", url: "https://drive.google.com/file/d/1wfJffoONuMqEKFYy7E3fGUzb1tB5h7v8/view?usp=drive_link" }
          ],
          "تمارين": [ 
               { title: "الاشتغال بوثائق-G", url: "https://drive.google.com/file/d/1B4szjdP6CYm0YzfQKy7ocrc-qqHyTEMr/view?usp=drive_link" },
               { title: "الاشتغال بوثائق-التصحيح-G", url: "https://drive.google.com/file/d/1zRg2rB2mHWgah0Wq90zMFzMGlhdgGFcs/view?usp=drive_link" },
              { title: "المفاهيم والأسئلة الموضوعية-G", url: "https://drive.google.com/file/d/1QtFLk9JNgXPxyBrfhwTZXKT8s50swnQk/view?usp=drive_link" },
             { title: " المفاهيم والاسئلة الموضوعية-التصحيح -G", url: "https://drive.google.com/file/d/1bNn-xFigu_rUcYg6uyFkG9I6_UHIBxOz/view?usp=drive_link" },
             { title:  "الموضوع المقالي-G", url: "https://drive.google.com/file/d/1k-IJL3UNO94vPoamhcPoZ6YdjapcEGqI/view?usp=drive_link" },  
             { title: " الموضوع المقالي-التصحيح-G", url: "https://drive.google.com/file/d/1By3IPNB-H23d-516ZksJAgmllchULH1G/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: "الفرض 1 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1OjxqAgLC5qeuSeLjH2GkmkplZEGdNv9X/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1sm0EGLzFG0Zu6noSbKRUltMdRclqsrE0/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1eflSXbEzY8uU7ZfpKYb8b1v-dwlZoR_J/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1yVo92yWeTTOuF5zPV2hTU2JvTCE1VAu7/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1CiVUGozJrDd9V5zn4va_uJv_RB7Cr-sT/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
                { title: "الفرض 2 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1ToxLa3rR7mwIOw3Xpnlb9Jfqv33gl2Wi/view?usp=drive_link" },     
               { title: "الفرض 2 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1J9gZOGoeR8CBdJlmeF1mHKvc6utQGFHC/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1o3OircZ0fLEoIxIGkjy5kMgc7ydh7wv1/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1huKA9GI8SrQ1As-eSmebIv-07QSWxQEo/view?usp=drive_link" },
              { title: "الفرض 2 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1G_OK3jwbFGRigj7SyOg54YmtO2G-NpGH/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
             { title: "الإجتماعيات ثالثة إعدادي - الامتحان المحلي 3", url: "https://drive.google.com/file/d/1MxB2KGvfk8kWyIGdq_HbXpJTQm14WdUb/view?usp=drive_link" },
             { title: "الإجتماعيات ثالثة إعدادي - الامتحان المحلي 4", url: "https://drive.google.com/file/d/1DBCy4LSGpzFx4RuiwYcUNCF4zhTSTYBn/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["الجغرافيا"]
        },
        "التربية على المواطنة": {
          "دروس": [
            { title: "المشاركة حق وواجب (ننتخب ممثلينا في مجلس المؤسسة)", url: "https://drive.google.com/file/d/19d2eOFpSc4HvdwNhEExXpdpEis6v-BqI/view?usp=drive_link" },
            { title: "كيف نعالج مشكلا اجتماعيا انطلاقا من أمثلة محلية", url: "https://drive.google.com/file/d/1HC2GCW6ynZd-ImyJIEh6u00FGouYZn9x/view?usp=drive_link" },
            { title: " مسؤولية الدول والأفراد والجماعات في حل المشاكل الاجتماعية ومسؤوليتنا نحن", url: "https://drive.google.com/file/d/1uJ43Ggr2OhYLyVwe-EIVk1Myh-jqkrhV/view?usp=drive_link" },
            { title: " ملف حول مؤسسة محمد الخامس للتضامن", url: "https://drive.google.com/file/d/12AXTzjzcCWYI1zhQUbTEUmjFJtqeLOGq/view?usp=drive_link" },
            { title:  "تخليق الحياة العامة (المفهوم والآليات، اقتراح خطة لمحاربة الرشوة)", url: "https://drive.google.com/file/d/1UKemKmcja4cuOFe2F8X81tmWkOKWDBN0/view?usp=drive_link" },  
            { title: "إلى أين ألجأ في حالة خرق حق من حقوقي (الدستورية) أو حقوق غيري؟", url: "https://drive.google.com/file/d/1BtV8BHhl0AfD_v3obBes5AXtl3KRvACF/view?usp=drive_link" }
          ],
          "تمارين": [ 
               { title: "الاشتغال بوثائق-E", url: "https://drive.google.com/file/d/11pLC29cYkv2S-kziUmXw8OrS0eIzGA1z/view?usp=drive_link" },
               { title: "الاشتغال بوثائق-التصحيح-E", url: "https://drive.google.com/file/d/1oEeMkb-FaupIemzT21KTdIagpx4ZwhQt/view?usp=drive_link" },
              { title: "المفاهيم والأسئلة الموضوعية-E", url: "https://drive.google.com/file/d/1RsXxlO4vlzjwAnz54mvPEAoORT_-2fb8/view?usp=drive_link" },
             { title: " المفاهيم والاسئلة الموضوعية-التصحيح -E", url: "https://drive.google.com/file/d/1kFwvxTeVpwN1_6iJkPDUj8bSBAclAba6/view?usp=drive_link" },
             { title:  "الموضوع المقالي-E", url: "https://drive.google.com/file/d/1Io_8Rzw1OCmOuwc9n2gjM8GHXQ3tmFD7/view?usp=drive_link" },  
             { title: " الموضوع المقالي-التصحيح-E", url: "https://drive.google.com/file/d/15bEgg0_f628K7NBdAMz-6uS5RQsCs7cB/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: "الفرض 1 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1xJ5x2dYePDuLtGLjyiCSKErXGfJkWcWs/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/134VKCtGjo1CbwgbCJyXDUCQ2m7wSXoTS/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1QGzvv8HKLLcHmjDgvnYUZy7glTb8Zp45/view?usp=drive_link" },
               { title: "الفرض 1 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1zLL403WcdYbH-Fe7ktvoZ7FJ4YHEAJnl/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/16r6NXJ_PxtWyQ0ee8_DFJ7bMFj6mUzGW/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
                { title: "الفرض 2 نموذج 1 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1ORONhjtO-gz6GHxauz5k_AUMSYJhpaXy/view?usp=drive_link" },   
               { title: "الفرض 2 نموذج 2 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1iw9FqWM3_bhHKMaHMWEmDpxs2W67EaUu/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 3 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1jfqGIXrILUeVPflMCRjkHbqYcWlne7qm/view?usp=drive_link" },
               { title: "الفرض 2 نموذج 4 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1PJpMEg0qqnvoLgM6GHYx6j9XQsmv21ox/view?usp=drive_link" },
              { title: "الفرض 2 نموذج 5 - التاريخ والجغرافيا ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1wWDUKu3Vgvi3FP2iDC7BgowzDBxyA0a4/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
             { title: "الإجتماعيات ثالثة إعدادي - الامتحان المحلي 3", url: "https://drive.google.com/file/d/1MxB2KGvfk8kWyIGdq_HbXpJTQm14WdUb/view?usp=drive_link" },
             { title: "الإجتماعيات ثالثة إعدادي - الامتحان المحلي 4", url: "https://drive.google.com/file/d/1DBCy4LSGpzFx4RuiwYcUNCF4zhTSTYBn/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["التربية على المواطنة"]
        },
        "اللغة العربية": {
          "دروس": {
             "الدروس اللغوية": [
                  { title: "اسم الفاعل وصيغ المبالغة وعملهما", urls: ["https://drive.google.com/file/d/1DZrfGgsbqHDxgiiwMoUYynL_QHWswyl7/view?usp=drive_link"] },
                  { title: "اسم المفعول وعمله", urls: ["https://drive.google.com/file/d/1cXplbI63w9hIvxXKV7c-QdWP9t_JSUjH/view?usp=drive_link"] },
                  { title: "أسماء الزمان والمكان", urls: ["https://drive.google.com/file/d/1kn9OdTDg2634ZcwDQz-D1TplXh7HDnBR/view?usp=drive_link"] },
                  { title: " اسم الآلة", urls: ["https://drive.google.com/file/d/1fu-nwnbeaDm2y4v1xo0DV0AeNwXMbiR6/view?usp=drive_link"] },
                  { title: "الإعلال", urls: ["https://drive.google.com/file/d/17tMsoceNoj8boGF9V_sPaU6FvUTXMaRk/view?usp=drive_link"] },
                  { title: "الإبدال", urls: ["https://drive.google.com/file/d/1FJsyxsc_ONL09YYtTh88TE0HsE-VtClr/view?usp=drive_link"] },
                  { title: "التصغير", urls: ["https://drive.google.com/file/d/14Ix7OxQ0mdUmr0GkJGmIuULH8MalBI0K/view?usp=drive_link"] },
                  { title: "النسبة", urls: ["https://drive.google.com/file/d/1GlMWTStQTSXJBYTEW7oqmnG2oW7-MSSF/view?usp=drive_link"] },
                  { title: " المعاجم", urls: ["https://drive.google.com/file/d/1Xs7gWkxDHhoaQZx2y3b80lR8o7ZDxmzp/view?usp=drive_link"] }
                ],
                "النصوص القرائية": [
                  { title: " كليم الله", urls: ["https://drive.google.com/file/d/1bINepg0h-LsEy4f65LSJJiU_wV6n_2lL/view?usp=drive_link"] },
                  { title: " خصال المسلم", urls: ["https://drive.google.com/file/d/1Q9Q-h6SmNnHq7KVEhQmoDUjTYVLXNZ1_/view?usp=drive_link"] },
                  { title: " الإسلام وحقوق الإنسان", urls: ["https://drive.google.com/file/d/1vpL_lpGt5BVn1CCK4_0LsPcohw70E6St/view?usp=drive_link"] },
                  { title: "حديث الروح", urls: ["https://drive.google.com/file/d/1prg2Oq2Gz846ZvLgpcEaqPoCBFshlJOY/view?usp=drive_link"] },
                  { title: " المنفى", urls: ["https://drive.google.com/file/d/151kBrWootWBbuAI613uuI3zLfe21wIJy/view?usp=drive_link"] },
                  { title: " حوار عجيب", urls: ["https://drive.google.com/file/d/1_OHSG85AwkRaOqX2fwYmC3uyyxeBBZVu/view?usp=drive_link"] },
                  { title: "الأغنية الأبدية", urls: ["https://drive.google.com/file/d/10IpcaW3MnmQbLlgfb-3PQn_7O2iMbnbU/view?usp=drive_link"] },
                  { title: " وطني (نص شعري)", urls: ["https://drive.google.com/file/d/1ESyscscEulWtaXZ6t7bHfCtLNvDfpu_m/view?usp=drive_link"] },
                  { title: " الجراد", urls: ["https://drive.google.com/file/d/1cEklfbllI60-HNarqJK0Dph_ErfTnJxL/view?usp=drive_link"] },
                  { title: "إشعاع الحضارة المغربية", urls: ["https://drive.google.com/file/d/1VDQ2UlY_WP1VLADVFbRAmVpG4Dz6exp4/view?usp=drive_link"] },
                  { title: " الإنترنت", urls: ["https://drive.google.com/file/d/1Qt35JC7HL8crAowm-sjK7y5Joy0tVZ-B/view?usp=drive_link"] },
                  { title: "على بساط الريح (نص شعري) ", urls: ["https://drive.google.com/file/d/1MIPadLoXic37zSW5Waqfn0WytCz3Wd5g/view?usp=drive_link"] }
                ],
                "التعبير والإنشاء": [
                  { title: "مهارة السرد كتابة اليوميات", urls: ["https://drive.google.com/file/d/1qXYbuHLduDwbPy5BJFmNz9acyVZaHd17/view?usp=drive_link"] },
                  { title: "مهارة وصف رحلة", urls: ["https://drive.google.com/file/d/1FE2sPmdCcikJ3lILu2_HmaYLWEWI9AJS/view?usp=drive_link"] },
                  { title: "مهارة وصف الشخوص والأمكنة", urls: ["https://drive.google.com/file/d/1ACc-OriJToRqvtQmQcIHEwhvTaMRUPuf/view?usp=drive_link"] },
                  { title: "مهارة التعقيب والتعليق", urls: ["https://drive.google.com/file/d/1TfwsVoIkG6VdBlBaGdU0pgwuYj0H9NXk/view?usp=drive_link"] }
                ]
          },
          "تمارين": [ 
              { title: "اسم الفاعل وصيغ المبالغة وعملهما – التمارين", url: "https://drive.google.com/file/d/16Y-e_oePG3tLURIXluxcGxWmFkb3xgGO/view?usp=drive_link" },
              { title: "اسم الفاعل وصيغ المبالغة وعملهما – التصحيح", url: "https://drive.google.com/file/d/1O6KsVTD_4YpvGg25YMi4Tb_oK9wWxZyd/view?usp=drive_link" },
              { title: "اسم المفعول وعمله - التمارين", url: "https://drive.google.com/file/d/1l-BGzp5p52bzv3pqHLsNGd33GUI2dtOP/view?usp=drive_link" },
              { title: " اسم المفعول وعمله - التصحيح", url: "https://drive.google.com/file/d/1h3lPt89BMvGkxR756WRPiUXNmhXfSKZ2/view?usp=drive_link" },
              { title: "أسماء الزمان والمكان - التمارين", url: "https://drive.google.com/file/d/1tySsp_duKOrtpLu-3-KjPY8dCZY0U-Eb/view?usp=drive_link" },
              { title: "أسماء الزمان والمكان - التصحيح", url: "https://drive.google.com/file/d/19xlB9xzY7G_-96eLk57g7D9o8PcxQqD6/view?usp=drive_link" },
              { title: " اسم الآلة - التمارين", url: "https://drive.google.com/file/d/1uPfWMEssOMJ6hwZRQPDOJmt7Blj29sZD/view?usp=drive_link" },
              { title: "اسم الآلة - التصحيح", url: "https://drive.google.com/file/d/10HAKxl4KuV50-wcigvrD1F2rz9HlXMNs/view?usp=drive_link" },
              { title: "النسبة - التمارين", url: "https://drive.google.com/file/d/1v4U5ycJzYe1dMxLWz3Ir7yBZypl5z4nv/view?usp=drive_link" },
              { title: "النسبة - التصحيح", url: "https://drive.google.com/file/d/1YdkKkW4H-VpQlvR504gDX8NolHacifND/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: "الفرض 1 نموذج 1 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1rg9vWCRTl5SS2G2vuk2LXSmdwzX7t8QG/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 1 - اللغة العربية ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/12Umuf3vELdVE0qWw8cLeas1k2m5diyMw/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 2 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1RvL_Ai0Pl-LpT16g_wQBFdR2aPifjuwp/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 3 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1hNLdIwJ38JxiVKs6kpXGFJyJm2kML3RU/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
                { title: "الفرض 2 نموذج 1 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1RGfjqpXihn_ocXwX2CVz42IzXFv178Va/view?usp=drive_link" },   
              { title: "الفرض 2 نموذج 2 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/11kWqUNBUBhw0T9-3VvRdOMTMpHmQswKS/view?usp=drive_link" },
              { title: "الفرض 2 نموذج 3 - اللغة العربية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/12QrEhfk_N5GlgIiyK6b8fuY2NKEb2hAj/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
            { title: " الامتحان المحلي 1", url: "https://drive.google.com/file/d/1jNmad2zuEpYYPy8ai0XKiuDLtloEbvrZ/view?usp=drive_link" },
            { title: " الامتحان المحلي 2", url: "https://drive.google.com/file/d/1fJeXngZJPt0xlQWzENCuFnmlmNW7vOCx/view?usp=drive_link" },
            { title: " الامتحان المحلي 3", url: "https://drive.google.com/file/d/1LDQFiLBnaGp7IX5LEDKO6jsb0fkMzqPO/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["اللغة العربية"]
        },
        "التربية الإسلامية": {
          "دروس": {
             "مدخل التزكية (القرآن الكريم)": [
                { title: "الشطر الأول من سورة الحشر - الآية 1 إلى 5", urls: ["https://drive.google.com/file/d/1DqHYVlc_gd9Wu8j_7ro0L7T8h6cHNOMF/view?usp=drive_link"] },
                { title: "الشطر الثاني من سورة الحشر - الآية 6 إلى 17", urls: ["https://drive.google.com/file/d/1YxTa43onVzZbMk-3vBp_xuqf_6eiZMC7/view?usp=drive_link"] },
                { title: "الشطر الثالث من سورة الحشر - الآية 18 إلى 24 ", urls: ["https://drive.google.com/file/d/1etwIwzT1mFZETZ_1rdALfE8llXmCQQIZ/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل التزكية (القرآن الكريم)", urls: ["https://drive.google.com/file/d/1x_jvQys_jnnMCegg2fDjw5qPNb4NzRXL/view?usp=drive_link"] }
             ],
             "مدخل التزكية (العقيدة)": [ 
                { title: "أسماء الله الحسنى", urls: ["https://drive.google.com/file/d/1CN19c5dBrU5TV77Dr6uE3Y_tKUE4WlGc/view?usp=drive_link"] },
                { title: "أهمية التدين في حياة الفرد والمجتمع", urls: ["https://drive.google.com/file/d/1knD0PH7ZUZrPTQQUuPMyK7MDGo9f3ioq/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل التزكية (العقيدة)", urls: ["https://drive.google.com/file/d/1cc8ITKwyzWloDb9VD7Kz1yZsaxcJ2cS0/view?usp=drive_link"] }
             ],
             "مدخل الإقتداء": [ 
                { title: "حماية الدعوة وبناء الدولة الهجرة", urls: ["https://drive.google.com/file/d/1h1lWrIqFkXuXEMia_-ynpPIkdKIFTppL/view?usp=drive_link"] },
                { title: " المسجد نواة المجتمع الإسلامي ", urls: ["https://drive.google.com/file/d/101B64dNK-aE6IO0tfzCGDNNANry2zpnk/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل الإقتداء", urls: ["https://drive.google.com/file/d/1OYj1cbGq0gi8-vD6QSMv4K6PLu59TiVv/view?usp=drive_link"] }
             ],
             "مدخل الإستجابة": [ 
                { title: "العبادة غاية الخلق العبادة صفة إيمان ودليل خضوع", urls: ["https://drive.google.com/file/d/1aOKYJc4rtfJGbshBnkU3PNqvu0qVvfkj/view?usp=drive_link"] },
                { title: "الزكاة أحكامها ومقاصدها (التعريف والأحكام والمستحقون) ", urls: ["https://drive.google.com/file/d/1mxZ-KLhxrR6kF9KpLwKVeHthTYdUaljc/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل الإستجابة", urls: ["https://drive.google.com/file/d/1vPHBHnHHhcI8ZaE3VqTaQZbGfWl-HAIa/view?usp=drive_link"] }
             ],
             "مدخل القسط": [ 
                { title: "حق الله تقوى الله", urls: ["https://drive.google.com/file/d/11B6QGeWLR8_5n-5YlUimzfXGycFiC06r/view?usp=drive_link"] },
                { title:   " حق النفس: أهمية التخطيط والتنظيم في الحياة", urls: ["https://drive.google.com/file/d/1chHnIDrHK8xjvmgkaGvsBtQ4-wFCcJmS/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل القسط", urls: ["https://drive.google.com/file/d/1VEnPX00d-oJ8Y08ztC2xmTQ19Z9Zg8QG/view?usp=drive_link"] }
             ],
             "مدخل الحكمة": [ 
                { title: "الهجرة المتجددة المهاجر من هجر ما نهى الله عنه", urls: ["https://drive.google.com/file/d/1S0jRbuDCWcYVqPvVX863CmgLWzqqw-nD/view?usp=drive_link"] },
                { title: "الإيثار والتضحية", urls: ["https://drive.google.com/file/d/1hwVsCqq69vgyED4DPdZBAl5NTnuwRYz3/view?usp=drive_link"] },
                { title: "ملخص دروس مدخل الـحكمة", urls: ["https://drive.google.com/file/d/1KC0itikumC83rWXzaKcJCd4fnkoUD18G/view?usp=drive_link"] }
             ]
          },
          "تمارين": [],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
               { title: " الفرض 1 نموذج 1 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1YDxRm6OBm_ejC3zEOo4SWQChXKst6qc-/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 1 - التربية الإسلامية ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1YDxRm6OBm_ejC3zEOo4SWQChXKst6qc-/view?usp=drive_link" },   
              { title: "الفرض 1 نموذج 2 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1oofc7Gc0dLOz7-R_ytPyB5rBXTUhdfs2/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 2 - التربية الإسلامية ثالثة إعدادي الدورة الأولى (التصحيح)", url: "https://drive.google.com/file/d/1A1TB57UpnI8q0bTYLuPlfTmys4RRVXAF/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 3 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1FWNHD0L-YUEfrJMvwF3FtUPIOg_IX1Rz/view?usp=drive_link" },
            ],
            "المرحلة الثانية": [
              { title: " الفرض 2 نموذج 1 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/1Qv_Ir5KKHxt0r1XFicvJQ3MsWJhDLrn0/view?usp=drive_link" },   
              { title: "الفرض 2 نموذج 2 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/18hYme1iRRtyNU0pXelqZRN-wtUmD0eEz/view?usp=drive_link" },
              { title: "الفرض 2 نموذج 3 - التربية الإسلامية ثالثة إعدادي الدورة الأولى", url: "https://drive.google.com/file/d/17HmqvD-FPkd7N7mb4TBs7-wgs6Su9X_T/view?usp=drive_link" },
            ],
          },
          "امتحانات محلية + التصحيح": [
            { title: " الامتحان المحلي 1", url: "https://drive.google.com/file/d/17O8TsLb-M9NYhm9YNXQmRrCaONgZwB8A/view?usp=drive_link" },
            { title: " الامتحان المحلي 2", url: "https://drive.google.com/file/d/1dJSI200FH_l2DRSDCl6L6kt2zMJpPHA_/view?usp=drive_link" },
            { title: " الامتحان المحلي 3", url: "https://drive.google.com/file/d/1REtEGxp7lt1ugRvfmLDtqYKvxx_ytXni/view?usp=drive_link" },
            { title: " الامتحان المحلي 4", url: "https://drive.google.com/file/d/1t4Hy0JnNHbzLel6XyODh-rHcjs5IoY-5/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["التربية الإسلامية"]
        },
      }
    },
    "2": {
      "1": getMiddleSchoolData(),
      "2": getMiddleSchoolData(),
      "3": getMiddleSchoolData()
    }
  },
  "الثانوي التأهيلي": {
    "1": {
        "Jada_Muchtarak": getHighSchoolData('Jada_Muchtarak'),
        "1_Bac": getHighSchoolData('1_Bac'),
        "2_Bac": getHighSchoolData('2_Bac')
    },
    "2": {
        "Jada_Muchtarak": getHighSchoolData('Jada_Muchtarak'),
        "1_Bac": getHighSchoolData('1_Bac'),
        "2_Bac": getHighSchoolData('2_Bac')
    }
  }
};

export const DATA_TRANSLATIONS: { [key: string]: { [lang: string]: string } } = {
  // Levels
  'الجذع المشترك': { ar: 'الجذع المشترك', fr: 'Tronc Commun', en: 'Common Core' },
  'الأولى باكالوريا': { ar: 'الأولى باكالوريا', fr: '1ère Bac', en: '1st Year Bac' },
  'الثانية باكالوريا': { ar: 'الثانية باكالوريا', fr: '2ème Bac', en: '2nd Year Bac' },

  // Branches
  'العلوم': { ar: 'العلوم', fr: 'Sciences', en: 'Sciences' },
  'التكنولوجيا': { ar: 'التكنولوجيا', fr: 'Technologie', en: 'Technology' },
  'الآداب والعلوم الإنسانية': { ar: 'الآداب والعلوم الإنسانية', fr: 'Lettres et Sciences Humaines', en: 'Arts and Humanities' },
  'العلوم الرياضية': { ar: 'العلوم الرياضية', fr: 'Sciences Mathématiques', en: 'Mathematical Sciences' },
  'العلوم التجريبية': { ar: 'العلوم التجريبية', fr: 'Sciences Expérimentales', en: 'Experimental Sciences' },
  'العلوم و التكنولوجيات الكهربائية': { ar: 'العلوم و التكنولوجيات الكهربائية', fr: 'Sc. et Tech. Électriques', en: 'Electrical Sc. and Tech.' },
  'العلوم و التكنولوجيات الميكانيكية': { ar: 'العلوم و التكنولوجيات الميكانيكية', fr: 'Sc. et Tech. Mécaniques', en: 'Mechanical Sc. and Tech.' },
  'العلوم الاقتصادية والتدبير': { ar: 'العلوم الاقتصادية والتدبير', fr: 'Sc. Économiques et Gestion', en: 'Economic Sc. and Management' },
  'العلوم الرياضية أ': { ar: 'العلوم الرياضية أ', fr: 'Sc. Math A', en: 'Math Sc. A' },
  'العلوم الرياضية ب': { ar: 'العلوم الرياضية ب', fr: 'Sc. Math B', en: 'Math Sc. B' },
  'العلوم الفيزيائية': { ar: 'العلوم الفيزيائية', fr: 'Sc. Physiques', en: 'Physical Sciences' },
  'علوم الحياة والأرض': { ar: 'علوم الحياة والأرض', fr: 'SVT', en: 'Life and Earth Sciences' },
  'العلوم الزراعية': { ar: 'العلوم الزراعية', fr: 'Sc. Agronomiques', en: 'Agricultural Sciences' },
  'العلوم الإقتصادية': { ar: 'العلوم الإقتصادية', fr: 'Sc. Économiques', en: 'Economic Sciences' },
  'علوم التدبير المحاسباتي': { ar: 'علوم التدبير المحاسباتي', fr: 'Sciences de Gestion Comptable', en: 'Accounting Management Sciences' },
  'الآداب': { ar: 'الآداب', fr: 'Lettres', en: 'Literature' },
  'العلوم الإنسانية': { ar: 'العلوم الإنسانية', fr: 'Sciences Humaines', en: 'Human Sciences' },

  // Subjects
  'الرياضيات': { ar: 'الرياضيات', fr: 'Mathématiques', en: 'Mathematics' },
  'الفيزياء والكيمياء': { ar: 'الفيزياء والكيمياء', fr: 'Physique-Chimie', en: 'Physics-Chemistry' },
  'الفرنسية': { ar: 'الفرنسية', fr: 'Français', en: 'French' },
  'اللغة الفرنسية': { ar: 'اللغة الفرنسية', fr: 'Français', en: 'French' },
  'اللغة العربية': { ar: 'اللغة العربية', fr: 'Arabe', en: 'Arabic' },
  'التربية الإسلامية': { ar: 'التربية الإسلامية', fr: 'Éducation Islamique', en: 'Islamic Education' },
  'التاريخ': { ar: 'التاريخ', fr: 'Histoire', en: 'History' },
  'الجغرافيا': { ar: 'الجغرافيا', fr: 'Géographie', en: 'Geography' },
  'التربية على المواطنة': { ar: 'التربية على المواطنة', fr: 'Éducation à la Citoyenneté', en: 'Citizenship Education' },
  'الفلسفة': { ar: 'الفلسفة', fr: 'Philosophie', en: 'Philosophy' },
  'الإنجليزية': { ar: 'الإنجليزية', fr: 'Anglais', en: 'English' },
  'اللغة الإنجليزية': { ar: 'اللغة الإنجليزية', fr: 'Anglais', en: 'English' },
  'التاريخ والجغرافيا': { ar: 'التاريخ والجغرافيا', fr: 'Histoire-Géographie', en: 'History-Geography' },
  'الاجتماعيات': { ar: 'الاجتماعيات', fr: 'Histoire-Géographie', en: 'Social Studies' },
  'الإجتماعيات': { ar: 'الإجتماعيات', fr: 'Histoire-Géographie', en: 'Social Studies' },

  // New BIOF & Tech Subjects
  'Mathématiques (BIOF)': { ar: 'Mathématiques (BIOF)', fr: 'Mathématiques (BIOF)', en: 'Mathematics (BIOF)' },
  'Physique et Chimie (BIOF)': { ar: 'Physique et Chimie (BIOF)', fr: 'Physique et Chimie (BIOF)', en: 'Physics-Chemistry (BIOF)' },
  'Sciences de la vie et de la Terre (SVT BIOF)': { ar: 'Sciences de la vie et de la Terre (SVT BIOF)', fr: 'SVT (BIOF)', en: 'Life and Earth Sciences (BIOF)' },
  'العلوم النباتية والحيوانية': { ar: 'العلوم النباتية والحيوانية', fr: 'Sciences Végétales et Animales', en: 'Plant and Animal Sciences' },
  'علوم المهندس': { ar: 'علوم المهندس', fr: 'Sciences de l\'Ingénieur', en: 'Engineering Sciences' },
  'الإقتصاد والتنظيم الإداري للمقاولات': { ar: 'الإقتصاد والتنظيم الإداري للمقاولات', fr: 'Économie et Organisation', en: 'Economy & Organization' },
  'المحاسبة والرياضيات المالية': { ar: 'المحاسبة والرياضيات المالية', fr: 'Comptabilité et Math Financières', en: 'Accounting & Financial Math' },
  'الإقتصاد العام والإحصاء': { ar: 'الإقتصاد العام والإحصاء', fr: 'Économie Générale et Statistique', en: 'General Economy & Statistics' },
  'القانون': { ar: 'القانون', fr: 'Droit', en: 'Law' },
  'معلوميات التدبير': { ar: 'معلوميات التدبير', fr: 'Informatique de Gestion', en: 'Management Computing' },

  // Middle School French Options
  'Mathématiques (Fr)': { ar: 'Mathématiques (Fr)', fr: 'Mathématiques (Fr)', en: 'Mathematics (Fr)' },
  'Physique et Chimie (Fr)': { ar: 'Physique et Chimie (Fr)', fr: 'Physique et Chimie (Fr)', en: 'Physics-Chemistry (Fr)' },
  'Sciences de la vie et de la Terre (SVT Fr)': { ar: 'Sciences de la vie et de la Terre (SVT Fr)', fr: 'SVT (Fr)', en: 'Life and Earth Sciences (Fr)' },
};