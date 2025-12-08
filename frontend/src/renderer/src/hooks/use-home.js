import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import heroImage from '../assets/images/Home-image.jpg';

const heroContent = {
  badge: "System Online",
  title: {
    line1: "Parkir Jadi",
    highlight: "Lebih Pintar"
  },
  desc: "Sistem monitoring parkir real-time untuk memudahkan Anda menemukan slot kosong dengan cepat, aman, dan efisien.",
  buttons: {
    primary: {
      label: "Cek Slot Sekarang",
      link: "/slot",
      icon: "bx-search-alt"
    },
    secondary: {
      label: "Pelajari Cara Kerja",
      link: "/about"
    }
  },
  stats: [
    { value: "24", sub: "/7", label: "Monitoring" },
    { value: "100", sub: "%", label: "Akurat" }
  ]
};

export const useHome = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 900,
      easing: 'ease-out',
      reset: false
    });

    sr.reveal('.home-text', { origin: 'bottom', delay: 100 });
    sr.reveal('.home-visual', { origin: 'right', delay: 250 });
  }, []);

  return { heroContent, heroImage };
};