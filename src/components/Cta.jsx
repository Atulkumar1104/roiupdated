import React from 'react'; 
import Image from 'next/image';  

const StackerCTA = () => {   
  return (     
    <div className="mx-auto my-6 max-w-[1380px] rounded-xl overflow-hidden shadow-xl">       
      <div className="relative w-full h-[480px]">         
        {/* Background Image */}         
        <div className="absolute inset-0 w-full h-full">           
          <Image             
            src="/bg.avif"              
            alt="Office workspace"             
            fill             
            style={{ objectFit: 'cover' }}             
            priority           
          />         
        </div>                  
        
        {/* Darker overlay for better text visibility */}         
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>                  
        
        {/* Content Container */}         
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16 py-16 text-center">           
          {/* Logo */}           
          <div className="mb-12 backdrop-blur-[1.5px] rounded-2xl">             
            <Image               
              src="/logo.png"                
              alt="Stacker logo"               
              width={130}               
              height={45}               
              className="mx-auto"             
            />           
          </div>                      
          
          {/* Heading */}           
          <h1 className="max-w-3xl backdrop-blur-[2px] mx-auto mb-8 text-4xl md:text-5xl font-bold text-white leading-relaxed">             
            Your Next Step? <br className="md:block hidden"/> Experience It Yourself.            
          </h1>                      
          
          {/* Paragraph after heading */}           
          <p className="max-w-2xl backdrop-blur-[2px] mx-auto mb-14 text-lg font-medium text-white leading-relaxed">           
            Join the business owners who are stepping into a new era of clear, consistent, and quality-focused SEO. We'll help you reach the top—and stay there.            
          </p>                      
          
          {/* CTA Buttons */}           
          <div className="flex flex-col md:flex-row justify-center gap-6">             
            <button className="px-8 py-3.5 text-base font-medium text-gray-800 transition-colors bg-white rounded-full hover:bg-gray-100 shadow-lg">               
              Try ROI             
            </button>             
            <button className="px-8 py-3.5 text-base font-medium text-white transition-colors bg-gray-700/90 rounded-full hover:bg-gray-800 border border-gray-500 shadow-lg">               
              Book a demo             
            </button>           
          </div>         
        </div>       
      </div>     
    </div>   
  ); 
};  

export default StackerCTA;