
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type PlanProps = {
  name: string;
  price: number;
  discount?: number;
  features: string[];
  isPopular?: boolean;
};

const PricingCard = ({ name, price, discount, features, isPopular }: PlanProps) => {
  return (
    <div className={`pricing-card bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col ${isPopular ? 'border-2 border-hosting-purple relative transform scale-105 z-10' : 'border border-gray-100'}`}>
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-2 bg-hosting-purple text-white rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8 pb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
        
        <div className="mb-6">
          {discount ? (
            <div className="flex items-end mb-1">
              <span className="text-gray-400 line-through text-lg">
                ${(price + discount).toFixed(2)}
              </span>
              <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                Save ${discount.toFixed(2)}
              </span>
            </div>
          ) : null}
          
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">${price.toFixed(2)}</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
        </div>
        
        <Button 
          className={`w-full py-6 h-auto text-lg ${isPopular ? 'bg-hosting-purple hover:bg-hosting-purple-dark' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          Get Started
        </Button>
      </div>
      
      <div className="p-8 pt-4 border-t border-gray-100 flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-hosting-teal mr-3 pt-1">
                <i className="fas fa-check"></i>
              </span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 5.99,
      annualPrice: 3.99,
      discount: 2.00,
      features: [
        "1 Website",
        "15 GB SSD Storage",
        "~10,000 Monthly Visits",
        "Free Domain for 1 Year",
        "Free SSL Certificate",
        "100 Email Accounts",
        "Weekly Backups",
      ],
      isPopular: false
    },
    {
      name: "Premium",
      monthlyPrice: 9.99,
      annualPrice: 6.99,
      discount: 3.00,
      features: [
        "100 Websites",
        "30 GB SSD Storage",
        "~25,000 Monthly Visits",
        "Free Domain for 1 Year",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "Daily Backups",
        "Free CDN",
        "WordPress Staging Environment"
      ],
      isPopular: true
    },
    {
      name: "Business",
      monthlyPrice: 14.99,
      annualPrice: 10.99,
      discount: 4.00,
      features: [
        "100 Websites",
        "100 GB SSD Storage",
        "~100,000 Monthly Visits",
        "Free Domain for 1 Year",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "Daily Backups",
        "Free CDN",
        "WordPress Staging Environment",
        "24/7 Priority Support"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="hosting" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hosting-purple/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your website's needs with our affordable hosting options.
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative mx-4 w-14 h-7 bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out"
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-hosting-teal/20 text-hosting-teal rounded-full text-xs font-medium">
                Save up to 40%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
              discount={isAnnual ? plan.discount : undefined}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-500">
          <p>All plans include free migration, 30-day money-back guarantee, and 24/7 support</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
