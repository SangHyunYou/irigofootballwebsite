
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="text-lg font-bold text-white">이리고 축구부 후원회</h3>
            <p className="mt-2 text-gray-400">전북특별자치도 익산시 이리-로 123</p>
            <p className="text-gray-400">문의: contact@irifc.supporters.com</p>
          </div>
          <div className="text-gray-400">
            <p>&copy; {new Date().getFullYear()} 이리고 축구부 후원회. All rights reserved.</p>
            <p className="text-sm">대한민국의 미래를 이끌어갈 선수들을 후원합니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
