import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import aboutImage from '../assets/images/Home-image.jpg';

const aboutContent = {
  header: {
    badge: "Pusat Informasi",
    title: {
      text: "Informasi & ",
      highlight: "Bantuan"
    },
    desc: "Semua yang perlu Anda ketahui tentang sistem WPark"
  },
  tabs: [
    { id: 'deskripsi', label: 'Tentang', icon: 'bx-info-circle' },
    { id: 'tutorial', label: 'Tutorial', icon: 'bx-book-reader' },
    { id: 'privasi', label: 'Privasi', icon: 'bx-shield-alt-2' },
    { id: 'syarat', label: 'Syarat', icon: 'bx-file' },
  ],
  sections: {
    deskripsi: {
      title: "Mengenal WPark",
      text: "WPark adalah solusi sistem manajemen parkir modern yang dirancang untuk mengatasi masalah efisiensi ruang parkir di area perkotaan padat. Kami menggabungkan teknologi sensor IoT dan antarmuka pengguna yang intuitif.",
      points: ['Monitoring Real-time', 'Keamanan Terjamin', 'Akses Mudah', 'Laporan Akurat'],
      image: aboutImage
    },
    tutorial: {
      title: "Cara Menggunakan WPark",
      desc: "Panduan singkat untuk memulai pengalaman parkir Anda",
      steps: [
        { step: 1, title: 'Buka Menu Slot', desc: 'Navigasikan ke halaman "Slot" melalui menu di atas.', icon: 'bx-pointer', color: 'bg-blue-100 text-blue-600' },
        { step: 2, title: 'Cek Indikator', desc: 'Hijau untuk Kosong, Merah untuk Terisi. Real-time!', icon: 'bx-bulb', color: 'bg-green-100 text-green-600' },
        { step: 3, title: 'Refresh Data', desc: 'Tekan tombol Refresh jika ingin memastikan data terbaru.', icon: 'bx-refresh', color: 'bg-orange-100 text-orange-600' },
        { step: 4, title: 'Lihat Detail', desc: 'Klik pada fitur untuk melihat teknologi yang kami gunakan.', icon: 'bx-detail', color: 'bg-purple-100 text-purple-600' },
      ]
    },
    privasi: {
      title: "Kebijakan Privasi",
      updated: "Terakhir diperbarui: Desember 2025",
      items: [
        { title: "1. Pengumpulan Data", icon: "bx-data", text: "Kami mengumpulkan data plat nomor, foto kendaraan, dan waktu masuk/keluar semata-mata untuk keperluan operasional dan keamanan area parkir." },
        { title: "2. Keamanan Data", icon: "bx-lock-alt", text: "Data Anda disimpan dalam server cloud terenkripsi (AES-256). Kami tidak membagikan data pribadi ke pihak ketiga tanpa izin tertulis atau perintah hukum." }
      ]
    },
    syarat: {
      title: "Syarat Penggunaan",
      desc: "Ketentuan layanan WPark",
      list: [
        'Aplikasi ini adalah alat bantu monitoring. Pengguna tetap wajib memastikan kendaraan terkunci dengan aman.',
        'WPark tidak bertanggung jawab atas kehilangan barang berharga yang ditinggalkan di dalam kendaraan.',
        'Segala bentuk manipulasi sistem atau percobaan peretasan akan diproses sesuai hukum yang berlaku.',
        'Tarif dan aturan parkir mengikuti kebijakan manajemen gedung setempat.'
      ]
    }
  }
};

export const useAbout = () => {
  const [activeTab, setActiveTab] = useState('deskripsi');

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '40px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.about-header', { delay: 100 });
    sr.reveal('.tab-container', { delay: 200 });
    sr.reveal('.content-box', { delay: 300 });
  }, []);

  return { activeTab, setActiveTab, aboutContent };
};