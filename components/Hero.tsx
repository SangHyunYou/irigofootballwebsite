
import React from 'react';

interface HeroProps {
    onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <img src="https://picsum.photos/seed/stadium/1920/1080" alt="Football stadium" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-down">
          승리를 향한 열정, <span className="text-brand-green">우리가 함께합니다</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up">
          이리고등학교 축구부의 빛나는 미래를 위해 후원회가 든든한 버팀목이 되겠습니다.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => onNavigate('support')}
            className="bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            후원 참여하기
          </button>
          <button
            onClick={() => onNavigate('news')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            최신 소식 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
