
import React, { useState, useEffect } from 'react';
import { Task, Priority, TaskCategory, Language } from '../../types';
import { TRANSLATIONS } from '../../constants';

const PRIORITY_MAP: { [key in Priority]: { label: { ar: string, fr: string, en: string }, color: string, bg: string } } = {
  'High': { label: { ar: 'مهم جداً', fr: 'Urgent', en: 'Urgent' }, color: 'text-red-600', bg: 'bg-red-100' },
  'Medium': { label: { ar: 'عادي', fr: 'Normal', en: 'Normal' }, color: 'text-orange-600', bg: 'bg-orange-100' },
  'Low': { label: { ar: 'منخفض', fr: 'Bas', en: 'Low' }, color: 'text-green-600', bg: 'bg-green-100' }
};

const CATEGORY_MAP: { [key in TaskCategory]: { label: { ar: string, fr: string, en: string }, icon: string } } = {
  'Assignment': { label: { ar: 'واجب منزلي', fr: 'Devoir', en: 'Homework' }, icon: 'fas fa-book' },
  'Exercise': { label: { ar: 'تمرين', fr: 'Exercice', en: 'Exercise' }, icon: 'fas fa-pen' },
  'Reading': { label: { ar: 'قراءة', fr: 'Lecture', en: 'Reading' }, icon: 'fas fa-glasses' },
  'Exam': { label: { ar: 'امتحان', fr: 'Examen', en: 'Exam' }, icon: 'fas fa-file-alt' },
  'Other': { label: { ar: 'آخر', fr: 'Autre', en: 'Other' }, icon: 'fas fa-tasks' },
};

interface TasksModuleProps {
  language?: Language;
}

const TasksModule: React.FC<TasksModuleProps> = ({ language = 'ar' }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [category, setCategory] = useState<TaskCategory>('Exercise');
  const [reminder, setReminder] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'ACTIVE' | 'COMPLETED'>('ALL');

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const saved = localStorage.getItem('spacetech_module_tasks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migration for old tasks without priority/category
        const migrated = parsed.map((t: any) => ({
          ...t,
          priority: t.priority || 'Medium',
          category: t.category || 'Other',
          reminderTime: t.reminderTime || undefined,
          notified: t.notified || false
        }));
        setTasks(migrated);
      } catch (e) { setTasks([]); }
    }
  }, []);

  const saveTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem('spacetech_module_tasks', JSON.stringify(newTasks));
  };

  const addTask = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      done: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
      reminderTime: reminder || undefined,
      notified: false
    };
    saveTasks([newTask, ...tasks]);
    setTitle('');
    setReminder('');
  };

  const toggleTask = (id: number) => {
    saveTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id: number) => {
    if (window.confirm(language === 'ar' ? 'هل أنت متأكد من حذف هذه المهمة؟' : 'Are you sure?')) {
      saveTasks(tasks.filter(t => t.id !== id));
    }
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.done).length,
    active: tasks.filter(t => !t.done).length
  };

  const progress = stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100);

  const filteredTasks = tasks.filter(t => {
    if (filter === 'ACTIVE') return !t.done;
    if (filter === 'COMPLETED') return t.done;
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-slideDown">
      {/* Header & Stats */}
      <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-lg mb-6 border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
           <div>
             <h2 className="text-2xl font-black text-primary flex items-center gap-2">
               <i className="fas fa-check-circle"></i>
               <span>{t.modules.tasks}</span>
             </h2>
           </div>
           <div className="text-center">
             <div className="text-3xl font-black text-primary">{progress}%</div>
           </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
           <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-bold px-1">
           <span>{stats.active} {language === 'ar' ? 'قيد الإنجاز' : 'Active'}</span>
           <span>{stats.completed} {language === 'ar' ? 'مكتملة' : 'Done'}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Input Form */}
        <div className="lg:w-1/3">
           <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-20">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4">{language === 'ar' ? 'إضافة مهمة جديدة' : 'Add New Task'}</h3>
              
              <div className="space-y-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">{language === 'ar' ? 'عنوان المهمة' : 'Title'}</label>
                    <input 
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 focus:border-primary outline-none text-right"
                      placeholder={language === 'ar' ? "مثال: مراجعة درس الرياضيات" : "Ex: Math Homework"}
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1">{language === 'ar' ? 'الأولوية' : 'Priority'}</label>
                        <select 
                          value={priority}
                          onChange={e => setPriority(e.target.value as Priority)}
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none text-sm"
                        >
                          {Object.entries(PRIORITY_MAP).map(([key, val]) => (
                            <option key={key} value={key}>{val.label[language]}</option>
                          ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1">{language === 'ar' ? 'التصنيف' : 'Category'}</label>
                        <select 
                          value={category}
                          onChange={e => setCategory(e.target.value as TaskCategory)}
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 outline-none text-sm"
                        >
                          {Object.entries(CATEGORY_MAP).map(([key, val]) => (
                            <option key={key} value={key}>{val.label[language]}</option>
                          ))}
                        </select>
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">
                      <i className="fas fa-bell mr-1"></i>
                      {language === 'ar' ? 'تذكير (اختياري)' : 'Reminder (Optional)'}
                    </label>
                    <input 
                      type="datetime-local"
                      value={reminder}
                      onChange={e => setReminder(e.target.value)}
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border border-gray-200 dark:border-gray-600 focus:border-primary outline-none text-sm font-sans"
                    />
                 </div>

                 <button 
                   onClick={addTask}
                   className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-accent transition shadow-lg hover:shadow-primary/30"
                 >
                   {language === 'ar' ? 'إضافة للقائمة' : 'Add Task'}
                 </button>
              </div>
           </div>
        </div>

        {/* Tasks List */}
        <div className="lg:w-2/3">
           {/* Filters */}
           <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {[
                { key: 'ALL', label: {ar: 'الكل', fr: 'Tous', en: 'All'} },
                { key: 'ACTIVE', label: {ar: 'قيد الإنجاز', fr: 'En cours', en: 'Active'} },
                { key: 'COMPLETED', label: {ar: 'المكتملة', fr: 'Terminé', en: 'Done'} }
              ].map(f => (
                <button 
                  key={f.key}
                  onClick={() => setFilter(f.key as any)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${filter === f.key ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-[#2d2d2d] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600'}`}
                >
                  {f.label[language]}
                </button>
              ))}
           </div>

           <div className="space-y-3">
              {filteredTasks.length === 0 && (
                <div className="text-center py-10 bg-white dark:bg-[#2d2d2d] rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                  <p className="text-gray-400 font-bold">{language === 'ar' ? 'لا توجد مهام' : 'No tasks found'}</p>
                </div>
              )}
              
              {filteredTasks.map(task => (
                <div 
                  key={task.id}
                  className={`group bg-white dark:bg-[#2d2d2d] rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex items-start gap-4 ${task.done ? 'opacity-60 bg-gray-50 dark:bg-[#333]' : ''}`}
                >
                   <button 
                     onClick={() => toggleTask(task.id)}
                     className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-500 hover:border-primary'}`}
                   >
                     {task.done && <i className="fas fa-check text-xs"></i>}
                   </button>
                   
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                         <span className={`text-xs px-2 py-0.5 rounded-md font-bold ${PRIORITY_MAP[task.priority].bg} ${PRIORITY_MAP[task.priority].color}`}>
                           {PRIORITY_MAP[task.priority].label[language]}
                         </span>
                         <span className="text-xs text-gray-400 flex items-center gap-1">
                           <i className={CATEGORY_MAP[task.category].icon}></i>
                           {CATEGORY_MAP[task.category].label[language]}
                         </span>
                         {task.reminderTime && (
                           <span className={`text-xs flex items-center gap-1 ${task.notified ? 'text-gray-400' : 'text-blue-500 font-bold'}`}>
                              <i className="fas fa-bell"></i>
                              {new Date(task.reminderTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                           </span>
                         )}
                      </div>
                      <h4 className={`font-bold text-lg text-gray-800 dark:text-white mb-1 ${task.done ? 'line-through' : ''}`}>
                        {task.title}
                      </h4>
                      <div className="text-xs text-gray-400">
                         {new Date(task.createdAt).toLocaleDateString(language === 'ar' ? 'ar-MA' : 'en-US')}
                      </div>
                   </div>

                   <button 
                     onClick={() => deleteTask(task.id)}
                     className="text-gray-300 hover:text-red-500 transition self-center p-2"
                   >
                     <i className="fas fa-trash-alt"></i>
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TasksModule;
