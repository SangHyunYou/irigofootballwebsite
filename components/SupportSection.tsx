
import React from 'react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-900" id="support">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">후원 안내</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green mb-4">후원 방법</h3>
            <p className="text-gray-300 mb-6">
              여러분의 소중한 후원금은 이리고 축구부 선수들의 훈련 환경 개선, 장비 구입, 대회 참가비 등
              선수 육성을 위해 투명하게 사용됩니다.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">후원 계좌</p>
                <p className="text-gray-400">전북은행 123-45-678910 (예금주: 이리고축구부후원회)</p>
              </div>
              <div>
                <p className="font-semibold text-white">문의</p>
                <p className="text-gray-400">후원회 총무: 010-1234-5678</p>
                <p className="text-gray-400">이메일: support@irifc.supporters.com</p>
              </div>
            </div>
          </div>
          <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green mb-4">후원 혜택</h3>
            <p className="text-gray-300 mb-6">
              후원회원이 되시면 다음과 같은 혜택을 드립니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>후원회 소식지 정기 발송</li>
              <li>주요 경기 초청 및 관람 지원</li>
              <li>후원회 기념품 증정 (연 1회)</li>
              <li>웹사이트 후원자 명단 등재</li>
              <li>연말정산 소득공제 혜택</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
            <button className="bg-brand-green hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 text-lg">
                지금 바로 후원하기
            </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
