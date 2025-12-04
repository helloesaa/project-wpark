import React from 'react';
import { useFitur } from '../hooks/use-fitur';

const StatItem = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="text-3xl font-bold text-dark-text">{value}</span>
    <span className="text-sm text-gray-500">{label}</span>
  </div>
);

const FeatureModal = ({ feature, onClose, getThemeClass }) => {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-bounce-in">
        <div className="relative h-48 bg-gray-100">
           <img src={feature.img} alt={feature.title} className="w-full h-full object-cover"/>
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
             <h2 className="text-3xl font-bold text-white drop-shadow-md">{feature.title}</h2>
           </div>
           
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"
           >
             <i className='bx bx-x text-2xl'></i>
           </button>
        </div>

        <div className="p-8">
          <div className={`flex items-center gap-3 mb-4 font-semibold ${getThemeClass(feature.theme, 'text')}`}>
            <i className={`bx ${feature.icon} text-xl`}></i>
            <span>Detail Teknologi</span>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8 text-justify">
            {feature.details}
          </p>

          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Tutup Penjelasan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Fitur = () => {
  // Ambil Data dan Helper dari Hook
  const { activeFeature, setActiveFeature, FEATURE_LIST, getThemeClass } = useFitur();

  return (
    <div className="min-h-screen bg-cream overflow-hidden relative">
      <section className="pt-32 pb-12 px-6 md:px-24 flex flex-col items-center text-center">
        <div className="header-text z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/10 text-main font-bold text-sm mb-6">
            <i className='bx bxs-bolt'></i> Teknologi Terbaru
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-dark-text leading-tight mb-6">
            Solusi Cerdas untuk <br />
            <span className="text-main relative">
              Masalah Parkir
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-main opacity-40" viewBox="0 0 200 9" fill="none"><path d="M2.00025 6.99997C25.7509 2.486 83.2796 -2.39487 197.222 7.38269" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Kami menghadirkan fitur-fitur unggulan yang dirancang khusus untuk meningkatkan efisiensi dan keamanan area parkir Anda.
          </p>
          
          <div className="flex justify-center gap-12 border-t border-gray-200 pt-8 w-full max-w-lg mx-auto">
            <StatItem value="3+" label="Fitur Utama" />
            <StatItem value="AI" label="Powered" />
            <StatItem value="24/7" label="Support" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 pb-32 pt-10 space-y-24">
        {FEATURE_LIST.map((item, index) => (
          <div 
            key={item.id} 
            className={`feature-card flex flex-col lg:flex-row items-center gap-12 md:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 w-full relative group cursor-pointer" onClick={() => setActiveFeature(item)}>
              <div className={`absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 ${getThemeClass(item.theme, 'pure')} opacity-30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2`}></div>
              <img 
                src={item.img} 
                alt={item.title} 
                className="relative w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-xl z-10"
              />
            </div>
            <div className="flex-1 w-full space-y-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${getThemeClass(item.theme, 'bg')} ${getThemeClass(item.theme, 'text')}`}>
                <i className={`bx ${item.icon}`}></i>
              </div>
              
              <h3 className="text-3xl font-bold text-dark-text">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-loose">{item.desc}</p>

              <button 
                onClick={() => setActiveFeature(item)}
                className="text-main font-bold flex items-center gap-2 hover:gap-4 transition-all group"
              >
                Pelajari Selengkapnya 
                <i className='bx bx-right-arrow-alt text-xl group-hover:text-main-dark'></i>
              </button>
            </div>
          </div>
        ))}
      </section>

      <FeatureModal 
        feature={activeFeature} 
        onClose={() => setActiveFeature(null)} 
        getThemeClass={getThemeClass}
      />

    </div>
  );
};

export default Fitur;