import React from 'react';

const ChangelogCards = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-100 p-8 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12">See How Much You Can Save</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border-black/20 border p-8 shadow-md text-left">
            <h2 className="text-xl font-medium text-gray-500 mb-2">01.</h2>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Eliminate Hidden Costs</h3>
            <p className="text-gray-600">
              Stop wasting budget on link farms, incomplete freelancer solutions, or shady agencies that can hurt your reputation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border-black/20 border p-8 shadow-md text-left">
            <h2 className="text-xl font-medium text-gray-500 mb-2">02.</h2>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Reduce Ad Spend</h3>
            <p className="text-gray-600">
              As your organic traffic grows, you'll rely less on expensive pay-per-click campaigns—putting more money back into your core business. 
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-md rounded-3xl border-black/20 border text-left">
            <h2 className="text-xl font-medium text-gray-500 mb-2">03.</h2>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Focus on What Matters</h3>
            <p className="text-gray-600">
              Let us handle the complexities of SEO, so you and your team can devote time to sales, innovation, and customer satisfaction. 
            </p>
          </div>
        </div>
        
        {/* Added paragraph below all cards */}
        <p className="text-center mt-12 mx-auto text-xl max-w-6xl text-gray-700 font-medium">
        Our Starter Plan begins at $89/month—powerful enough to prove our impact, simple enough to give you peace of mind.

        </p>
      </div>
    </div>
  );
};

export default ChangelogCards;