import React from 'react';
import { useContact } from '../hooks/use-contact';

const Contact = () => {
  const { openFaq, toggleFaq, contactContent } = useContact();
  const { header, bento, faqs } = contactContent;

  return (
    <section className="min-h-screen bg-cream pt-32 pb-20 px-6 md:px-12 lg:px-24">
      
      <div className="header-section text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-dark-text mb-4">
          {header.title.text}<span className="text-main">{header.title.highlight}</span>
        </h1>
        <p className="text-gray-500 text-lg">
          {header.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="bento-col lg:col-span-5 flex flex-col gap-6">
          
          <div className="bg-gray-900 rounded-3xl p-6 text-white relative overflow-hidden h-64 group shadow-xl hover:-translate-y-1 transition-transform duration-300">
             <div className="absolute inset-0 opacity-20" 
                  style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-transform duration-300 group-hover:-translate-y-4">
                <i className='bx bxs-map text-main text-4xl drop-shadow-[0_0_15px_rgba(217,125,85,0.8)] animate-bounce'></i>
                <span className="font-bold text-sm bg-white text-gray-900 px-3 py-1 rounded-full shadow-lg">{bento.map.location}</span>
             </div>

             <div className="absolute bottom-6 left-6 z-10">
               <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Lokasi Kantor</h3>
               <p className="font-medium text-lg leading-tight">{bento.map.address}</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-main/50 transition-all group hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 bg-orange-50 text-main rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className='bx bxs-envelope'></i>
              </div>
              <h3 className="text-gray-400 text-[10px] font-bold uppercase mb-1">{bento.email.label}</h3>
              <p className="font-bold text-gray-800 text-sm truncate">{bento.email.value}</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-main/50 transition-all group hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className='bx bxs-phone'></i>
              </div>
              <h3 className="text-gray-400 text-[10px] font-bold uppercase mb-1">{bento.phone.label}</h3>
              <p className="font-bold text-gray-800 text-sm">{bento.phone.value}</p>
            </div>
          </div>

          <div className="bg-main rounded-3xl p-6 flex items-center justify-between text-white shadow-lg shadow-main/20">
            <span className="font-bold text-lg">Ikuti Kami</span>
            <div className="flex gap-2">
               {bento.socials.map((social, idx) => (
                 <a key={idx} href={social.link} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-main transition-all">
                    <i className={`bx ${social.icon} text-xl`}></i>
                 </a>
               ))}
            </div>
          </div>

        </div>

        <div className="faq-col lg:col-span-7">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-main rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800">Pertanyaan Umum</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-main bg-orange-50/30' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openFaq === index ? 'text-main' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                    <i className={`bx bx-chevron-down text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-main' : 'text-gray-400'}`}></i>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-gray-400 text-sm">
              <p>Masih ada kendala lain?</p>
              <button className="text-main font-bold hover:underline mt-1">
                Chat Admin Sekarang &rarr;
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;