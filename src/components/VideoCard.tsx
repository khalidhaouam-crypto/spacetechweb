import React from 'react';
import { LinkItem } from '../types';

const VideoCard: React.FC<{ video: LinkItem }> = ({ video }) => {
  const thumbnailUrl = video.id ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` : '';
  
  const handlePlay = () => {
    if (video.id) {
       window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
    }
  };

  return (
    <div 
      onClick={handlePlay}
      className="bg-white dark:bg-[#2d2d2d] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer my-3 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative w-full h-[200px] bg-gray-100 dark:bg-gray-800 overflow-hidden group">
        <img 
          src={thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-red-600/90 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
          <i className="fas fa-play ml-1"></i>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-base mb-2 line-clamp-2 text-gray-800 dark:text-gray-200">{video.title}</div>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>يوتيوب</span>
          <i className="fab fa-youtube text-red-600 text-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
