// components/Navbar.jsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const productItems = [
    { title: 'Platform Overview', description: 'Learn about our core platform features', href: '#' },
    { title: 'Integrations', description: 'Connect with your favorite tools', href: '#' },
    { title: 'Stacker AI', description: 'Automate work with AI agents', href: '#' },
  ];
  
  const solutionItems = [
    { title: 'For Sales', description: 'CRM and sales enablement', href: '#' },
    { title: 'For Operations', description: 'Streamline business processes', href: '#' },
    { title: 'For IT', description: 'Build without coding', href: '#' },
  ];
  
  const resourceItems = [
    { title: 'Documentation', description: 'Guides and tutorials', href: '#' },
    { title: 'Blog', description: 'Latest news and updates', href: '#' },
    { title: 'Case Studies', description: 'Customer success stories', href: '#' },
  ];
  
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="relative bg-white border-b   border-gray-100">
      <div className=" max-w-[1380px] mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Stacker Logo" 
                className="h-[60px] mt-1 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex ml-4 mt-1">
              <div 
                className="px-4 py-2 text-gray-700 font-semibold hover:text-black flex items-center cursor-pointer"
                onMouseEnter={() => handleMouseEnter('product')}
              >
                Product
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div 
                className="px-4 py-2 text-gray-700 hover:text-black font-semibold flex items-center cursor-pointer"
                onMouseEnter={() => handleMouseEnter('solutions')}
              >
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div 
                className="px-4 py-2 text-gray-700 font-semibold hover:text-black flex items-center cursor-pointer"
                onMouseEnter={() => handleMouseEnter('resources')}
              >
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <Link href="/pricing" className="px-4 py-2 font-semibold text-gray-700 hover:text-black">
                Pricing
              </Link>
            </div>
          </div>
          
          {/* <div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded">
              Sign in
            </button>
          </div> */}
        </div>
      </div>
      
      {/* Dropdown menus */}
      {activeDropdown && (
        <div 
          className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-6">
            {activeDropdown === 'product' && (
              <div className="grid grid-cols-3 gap-8 px-4">
                {productItems.map((item, index) => (
                  <Link href={item.href} key={index} className="p-4 hover:bg-gray-50 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
            
            {activeDropdown === 'solutions' && (
              <div className="flex justify-between px-4">
                <div className="w-1/3 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">For Sales</h3>
                  <p className="text-sm text-gray-500">CRM and sales enablement</p>
                </div>
                <div className="w-1/3 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">For Operations</h3>
                  <p className="text-sm text-gray-500">Streamline business processes</p>
                </div>
                <div className="w-1/3 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">For IT</h3>
                  <p className="text-sm text-gray-500">Build without coding</p>
                </div>
              </div>
            )}
            
            {activeDropdown === 'resources' && (
              <div className="grid grid-cols-3 gap-8 px-4">
                {resourceItems.map((item, index) => (
                  <Link href={item.href} key={index} className="p-4 hover:bg-gray-50 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}