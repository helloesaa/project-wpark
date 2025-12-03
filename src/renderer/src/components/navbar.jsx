import React from 'react';
import { Link } from 'react-router-dom';
import { useNavbar } from '../hooks/use-navbar';

const Navbar = () => {
  const { open, setOpen, toggle, scrolled, location, navbarData } = useNavbar();
  const { logo, menus } = navbarData;

  return (
    <header
      className={`fixed w-full top-0 z-[999] transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="px-6 lg:px-24 flex items-center justify-between">
        
        <Link to="/" className="flex items-center group relative z-[1001]">
          <div className="h-10 w-auto flex items-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 object-contain rounded-md"
            />
          </div>
        </Link>

        <button
          onClick={toggle}
          className={`text-3xl lg:hidden transition relative z-[1001] ${
            scrolled || open ? 'text-gray-800' : 'text-white'
          }`}
        >
          <i className={`bx ${open ? 'bx-x' : 'bx-menu'} transform transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}></i>
        </button>

        <nav
          className={`
            absolute lg:static left-0 top-0 w-full lg:w-auto bg-white lg:bg-transparent 
            overflow-hidden transition-all duration-500 ease-in-out
            ${open ? 'max-h-screen opacity-100 pt-24 pb-8 shadow-xl' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100 lg:shadow-none'}
          `}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 px-6 lg:px-0">
            {menus.map((item) => {
              const active = location.pathname === item.path;

              return (
                <li key={item.label} className="w-full lg:w-auto">
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`
                      group flex items-center gap-4 py-3 px-4 rounded-xl text-base font-medium
                      transition-all duration-300
                      
                      /* Mobile Styles */
                      text-gray-600 hover:bg-gray-50 hover:text-main hover:pl-6
                      ${active ? 'bg-main/10 text-main' : ''}

                      /* Desktop Styles */
                      lg:bg-transparent lg:hover:bg-transparent lg:hover:pl-4
                      ${scrolled 
                        ? (active ? 'lg:text-main lg:font-bold' : 'lg:text-gray-700 lg:hover:text-main') 
                        : (active ? 'lg:text-white lg:font-bold' : 'lg:text-white lg:hover:text-white/80')
                      }
                    `}
                  >
                    <i className={`bx ${item.icon} text-xl lg:hidden ${active ? 'text-main' : 'text-gray-400 group-hover:text-main'}`}></i>
                    {item.label}
                  </Link>
                  
                  <span className={`hidden lg:block absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                    ${scrolled ? 'bg-main' : 'bg-white'} 
                  `}></span>
                </li>
              );
            })}

            <li className="mt-4 lg:mt-0 lg:ml-4 border-t border-gray-100 pt-4 lg:border-none lg:pt-0">
              <button
                className={`
                  w-full lg:w-auto px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
              
                  /* Mobile */
                  bg-main text-white hover:bg-main-dark active:scale-95 shadow-md
              
                  /* Desktop */
                  lg:shadow-none lg:bg-transparent lg:border-2 lg:px-6
                  ${
                    scrolled
                      ? 'lg:border-main lg:text-main lg:hover:bg-main lg:hover:text-white'
                      : 'lg:border-white lg:text-white lg:hover:bg-white lg:hover:text-main'
                  }
                `}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
        
        <div 
          className={`fixed inset-0 bg-black/50 z-[900] transition-opacity duration-300 lg:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setOpen(false)}
        ></div>

      </div>
    </header>
  );
};

export default Navbar;