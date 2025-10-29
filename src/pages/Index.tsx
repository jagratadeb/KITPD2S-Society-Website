import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section 
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-3 md:px-4 pt-20 md:pt-16"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-orbitron font-black mt-6 mb-4 md:mb-6 text-primary">
              KITPD2S SOCIETY
            </h1>
            <p className="text-base md:text-2xl text-foreground max-w-lg md:max-w-3xl mx-auto leading-relaxed">
              Empowering innovation and collaboration through technology, education, and community excellence. 
              Building the future together.
            </p>
          </div>
          <div className="max-w-full md:max-w-5xl mx-auto animate-scale-in mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-6 md:mb-8 text-primary">
              Our Collaborators
            </h2>
            <Carousel />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;