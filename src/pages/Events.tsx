import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
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
import event1 from '@/assets/event-1.jpg';
import event2 from '@/assets/event-2.jpg';
import event3 from '@/assets/event-3.jpg';
import event4 from '@/assets/event-4.jpg';
import event5 from '@/assets/event-5.jpg';

const Events = () => {
  const events = [
    {
      title: 'TechCon 2024',
      date: 'March 15, 2024',
      image: event1,
      images: [event1,event2,event3,event4,event5],
      description:
        'Our flagship annual technology conference featuring industry leaders, innovative workshops, and networking opportunities. Over 500 attendees experienced cutting-edge presentations on AI, blockchain, and cloud computing.',
    },
    {
      title: 'Code Sprint Hackathon',
      date: 'April 22-23, 2024',
      image: event2,
      images: [event2],
      description:
        '48-hour intensive coding marathon where teams built innovative solutions to real-world problems. Winners received prizes worth $10,000 and mentorship opportunities with leading tech companies.',
    },
    {
      title: 'Web Development Workshop',
      date: 'May 10, 2024',
      image: event3,
      images: [event3],
      description:
        'Hands-on workshop covering modern web development practices, from React fundamentals to full-stack deployment. Participants built and deployed their own web applications by the end of the session.',
    },
    {
      title: 'Industry Networking Mixer',
      date: 'June 5, 2024',
      image: event4,
      images: [event4],
      description:
        'Connect with professionals, recruiters, and entrepreneurs in an informal setting. Featured speed networking, career advice sessions, and company showcases from our partner organizations.',
    },
    {
      title: 'Future of AI Panel',
      date: 'July 18, 2024',
      image: event5,
      images: [event5],
      description:
        'Expert panel discussion on the transformative impact of artificial intelligence across industries. Topics included ethics in AI, career opportunities, and emerging trends in machine learning.',
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<null | typeof events[0]>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-primary">
              Our Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our past events and see what makes KITPD2S Society unique
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <Card
                key={index}
                onClick={() => {
                  setSelectedEvent(event);
                  setOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedEvent(event);
                    setOpen(true);
                  }
                }}
                role="button"
                tabIndex={0}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-orbitron font-bold mb-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-primary font-semibold mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.date}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Event detail dialog */}
      <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) setSelectedEvent(null);
      }}>
        <DialogContent>
          {selectedEvent ? (
            <div className="space-y-4">
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>{selectedEvent.date}</DialogDescription>

              <div className="w-full h-64 sm:h-80 bg-muted-foreground/10 rounded-md overflow-visible relative">
                <Carousel>
                  <CarouselContent>
                    {selectedEvent.images?.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="w-full h-64 sm:h-80 overflow-hidden rounded-md">
                          <img src={img} alt={`${selectedEvent.title} ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="prose max-w-none text-muted-foreground">
                <p>{selectedEvent.description}</p>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
