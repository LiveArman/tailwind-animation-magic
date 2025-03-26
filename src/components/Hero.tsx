
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize animations when component mounts
    const animateElements = () => {
      // jQuery animation example
      if (typeof $ !== 'undefined') {
        $('.hero-title').animate({ opacity: 1 }, 800);
        $('.hero-subtitle').delay(300).animate({ opacity: 1 }, 800);
        $('.hero-cta').delay(600).animate({ opacity: 1 }, 800);
        $('.feature-item').each(function(index) {
          $(this).delay(900 + (index * 200)).animate({ opacity: 1 }, 800);
        });
      }
    };
    
    // Small delay to ensure everything is loaded
    setTimeout(animateElements, 100);
  }, []);

  // Features data
  const features = [
    { icon: 'fa-globe', text: 'Free domain' },
    { icon: 'fa-robot', text: 'AI tools' },
    { icon: 'fa-headset', text: '24/7 support' }
  ];

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-hosting-purple overflow-hidden flex items-center"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div 
          className="absolute -right-64 -top-64 w-[500px] h-[500px] rounded-full bg-hosting-purple-light opacity-20 blur-3xl"
          style={{ animationDelay: '0.2s' }}
        ></div>
        <div 
          className="absolute right-1/4 top-1/3 w-[300px] h-[300px] rounded-full bg-hosting-teal opacity-10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div 
          className="absolute right-1/3 bottom-1/4 w-[200px] h-[200px] rounded-full bg-purple-300 opacity-10 blur-3xl animate-float"
          style={{ animationDelay: '0.8s' }}
        ></div>
      </div>
      
      {/* Diagonal line */}
      <div className="absolute bottom-0 right-0 w-full h-[150px] bg-gradient-to-r from-hosting-purple-dark to-hosting-purple-light opacity-50" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
      
      <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-white space-y-8">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0">
              Get Managed<br />WordPress<br />Hosting
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl opacity-0 text-white/80">
              Premium hosting solutions with unmatched performance, security, and 24/7 expert support.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item flex items-center space-x-3 opacity-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-hosting-teal flex items-center justify-center text-hosting-purple">
                      <i className={`fas ${feature.icon}`}></i>
                    </div>
                    <span className="text-xl">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="hero-cta pt-4 opacity-0">
                <Button
                  size="lg"
                  className="bg-white text-hosting-purple hover:bg-hosting-teal hover:text-hosting-purple font-semibold text-lg px-8 py-6 h-auto transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started Now
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-xl animate-scale-up">
              <img 
                src="/lovable-uploads/535428f3-3e39-4bec-a1a4-a5bd0874790f.png" 
                alt="Happy customer using our hosting service" 
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Floating elements */}
              <div className="absolute top-16 -right-6 glass-card px-5 py-3 rounded-lg animate-float shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-hosting-teal/20 flex items-center justify-center text-hosting-teal">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Enhanced Security</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-16 -left-6 glass-card px-5 py-3 rounded-lg animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Lightning Fast</p>
                    <p className="text-white/70 text-sm">99.9% Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
