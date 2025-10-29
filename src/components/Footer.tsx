import { Link } from 'react-router-dom';
import { Instagram, Youtube, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/assets/KITPD2S_Logo.png'

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
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Branding */}
          <Link to="/" className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-orbitron font-black text-primary-foreground">
              <img src={Logo} className='rounded-xl' alt="" />
            </div>
            <span className="font-orbitron font-bold text-xl">KITPD2S</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-lg transition-all duration-200 font-inter font-medium hover:bg-muted hover:text-primary text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="font-orbitron font-semibold text-lg mb-2">Contact Us</h4>
            <p className="text-muted-foreground text-sm font-inter">kitpd2s@gmail.com</p>
            <p className="text-muted-foreground text-sm font-inter">+91  936551XXXX</p>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <a href="https://instagram.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md hover:bg-muted">
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>
            <a href="https://youtube.com/@kitpd2s" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-md hover:bg-muted">
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
            <a href="https://linkedin.com/company/kitpd2s" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-muted">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a href="https://github.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-muted">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/kitpd2s" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-md hover:bg-muted">
              <Twitter className="w-5 h-5 text-sky-500" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-inter">© 2025 KITPD2S Society</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
