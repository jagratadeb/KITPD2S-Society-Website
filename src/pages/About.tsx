import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const sections = [
    {
      icon: Lightbulb,
      title: 'Vision',
      content:
        'To create a thriving ecosystem of innovators, learners, and leaders who drive technological advancement and social impact through collaborative excellence.',
    },
    {
      icon: Target,
      title: 'Objectives',
      content:
        'Foster innovation through cutting-edge workshops, hackathons, and seminars. Cultivate leadership skills among students and professionals. Bridge the gap between academia and industry through strategic partnerships.',
    },
    {
      icon: Users,
      title: 'Background',
      content:
        'Founded by passionate technologists and educators, KITPD2S Society has grown into a vibrant community of over 1,000 members. We organize 50+ events annually, creating opportunities for learning, networking, and innovation.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-primary">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-orbitron text-primary">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 border border-border animate-scale-in">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">

              <div>
                <div className="text-5xl font-black text-primary mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">
                  Active Members
                </div>
              </div>

              <div>
                <div className="text-5xl font-black text-primary mb-2">
                  5+
                </div>
                <div className="text-muted-foreground">
                  Annual Events
                </div>
              </div>

              <div>
                <div className="text-5xl font-black text-primary mb-2">
                  15+
                </div>
                <div className="text-muted-foreground">
                  Partner Organizations
                </div>
              </div>

              <div>
                <div className="text-5xl font-black text-primary mb-2">
                  25+
                </div>
                <div className="text-muted-foreground">
                  Patents
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
