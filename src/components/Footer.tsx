import { Link } from 'react-router-dom';
import { Instagram, Youtube, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Collaborators', path: '/collaborators' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-orbitron font-black text-primary-foreground">
              <img src="src/assets/KITPD2S_Logo.png" className='rounded-xl' alt="" />
            </div>
            <span className="font-orbitron font-bold text-xl">KITPD2S</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-lg transition-all duration-200 font-inter font-medium hover:bg-muted hover:text-primary text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social icons (visible on all sizes) and copyright; optimized for mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto md:justify-end">
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <a href="https://instagram.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md hover:bg-muted">
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
              <a href="https://youtube.com/@kitpd2s" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-md hover:bg-muted">
                <Youtube className="w-5 h-5 text-red-500" />
              </a>
              <a href="https://github.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-muted">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/kitpd2s" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-muted">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://twitter.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-md hover:bg-muted">
                <Twitter className="w-5 h-5 text-sky-500" />
              </a>
            </div>

            <div className="text-muted-foreground text-sm text-center md:text-right">
              <p className="font-inter">© 2025 KITPD2S Society</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
