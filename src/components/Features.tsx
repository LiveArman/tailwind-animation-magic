import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

declare const $: JQuery;

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0"
      data-delay={index * 100}
    >
      <div className="icon-container w-14 h-14 rounded-full bg-hosting-purple/10 flex items-center justify-center text-hosting-purple mb-6">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    // Use jQuery to animate feature cards on scroll
    if (typeof $ !== 'undefined') {
      $(window).on('scroll', function() {
        const windowBottom = $(window).scrollTop()! + $(window).height()!;
        
        $('.feature-card').each(function() {
          const cardTop = $(this).offset()!.top;
          const delay = $(this).data('delay') || 0;
          
          if (windowBottom > cardTop + 100) {
            setTimeout(() => {
              $(this).animate({ opacity: 1 }, 500);
            }, delay);
          }
        });
      });
      
      // Trigger scroll event to check initial visibility
      $(window).trigger('scroll');
    }
  }, []);

  const featuresData = [
    {
      icon: 'fa-bolt',
      title: 'Lightning Fast',
      description: 'Optimized for speed with SSD storage, PHP 8.0, and advanced caching.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Enhanced Security',
      description: 'Free SSL, daily backups, and malware scanning to keep your site secure.'
    },
    {
      icon: 'fa-cogs',
      title: 'WordPress Optimized',
      description: 'Pre-installed WordPress with auto-updates and specialized optimization.'
    },
    {
      icon: 'fa-server',
      title: 'Scalable Resources',
      description: 'Easily upgrade as your site grows with our flexible hosting plans.'
    },
    {
      icon: 'fa-tools',
      title: 'Developer Friendly',
      description: 'SSH access, Git integration, and staging environments for development.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Expert Support',
      description: 'Dedicated WordPress experts available around the clock to help you.'
    }
  ];

  return (
    <section id="wordpress" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose Our WordPress Hosting
          </h2>
          <p className="text-xl text-gray-600">
            Experience the perfect combination of performance, security, and ease of use with our managed WordPress hosting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
