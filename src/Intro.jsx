import React, { useEffect } from 'react';
import dimg from './assets/dimg.png';
import AOS from "aos";
import "aos/dist/aos.css";
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

const Intro = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
      mirror: true
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative mt-9 overflow-hidden'>

      {/* ── MOBILE LAYOUT ── */}
      <div className='md:hidden px-4'>

        {/* Top Text Row */}
        <div className='flex justify-between items-start'>

          {/* Left Text */}
          <div className='text-white'>
            <div className='text-purple-600 text-sm' data-aos="fade-right">
              Hello, I'am
            </div>
            <div className='text-xl font-bold leading-tight' data-aos="fade-in">
              Darshan <br /> Satpute
            </div>
          </div>

          {/* Right Text */}
          <div className='text-white text-right'>
            <div className='text-purple-600 text-sm' data-aos="fade-left">
              Creative
            </div>
            <div className='text-xl font-bold leading-tight' data-aos="fade-in">
              Developer <br /> & Designer
            </div>
          </div>

        </div>

        {/* Center Image */}
        <div className='flex justify-center mt-4'>
          <img
            src={dimg}
            alt="Darshan Satpute"
            className='w-[75vw] max-w-[280px] h-auto'
            data-aos="fade-down"
          />
        </div>

        {/* Social Icons */}
        <div className='flex justify-center gap-x-6 mt-3 mb-2' data-aos="fade-up">
          <a href="https://www.linkedin.com/in/darshansatpute/" target="_blank" rel="noreferrer">
            <img src={linkedin} className='h-6 w-6 hover:scale-110 transition duration-300' alt="LinkedIn" />
          </a>
          <a href="https://github.com/darshan123satpute" target="_blank" rel="noreferrer">
            <img src={github} className='h-6 w-6 hover:scale-110 transition duration-300' alt="GitHub" />
          </a>
        </div>

      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className='hidden md:block min-h-screen'>

        {/* Image */}
        <div className='relative flex justify-center'>
          <img
            src={dimg}
            alt="Darshan Satpute"
            className='w-[80vw] max-w-[700px] h-auto z-50'
            data-aos="fade-down"
          />
        </div>

        {/* Left Text */}
        <div className='text-white absolute top-[20%] left-[10%]'>
          <div className='text-purple-600 text-2xl lg:text-3xl' data-aos="fade-right">
            Hello, I'am
          </div>
          <div className='text-4xl lg:text-6xl font-bold' data-aos="fade-in z-50">
            Darshan <br /> Satpute
          </div>
        </div>

        {/* Right Text */}
        <div className='text-white absolute top-[20%] right-[10%] text-right'>
          <div className='text-purple-600 text-2xl lg:text-3xl' data-aos="fade-left">
            Creative
          </div>
          <div className='text-4xl lg:text-6xl font-bold' data-aos="fade-in z-50">
            Developer <br /> & Designer
          </div>
        </div>

        {/* Social Icons */}
        <div className='absolute bottom-[150px] left-[200px] flex flex-col gap-y-6 z-50' data-aos="fade-right">
          <a href="https://www.linkedin.com/in/darshansatpute/" target="_blank" rel="noreferrer">
            <img src={linkedin} className='h-7 w-7 hover:scale-110 transition duration-300' alt="LinkedIn" />
          </a>
          <a href="https://github.com/darshan123satpute" target="_blank" rel="noreferrer">
            <img src={github} className='h-8 w-8 hover:scale-110 transition duration-300' alt="GitHub" />
          </a>
        </div>

      </div>

    </div>
  );
};

export default Intro;