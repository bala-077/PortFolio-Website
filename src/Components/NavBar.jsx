import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeProvider';
import menubar from '../Images/menu.png';
import cancel from '../Images/cancel.png';
import darkmenubar from '../Images/menubar.png';
import close from '../Images/close.png';
import brightness from '../Images/brightness.png';
import moon from '../Images/moon.png';
import Image from '../Images/balaport2.jpg';
import { RiHome2Line, RiContactsLine } from "react-icons/ri";
import { SiSkillshare, SiCodeproject } from "react-icons/si";
import { GrContact } from "react-icons/gr";

const NavBar = ({ sections }) => {
  const [isSideNavbar, setIsSideNavbar] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const data = [
    { name: 'Home', section: 'home', Icons: <RiHome2Line /> },
    { name: 'About', section: 'about', Icons: <RiContactsLine /> },
    { name: 'Skills', section: 'skills', Icons: <SiSkillshare /> },
    { name: 'Projects', section: 'projects', Icons: <SiCodeproject /> },
    { name: 'Contact', section: 'contact', Icons: <GrContact /> }
  ];

  const navbar = () => {
    setIsSideNavbar(!isSideNavbar);
  };

  const scrollToSection = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsSideNavbar(!isSideNavbar);
  };

  return (
    <>
      <div className={`w-full sticky top-0 flex justify-between shadow-md z-40 bg-white dark:bg-gray-800 transition-all duration-500`}>
        <div className='flex items-center px-5 py-3 md:px-10'>
          <h1 className={`text-3xl font-bold text-[#2563EB] dark:text-white`}>PortFolio</h1>
        </div>

        <div className='flex justify-end gap-5 items-center px-5 md:px-10 py-5'>
          <ul className='hidden md:flex justify-between gap-10'>
            {data.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className={`flex gap-1 font-medium hover:text-red-500 hover:underline transition-all duration-200 items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  {item.Icons} {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button onClick={toggleTheme} className={`text-2xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <img src={theme === 'light' ? moon : brightness} alt="Theme Icon" className="w-5" />
          </button>
          {
            isSideNavbar ?
              ""
              :
              <p className='block md:hidden'>
                <img src={theme === 'light' ? menubar : darkmenubar} alt="MenuBar" className='w-5' onClick={navbar} />
              </p>
          }

        </div>
      </div>

      <div className={`fixed transition-all duration-500 ease-in-out h-screen top-0 z-40 overflow-y-auto w-[80%] bg-gray-100 dark:bg-gray-800 justify-end gap-5 items-center px-10 py-10 ${isSideNavbar ? 'left-[0]' : '-left-[90%]'} md:hidden`}>
        <div className='flex items-center mb-5 mt-5'>
          <img src={Image} alt="Author-Image" className='h-10 w-10 rounded-full' />
          <h1 className='text-3xl font-bold text-[#2563EB] dark:text-white'>PortFolio</h1>
        </div>
        <ul className='flex flex-col justify-between gap-10 relative'>
          {data.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.section)}
                className={`flex gap-1 font-medium hover:text-red-500 transition-all duration-200 items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
              >
                {item.Icons} {item.name}
              </button>
            </li>
          ))}
        </ul>

        <p className='block absolute top-4 right-3 md:hidden'>
          <img src={theme === 'light' ? cancel : close} alt="Cancel" className='w-5' onClick={navbar} />
        </p>
      </div>
    </>
  );
};

export default NavBar;
