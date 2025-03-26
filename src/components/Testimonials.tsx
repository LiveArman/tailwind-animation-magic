import React, { useEffect } from 'react';

declare const $: JQuery;

const Testimonials = () => {
  useEffect(() => {
    // jQuery animation for testimonials on scroll
    if (typeof $ !== 'undefined') {
      $(window).on('scroll', function() {
        const windowBottom = $(window).scrollTop()! + $(window).height()!;
        
        $('.testimonial-card').each(function(index) {
          const testimonialTop = $(this).offset()!.top;
          
          if (windowBottom > testimonialTop + 100) {
            setTimeout(() => {
              $(this).animate({ opacity: 1 }, 500);
            }, index * 150);
          }
        });
      });
      
      // Trigger scroll event to check initial visibility
      $(window).trigger('scroll');
    }
  }, []);

  const testimonials = [
    {
      quote: "Switching to this hosting service was the best decision for my business. The site speed has improved dramatically, and customer support is always available when I need them.",
      author: "Sarah Johnson",
      role: "E-commerce Store Owner",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "I'm not very technical, but their WordPress hosting made everything so easy. One-click installations, automatic updates, and their support team helped me set up my blog in minutes.",
      author: "Michael Chen",
      role: "Travel Blogger",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "The performance is outstanding! My website loads in under 2 seconds now, which has significantly improved my conversion rates and SEO rankings.",
      author: "Alexandra Davis",
      role: "Marketing Agency Director",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="bg-hosting-purple py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-20 translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-hosting-teal rounded-full opacity-20 -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of satisfied customers who trust us with their websites.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 opacity-0"
            >
              <div className="mb-6 text-hosting-teal">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
              
              <p className="text-white/90 mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
