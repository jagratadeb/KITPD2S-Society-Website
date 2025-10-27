import React from 'react';

interface TeamSectionProps {
  title: string;
  children?: React.ReactNode;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, children }) => {
  return (
    <div className="mt-16">
      <div className="text-center rounded-lg px-6 py-4 mb-4">
        <h2 className="text-2xl font-semibold font-orbitron text-primary">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default TeamSection;
