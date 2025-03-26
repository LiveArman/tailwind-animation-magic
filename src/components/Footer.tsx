
import React from 'react';
import { cn } from '@/lib/utils';

type FooterSectionProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href} 
            className="text-white/70 hover:text-white transition-colors link-underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Hosting",
      links: [
        { label: "WordPress Hosting", href: "#wordpress-hosting" },
        { label: "Shared Hosting", href: "#shared-hosting" },
        { label: "VPS Hosting", href: "#vps-hosting" },
        { label: "Dedicated Servers", href: "#dedicated-servers" },
        { label: "Cloud Hosting", href: "#cloud-hosting" },
      ]
    },
    {
      title: "Domains",
      links: [
        { label: "Domain Checker", href: "#domain-checker" },
        { label: "Domain Transfer", href: "#domain-transfer" },
        { label: "Free Domain", href: "#free-domain" },
        { label: "XYZ Domains", href: "#xyz-domains" },
        { label: "Domain Extensions", href: "#domain-extensions" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Knowledge Base", href: "#knowledge-base" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Website Templates", href: "#website-templates" },
        { label: "Website Builder", href: "#website-builder" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about-us" },
        { label: "Careers", href: "#careers" },
        { label: "Contact Us", href: "#contact-us" },
        { label: "Our Technology", href: "#our-technology" },
        { label: "Infrastructure", href: "#infrastructure" },
      ]
    },
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", href: "#" },
    { icon: "fa-twitter", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-youtube", href: "#" },
  ];

  return (
    <footer className="bg-hosting-purple-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-white font-bold text-2xl tracking-tight flex items-center">
                <span className="text-3xl mr-2">
                  <i className="fas fa-server"></i>
                </span>
                HostPro
              </div>
            </div>
            
            <p className="text-white/70 mb-6">
              Premium web hosting for everyone. Fast, secure, and reliable hosting with 24/7 expert support.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-hosting-teal hover:text-hosting-purple transition-colors"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} HostPro. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="text-white/70 hover:text-white link-underline">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white link-underline">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white link-underline">Cookie Policy</a>
            <a href="#" className="text-white/70 hover:text-white link-underline">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
