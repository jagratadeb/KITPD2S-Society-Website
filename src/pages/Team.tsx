import React from 'react';
import TeamSection from '@/components/TeamSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import KP from '@/assets/KP.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Expert in React and UI design.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
      twitter: 'https://x.com',
      domain: 'President',
    },
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Expert in React and UI design.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
      twitter: 'https://x.com',
      youtube: 'https://youtube.com',
      domain: 'Web Dev',
    },
    {
      name: 'Koushik Paul',
      role: 'Frontend Developer',
      image: KP,
      bio: 'Expert in React and UI design.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
      domain: 'AI/ML',
    },
      {
      name: 'Koushik Paul',
      role: 'Frontend Developer',
      image: KP,
      bio: 'Expert in React and UI design.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
      domain: 'UI/UX',
    },
    {
      name: 'Koushik Paul',
      role: 'Frontend Developer',
      image: KP,
      bio: 'Expert in React and UI design.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
      domain: 'UI/UX',
    },
    {
      name: 'Koushik Paul',
      role: 'Backend Developer',
      image: KP,
      bio: 'Specializes in Node.js and API architecture.',
      linkedin: 'https://www.linkedin.com/in/example-member',
      instagram: 'https://www.instagram.com',
      domain: 'President',
    },
    {
      name: 'Koushik Paul',
      role: 'ML Engineer',
      image: KP,
      bio: 'Building intelligent systems with Python.',
      github: 'https://github.com/example',
      instagram: 'https://www.instagram.com/example',
      domain: 'AI/ML',
    },
    {
      name: 'Koushik Paul',
      role: 'IoT Specialist',
      image: KP,
      bio: 'Designs embedded systems and sensor networks.',
      domain: 'IoT',
    },
  ];

  const groupedTeams = {
    'President': teamMembers.filter(m => m.domain === 'President'),
    'Web Dev': teamMembers.filter(m => m.domain === 'Web Dev'),
    'AI/ML': teamMembers.filter(m => m.domain === 'AI/ML'),
    'UI/UX': teamMembers.filter(m => m.domain === 'UI/UX'),
    'IoT': teamMembers.filter(m => m.domain === 'IoT'),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-primary">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation and excellence
            </p>
          </div>

          {Object.entries(groupedTeams).map(([domain, members]) => (
            <TeamSection key={domain} title={domain}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-orbitron font-bold mb-1">
                        {member.name}
                      </h3>
                      <div className="text-primary font-semibold mb-3">{member.role}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="mt-4 flex items-center space-x-3">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted">
                            <Linkedin className="w-5 h-5 text-blue-400" />
                          </a>
                        )}
                        {member.instagram && (
                          <a href={member.instagram} target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted">
                            <Instagram className="w-5 h-5 text-pink-500" />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a href={member.twitter} target="_blank" rel="noreferrer" aria-label={`${member.name} on Twitter`} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted">
                            <Twitter className="w-5 h-5 text-sky-500" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TeamSection>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
