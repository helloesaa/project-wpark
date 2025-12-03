import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../assets/images/Home-image.jpg';

const navbarData = {
  logo: logoImg,
  menus: [
    { label: 'Home', path: '/', icon: 'bx-home-alt' },
    { label: 'Slot', path: '/slot', icon: 'bx-car' },
    { label: 'Fitur', path: '/fitur', icon: 'bx-layer' },
    { label: 'About', path: '/about', icon: 'bx-info-circle' },
    { label: 'Kontak', path: '/kontak', icon: 'bx-phone' },
  ]
};

export const useNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    open,
    setOpen,
    toggle,
    scrolled,
    location,
    navbarData
  };
};