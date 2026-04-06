import React from 'react'

const projects = [
  {
    title: 'Random GIF Generator',
    description: 'A React-based app that fetches and displays a random GIF using the Giphy API with a single click.',
    techStack: ['React.js', 'Giphy API', 'Tailwind CSS','JavaScript'],
    demo: 'https://random-gif-generator-opal.vercel.app/',
    github: '',
  },
  {
    title: 'Courses Catalog',
    description: 'A responsive course listing app that lets users browse, filter, and explore available courses with a clean UI.',
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    demo: 'https://courses-yrh8.vercel.app/',
    github: '',
  },
  {
    title: 'Random Password Generator',
    description: 'A random password generator creates strong, secure passwords automatically to protect your accounts..',
    techStack: ['React.js', 'Tailwind CSS', 'Vite'],
     demo: 'https://random-password-generator-one-chi.vercel.app/',
    github: '',
  },
  {
    title: 'Facial Recognition System',
    description: 'Final year project using CNN optimized with Galactic Swarm Optimization (GSO) for accurate real-time facial recognition.',
    techStack: ['Python', 'CNN', 'OpenCV', 'GSO'],
   
  },
]

const ProjectCard = ({ title, description, techStack, demo, github }) => (
  <div className="
    flex flex-col justify-between
    bg-[#1a1333] rounded-2xl p-6
    border border-purple-500/20
    shadow-[0_0_20px_rgba(168,85,247,0.1)]
    hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
    hover:border-purple-500/50
    hover:-translate-y-1
    transition-all duration-300
  ">
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1 rounded-full text-xs font-medium
              bg-purple-900/40 text-amber-300 border border-purple-500/30
              hover:bg-purple-700/50 hover:border-purple-400/70 hover:text-white
              hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]
              transition-all duration-200 cursor-default
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="flex gap-3 flex-wrap">
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer">
          <button className="
            px-5 py-2 rounded-full text-sm font-semibold text-white
            bg-purple-700/50 border border-purple-500/40
            hover:bg-purple-600/70 hover:border-purple-400
            hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
            hover:scale-105 active:scale-95
            transition-all duration-300
          ">
            🔗 Live Demo
          </button>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          <button className="
            px-5 py-2 rounded-full text-sm font-semibold text-white
            bg-[#1a1333] border border-purple-500/30
            hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]
            hover:scale-105 active:scale-95
            transition-all duration-300
          ">
            GitHub
          </button>
        </a>
      )}
    </div>
  </div>
)

const Project = () => {
  return (
    <div className="bg-[#0d0b1a] min-h-screen px-4 py-10 text-white">

      {/* Section Badge */}
      <div className="flex justify-center mb-10">
        <div className="px-8 py-2 rounded-full text-lg font-semibold
          bg-[#1a1333] border border-purple-500/30
          shadow-[0_0_15px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.3)]">
          Projects
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Things I've <span className="text-purple-500">Built</span>
        </h2>
        <p className="text-gray-400 text-center text-sm sm:text-base mb-12">
          A collection of projects I've worked on — from experiments to full products.
        </p>

        {/* 4 cards: 2 columns on tablet, but on large screens use a special layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project