import React, { useEffect } from 'react'
import dimg from './assets/dimg.png'
import AOS from "aos";
import "aos/dist/aos.css";
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'

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
      <div className='flex flex-col items-center md:hidden pb-6'>

        {/* Text row */}
        <div className='flex justify-between w-full px-5 pt-4'>
          <div className='text-white'>
            <div className='text-purple-600 text-base' data-aos="fade-right">
              Hello, I'am
            </div>
            <div className='text-3xl font-bold' data-aos="fade-in">
              Darshan <br /> Satpute
            </div>
          </div>

          <div className='text-white text-right'>
            <div className='text-purple-600 text-base' data-aos="fade-left">
              Creative
            </div>
            <div className='text-3xl font-bold' data-aos="fade-in">
              Developer <br /> & Designer
            </div>
          </div>
        </div>

        {/* Image — bigger on mobile */}
        <div className='flex justify-center mt-3'>
          <img 
            src={dimg} 
            alt="Darshan Satpute" 
            className='w-[92vw] max-w-[420px] h-auto'
            data-aos="fade-down"
          />
        </div>

        {/* Social icons — horizontal, tight below image */}
        <div className='flex gap-x-6 mt-3' data-aos="fade-up">
          <a href="https://www.linkedin.com/in/darshansatpute/" target="_blank" rel="noreferrer">
            <img src={linkedin} className='h-6 w-6 hover:scale-110 transition duration-300' alt="LinkedIn"/>
          </a>
          <a href="https://github.com/darshan123satpute" target="_blank" rel="noreferrer">
            <img src={github} className='h-7 w-7 hover:scale-110 transition duration-300' alt="GitHub"/>
          </a>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (unchanged) ── */}
      <div className='hidden md:block min-h-screen'>

        <div className='relative flex justify-center'>
          <img 
            src={dimg} 
            alt="Darshan Satpute"
            className='w-[80vw] max-w-[700px] h-auto' 
            data-aos="fade-down"
          />
        </div>

        <div className='text-white absolute top-[20%] left-[10%]'>
          <div className='text-purple-600 text-2xl lg:text-3xl' data-aos="fade-right">
            Hello, I'am
          </div>
          <div className='text-4xl lg:text-6xl font-bold' data-aos="fade-in">
            Darshan <br /> Satpute
          </div>
        </div>

        <div className='text-white absolute top-[20%] right-[10%] text-right'>
          <div className='text-purple-600 text-2xl lg:text-3xl' data-aos="fade-left">
            Creative
          </div>
          <div className='text-4xl lg:text-6xl font-bold' data-aos="fade-in">
            Developer <br /> & Designer
          </div>
        </div>

        <div 
          className='absolute bottom-[150px] left-[200px] flex flex-col gap-y-6 z-50' 
          data-aos="fade-right"
        >
          <a href="https://www.linkedin.com/in/darshansatpute/" target="_blank" rel="noreferrer">
            <img src={linkedin} className='h-7 w-7 hover:scale-110 transition duration-300' alt="LinkedIn"/>
          </a>
          <a href="https://github.com/darshan123satpute" target="_blank" rel="noreferrer">
            <img src={github} className='h-8 w-8 hover:scale-110 transition duration-300' alt="GitHub"/>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Intro