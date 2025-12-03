import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const contactContent = {
  header: {
    title: { text: "Pusat ", highlight: "Bantuan" },
    desc: "Butuh bantuan mendesak? Hubungi tim support kami langsung atau cari jawaban di pertanyaan umum."
  },
  bento: {
    map: {
      location: "Bandung HQ",
      address: "Jl. Cikutra, Sukapada"
    },
    email: {
      label: "Email Kami",
      value: "cs@wpark.id"
    },
    phone: {
      label: "WhatsApp",
      value: "+62 857-3854"
    },
    socials: [
      { icon: 'bxl-instagram', link: '#' },
      { icon: 'bxl-twitter', link: '#' },
      { icon: 'bxl-linkedin', link: '#' }
    ]
  },
  faqs: [
    {
      question: "Bagaimana cara mereset password akun?",
      answer: "Anda dapat mereset password melalui menu Pengaturan di aplikasi, atau hubungi admin jika Anda lupa email terdaftar."
    },
    {
      question: "Apakah data slot parkir benar-benar real-time?",
      answer: "Ya, sistem kami menggunakan sensor IoT yang mengirim data setiap 200ms. Apa yang Anda lihat di layar adalah kondisi lapangan saat ini."
    },
    {
      question: "Apa yang harus dilakukan jika palang pintu tidak terbuka?",
      answer: "Jangan panik. Tekan tombol 'Bantuan' pada mesin tiket atau hubungi nomor WhatsApp darurat kami yang tertera di halaman ini."
    },
    {
      question: "Apakah aplikasi ini berbayar?",
      answer: "Aplikasi monitoring ini gratis digunakan untuk pengunjung. Tarif parkir tetap mengikuti kebijakan pengelola gedung."
    }
  ]
};

export const useContact = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '40px',
      duration: 2000,
      reset: true
    });
    sr.reveal('.header-section', { delay: 100 });
    sr.reveal('.bento-col', { delay: 200 });
    sr.reveal('.faq-col', { delay: 400 });
  }, []);

  return { openFaq, toggleFaq, contactContent };
};