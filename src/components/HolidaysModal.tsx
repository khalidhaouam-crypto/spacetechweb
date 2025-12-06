import React from 'react';

const HolidaysModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[20000] p-4 animate-fadeIn" onClick={onClose}>
      <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 max-w-full max-h-[90vh] text-center shadow-2xl scale-100" onClick={e => e.stopPropagation()}>
         <h3 className="text-xl font-bold text-primary mb-4">لائحة العطل المدرسية</h3>
         <img 
           src="https://drive.google.com/thumbnail?id=19hcQTdQe0uCR0JdZmpGnpmbfyH3MiFL9&sz=w1000" 
           alt="Holidays"
           className="max-w-full max-h-[60vh] object-contain border-2 border-primary rounded-lg mb-4"
         />
         <button onClick={onClose} className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-accent transition">إغلاق</button>
      </div>
    </div>
  );
};

export default HolidaysModal;
