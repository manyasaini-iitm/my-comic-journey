import { ReactNode } from 'react';

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ComicPanel = ({ children, className = '', delay = 0 }: ComicPanelProps) => {
  return (
    <div 
      className={`comic-panel hover-comic ${className}`}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SpeechBubble = ({ children, className = '', delay = 0 }: SpeechBubbleProps) => {
  return (
    <div 
      className={`speech-bubble animate-bounce-in ${className}`}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};