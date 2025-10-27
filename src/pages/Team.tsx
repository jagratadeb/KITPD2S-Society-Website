import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Instagram } from 'lucide-react';
import KP from '@/assets/KP.png'
const Team = () => {
  const teamMembers = [
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Leading the society with vision and innovation, Alex brings 5 years of experience in tech leadership and community building.',
      linkedin: 'https://www.linkedin.com/in/koushik-paul',
      instagram: 'https://www.instagram.com/koushikpaul',
      github: 'https://github.com/koushikpaul',
    },
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Leading the society with vision and innovation, Alex brings 5 years of experience in tech leadership and community building.',
      linkedin: 'https://www.linkedin.com/in/example-member',
    },
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Leading the society with vision and innovation, Alex brings 5 years of experience in tech leadership and community building.',
      github: 'https://github.com/example',
      instagram: 'https://www.instagram.com/example',
    },    
    {
      name: 'Koushik Paul',
      role: 'President',
      image: KP,
      bio: 'Leading the society with vision and innovation, Alex brings 5 years of experience in tech leadership and community building.',
    },
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
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
                  {/* Social icons (render only if link exists) */}
                  <div className="mt-4 flex items-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted">
                        <Linkedin className="w-5 h-5 text-primary" />
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
