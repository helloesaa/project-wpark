import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import heroImage from '../assets/images/Home-image.jpg';

const FEATURE_LIST = [
  {
    id: 1,
    title: 'Monitoring Real-time',
    desc: 'Sistem kami terhubung langsung dengan sensor IoT di lapangan. Pantau kondisi area parkir detik ini juga tanpa delay.',
    details: 'Fitur Monitoring Real-time kami menggunakan arsitektur WebSocket yang memungkinkan pertukaran data dua arah secara instan. Setiap sensor di lapangan akan mengirimkan sinyal perubahan status (dari kosong ke terisi atau sebaliknya) dalam waktu kurang dari 200 milidetik. Dashboard admin dan aplikasi pengguna akan diperbarui secara otomatis tanpa perlu melakukan refresh halaman.',
    img: heroImage, 
    icon: 'bx-broadcast',
    theme: 'blue' 
  },
  {
    id: 2,
    title: 'Deteksi Slot Cerdas',
    desc: 'Tidak perlu lagi berputar-putar mencari tempat kosong. Sensor pintar kami mendeteksi keberadaan kendaraan dengan akurasi 99%.',
    details: 'Kami menggunakan kombinasi sensor Ultrasonik dan Magnetik untuk memastikan deteksi kendaraan yang presisi di berbagai kondisi cuaca. Sistem ini juga dilengkapi algoritma False-Positive filtering untuk membedakan antara mobil sungguhan dengan objek lain.',
    img: heroImage,
    icon: 'bx-target-lock',
    theme: 'green'
  },
  {
    id: 3,
    title: 'Manajemen Akses & Security',
    desc: 'Keamanan adalah prioritas. Sistem gate otomatis terintegrasi dengan kamera pengenal plat nomor (ANPR).',
    details: 'Sistem keamanan WPark mencakup integrasi penuh dengan Gate Barrier otomatis dan kamera LPR (License Plate Recognition). Setiap kendaraan yang masuk akan dicatat plat nomornya secara digital dan disinkronkan dengan database Cloud Server yang terenkripsi.',
    img: heroImage,
    icon: 'bx-shield-quarter',
    theme: 'purple'
  }
];

const getThemeClass = (color, type) => {
  const map = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', pure: 'bg-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', pure: 'bg-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', pure: 'bg-purple-600' },
  };
  return map[color]?.[type] || '';
};

export const useFitur = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 2000,
      reset: false 
    });

    sr.reveal('.header-text', { delay: 200 }); 
    sr.reveal('.feature-card', { interval: 200 });

    return () => sr.destroy();
  }, []);

  return {
    activeFeature,
    setActiveFeature,
    FEATURE_LIST,
    getThemeClass
  };
};