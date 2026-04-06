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

  const handleScroll = () => {
    AOS.refresh();
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className='relative min-h-screen mt-9 overflow-hidden'>

      <div className='relative flex justify-center'>
        <img 
          src={dimg} 
          alt="" 
          className='w-[80vw] max-w-[700px] h-auto' 
          data-aos="fade-down"
        />
      </div>

      <div className='text-white absolute top-[20%] left-[5%] md:left-[10%]'>
        <div 
          className='text-purple-600 text-lg md:text-2xl lg:text-3xl' 
          data-aos="fade-right"
        >
          Hello, I'am
        </div>

        <div 
          className='text-2xl md:text-4xl lg:text-6xl font-bold' 
          data-aos="fade-in"
        >
          Darshan <br /> Satpute
        </div>
      </div>

  
      <div className='text-white absolute top-[20%] right-[5%] md:right-[10%] text-right'>
        <div 
          className='text-purple-600 text-lg md:text-2xl lg:text-3xl' 
          data-aos="fade-left"
        >
          Creative
        </div>

        <div 
          className='text-2xl md:text-4xl lg:text-6xl font-bold' 
          data-aos="fade-in"
        >
          Developer <br /> & Designer
        </div>
      </div>

    

    </div>
  )
}

export default Intro