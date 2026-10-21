import React from 'react';

const techItems = [
  {
    name: 'React.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: 'HTML5',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#E34F26" d="M3 2l1.8 17.8L12 22l7.2-2.2L21 2H3z" />
        <path fill="#EF652A" d="M12 3.8v16.4l5.6-1.7 1.5-14.7H12z" />
        <path fill="#ECECEC" d="M12 8.3H7.8l.3 3.3H12V8.3zm0 6.6l-.1.1-2.4-.6-.2-1.8H7.2l.3 3.6 4.5 1.2v-2.5z" />
        <path fill="#FFF" d="M12 8.3v3.3h3.9l-.4 3.4-3.5 1v2.5l4.5-1.2.6-6.7H12z" />
      </svg>
    )
  },
  {
    name: 'CSS3',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#1572B6" d="M3 2l1.8 17.8L12 22l7.2-2.2L21 2H3z" />
        <path fill="#33A9DC" d="M12 3.8v16.4l5.6-1.7 1.5-14.7H12z" />
        <path fill="#ECECEC" d="M12 8.3H7.8l.3 3.3H12V8.3zm0 6.6l-.1.1-2.4-.6-.2-1.8H7.2l.3 3.6 4.5 1.2v-2.5z" />
        <path fill="#FFF" d="M12 8.3v3.3h3.9l-.4 3.4-3.5 1v2.5l4.5-1.2.6-6.7H12z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path fill="#000" d="M6.5 17.8c.8.5 1.8.8 2.7.8 1.4 0 2.2-.7 2.2-2.1v-7h-2v7c0 .5-.3.8-.8.8-.4 0-.8-.1-1.1-.3l-1 1.4zm8.3.1c1.3 0 2.3-.6 2.9-1.5l-1.5-1c-.4.5-.9.8-1.4.8-.7 0-1.1-.4-1.1-.9 0-.6.4-.8 1.5-1.2 1.8-.7 2.6-1.4 2.6-2.7 0-1.5-1.2-2.5-2.9-2.5-1.3 0-2.3.4-3.1 1.3l1.4 1.2c.4-.5.8-.8 1.5-.8.6 0 1 .3 1 .8 0 .5-.4.8-1.4 1.1-1.8.6-2.6 1.4-2.6 2.8-.1 1.7 1.1 2.6 2.6 2.6z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#06B6D4" d="M12 6c-2.7 0-4.4 1.3-5.1 4 1-.7 2.1-.9 3.4-.6.7.2 1.3.8 1.8 1.4 1 1 2.3 2.2 4.9 2.2 2.7 0 4.4-1.3 5.1-4-1 .7-2.1.9-3.4.6-.7-.2-1.3-.8-1.8-1.4-1-1-2.3-2.2-4.9-2.2zM6.9 12C4.2 12 2.5 13.3 1.8 16c1-.7 2.1-.9 3.4-.6.7.2 1.3.8 1.8 1.4 1 1 2.3 2.2 4.9 2.2 2.7 0 4.4-1.3 5.1-4-1 .7-2.1.9-3.4.6-.7-.2-1.3-.8-1.8-1.4-1-1-2.3-2.2-4.9-2.2z" />
      </svg>
    )
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#F05032" d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4 12 6.6c.6-.2 1.3 0 1.8.5.5.5.6 1.3.4 1.9l2.5 2.5c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.6-.6-.7-1.4-.4-2.1l-2.3-2.3v5.4c.2.2.4.4.4.7 0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-.8.5-1.5 1.2-1.8V9.3c-.7-.3-1.2-1-1.2-1.8 0-.4.1-.7.3-1L2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
      </svg>
    )
  },

  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#539E43" d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2z" />
        <path fill="#1a1a1a" d="M12 4.1L5 8.2v7.6l7 4 7-4V8.2L12 4.1z" />
        <path fill="#539E43" d="M12 6.5l4.5 2.6v5.2L12 17l-4.5-2.7V9.1L12 6.5z" />
      </svg>
    )
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#00758F" d="M18.8 8.6c-.3-.8-.9-1.4-1.7-1.7-.8-.4-1.8-.4-2.7-.1-.9.3-1.6.9-2 1.7-.5.8-.6 1.8-.4 2.8.2.9.7 1.7 1.5 2.3.8.5 1.8.7 2.7.5.9-.2 1.7-.8 2.2-1.5.6-.8.8-1.8.6-2.7-.1-.5-.3-.9-.6-1.3zm-6.5 7.8c-.4-.2-.8-.4-1.1-.7-.4-.3-.7-.7-.9-1.1-.3-.5-.4-1-.4-1.5 0-.5.1-1 .3-1.4.3-.5.7-.9 1.1-1.2.4-.3.9-.5 1.4-.6.5 0 1 .1 1.5.3.5.2.9.5 1.2.9.3.4.6.9.7 1.4.1.5.1 1.1 0 1.6-.2.5-.5.9-.9 1.3-.4.3-.9.6-1.4.7-.5.2-1.1.2-1.5.1z" />
        <path fill="#F29111" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm7.4 12.6c-.7 1.3-1.8 2.2-3.1 2.7-1.4.5-2.9.5-4.3 0-1.3-.5-2.4-1.4-3.1-2.7-.7-1.3-.9-2.7-.6-4.2.3-1.4 1.1-2.7 2.2-3.6 1.1-.9 2.5-1.4 4-1.4s2.9.5 4 1.4c1.1.9 1.9 2.2 2.2 3.6.3 1.5.1 2.9-.6 4.2z" />
      </svg>
    )
  },
  {
    name: 'Vite',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
        <path fill="#BD34FE" d="M20.9 3.5l-8.4 17-8.4-17c-.3-.7.2-1.5 1-1.5h14.8c.8 0 1.3.8 1 1.5z" />
        <path fill="#41D1FF" d="M12.5 20.5l8.4-17c.3-.7-.2-1.5-1-1.5h-7.4v18.5z" />
        <path fill="#FFD427" d="M13.8 1.5L7.2 12.3h4.1l-1.5 6.2 6.6-10.8h-4.1l1.5-6.2z" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
        <path d="M12 2L2 20h20L12 2z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }
];

const TechMarquee = () => {
  return (
    <section className="relative w-full py-6 sm:py-8 bg-zinc-950/70 border-y border-zinc-900/90 overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[60px] bg-accentCyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left and right gradient fade overlays for smooth entering/exiting effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#090a0f] via-[#090a0f]/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling ticker track */}
      <div className="flex w-max animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-10 sm:gap-14 px-5 sm:px-7">
          {techItems.map((tech, idx) => (
            <div
              key={`track1-${idx}`}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 shadow-inner group-hover:scale-110 group-hover:border-zinc-700 transition-all duration-200">
                {tech.icon}
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second track (exact duplicate for seamless infinite loop) */}
        <div className="flex items-center gap-10 sm:gap-14 px-5 sm:px-7">
          {techItems.map((tech, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 shadow-inner group-hover:scale-110 group-hover:border-zinc-700 transition-all duration-200">
                {tech.icon}
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
