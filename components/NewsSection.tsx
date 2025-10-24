
import React from 'react';
import type { NewsArticle } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => (
  <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="p-6">
      <p className="text-sm text-gray-400 mb-1">{article.date}</p>
      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
      <p className="text-gray-300 leading-relaxed">{article.summary}</p>
    </div>
  </div>
);

interface NewsSectionProps {
  news: NewsArticle[];
  onGenerate: () => void;
  isGenerating: boolean;
  error: string | null;
  showTitle?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ news, onGenerate, isGenerating, error, showTitle = false }) => {
  return (
    <section className="py-12 md:py-20 bg-brand-dark" id="news">
      <div className="container mx-auto px-4">
        {showTitle && <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">최신 소식</h2>}
        <div className="flex justify-center mb-10">
            <button onClick={onGenerate} disabled={isGenerating} className="bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center">
                {isGenerating ? <LoadingSpinner /> : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    AI로 새 소식 생성
                </>
                )}
            </button>
        </div>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(article => <NewsCard key={article.id} article={article} />)}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
