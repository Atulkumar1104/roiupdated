import React from 'react';

const StackerDashboard = () => {
  return (
    <div className="bg-white max-w-[1380px] mx-auto p-6 font-sans">
      {/* Main Heading */}
      <div className="mb-8 text-black">
        <h1 className="text-5xl font-bold mb-1">Simple as a spreadsheet,</h1>
        <h1 className="text-5xl font-bold mb-3">powerful as a database</h1>
        {/* <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium">Learn more</button> */}
      </div>

      {/* Card Grid - Using grid-cols-3 for base and custom spans */}
      <div className="grid grid-cols-3 gap-4">
        {/* Flexibility Section - Wider Card (2 columns) */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm col-span-2">
          <h3 className="uppercase text-gray-500 text-sm font-semibold mb-2">FLEXIBILITY</h3>
          <p className="text-gray-800 mb-3">Data-Driven Insights</p>
          <img 
            src="https://framerusercontent.com/images/K9bQ7xgONB9QP0xxENFRLNCIzI.svg" 
            alt="Flexibility illustration" 
            className="w-full h-32 object-contain rounded-lg mb-3" 
          />
          <p className="text-sm text-gray-700">
            We crunch the numbers so you don't have to. Every recommendation is backed by real data, not hunches.
          </p>
        </div>

        {/* Customize Section - Narrower Card (1 column) */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="uppercase text-gray-500 text-sm font-semibold mb-2">CUSTOMIZE</h3>
          <p className="text-gray-800 mb-3">Competitor Intelligence
          </p>
          <img 
            src="https://framerusercontent.com/images/fGZv7LjeYgCtlEFmSe4xSm1u9s.png?scale-down-to=512" 
            alt="Customize illustration" 
            className="w-full h-32 object-contain rounded-lg mb-3" 
          />
          <p className="text-sm text-gray-700"> We go beyond basic keyword tracking to monitor what your rivals are doing—and show you how to stay one step ahead.</p>
        </div>

        {/* Control Section - Narrower Card (1 column) */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="uppercase text-gray-500 text-lg font-semibold mb-2">CONTROL</h3>
          <p className="text-gray-800 text-xl mb-3">Adaptable to Any Industry</p>
          <img 
            src="https://framerusercontent.com/images/9ObFAp5MbZacrczZbbwqIBIBB7s.svg" 
            alt="Control illustration" 
            className="w-full h-32 object-contain rounded-lg mb-3" 
          />
          <p className="text-lg text-gray-700">From solopreneurs to mid-sized businesses, our platform is built to flex around your unique challenges and goals.
          </p>
        </div>

        {/* Share Section - Wider Card (2 columns) */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm col-span-2">
          <h3 className="uppercase text-gray-500 text-base font-semibold mb-2">SHARE</h3>
          <p className="text-gray-800 text-xl mb-3">Fast, Expert Support</p>
          <img 
            src="https://framerusercontent.com/images/9zou85Pyma4RGIUqgo3xVm4ZV8k.png?scale-down-to=1024" 
            alt="Share illustration" 
            className="w-full h-32 object-contain rounded-lg mb-3" 
          />
          <p className="text-lg text-gray-700"> Get help when you need it, directly from SEO specialists who understand your business. No runarounds, no call centers.</p>
        </div>
      </div>
    </div>
  );
};

export default StackerDashboard;