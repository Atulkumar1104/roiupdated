'use client'
import React, { useState, useEffect, useRef } from 'react';

const StatsCard = ({ percentage, heading, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-2 ${isHovered ? 'border-orange-500 scale-105' : 'border-orange-200'} hover:shadow-2xl transition-all duration-300 transform`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-5xl font-bold mb-4 transition-all duration-500 ${isHovered ? 'text-orange-600 scale-110' : 'text-orange-500'}`}>
        {percentage}
      </div>
      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-orange-800' : 'text-gray-800'}`}>
        {heading}
      </h3>
      <p className={`transition-colors duration-300 ${isHovered ? 'text-gray-700' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

const StatsCardGrid = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Changed this part to set visible based on current intersection state
        setVisible(entry.isIntersecting);
        // Removed the unobserve call to keep monitoring
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const mainHeading = "Real Results. Real Savings.";
  const subHeading = "Proven performance metrics from our satisfied clients";
  
  const stats = [
    {
      percentage: "40%",
      heading: "Lower Acquisition Costs",
      description: "Brands that invest in a well-executed SEO strategy see their cost-per-acquisition drop by an average of 40%—all while organic leads keep climbing."
    },
    {
      percentage: "50%",
      heading: "Less Spent on Ads",
      description: "Over-reliance on paid ads can drain your budget fast. A strong SEO foundation steadily replaces that spend, helping you redirect funds where they matter most."
    },
    {
      percentage: "2x",
      heading: "Return Within 12 Months",
      description: "Many businesses report seeing a double return on investment in just the first year, proving that quality SEO pays for itself—and then some."
    },
    {
      percentage: "80%",
      heading: "Reduction in Time Spent on \"Fixes\"",
      description: "Cheap tactics often lead to hidden penalties and endless patch-ups. With a trusted agency from the start, you avoid costly cleanups and wasted effort down the line."
    }
  ];

  return (
    <div ref={sectionRef} className="w-full max-w-[1380px] mx-auto  bg-gradient-to-b from-white to-orange-100 rounded-2xl ">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-4xl md:text-5xl font-semibold mb-10 text-center text-gray-800  drop-shadow-sm">
          {mainHeading}
        </h1>
        {/* <p className="text-center text-orange-600 font-medium mb-10">{subHeading}</p> */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <StatsCard
              percentage={stat.percentage}
              heading={stat.heading}
              description={stat.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCardGrid;