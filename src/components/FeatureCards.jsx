import React from 'react';

const FeatureCards = ({ 
  cards,
  backgroundImage = "/images/Bgframe.png",
  maxWidth = "max-w-7xl",
  iconBgColor = "bg-[#e6edfc]",
  cardBgColor = "bg-white",
  textColor = "text-[#040404]",
  descriptionColor = "text-gray-600",
  className = ""
}) => {
  return (
    <div className={`relative z-30 px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 ${className}`}>
      <div className={`${maxWidth} mx-auto`}>
        <div 
          className="relative p-4 xs:p-5 sm:p-6 lg:p-12 xl:p-16 overflow-hidden rounded-xl lg:rounded-2xl" 
          style={{ 
            backgroundImage: `url('${backgroundImage}')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Feature Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className={`${cardBgColor} rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[240px] lg:h-[260px] flex flex-col`}
              >
                <div className={`${iconBgColor} rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center`}>
                  <img 
                    src={card.icon} 
                    alt={card.alt} 
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" 
                  />
                </div>
                <h3 className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium ${textColor} mt-3`}>
                  {card.titleBreak ? (
                    <>
                      {card.title.split(' ').slice(0, -1).join(' ')} <br /> {card.title.split(' ').slice(-1)}
                    </>
                  ) : (
                    card.title
                  )}
                </h3>
                <p className={`text-xs xs:text-sm sm:text-sm font-manrope font-medium ${descriptionColor} mt-3 sm:mt-auto mb-3 xs:mb-4 sm:mb-[20px]`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
