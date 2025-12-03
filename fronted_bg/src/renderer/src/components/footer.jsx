import React from 'react';
import { Link } from 'react-router-dom';
import { useFooter } from '../hooks/use-footer';

const Footer = () => {
  const { footerContent } = useFooter();
  const { brand, sections, copyright } = footerContent;

  return (
    <footer className="bg-cream border-t border-gray-200 pt-14 pb-8">
      <div className="px-10 md:px-24 grid gap-12 md:grid-cols-3 mb-12">

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-main flex items-center gap-2">
            <i className={`bx ${brand.icon}`} />
            {brand.title}
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            {brand.desc}
          </p>

          <div className="flex gap-3 pt-1">
            {brand.socials.map((ic) => (
              <a
                key={ic}
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-main transition shadow-sm"
              >
                <i className={`bx ${ic}`} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">{sections.nav.title}</h3>
          <ul className="space-y-3">
            {sections.nav.links.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="group flex items-start gap-3 hover:translate-x-1 transition"
                >
                  <i className={`bx ${item.icon} text-main text-xl mt-1`} />
                  <div>
                    <p className="font-medium text-gray-700 group-hover:text-main">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">{sections.help.title}</h3>
          <ul className="space-y-3">
            {sections.help.links.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="group flex items-start gap-3 hover:translate-x-1 transition"
                >
                  <i className={`bx ${item.icon} text-main text-xl mt-1`} />
                  <div>
                    <p className="font-medium text-gray-700 group-hover:text-main">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-500 text-sm">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;