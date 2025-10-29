import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/KITPD2S_Logo.png'

interface Slide {
  name: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  { name: 'COLLABORATION 1', image: Logo, description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.' },
  { name: 'COLLABORATION 2', image: Logo, description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.' },
  { name: 'COLLABORATION 3', image: Logo, description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.' },
  { name: 'COLLABORATION 4', image: Logo, description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.' },
  { name: 'COLLABORATION 5', image: Logo, description: 'Lorem Ipsum is commonly used in design and development as placeholder text to simulate content.' },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] bg-card rounded-xl md:rounded-2xl overflow-hidden group">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center justify-center h-full p-6 md:p-8 text-center">
              <img src={slide.image} alt={slide.name} className="w-28 h-28 md:w-48 md:h-48 object-contain mb-4 md:mb-6 rounded-lg" />
              <h3 className="text-base md:text-xl font-orbitron font-bold mb-2 md:mb-3 text-primary">{slide.name}</h3>
              <p className="text-sm md:text-lg text-muted-foreground px-3 md:px-0">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80" onClick={goToPrevious}>
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </Button>
      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background/80" onClick={goToNext}>
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </Button>
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-6 md:w-8 h-2 md:h-3' : 'bg-muted-foreground/30 w-2 h-2 md:w-3 md:h-3'}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
