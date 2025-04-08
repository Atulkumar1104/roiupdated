'use client'
import React, { useEffect, useRef } from 'react';

const MovingText = () => {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    const animate = () => {
      if (scrollContainer) {
        // Move the content by 1px each frame
        scrollContainer.scrollLeft += 1;
        
        // Reset when we reach the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Create duplicate content to ensure seamless scrolling
  const textContent = "Changelog ✦ Collect Feedback ✦ Showcase Roadmap ✦ ";
  const duplicatedContent = textContent.repeat(10); // Repeat to ensure enough content
  
  return (
    <div className="relative text-black text-xl w-full overflow-hidden bg-gray-100 py-4">
      {/* Left white gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      <div 
        ref={scrollRef}
        className="whitespace-nowrap overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="inline-block">
          {duplicatedContent}
        </div>
      </div>
      
      {/* Right white gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default MovingText;