export type EducationType = 'الثانوي الإعدادي' | 'الثانوي التأهيلي' | '';
export type CycleType = '1' | '2' | '';
export type LevelType = '1' | '2' | '3' | 'Jada_Muchtarak' | '1_Bac' | '2_Bac' | '';

export type Language = 'ar' | 'fr' | 'en';

export interface LinkItem {
  title: string;
  url?: string;
  urls?: string[];
  id?: string; // YouTube Video ID
  duration?: string;
}

export interface NestedSubjectData {
  'دروس'?: LinkItem[] | { [key: string]: LinkItem[] };
  'تمارين'?: LinkItem[];
  'فروض + التصحيح'?: { [key: string]: LinkItem[] };
  'فيديوهات'?: LinkItem[];
  'امتحانات محلية + التصحيح'?: LinkItem[];
  'امتحانات جهوية + التصحيح'?: LinkItem[];
  'امتحانات وطنية + التصحيح'?: LinkItem[];
  [key: string]: any;
}

export interface LinksData {
  [education: string]: {
    [cycle: string]: {
      [level: string]: {
        [subject: string]: NestedSubjectData;
      };
    };
  };
}

export interface SubjectInfo {
  name: string;
  icon: string;
  color: string;
}

export type Priority = 'High' | 'Medium' | 'Low';
export type TaskCategory = 'Assignment' | 'Exercise' | 'Reading' | 'Exam' | 'Other';

export interface Task {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
  category: TaskCategory;
  createdAt: string;
  reminderTime?: string; // ISO String for reminder
  notified?: boolean;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  color: string;
  date: string;
}

export type MasteryLevel = 'New' | 'Learning' | 'Mastered';

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  subject: string;
  mastery: MasteryLevel;
}

export interface SearchResult {
  type: string;
  title: string;
  subject: string;
  educationType: string;
  cycle: string;
  level: string;
  url: string;
  context: string;
}