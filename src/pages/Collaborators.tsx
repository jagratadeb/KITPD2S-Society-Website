import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import collab1 from '@/assets/KITPD2S_Logo.png';
import collab2 from '@/assets/KITPD2S_Logo.png';
import collab3 from '@/assets/KITPD2S_Logo.png';

const Collaborators = () => {
  const collaborators = [
    {
      name: 'TechOn Industries',
      logo: collab1,
      images: [collab1],
      description:
        'Leading technology solutions provider specializing in enterprise software, cloud infrastructure, and digital transformation. Partnership since 2020.',
    },
    {
      name: 'Innovation Labs',
      logo: collab2,
      images: [collab2],
      description:
        'Research and development partner focused on emerging technologies including AI, IoT, and blockchain. Joint research initiatives and student internships.',
    },
    {
      name: 'Academic Alliance University',
      logo: collab3,
      images: [collab3],
      description:
        'Premier educational institution providing academic resources, venue support, and faculty mentorship for society events and programs.',
    },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-primary">
              Our Collaborators
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering with industry leaders and innovators to create meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborators.map((collab, index) => (
              <Card
                key={index}
                onClick={() => {
                  setSelected(index);
                  setOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelected(index);
                    setOpen(true);
                  }
                }}
                role="button"
                tabIndex={0}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 bg-card flex items-center justify-center p-8">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-primary">
                    {collab.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {collab.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

      {/* Call to Action */}
          <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/50 text-center animate-scale-in">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for new partners who share our vision for innovation and education.
              Let's create something amazing together.
            </p>
          </div>
        </div>
      </main>
      {/* Collaborator detail dialog */}
      <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) setSelected(null);
      }}>
        <DialogContent>
          {selected !== null ? (
            <div className="space-y-4">
              <DialogTitle>{collaborators[selected].name}</DialogTitle>
              <DialogDescription />

              <div className="w-full h-64 sm:h-80 bg-muted-foreground/10 rounded-md overflow-visible relative">
                <Carousel>
                  <CarouselContent>
                    {collaborators[selected].images?.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden rounded-md bg-white">
                          <img src={img} alt={`${collaborators[selected].name} ${i + 1}`} className="max-h-full max-w-full object-contain" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="prose max-w-none text-muted-foreground">
                <p>{collaborators[selected].description}</p>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Collaborators;
