'use client'
import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Info, Lock, Database, Link2, FileText, Layers } from 'lucide-react';

const BusinessDataStore = () => {
  const [activeFeature, setActiveFeature] = useState('linked');
  const [showDescription, setShowDescription] = useState(null);
  
  // Auto-cycle through features every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const featureIds = features.map(f => f.id);
        const currentIndex = featureIds.indexOf(current);
        const nextIndex = (currentIndex + 1) % featureIds.length;
        return featureIds[nextIndex];
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      id: 'flexible',
      title: 'Clarity, Not Confusion',
      description: 'Forget shady reports and complex jargon. Our transparent approach gives you a clear path to measurable results every step of the way.',
      icon: <Database className="w-5 h-5" />,
      image: "https://framerusercontent.com/images/1iHDA9Jc2nB1n1BMd5s4hW5LLk.webp?scale-down-to=1024"
    },
    {
      id: 'linked',
      title: 'Save Time and Money',
      description: ' Stop pouring resources into second-rate solutions that barely move the needle. Our proven methods help you rank higher, lower your customer acquisition costs, and reduce your reliance on pricey ads.',
      icon: <Link2 className="w-5 h-5" />,
      image: "https://framerusercontent.com/images/z6DZpEwVXHL8qd8ZYwDcx1XFw.webp?scale-down-to=1024"
    },
    {
      id: 'formulas',
      title: 'Invest in Long-Term Success',
      description: 'Because our focus is on sustainable growth, you will see ongoing improvements in organic traffic, stronger engagement from high-intent customers, and a foundation you can build on month after month.',
      icon: <FileText className="w-5 h-5" />,
      image: "https://framerusercontent.com/images/8UJUZBlRDytIMRcUuqEAsRw2Uo.webp?scale-down-to=1024"
    },
  ];

  return (
    <div className="max-w-[1380px] mx-auto p-4">
      {/* Heading Section */}
      <div className="mb-10">
        <h1 className="text-5xl text-black font-bold">Everything you need from a<br />business data store</h1>
      </div>
      
      {/* Main Content Section - Split in Two Equal Parts */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Feature List */}
        <div className="w-full md:w-1/2 p-4">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`p-4 mb-4 rounded-lg cursor-pointer ${activeFeature === feature.id ? 'bg-gray-100' : ''}`}
              onClick={() => setActiveFeature(feature.id)}
              onMouseEnter={() => setShowDescription(feature.id)}
              onMouseLeave={() => setShowDescription(null)}
            >
              <div className="flex items-center mb-1">
                <span className="p-1 bg-gray-100 text-black rounded-lg mr-3">
                  {feature.icon}
                </span>
                <h2 className="font-medium text-black text-xl">{feature.title}</h2>
              </div>
              {(showDescription === feature.id || activeFeature === feature.id) && (
                <p className="text-gray-600 ml-10 transition-opacity duration-300">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Section - Image Display */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="bg-gray-50 rounded-lg p-4 w-full flex items-center justify-center">
            <img 
              src={features.find(f => f.id === activeFeature).image}
              alt={`${activeFeature} visualization`}
              className="rounded-lg shadow-md max-h-150 -mt-16 max-w-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDataStore;