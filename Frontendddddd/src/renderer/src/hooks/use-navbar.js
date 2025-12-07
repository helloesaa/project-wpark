import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Authh/AuthContext'; // Kita panggil context di sini
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
  const [showAuthModal, setShowAuthModal] = useState(false); 
  const { user, logout } = useAuth(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggle = () => setOpen((prev) => !prev);
  const openLoginModal = () => {
    setOpen(false); 
    setShowAuthModal(true);
  };

  const closeLoginModal = () => setShowAuthModal(false);
  const handleLogout = () => {
    logout();               
    setDropdownOpen(false); 
    setOpen(false);         
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    navbarData, user, location, open, setOpen, scrolled, showAuthModal, dropdownOpen, setDropdownOpen, dropdownRef, toggle, openLoginModal, closeLoginModal, handleLogout
  };
};