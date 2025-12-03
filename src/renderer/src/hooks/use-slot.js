import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import heroImage from '../assets/images/Home-image.jpg';

const slotContent = {
  header: {
    badge: "Live Monitoring System",
    title: "Monitoring Slot",
    highlight: "WPark",
    desc: "Pantau ketersediaan area parkir secara real-time. Data diperbarui otomatis untuk kenyamanan Anda.",
    button: {
      loading: "Sedang Memuat...",
      default: "Refresh Data Parkir"
    }
  },
  grid: {
    title: "Slot Parkiran",
    legend: {
      available: "Tersedia",
      occupied: "Terisi"
    }
  },
  initialSlots: [
    { id: 'A-01', occupied: false },
    { id: 'A-02', occupied: false },
    { id: 'A-03', occupied: false },
    { id: 'A-04', occupied: false },
    { id: 'B-01', occupied: false },
    { id: 'B-02', occupied: false },
    { id: 'B-03', occupied: false },
    { id: 'B-04', occupied: false }
  ]
};

export const useSlot = () => {
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState(slotContent.initialSlots);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '40px',
      duration: 1500,
      easing: 'ease-out',
      reset: false
    });

    sr.reveal('.slot-header-content', { delay: 150 });
    sr.reveal('.slot-grid-container', { delay: 350 });
  }, []);

  return {
    loading,
    slots,
    handleRefresh,
    heroImage,
    slotContent
  };
};