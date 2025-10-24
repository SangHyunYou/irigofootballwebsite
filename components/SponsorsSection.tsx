import React from 'react';

const SponsorList: React.FC<{ title: string; sponsors: string[]; children?: React.ReactNode }> = ({ title, sponsors, children }) => (
  <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold text-brand-green mb-6 border-b-2 border-brand-green/30 pb-3">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
        {sponsors.map((sponsor, index) => (
            <p key={index} className="truncate">{sponsor}</p>
        ))}
    </div>
    {children}
  </div>
);

const SponsorsSection: React.FC = () => {
  const corporateSponsors = [
    '(주)미래전자', '익산건설', '드림스포츠', '희망은행',
    '우리식품', '강호물산', '파이팅 의류', '천하장사 햄'
  ];

  const individualSponsors = [
    '김민준', '이서연', '박도윤', '최지우', '정하준', '윤채원',
    '강시우', '한지민', '조은우', '서유나', '오준서', '임하윤',
    '황선우', '권아린'
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900" id="sponsors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">함께해주시는 후원자님</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          이리고 축구부 선수들의 꿈을 응원해주시는 모든 분들께 진심으로 감사드립니다. 여러분의 소중한 마음이 선수들에게 큰 힘이 됩니다.
        </p>
        <div className="space-y-12">
            <SponsorList title="기업 후원" sponsors={corporateSponsors} />
            <SponsorList title="개인 후원" sponsors={individualSponsors} />
        </div>
        <div className="text-center mt-16">
            <p className="text-lg text-gray-300">이리고 축구부의 미래에 함께하고 싶으신가요?</p>
            <button className="mt-4 bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                후원 문의하기
            </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
