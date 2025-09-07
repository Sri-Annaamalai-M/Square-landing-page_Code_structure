import React from "react";

const StickyScrollSection = () => {

  return (
    <div>
{/* ---------------- DESKTOP VERSION ---------------- */}
      {/* Combined Section with both contents and images side by side */}
      <div className="max-lg:hidden w-full min-h-screen px-6 xl:px-[100px] 2xl:px-[400px] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-24 flex flex-col justify-center">
            {/* First content block */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                The Biggest Challenge for Modern Enterprises is Mastering Complexity
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
              </p>
            </div>
            
            {/* Second content block */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
              </p>
            </div>
          </div>
          
          {/* Right side - Images stacked vertically */}
          <div className="flex flex-col justify-center -mt-6">
            <img
              src="/images/Container.png"
              alt="Visual 1"
              className="w-full max-w-[800px] h-auto rounded-[22px]"
            />
            <img
              src="/images/Container_2.png"
              alt="Visual 2"
              className="w-full max-w-[800px] h-auto rounded-[22px] -ml-1 -mt-1"
            />
          </div>
        </div>
      </div>

{/* ---------------- TABLET VERSION ---------------- */}
      {/* Tablet Layout - Content then images */}
      <div className="hidden sm:flex lg:hidden flex-col w-full min-h-screen px-6 justify-center">
        {/* First content block */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-manrope font-bold text-black leading-tight mb-6">
            The Biggest Challenge for Modern Enterprises is Mastering Complexity
          </h2>
          <p className="text-lg md:text-xl font-inter font-normal text-black/70 leading-relaxed">
            Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
          </p>
        </div>
        
        {/* First image */}
        <img
          src="/images/Container.png"
          alt="Visual 1"
          className="w-full max-w-[600px] mx-auto h-auto rounded-[22px]"
        />
        
        {/* Second image - continuous with first */}
        <img
          src="/images/Container_2.png"
          alt="Visual 2"
          className="w-full max-w-[600px] mx-auto h-auto rounded-[22px] -mt-1 mb-8 ml-14"
        />
        
        {/* Second content block */}
        <div>
          <h2 className="text-2xl md:text-3xl font-manrope font-bold text-black leading-tight mb-6">
            Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
          </h2>
          <p className="text-lg md:text-xl font-inter font-normal text-black/70 leading-relaxed">
            The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
          </p>
        </div>
      </div>


{/*  ---------------- MOBILE VERSION ---------------- */}
      {/* Combined Mobile Section */}
      <div className="flex flex-col sm:hidden px-6 min-h-screen justify-center">
        {/* First content block */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            The Biggest Challenge for Modern Enterprises is Mastering Complexity
          </h2>
          <p className="text-base text-black/70 mb-6">
            Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
          </p>
        </div>
        
        {/* First image */}
        <img
          src="/images/Container.png"
          alt="Visual 1"
          className="w-full h-auto rounded-[22px]"
        />
        
        {/* Second image - immediately following first */}
        <img
          src="/images/Container_2.png"
          alt="Visual 2"
          className="w-full h-auto rounded-[22px] mb-8 -mt-1 -ml-0.5"
        />
        
        {/* Second content block */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
          </h2>
          <p className="text-base text-black/70">
            The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
          </p>
        </div>
      </div>


    </div>
   
  );
};

export default StickyScrollSection;