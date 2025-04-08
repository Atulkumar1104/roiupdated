// components/NavItem.jsx 
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function NavItem({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 text-gray-700 hover:text-black flex items-center">
        {title}
        {items.length > 0 && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      
      {items.length > 0 && isOpen && (
        <div className="absolute left-0 w-screen bg-white shadow-lg border-t border-gray-200 z-50" 
             style={{ marginTop: '1px', transform: 'translateX(calc(-50% + 2.5rem))' }}>
          <div className="container mx-auto py-6">
            <div className="flex justify-between px-4">
              {title === "Solutions" && (
                <>
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
                </>
              )}
              
              {title !== "Solutions" && (
                <div className="grid grid-cols-3 gap-8 w-full">
                  {items.map((item, index) => (
                    <Link href={item.href} key={index} className="p-4 hover:bg-gray-50 rounded">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}