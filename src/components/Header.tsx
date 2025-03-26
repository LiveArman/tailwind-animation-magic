
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-12 py-5",
        scrolled ? "bg-hosting-purple/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-white font-bold text-2xl tracking-tight flex items-center">
            <span className="text-3xl mr-2">
              <i className="fas fa-server"></i>
            </span>
            HostPro
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Hosting', 'Domains', 'WordPress', 'Website Builder', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white opacity-90 hover:opacity-100 link-underline font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:flex bg-transparent text-white border-white hover:bg-white/10 transition-all"
          >
            Sign In
          </Button>
          
          <Button
            className="bg-hosting-teal text-hosting-purple hover:bg-white font-semibold transition-all"
          >
            Get Started
          </Button>
          
          <button className="md:hidden text-white text-xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
