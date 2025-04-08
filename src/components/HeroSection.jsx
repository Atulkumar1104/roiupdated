// components/HeroSection.jsx
import AnnouncementBar from "./AnnouncementBar";

export default function HeroSection() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto max-w-[1380px]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 py-12 md:py-24 ">
            {/* <AnnouncementBar /> */}

            <h1 className="text-4xl md:text-7xl text-black font-bold leading-tight  mb-6">
              Reinvent Your Reach. Redefine Success.
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Discover SEO built to help your business stand out—transparent,
              data-driven, and engineered for genuine, sustainable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-black text-white font-medium px-6 py-3 rounded-full text-center"
              >
                Try Stacker for free
              </a>
              <a
                href="#"
                className="bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full text-center"
              >
                Book a demo
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* Hero Image */}
            <div className="h-80 md:h-full rounded-2xl overflow-hidden relative">
              <img
                src="https://i.pinimg.com/736x/d6/7c/be/d67cbea3711a42d7efc9cb5c234f8dce.jpg"
                alt="Person using Stacker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
