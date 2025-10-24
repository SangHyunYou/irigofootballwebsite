import React from 'react';
import type { Coach } from '../types';

const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg text-center bg-brand-gray p-6 transform transition-transform hover:scale-105">
    <img src={coach.imageUrl} alt={coach.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-green mb-4" />
    <h3 className="text-xl font-bold text-white">{coach.name}</h3>
    <p className="text-brand-green font-semibold">{coach.role}</p>
  </div>
);

const CoachingStaffSection: React.FC<{ coaches: Coach[] }> = ({ coaches }) => {
  return (
    <section className="py-12 md:py-20 bg-brand-dark" id="coaching-staff">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">코치진 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {coaches.map(coach => <CoachCard key={coach.id} coach={coach} />)}
        </div>
      </div>
    </section>
  );
};

export default CoachingStaffSection;
