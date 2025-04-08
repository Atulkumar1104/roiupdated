'use client'
import React, { useState, useRef, useEffect } from 'react';

const CRMLandingPage = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Feature cards data - exactly 3 cards
  const featureCards = [
    {
      category: "CUSTOMIZE",
      title: "Real-Time Visibility",
      image: "https://framerusercontent.com/images/1TUKLZ7DlVdmVIe4TdmVTohLj0.svg",
      points: [
        " Stop wondering if your SEO works. With direct Google Analytics and Search Console integration, you’ll see exactly how your traffic, rankings, and conversions change—right when they happen",

      ]
    },
    {
      category: "INTERFACE",
      title: "Tailored to You",
      image: "https://framerusercontent.com/images/BfqSeSNqgBT6ZxHGDB1yQjQ12ds.png?scale-down-to=512",
      points: [
        " We don’t do “one-size-fits-all.” Our strategies are built around your specific goals, competitor landscape, and target audience, ensuring every move is aligned with your business growth.",

      ]
    },
    {
      category: "INSIGHTS",
      title: "Quality You Can Trust",
      image: "https://framerusercontent.com/images/meOdQ6ZzNRf47YdX5OkcIlEpGXs.svg",
      points: [
        " We won’t cut corners or chase cheap tricks. Our team focuses on building a lasting digital presence that actually supports your brand’s reputation—no hidden tactics, no empty promises.",

      ]
    }
  ];

  // Check if we can scroll left or right
  useEffect(() => {
    const checkScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
      }
    };

    // Set initial scroll state
    checkScroll();
    
    // Add event listener for scroll
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
    }
    
    // Clean up
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  // Handle slide navigation
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.card-item').offsetWidth;
      carouselRef.current.scrollBy({
        left: -cardWidth - 16, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.card-item').offsetWidth;
      carouselRef.current.scrollBy({
        left: cardWidth + 16, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-[1380px] mx-auto py-16 font-sans">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl max-w-2xl text-black font-bold mb-2">Free Your Business from SEO Guesswork
        </h1>
        {/* <p className="text-black">
          Unlock your team's potential. Simplify tasks and supercharge 
          productivity with Stacker CRM!
        </p> */}
      </div>

      {/* Feature Section with Horizontal Scrolling */}
      <div className="relative mb-8">
        {/* Left Navigation Button - Only visible if we can scroll left */}
        {canScrollLeft && (
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 text-black"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {/* Right Navigation Button - Only visible if we can scroll right */}
        {canScrollRight && (
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 text-black"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        
        {/* Horizontal Scrolling Container with limited width to ensure cards are hidden */}
        <div className="overflow-hidden mx-4">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto hide-scrollbar py-2" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="card-item flex-shrink-0 w-full max-w-md mr-4"
                style={{ minWidth: '300px' }}
              >
                <FeatureCard card={card} />
              </div>
            ))}
            {/* Add extra space at the end for better UX */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ card }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg h-full text-black">
      <div className="uppercase text-sm font-semibold text-black mb-2">{card.category}</div>
      <h2 className="text-lg font-semibold mb-4 text-black">{card.title}</h2>
      
      {/* Card Image */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <img 
          src={card.image} 
          alt={`${card.category} illustration`} 
          className="w-full h-48 object-cover" 
        />
      </div>
      
      {/* Bullet points */}
      <div className="space-y-3">
        {card.points.map((point, index) => (
          <div key={index} className="flex items-start">
            <div className="text-black mr-2 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-black">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add global CSS
const globalStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

// Insert global CSS styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}

export default CRMLandingPage;