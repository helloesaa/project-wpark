const footerContent = {
  brand: {
    title: "WPARK",
    icon: "bxs-parking",
    desc: "Solusi manajemen parkir modern yang mengutamakan efisiensi, keamanan, serta kemudahan bagi pengendara.",
    socials: ['bxl-facebook', 'bxl-instagram', 'bxl-twitter']
  },
  sections: {
    nav: {
      title: "Jelajahi",
      links: [
        { title: 'Home', desc: 'Halaman utama kami', path: '/', icon: 'bx-home-alt' },
        { title: 'Cek Slot', desc: 'Lihat ketersediaan parkir', path: '/slot', icon: 'bx-car' },
        { title: 'Fitur', desc: 'Teknologi yang kami gunakan', path: '/fitur', icon: 'bx-layer' },
      ]
    },
    help: {
      title: "Bantuan",
      links: [
        { title: 'Tentang & Tutorial', desc: 'Panduan penggunaan & Syarat', path: '/about', icon: 'bx-book-open' },
        { title: 'Hubungi Kami', desc: 'Pusat bantuan & kontak', path: '/kontak', icon: 'bx-phone-call' },
      ]
    }
  },
  copyright: "© 2025 WPark System."
};

export const useFooter = () => {
  return { footerContent };
};