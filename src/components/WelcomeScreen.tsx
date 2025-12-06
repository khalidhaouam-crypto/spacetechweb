import React, { useEffect, useState } from 'react';

const WelcomeScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#3a0ca3] to-[#720026] flex flex-col justify-center items-center text-white text-2xl font-black z-[20000] select-none">
      <p className="margin-[0.25rem] opacity-0 animate-[fadeIn_0.9s_forwards] delay-100">مع SPACETECH</p>
      <p className="margin-[0.25rem] opacity-0 animate-[fadeIn_0.9s_forwards] delay-1000">غير بكليك</p>
      <p className="margin-[0.25rem] opacity-0 animate-[fadeIn_0.9s_forwards] delay-2000">النجاح بين يديك</p>
    </div>
  );
};

export default WelcomeScreen;
