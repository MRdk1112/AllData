import React from 'react';

function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Slide 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://static.uengage.in/uploads/5/image-418128-1742387851.jpeg"
              className="absolute block w-full h-full object-cover"
              alt="Pizza Deal 1"
            />
          </div>
          {/* Slide 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://static.uengage.in/uploads/5/image-969587-1742387608.jpeg"
              className="absolute block w-full h-full object-cover"
              alt="Pizza Deal 2"
            />
          </div>
        </div>
        {/* Controls */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 group-hover:bg-white/80">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 group-hover:bg-white/80">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;
