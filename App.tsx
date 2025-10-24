import React, { useState, useCallback, Suspense, lazy } from 'react';
import type { NewsArticle, Player, Coach, Alumnus } from './types';
import { generateNewsArticle } from './services/geminiService';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

const NewsSection = lazy(() => import('./components/NewsSection'));
const PlayersSection = lazy(() => import('./components/PlayersSection'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const SupportSection = lazy(() => import('./components/SupportSection'));
const OrganizationSection = lazy(() => import('./components/OrganizationSection'));
const SponsorsSection = lazy(() => import('./components/SponsorsSection'));
const CoachingStaffSection = lazy(() => import('./components/CoachingStaffSection'));
const AlumniSection = lazy(() => import('./components/AlumniSection'));

const initialNews: NewsArticle[] = [
  { id: 1, title: '전국 고교 축구선수권대회 4강 진출!', date: '2024-07-15', summary: '이리고 축구부가 막강한 공격력을 선보이며 전국 대회 4강에 오르는 쾌거를 이루었습니다.' },
  { id: 2, title: '주장 김민준, "우승 향한 열망으로 뭉쳤다"', date: '2024-07-12', summary: '팀의 주장이자 에이스인 김민준 선수가 우승에 대한 강한 자신감을 내비쳤습니다.' },
  { id: 3, title: '후원회, 선수단에 격려 물품 전달', date: '2024-07-10', summary: '후원회에서 선수들의 사기 진작을 위해 훈련 용품과 간식을 전달하며 격려했습니다.' },
];

const coachingStaff: Coach[] = [
  { id: 1, name: '김감독', role: '감독', imageUrl: 'https://picsum.photos/seed/coach1/400/500' },
  { id: 2, name: '박수석', role: '수석코치', imageUrl: 'https://picsum.photos/seed/coach2/400/500' },
  { id: 3, name: '최골키퍼', role: '골키퍼 코치', imageUrl: 'https://picsum.photos/seed/coach3/400/500' },
];

const initialPlayers: Player[] = [
    // 3학년
    { id: 1, name: '김민준', position: '공격수 (FW)', number: 10, imageUrl: 'https://picsum.photos/seed/player1/400/500', grade: 3 },
    { id: 2, name: '이현우', position: '미드필더 (MF)', number: 8, imageUrl: 'https://picsum.photos/seed/player2/400/500', grade: 3 },
    // 2학년
    { id: 3, name: '박서준', position: '수비수 (DF)', number: 4, imageUrl: 'https://picsum.photos/seed/player3/400/500', grade: 2 },
    { id: 4, name: '최지훈', position: '골키퍼 (GK)', number: 1, imageUrl: 'https://picsum.photos/seed/player4/400/500', grade: 2 },
    { id: 7, name: '강지석', position: '공격수 (FW)', number: 11, imageUrl: 'https://picsum.photos/seed/player7/400/500', grade: 2 },
    { id: 8, name: '서예준', position: '미드필더 (MF)', number: 6, imageUrl: 'https://picsum.photos/seed/player8/400/500', grade: 2 },
    // 1학년
    { id: 5, name: '정태양', position: '미드필더 (MF)', number: 7, imageUrl: 'https://picsum.photos/seed/player5/400/500', grade: 1 },
    { id: 6, name: '윤도현', position: '수비수 (DF)', number: 5, imageUrl: 'https://picsum.photos/seed/player6/400/500', grade: 1 },
    { id: 9, name: '하다온', position: '수비수 (DF)', number: 2, imageUrl: 'https://picsum.photos/seed/player9/400/500', grade: 1 },
    { id: 10, name: '김주원', position: '미드필더 (MF)', number: 9, imageUrl: 'https://picsum.photos/seed/player10/400/500', grade: 1 },
];

const alumni: Alumnus[] = [
    { id: 1, name: '손흥민 선배', graduationYear: 2010, currentTeam: '토트넘 홋스퍼 FC', imageUrl: 'https://picsum.photos/seed/alumni1/400/500' },
    { id: 2, name: '박지성 선배', graduationYear: 2000, currentTeam: '은퇴 (전 맨유)', imageUrl: 'https://picsum.photos/seed/alumni2/400/500' },
    { id: 3, name: '김민재 선배', graduationYear: 2015, currentTeam: 'FC 바이에른 뮌헨', imageUrl: 'https://picsum.photos/seed/alumni3/400/500' },
    { id: 4, name: '이강인 선배', graduationYear: 2018, currentTeam: '파리 생제르맹 FC', imageUrl: 'https://picsum.photos/seed/alumni4/400/500' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateNews = useCallback(async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const prompt = "Write a short, exciting news report about a fictional high school football match where Iri High School won. The opponent was '강호고등학교'. Include a catchy Korean headline and a brief summary of the game's key moments. The response must be in JSON format with 'title' and 'summary' keys.";
      const newArticleText = await generateNewsArticle(prompt);
      
      const jsonString = newArticleText.replace(/^```json\s*|```\s*$/g, '').trim();
      const newArticleContent = JSON.parse(jsonString);

      const newArticle: NewsArticle = {
        id: news.length + 1,
        title: newArticleContent.title,
        summary: newArticleContent.summary,
        date: new Date().toISOString().split('T')[0],
      };
      setNews(prevNews => [newArticle, ...prevNews]);
    } catch (err) {
      console.error("Failed to generate news:", err);
      setError("AI 기사 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsGenerating(false);
    }
  }, [news]);

  const renderSection = () => {
    switch (activeSection) {
      case 'news':
        return <NewsSection news={news} onGenerate={handleGenerateNews} isGenerating={isGenerating} error={error} />;
      case 'gallery':
        return <GallerySection />;
      case 'organization':
        return <OrganizationSection />;
      case 'sponsors':
        return <SponsorsSection />;
      case 'support':
        return <SupportSection />;
      case 'coaching-staff':
        return <CoachingStaffSection coaches={coachingStaff} />;
      case 'grade-1':
        return <PlayersSection players={initialPlayers.filter(p => p.grade === 1)} title="1학년 선수단" showTitle={true} />;
      case 'grade-2':
        return <PlayersSection players={initialPlayers.filter(p => p.grade === 2)} title="2학년 선수단" showTitle={true} />;
      case 'grade-3':
        return <PlayersSection players={initialPlayers.filter(p => p.grade === 3)} title="3학년 선수단" showTitle={true} />;
      case 'alumni':
        return <AlumniSection alumni={alumni} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setActiveSection}/>
            <Suspense fallback={<LoadingSpinner />}>
                <NewsSection news={news.slice(0, 3)} onGenerate={handleGenerateNews} isGenerating={isGenerating} error={error} showTitle={true} />
                <PlayersSection players={initialPlayers.slice(0, 4)} showTitle={true} />
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
          {renderSection()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
