import React from 'react';
import { Link } from 'react-router-dom';
import { useHome } from '../hooks/use-home';

// TERIMA props dari App
const Home = ({ backendMsg, backendError }) => {
  const { heroContent, heroImage } = useHome();

  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* --- BAGIAN GAMBAR --- */}
      <div className="home-visual absolute right-0 top-0 w-full md:w-[65%] h-full">
        <img
          src={heroImage}
          alt="Sistem parkir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-cream to-transparent"></div>
      </div>

      {/* --- BAGIAN TEKS --- */}
      <div className="home-text relative z-10 px-8 md:px-24 max-w-2xl">

        {/* badge utama */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-main/20 mb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-main">
            {heroContent.badge}
          </span>
        </div>

        {/* status backend kecil di bawah badge */}
        <div className="mb-4 text-xs font-medium">
          {backendError ? (
            <span className="text-red-500">
              Backend: {backendError}
            </span>
          ) : backendMsg ? (
            <span className="text-emerald-600">
              Backend OK: {backendMsg}
            </span>
          ) : (
            <span className="text-gray-500">
              Menghubungkan ke backend...
            </span>
          )}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-dark-text mb-6">
          {heroContent.title.line1} <br />
          <span className="text-main">{heroContent.title.highlight}</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
          {heroContent.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={heroContent.buttons.primary.link}
            className="px-8 py-4 bg-main text-white rounded-xl font-semibold shadow-sm hover:bg-main-dark transition flex items-center gap-2 justify-center"
          >
            <i className={`bx ${heroContent.buttons.primary.icon} text-xl`}></i>
            {heroContent.buttons.primary.label}
          </Link>

          <Link
            to={heroContent.buttons.secondary.link}
            className="px-8 py-4 bg-white text-main border border-main/20 rounded-xl font-semibold hover:bg-main/5 transition flex items-center justify-center"
          >
            {heroContent.buttons.secondary.label}
          </Link>
        </div>

        <div className="mt-12 flex gap-10 border-t border-gray-300/40 pt-8">
          {heroContent.stats.map((stat, index) => (
            <div key={index}>
              <h4 className="text-3xl font-bold text-dark-text">
                {stat.value}
                <span className="text-main text-xl">{stat.sub}</span>
              </h4>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
