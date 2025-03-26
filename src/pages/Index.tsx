
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

declare const $: JQuery;

const Index = () => {
  useEffect(() => {
    // Initial animation setup
    if (typeof $ !== 'undefined') {
      // Smooth scroll for anchor links
      $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $($(this).attr('href')!);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset()!.top - 80
          }, 800);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <PricingSection />
      <Testimonials />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
