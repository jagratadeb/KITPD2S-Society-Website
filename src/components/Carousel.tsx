import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  name: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    name: 'COLLAB 1',
    image: '/src/assets/KITPD2S_Logo.png',
    description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.',
  },
  {
    name: 'COLLAB 2',
    image: '/src/assets/KITPD2S_Logo.png',
    description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.',
  },
  {
    name: 'COLLAB 3',
    image: '/src/assets/KITPD2S_Logo.png',
    description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[450px] bg-card rounded-2xl overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-48 h-48 object-contain mb-6 rounded-lg"
              />
              <h3 className="text-3xl font-orbitron font-bold mb-3 text-primary">
                {slide.name}
              </h3>
              <p className="text-lg text-muted-foreground">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
