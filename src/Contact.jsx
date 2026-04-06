import React from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'satputeedarshan@gmail.com',
    href: 'mailto:satputeedarshan@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7709123686',
    href: 'tel:+917709123686',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/darshan-satpute',
    href: 'https://www.linkedin.com/in/darshansatpute/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/darshansatpute',
    href: 'https://github.com/darshan123satpute',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

const Contact = () => {
  return (
    <div className="bg-[#0d0b1a] min-h-screen px-4 py-10 text-white">

      {/* Section Badge */}
      <div className="flex justify-center mb-10">
        <div className="px-8 py-2 rounded-full text-lg font-semibold
          bg-[#1a1333] border border-purple-500/30
          shadow-[0_0_15px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.3)]">
          Contact
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Let's <span className="text-purple-500">Connect</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-xl mx-auto">
          I'm currently open to new opportunities. Whether you have a role, a project, or just want to say hi — feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="
                flex items-center gap-4 p-5 rounded-2xl text-left
                bg-[#1a1333] border border-purple-500/20
                shadow-[0_0_15px_rgba(168,85,247,0.08)]
                hover:shadow-[0_0_28px_rgba(168,85,247,0.35)]
                hover:border-purple-500/50
                hover:-translate-y-1
                transition-all duration-300 group
              "
            >
              {/* Icon Box */}
              <div className="
                w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0
                bg-purple-900/40 border border-purple-500/30 text-purple-300
                group-hover:bg-purple-700/50 group-hover:text-white
                group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]
                transition-all duration-300
              ">
                {item.icon}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-widest">{item.label}</p>
                <p className="text-sm text-gray-300 font-medium group-hover:text-white truncate transition-colors duration-200">
                  {item.value}
                </p>
              </div>

              {/* Arrow */}
              <div className="ml-auto text-purple-500/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-gray-600 text-sm mt-12">
          Based in <span className="text-purple-400 font-medium">Sangamner, Maharashtra</span> · Available for remote & on-site roles
        </p>

      </div>
    </div>
  )
}

export default Contact