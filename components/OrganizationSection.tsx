import React from 'react';

const OrganizationMember: React.FC<{ role: string; name: string }> = ({ role, name }) => (
  <div className="bg-brand-gray p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
    <h4 className="text-xl font-bold text-brand-green">{role}</h4>
    <p className="text-white text-lg mt-2">{name}</p>
  </div>
);

const OrganizationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-dark" id="organization">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">후원회 조직도</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          이리고등학교 축구부의 성공적인 운영과 발전을 위해 헌신하는 후원회 임원진을 소개합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <OrganizationMember role="회장" name="김후원" />
          <OrganizationMember role="부회장" name="이조직" />
          <OrganizationMember role="총무" name="박살림" />
          <OrganizationMember role="감사" name="최감사" />
        </div>
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">운영 위원회</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                <span className="bg-brand-gray py-2 px-4 rounded-full">강위원</span>
                <span className="bg-brand-gray py-2 px-4 rounded-full">윤위원</span>
                <span className="bg-brand-gray py-2 px-4 rounded-full">한위원</span>
                <span className="bg-brand-gray py-2 px-4 rounded-full">정위원</span>
                <span className="bg-brand-gray py-2 px-4 rounded-full">송위원</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
