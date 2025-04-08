import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start  p-6 bg-gray-50 rounded-lg">
    <div className="mr-4">
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const StackerFeatures = () => {
  return (
    <div className="max-w-[1380px]  mx-auto px-4 py-10">
      <h1 className="text-5xl text-black font-bold mb-12">Why People Choose Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Database Feature */}
        <FeatureCard
          icon={
            <div className="relative w-10 h-10">
              <div className="absolute top-0 left-0 w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="absolute top-0 right-0 w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 right-1 w-5 h-8">
                <div className="w-full h-full bg-indigo-600 rotate-45 transform origin-bottom-left"></div>
              </div>
            </div>
          }
          title="Unmatched Transparency"
          description="From day one, you’ll have full access to dashboards detailing everything from keyword moves to overall ROI.
"
        />
        
        {/* Securely Share Data Feature */}
        <FeatureCard
          icon={
            <div className="relative w-12 h-6 bg-gray-100 rounded-full p-1 flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full absolute left-6"></div>
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="gray" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          }
          title="Long-Term Partnerships
"
          description="We’re more than just a service; we’re your growth ally. Expect continuous optimization, regular check-ins, and proactive updates."
        />
        
        {/* Save Time Feature */}
        <FeatureCard
          icon={
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
          }
          title="Risk-Free Trial
"
          description="Take us for a spin, and experience firsthand how our approach elevates your search visibility—no strings attached.
"
        />
        
        {/* Brandable Portal Feature */}
        <FeatureCard
          icon={
            <div className="w-12 h-6 border-2 border-teal-400 flex justify-center">
              <div className="w-2 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
            </div>
          }
          title="A fully brandable portal"
          description="Put your company's stamp on a Stacker Portal, with a logo, brand colours, a custom domain and SSO."
        />
      </div>
    </div>
  );
};

export default StackerFeatures;