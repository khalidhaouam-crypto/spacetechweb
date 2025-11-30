import React from 'react';

const SocialIcons: React.FC = () => {
  const openLink = (url: string) => window.open(url, '_blank');

  return (
    <div className="flex justify-center gap-4 mt-5 p-4">
      {[
        { icon: 'fab fa-whatsapp', color: '#25D366', action: () => openLink('https://wa.me/212612345678') },
        { icon: 'fab fa-youtube', color: '#FF0000', action: () => openLink('https://www.youtube.com') },
        { icon: 'fab fa-facebook', color: '#1877F2', action: () => openLink('https://www.facebook.com') },
        { icon: 'fab fa-instagram', color: '#E4405F', action: () => openLink('https://www.instagram.com') },
        { icon: 'fab fa-telegram', color: '#0088cc', action: () => openLink('https://t.me') },
      ].map((social, idx) => (
        <button 
          key={idx}
          onClick={social.action}
          className="w-10 h-10 rounded-full flex items-center justify-center text-2xl text-[#8e44ad] hover:text-[#9b59b6] dark:text-[#9b59b6] transition-all hover:scale-110"
        >
          <i className={social.icon}></i>
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
