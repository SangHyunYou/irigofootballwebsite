import React from 'react';
import type { Alumnus } from '../types';

const AlumnusCard: React.FC<{ alumnus: Alumnus }> = ({ alumnus }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={alumnus.imageUrl} alt={alumnus.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
            <p className="text-sm font-semibold text-brand-green">{alumnus.currentTeam}</p>
            <h3 className="text-2xl font-bold">{alumnus.name}</h3>
            <p className="text-xs text-gray-300">{alumnus.graduationYear}년 졸업</p>
        </div>
    </div>
);

const AlumniSection: React.FC<{ alumni: Alumnus[] }> = ({ alumni }) => {
  return (
    <section className="py-12 md:py-20 bg-gray-900" id="alumni">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">자랑스러운 졸업생</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {alumni.map(person => <AlumnusCard key={person.id} alumnus={person} />)}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
