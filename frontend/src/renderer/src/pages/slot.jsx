import React from 'react';
import { useSlot } from '../hooks/use-slot';

const Slot = () => {
  const { loading, slots, handleRefresh, heroImage, slotContent } = useSlot();

  return (
    <div className="min-h-screen bg-cream">
      <div className="relative w-full min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Background Parkir"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#F4E9D7]/70 backdrop-blur-[2px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F4E9D7] to-transparent"></div>
        </div>

        <div className="slot-header-content relative z-10 text-center px-4 max-w-4xl mx-auto"> 
          <div className="inline-block px-4 py-1 rounded-full bg-main/10 text-main font-semibold text-sm mb-4 border border-main/20 shadow-sm">
            {slotContent.header.badge}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-dark-text mb-6 leading-tight drop-shadow-sm">
            {slotContent.header.title} <span className="text-main">{slotContent.header.highlight}</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {slotContent.header.desc}
          </p>
          
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className={`
              mx-auto px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-main/20
              flex items-center gap-3 transition-all duration-300
              ${loading 
                ? 'bg-main/60 cursor-wait scale-95' 
                : 'bg-main hover:bg-main-dark hover:-translate-y-1 active:scale-95'}
            `}
          >
            <i className={`bx bx-refresh text-2xl ${loading ? 'animate-spin' : ''}`}></i>
            {loading ? slotContent.header.button.loading : slotContent.header.button.default}
          </button>

        </div>
      </div>

      <div className="slot-grid-container px-6 md:px-24 pb-24 relative z-20 mt-0 md:-mt-16">
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 pb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4 md:mb-0">
              <i className='bx bxs-map-alt text-main'></i> {slotContent.grid.title}
            </h3>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <span className="flex items-center gap-2 text-green-700">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full shadow-green-200 shadow-lg"></div> 
                {slotContent.grid.legend.available}
              </span>
              <span className="flex items-center gap-2 text-red-700">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full shadow-red-200 shadow-lg"></div> 
                {slotContent.grid.legend.occupied}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {slots.map((slot) => (
              <div 
                key={slot.id} 
                className={`
                  relative h-32 md:h-40 rounded-2xl flex flex-col items-center justify-center border-2
                  transition-all duration-300 group

                  ${slot.occupied 
                    ? 'bg-red-50/50 border-red-200 text-red-400 cursor-not-allowed'
                    : 'bg-green-50/50 border-green-200 text-green-500 hover:border-green-500 hover:bg-green-50 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] cursor-pointer'}
                `}
              >
                <i className={`bx ${slot.occupied ? 'bx-car' : 'bx-check-circle'} text-4xl md:text-5xl mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110`}></i>
                <span className={`text-lg md:text-xl font-bold ${slot.occupied ? 'text-red-500' : 'text-green-700'}`}>
                  {slot.id}
                </span>
                <span className="text-[10px] md:text-xs font-semibold mt-1 uppercase tracking-wider opacity-70">
                  {slot.occupied ? slotContent.grid.legend.occupied : slotContent.grid.legend.available}
                </span>
                <div className={`absolute top-3 right-3 w-2 h-2 md:w-3 md:h-3 rounded-full ${slot.occupied ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slot;