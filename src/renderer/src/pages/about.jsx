import React from 'react';
import { useAbout } from '../hooks/use-about';

const About = () => {
  const { activeTab, setActiveTab, aboutContent } = useAbout();
  const { sections } = aboutContent;

  const renderContent = () => {
    switch (activeTab) {
      case 'deskripsi':
        return (
          <div className="flex flex-col lg:flex-row gap-12 items-center animate-fadeIn">
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-main mb-2">{sections.deskripsi.title}</h3>
                <div className="h-1 w-20 bg-main rounded-full"></div>
              </div>
              
              <p className="text-gray-600 leading-loose text-lg text-justify">
                {sections.deskripsi.text}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {sections.deskripsi.points.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <i className='bx bxs-check-circle text-green-500 text-xl'></i>
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative group">
              <div className="absolute -inset-4 bg-main/10 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src={sections.deskripsi.image} 
                alt="Tentang WPark" 
                className="relative rounded-3xl shadow-2xl w-full h-80 object-cover z-10"
              />
            </div>
          </div>
        );

      case 'tutorial':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">{sections.tutorial.title}</h3>
              <p className="text-gray-500">{sections.tutorial.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.tutorial.steps.map((item) => (
                <div key={item.step} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${item.color}`}>
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Langkah {item.step}</span>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'privasi':
        return (
          <div className="animate-fadeIn max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 bg-main/10 text-main rounded-2xl flex items-center justify-center text-3xl">
                <i className='bx bx-shield-alt-2'></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{sections.privasi.title}</h3>
                <p className="text-gray-500">{sections.privasi.updated}</p>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {sections.privasi.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i className={`bx ${item.icon} text-main`}></i> {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'syarat':
        return (
          <div className="animate-fadeIn max-w-3xl mx-auto">
             <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center text-3xl">
                <i className='bx bx-file'></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{sections.syarat.title}</h3>
                <p className="text-gray-500">{sections.syarat.desc}</p>
              </div>
            </div>

            <ul className="space-y-4">
              {sections.syarat.list.map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <i className='bx bx-radio-circle-marked text-main text-xl mt-1'></i>
                  <span className="text-gray-600 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-cream pt-32 pb-20 px-6 md:px-24">
      
      <div className="about-header text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm mb-6 shadow-sm">
          <i className='bx bx-info-circle text-main'></i> {aboutContent.header.badge}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
          {aboutContent.header.title.text} <span className="text-main">{aboutContent.header.title.highlight}</span>
        </h2>
        <p className="text-gray-500 text-lg">{aboutContent.header.desc}</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden min-h-[500px] flex flex-col md:flex-row">
        
        <div className="tab-container w-full md:w-64 bg-gray-50 p-6 border-r border-gray-100 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {aboutContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-3 px-5 py-4 rounded-xl font-semibold transition-all duration-300 w-full text-left whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-main text-white shadow-lg shadow-main/30 translate-x-2' 
                  : 'text-gray-500 hover:bg-white hover:text-main hover:shadow-sm'}
              `}
            >
              <i className={`bx ${tab.icon} text-xl`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="content-box flex-1 p-8 md:p-12 overflow-y-auto">
          {renderContent()}
        </div>

      </div>

    </section>
  );
};

export default About;