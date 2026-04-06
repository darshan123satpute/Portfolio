import React from 'react'
import creativity from './assets/creativity.png'

const skillSections = [
  {
    label: 'Languages',
    borderColor: 'border-purple-500',
    skills: ['Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Technologies / Frameworks',
    borderColor: 'border-purple-400/60',
    skills: ['React.js', 'Tailwind CSS', 'Git', 'REST APIs'],
  },
  {
    label: 'Database',
    borderColor: 'border-purple-300/40',
    skills: ['MySQL'],
  },
]

const Card = ({ children, bgImage, className = '' }) => (
  <div
    className={`
      relative rounded-2xl border border-purple-500/20 overflow-hidden
      shadow-[0_0_20px_rgba(168,85,247,0.1)]
      hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
      hover:border-purple-500/50
      hover:-translate-y-1
      transition-all duration-300
      ${className}
    `}
  >
    {/* Background image */}
    {bgImage && (
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />
    )}
  
    <div className="absolute inset-0 bg-[#1a1333]/80 pointer-events-none" />
    
    <div className="relative z-10 p-6">
      {children}
    </div>
  </div>
)

const CardHeader = ({ title }) => (
  <div className="flex items-center gap-3 mb-6">
    <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
  </div>
)

const Pill = ({ label }) => (
  <span
    className="
      px-3 py-1 rounded-full text-xs font-medium cursor-default
      bg-purple-900/40 text-amber-300 border border-purple-500/30
      hover:bg-purple-700/50 hover:border-purple-400/70 hover:text-white
      hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]
      transition-all duration-200
    "
  >
    {label}
  </span>
)

const About = () => {
  return (
    <div className="bg-[#0d0b1a] min-h-screen px-4 py-10 text-white">

      <div className="flex justify-center mb-10">
        <div className="px-8 py-2 rounded-full text-lg font-semibold
          bg-[#1a1333] border border-purple-500/30
          shadow-[0_0_15px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.3)]">
          About Me
        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="text-purple-500">Creativity</span> Meets Code
        </h2>

     
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex-1 text-gray-300 text-base sm:text-lg text-justify space-y-3">
            <p>
              I'm a web developer and designer passionate about creating visually
              appealing and highly functional websites. I love experimenting with new
              technologies and turning ideas into real digital experiences.
            </p>
            <p className="text-xl font-semibold">
              <span className="text-purple-400">Always learning, always building</span>
              {' '}— that's what drives me forward.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={creativity}
              alt="Creativity"
              className="w-70 sm:w-64 h-auto object-contain bg-[#1a1333] rounded-xl"
            />
          </div>
        </div>

     
        <div className="flex justify-center mb-16">
          <a
            href="https://drive.google.com/file/d/19M_srSnu0c8Dk6kTW8-XWwzl-xkAOwOz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-10 py-3 rounded-full font-semibold text-white
              bg-[#1a1333] border border-purple-500/30
              shadow-[0_0_15px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.3)]
              hover:shadow-[0_0_28px_rgba(168,85,247,0.9),inset_0_0_15px_rgba(168,85,247,0.5)]
              hover:scale-105 active:scale-95
              transition-all duration-300">
              Resume
            </button>
          </a>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        
          <Card >
            <CardHeader title="Education" />
            <div className="space-y-5 text-sm">
              {[
                {
                  name: 'Amrutvahini College of Engineering',
                  year: '2021 – 2025',
                  desc: 'B.E. in Computer Engineering (SPPU)',
                  border: 'border-purple-500',
                },
                {
                  name: 'Shramik Junior College',
                  year: '2019 – 2021',
                  desc: 'Higher Secondary Certificate (HSC)',
                  border: 'border-purple-400/60',
                },
                {
                  name: 'Kasheshwar Vidyalaya Kasara Dumala',
                  year: '2019',
                  desc: 'Secondary School Certificate (SSC)',
                  border: 'border-purple-300/40',
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`border-l-2 ${item.border} pl-4 hover:pl-5 hover:border-purple-400 transition-all duration-200`}
                >
                  <p className="font-semibold text-white text-[15px] leading-snug">{item.name}</p>
                  <p className="text-amber-300 text-xs mt-1">{item.year}</p>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card >
            <CardHeader title="Skills" />
            <div className="space-y-5 text-sm">
              {skillSections.map((section) => (
                <div
                  key={section.label}
                  className={`border-l-2 ${section.borderColor} pl-4 hover:pl-5 hover:border-purple-400 transition-all duration-200`}
                >
                  <p className="text-white font-semibold text-[15px] mb-2">{section.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill) => (
                      <Pill key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

       
          <Card >
            <CardHeader title="Experience" />
            <div className="border-l-2 border-purple-500 pl-4  hover:border-purple-400 transition-all duration-200">
              <p className="font-semibold text-white text-[15px]">Sumago Infotech Pvt. Ltd.</p>
              <p className="text-amber-300 text-xs mt-1">Dec 2023 – Jan 2024</p>
              <p className="text-purple-300 font-medium mt-1">React Developer Intern</p>
              <ul className="mt-3 space-y-2 text-gray-400 text-sm list-disc list-inside">
                <li>Led a team on a full-stack web development project</li>
                <li>Built reusable React components with React Hooks</li>
                <li>Integrated REST APIs in an Agile workflow</li>
              </ul>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default About