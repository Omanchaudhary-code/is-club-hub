
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Info, Code, Calendar, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with updated icons
  const navItems = [
    { name: 'About', href: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Focus Areas', href: '/focus-areas', icon: <Code className="w-4 h-4" /> },
    { name: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Team', href: '/team', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span><img src="https://i.imgur.com/Z9AjSJE.png" alt="Logo" width="32px"/></span>
          <span className="font-mono text-isclub-teal font-bold text-xl">IS</span>
          <span className="font-mono font-medium text-xl text-isclub-dark">Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="group flex items-center space-x-1 text-sm font-medium text-isclub-gray hover:text-isclub-teal transition-colors"
            >
              <span>{item.icon}</span>
              <span className="inline-block relative">
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-isclub-teal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-isclub-gray" />
          ) : (
            <Menu className="w-6 h-6 text-isclub-gray" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="container px-4 mx-auto py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-base font-medium text-isclub-gray hover:text-isclub-teal transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
