import React, { useEffect } from 'react'
import dimg from './assets/dimg.png'
import AOS from "aos";
import "aos/dist/aos.css";
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'

const Intro = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 1500,
      once: true
    });
  }, []);

  return (
    <div className='text-white px-4 md:px-16 py-10'>

      <div className='flex flex-col md:flex-row items-center justify-between gap-10 min-h-screen'>

        {/* LEFT SIDE */}
        <div className='w-full md:w-1/3 text-center md:text-left'>

          <p className='text-purple-500 text-sm md:text-lg mb-2' data-aos="fade-right">
            Hello, I'am
          </p>

          <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold leading-tight' data-aos="fade-up">
            Darshan <br /> Satpute
          </h1>

        </div>

        {/* CENTER IMAGE */}
        <div className='w-full md:w-1/3 flex justify-center'>

          <img 
            src={dimg} 
            alt="Darshan Satpute"
            className='w-[70vw] max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto'
            data-aos="zoom-in"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className='w-full md:w-1/3 text-center md:text-right'>

          <p className='text-purple-500 text-sm md:text-lg mb-2' data-aos="fade-left">
            Creative
          </p>

          <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold leading-tight' data-aos="fade-up">
            Developer <br /> & Designer
          </h1>

        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className='flex justify-center md:justify-start gap-6 mt-6 md:mt-0 md:absolute md:left-10 md:bottom-10' data-aos="fade-up">
        
        <a href="https://www.linkedin.com/in/darshansatpute/" target="_blank" rel="noreferrer">
          <img src={linkedin} className='h-6 w-6 md:h-7 md:w-7 hover:scale-110 transition duration-300' alt="LinkedIn"/>
        </a>

        <a href="https://github.com/darshan123satpute" target="_blank" rel="noreferrer">
          <img src={github} className='h-6 w-6 md:h-7 md:w-7 hover:scale-110 transition duration-300' alt="GitHub"/>
        </a>

      </div>

    </div>
  )
}

export default Intro