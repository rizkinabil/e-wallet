import React, { useState } from 'react';
import companyLogo from '@/assets/Logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { paths: '/topup', title: 'Top Up' },
  { paths: '/transaction', title: 'Transaction' },
  { paths: '/account', title: 'Account' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={companyLogo} alt="company logo" className="h-8 mr-3" />
          <span className="self-center font-semibold text-xl whitespace-nowrap">SIMS PPOB</span>
        </a>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {mobileMenuOpen ? (
            <XMarkIcon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          )}

          <div
            className={`${
              !mobileMenuOpen ? 'hidden' : 'flex '
            } p-6 bg-red-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((item, index) => (
                <li
                  key={item.title}
                  className={`font-medium cursor-pointer text-[16px] hover:text-white ${
                    active === item.title ? 'text-gray-500' : 'text-gray-300'
                  } ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                  onClick={() => setActive(item.title)}
                >
                  <a href={item.paths}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* desktop */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((item, index) => (
            <li
              key={item.title}
              className={`font-medium cursor-pointer text-[16px] hover:text-black ${
                active === item.title ? 'text-black' : 'text-gray-700'
              } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              onClick={() => setActive(item.title)}
            >
              <a href={item.paths}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
