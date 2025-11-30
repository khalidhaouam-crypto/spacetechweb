

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
    aboutBtn: "ℹ️ حول التطبيق",
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
    modules: {
      tasks: "وحدة المهام الدراسية",
      notes: "وحدة الملاحظات",
      flashcards: "وحدة مراجعة البطاقات",
      pomodoro: "Pomodoro + مهام بسيطة",
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
    aboutText: "SPACETECH est votre compagnon intelligent pour la réussite scolaire. Conçu pour l'étudiant marocain, combinant contenu éducatif et outils de productivité.",
    holidaysBtn: "Vacances",
    privacyBtn: "Confidentialité",
    privacyAlert: "Vos données sont sécurisées et stockées uniquement sur votre appareil.",
    searchPlaceholder: "Rechercher un cours, exercice...",
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
    aboutBtn: "ℹ️ About App",
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
    aboutText: "SPACETECH is your smart companion for academic success. Designed for Moroccan students, combining educational content with productivity tools.",
    holidaysBtn: "Holidays",
    privacyBtn: "Privacy",
    privacyAlert: "Your data is safe and stored locally on your device.",
    searchPlaceholder: "Search for lessons, exercises...",
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
      breakDuration: "Break Duration",
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
    'الآداب',
    'العلوم الإنسانية'
  ]
};

// Generic Subjects for High School (Placeholder for now)
const GENERIC_HS_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#8e44ad" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#9b59b6" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#8e44ad" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#9b59b6" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#8e44ad" },
  { name: "الفرنسية", icon: "fa-solid fa-book", color: "#9b59b6" },
  { name: "الإنجليزية", icon: "fa-solid fa-language", color: "#8e44ad" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#9b59b6" },
  { name: "التاريخ والجغرافيا", icon: "fa-solid fa-globe-africa", color: "#8e44ad" }
];

// Specific subjects can be mapped here if branches have different subjects
const BRANCH_SUBJECT_MAPPING: { [key: string]: SubjectInfo[] } = Object.values(HS_BRANCHES).flat().reduce((acc, branch) => {
    acc[branch] = GENERIC_HS_SUBJECTS;
    return acc;
}, {} as { [key: string]: SubjectInfo[] });

export const SUBJECTS_DATA: { [key: string]: SubjectInfo[] } = {
  "الثانوي الإعدادي": [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#8e44ad" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#9b59b6" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#8e44ad" },
    { name: "الفرنسية", icon: "fa-solid fa-book", color: "#9b59b6" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#8e44ad" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#9b59b6" },
    { name: "التاريخ", icon: "fa-solid fa-landmark", color: "#8e44ad" },
    { name: "الجغرافيا", icon: "fa-solid fa-earth-africa", color: "#9b59b6" },
    { name: "التربية على المواطنة", icon: "fa-solid fa-people-group", color: "#8e44ad" }
  ],
  ...BRANCH_SUBJECT_MAPPING
};

export const VIDEOS_DATA: { [key: string]: LinkItem[] } = {
  "الرياضيات": [
    { id: "dQw4w9WgXcQ", title: "الدرس الأول - النشر والتعميل", duration: "15:30" },
    { id: "abc123def45", title: "شرح القوى والجذور المربعة", duration: "22:15" },
    { id: "xyz789uvw12", title: "تمارين محلولة في مبرهنة طاليس", duration: "18:45" }
  ],
  "الفيزياء والكيمياء": [
    { id: "phy123chem456", title: "تجارب المواد والكهرباء", duration: "12:20" }
  ]
};

export const LINKS_DATA: LinksData = {
  "الثانوي الإعدادي": {
    "1": {
      "3": {
        "الرياضيات": {
          "دروس": [
            { title: "النشر والتعميل", url: "https://drive.google.com/file/d/1t3998-i8p4sXeHYm8xncqwOrrhTdbbsE/view?usp=drive_link" },
            { title: "القوى", url: "https://drive.google.com/file/d/1-YpeSe8A0E5DrqfM3Wby1AL37XTzQiuQ/view?usp=drive_link" },
            { title: "الجذور المربعة", url: "https://drive.google.com/file/d/1Voi3T9r24rIUD3CK_HAsiON8mwdDeQsw/view?usp=drive_link" },
            { title: "مبرهنة طاليس", url: "https://drive.google.com/file/d/1oR2K9DUVY5pNAVctONwQG7MCU5Ja3OfD/view?usp=drive_link" },
            { title: "مبرهنة فيثاغورس", url: "https://drive.google.com/file/d/1OVde6XGYXrsbPuh0C_IZnl52R2I7oh3l/view?usp=drive_link" }
          ],
          "تمارين": [
            { title: "النشر والتعميل - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1PUFYqG6YeevPZcM-Ku-F9tfKMG2R5kyJ/view?usp=drive_link" },
            { title: "القوى - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1SBoJmcELZgzRa7Lzk_SJituoHdCTMs4H/view?usp=drive_link" },
            { title: "الجذور المربعة - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1OvJGZfgMGT-TxCvXkpeCcJdg5MrDtvcu/view?usp=drive_link" }
          ],
          "فروض + التصحيح": {
            "المرحلة الأولى": [
              { title: "الفرض 1 نموذج 1 - الرياضيات", url: "https://drive.google.com/file/d/18WiDEl4MvsquCssGJLrqzzlYj1ENZwIX/view?usp=drive_link" },
              { title: "الفرض 1 نموذج 2 - الرياضيات", url: "https://drive.google.com/file/d/1eZ-Gi6HB8PULMen5N6TAQx3jEYZm9rjy/view?usp=drive_link" }
            ]
          },
          "فيديوهات": VIDEOS_DATA["الرياضيات"]
        },
        "الفيزياء والكيمياء": {
          "دروس": [
            { title: "أمثلة لبعض المواد المستعملة", url: "https://drive.google.com/file/d/1ukmJXiiTusG2Gb841l6A13fWf5fEdjCT/view?usp=drive_link" },
            { title: "المواد والكهرباء", url: "https://drive.google.com/file/d/1DSR2igOMceVDqAKkI8OHvv7IwCIQlUjN/view?usp=drive_link" },
            { title: "أكسدة الفلزات في الهواء", url: "https://drive.google.com/file/d/1IReswWnlonwbYT-xudGJyAdDJv4Ch5Nd/view?usp=drive_link" }
          ],
          "تمارين": [
            { title: "أمثلة لبعض المواد - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1H5tcEIoPCJOB58df9-vIpC23Pi_RF2tC/view?usp=drive_link" },
            { title: "المواد والكهرباء - سلسلة التمارين 1", url: "https://drive.google.com/file/d/14uqQTU-fMxWPpGzIm7kNlYi1zzBlpkl-/view?usp=drive_link" }
          ],
          "فيديوهات": VIDEOS_DATA["الفيزياء والكيمياء"]
        },
        "علوم الحياة والأرض": {
          "دروس": [
            { title: "التربية الغذائية", url: "https://drive.google.com/file/d/1jFf4jRPnXoBWcQqYyFIArXVF7QM7o6JW/view?usp=drive_link" },
            { title: "الهضم والامتصاص", url: "https://drive.google.com/file/d/1tFz26keAWM-0lUzkgSiLBUUHyusK0pXB/view?usp=drive_link" }
          ],
          "تمارين": [
            { title: "التربية الغذائية - سلسلة التمارين 1", url: "https://drive.google.com/file/d/1bSMWzn-dRM2dXLm9EAM3NpiBUsZnnfPq/view?usp=drive_link" }
          ]
        },
        "اللغة العربية": {
          "دروس": {
            "النصوص القرائية": [
              { title: "النص القرائي 1", url: "#" },
              { title: "النص القرائي 2", url: "#" }
            ],
            "القواعد النحوية": [
              { title: "المبتدأ والخبر", url: "#" },
              { title: "الفاعل ونائب الفاعل", url: "#" }
            ]
          },
          "تمارين": [
            { title: "تمرين النصوص القرائية", url: "#" },
            { title: "تمرين القواعد النحوية", url: "#" }
          ]
        },
        "التربية الإسلامية": {
          "دروس": {
            "العقيدة": [
              { title: "أركان الإيمان", url: "#" },
              { title: "أركان الإسلام", url: "#" }
            ],
            "العبادات": [
              { title: "الصلاة وأحكامها", url: "#" },
              { title: "الزكاة وأحكامها", url: "#" }
            ]
          },
          "تمارين": [
            { title: "تمرين العقيدة", url: "#" },
            { title: "تمرين العبادات", url: "#" }
          ]
        }
      }
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
  'الآداب': { ar: 'الآداب', fr: 'Lettres', en: 'Literature' },
  'العلوم الإنسانية': { ar: 'العلوم الإنسانية', fr: 'Sciences Humaines', en: 'Human Sciences' },

  // Subjects
  'الرياضيات': { ar: 'الرياضيات', fr: 'Mathématiques', en: 'Mathematics' },
  'الفيزياء والكيمياء': { ar: 'الفيزياء والكيمياء', fr: 'Physique-Chimie', en: 'Physics-Chemistry' },
  'الفرنسية': { ar: 'الفرنسية', fr: 'Français', en: 'French' },
  'اللغة العربية': { ar: 'اللغة العربية', fr: 'Arabe', en: 'Arabic' },
  'التربية الإسلامية': { ar: 'التربية الإسلامية', fr: 'Éducation Islamique', en: 'Islamic Education' },
  'التاريخ': { ar: 'التاريخ', fr: 'Histoire', en: 'History' },
  'الجغرافيا': { ar: 'الجغرافيا', fr: 'Géographie', en: 'Geography' },
  'التربية على المواطنة': { ar: 'التربية على المواطنة', fr: 'Éducation à la Citoyenneté', en: 'Citizenship Education' },
  'الفلسفة': { ar: 'الفلسفة', fr: 'Philosophie', en: 'Philosophy' },
  'الإنجليزية': { ar: 'الإنجليزية', fr: 'Anglais', en: 'English' },
  'التاريخ والجغرافيا': { ar: 'التاريخ والجغرافيا', fr: 'Histoire-Géographie', en: 'History-Geography' },
  'الاجتماعيات': { ar: 'الاجتماعيات', fr: 'Histoire-Géographie', en: 'Social Studies' }
};