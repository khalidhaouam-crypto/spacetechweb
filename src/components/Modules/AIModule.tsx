

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../../types';
import { TRANSLATIONS } from '../../constants';

interface AIModuleProps {
  language?: Language;
}

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

const AIModule: React.FC<AIModuleProps> = ({ language = 'ar' }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // Load chat history on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('spacetech_ai_history');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    }
  }, []);

  // Save last 3 messages whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      // Keep only the last 3 messages for storage
      const lastThreeMessages = messages.slice(-3);
      localStorage.setItem('spacetech_ai_history', JSON.stringify(lastThreeMessages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' }); 
      
      const systemInstruction = `
        You are an intelligent educational assistant for students in Morocco.
        Target Audience: 
        1. Middle School (College / الثانوي الإعدادي)
        2. High School (Lycee / الثانوي التأهيلي)
        
        Your goal is to explain lessons, solve exercises, and provide helpful guidance in subjects like Math, Physics, Arabic, French, Philosophy, Engineering, Life Sciences (SVT), etc. 
        
        Strict Rules:
        1. Answer ONLY questions related to the Moroccan Middle School and High School curricula.
        2. If a user asks about something outside this scope (e.g., politics, entertainment, university level, primary school), politely refuse.
        3. You must answer DIRECTLY to the question without any greetings (like 'Hello', 'Welcome') or filler introductions. Start explaining immediately.
        4. Keep your answers concise, clear, and educational.
        5. Use Markdown for formatting (bold, lists, code blocks).
        6. Adapt to the language of the user (Arabic, French, or English).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text || (language === 'ar' ? 'عذراً، لم أستطع توليد إجابة.' : 'Sorry, I could not generate a response.');
      
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: text 
      };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: language === 'ar' ? 'عذراً، حدث خطأ في الاتصال. يرجى التحقق من مفتاح API أو المحاولة لاحقاً.' : 'Sorry, connection error. Please check API Key or try again.',
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // Enlarged container for desktop: max-w-[95%] xl:max-w-7xl
    <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto h-[calc(100vh-100px)] flex flex-col animate-slideDown bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center gap-3 text-white shadow-md z-10">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <i className="fas fa-user-astronaut text-xl"></i>
        </div>
        <div>
          <h2 className="font-black text-lg">{language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}</h2>
          <p className="text-xs opacity-90 font-medium">{language === 'ar' ? 'مساعدك الشخصي للدروس الإعدادية والتأهيلية' : 'Your Middle & High School Study Companion'}</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#252525]">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
            <i className="fas fa-brain text-6xl mb-4"></i>
            <p className="font-bold text-lg">{language === 'ar' ? 'اسألني عن أي درس أو تمرين!' : 'Ask me about any lesson or exercise!'}</p>
          </div>
        )}
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-5 rounded-2xl shadow-sm relative ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : msg.isError 
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-tl-none border border-red-200'
                    : 'bg-white dark:bg-[#3d3d3d] text-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-100 dark:border-gray-700'
              }`}
            >
              {msg.role === 'model' && !msg.isError && (
                 <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs border-2 border-white dark:border-[#3d3d3d]">
                    <i className="fas fa-user-astronaut"></i>
                 </div>
              )}
              <div className="whitespace-pre-wrap leading-relaxed text-base font-medium">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white dark:bg-[#3d3d3d] p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150"></div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-[#2d2d2d] border-t border-gray-100 dark:border-gray-700">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={language === 'ar' ? 'اكتب سؤالك هنا...' : 'Type your question here...'}
            className={`w-full bg-gray-100 dark:bg-[#333] border-2 border-transparent focus:border-primary/50 rounded-xl px-4 py-3 pr-12 text-gray-800 dark:text-white placeholder-gray-400 resize-none outline-none transition-all h-[60px] max-h-[150px] shadow-inner font-bold text-base ${isRtl ? 'text-right' : 'text-left'}`}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-2' : 'right-2'} w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              !input.trim() || isLoading 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-[#444]' 
                : 'bg-primary text-white hover:scale-105 shadow-md'
            }`}
          >
            <i className={`fas fa-paper-plane ${isRtl ? 'rotate-180' : ''}`}></i>
          </button>
        </div>
        <p className="text-[10px] text-center mt-2 text-gray-400 font-bold">
            {language === 'ar' ? 'المساعد الذكي قد يخطئ، يرجى التحقق من المعلومات.' : 'AI can make mistakes. Please verify info.'}
        </p>
      </div>
    </div>
  );
};

export default AIModule;