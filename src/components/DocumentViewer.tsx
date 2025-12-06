

import React from 'react';

interface DocumentViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ url, title, onClose }) => {
  // Helper to convert standard Drive link to Preview link
  const getEmbedUrl = (originalUrl: string) => {
    // Check if it is a google drive file link
    const driveRegex = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = originalUrl.match(driveRegex);
    
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    // Fallback if regex fails or not a standard drive file link
    return originalUrl;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="fixed inset-0 z-[20000] bg-black/90 flex flex-col animate-fadeIn">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white p-4 flex justify-between items-center shadow-lg border-b border-gray-700">
        <div className="flex-1 truncate pr-4 font-bold text-lg">
          <i className="fas fa-file-alt text-primary ml-2"></i>
          {title}
        </div>
        <div className="flex items-center gap-3">
            {/* Download Button (Opens original link) */}
            <a 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg font-bold transition flex items-center gap-2 text-sm"
            >
                <i className="fas fa-download"></i>
                <span className="hidden sm:inline">تحميل</span>
            </a>
            
            {/* Close Button */}
            <button 
                onClick={onClose} 
                className="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-lg flex items-center justify-center transition"
            >
                <i className="fas fa-times text-xl"></i>
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full bg-gray-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <iframe 
            src={embedUrl} 
            className="relative z-10 w-full h-full border-0" 
            allow="autoplay"
            title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default DocumentViewer;