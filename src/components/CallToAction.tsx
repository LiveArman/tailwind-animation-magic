import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

declare const $: JQuery;

const CallToAction = () => {
  useEffect(() => {
    // jQuery animation for the CTA
    if (typeof $ !== 'undefined') {
      $(window).on('scroll', function() {
        const windowBottom = $(window).scrollTop()! + $(window).height()!;
        const ctaSection = $('.cta-section');
        const ctaTop = ctaSection.offset()!.top;
        
        if (windowBottom > ctaTop + 100) {
          $('.cta-content').animate({ opacity: 1 }, 800);
        }
      });
      
      // Trigger scroll event to check initial visibility
      $(window).trigger('scroll');
    }
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gray-50 cta-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-hosting-purple to-hosting-purple-light rounded-2xl p-12 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-hosting-teal/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 cta-content opacity-0 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Launch Your Website?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get started with our WordPress hosting today and enjoy a free domain, easy setup, and 24/7 support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-white text-hosting-purple hover:bg-hosting-teal hover:text-hosting-purple font-semibold text-lg px-8 py-6 h-auto transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Started Now
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto transition-all w-full sm:w-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
