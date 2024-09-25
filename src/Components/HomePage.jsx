import React from "react";
import Image from "../Images/balaport2.jpg";
import { useTypewriter } from 'react-simple-typewriter';
import resume from '../Images/BalaHariHaran Resume.pdf';

const HomePage = () => {
  const [typewriter] = useTypewriter({
    words: [
      "MERN Stack Developer",
      "UI/UX Designer",
      "Photographer"
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
    delaySpeed: 2000
  });

  return (
    <div id="home" className="w-full flex py-3 flex-col md:flex-row justify-center items-center bg-white dark:bg-gray-800 px-5 md:py-10">
      <div className="md:w-5/12 w-full flex items-center justify-center z-10">
        <img
          src={Image}
          alt="Profile"
          className="rounded-full shadow-lg object-cover h-60 w-60 md:h-[300px] md:w-[300px] transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      <div className="md:w-7/12 z-10 w-full flex flex-col items-center md:items-start md:text-left px-4 md:px-10 py-10 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
          Hello Everyone!
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          I'm <span className="text-blue-600 tracking-wide">Bala HariHaran</span>
        </h2>
        <div>
          <h3 className="text-xl text-center md:text-2xl md:text-start text-[#16A34A]">
            {typewriter}|
          </h3>
          <p className="text-base font-normal mt-5 md:text-lg text-gray-700 dark:text-gray-400">
            I am a passionate Full Stack Developer from India, dedicated to creating beautiful, functional, and user-friendly websites. Let's collaborate and bring your ideas to life!
          </p>
        </div>

        <div className="flex gap-5 mt-5">
          <a
            href={resume}
            download="BalaHariHaran_Resume.pdf"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
          <a
            href="mailto:balahariharan.mca@gmail.com"
            className='bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition duration-300'
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
