
import React from 'react';
import { researchProjectsList } from '../data/portfolioData';

const ResearchProjectCard = ({ item, index }) => {
  const hasPaperLink =
    item.paperLink &&
    item.paperLink !== "YOUR_GOOGLE_DRIVE_LINK_HERE";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/25 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/30 hover:bg-black/35 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between group"
    >
      <div>
        {/* Duration */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs font-semibold tracking-wide border border-white/15">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.duration}
          </span>

          <span className="text-white/40 font-mono text-xs font-bold tracking-widest">
            0{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-white text-2xl md:text-3xl font-black mb-3 tracking-tight group-hover:text-[#6551A0] transition-colors">
          {item.organization}
        </h3>

        {/* Project Type */}
        <p className="text-white/60 text-sm font-semibold mb-5">
          {item.role}
        </p>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-white/60 text-xs font-mono font-bold tracking-wider uppercase mb-2.5">
            Research Overview
          </h4>
          <p className="text-white/85 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-white/60 text-xs font-mono font-bold tracking-wider uppercase mb-2.5">
            Research Areas & Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="pt-4 border-t border-white/10">
        <h4 className="text-white/60 text-xs font-mono font-bold tracking-wider uppercase mb-2">
          Tools & Technologies
        </h4>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-mono font-bold text-white/90 bg-black/30 rounded-md border border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Research Paper Link */}
        {hasPaperLink && (
          <a
            href={item.paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all duration-300"
          >
            View Research Documents
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const ResearchProjects = () => {
  return (
    <section
      id="research-projects"
      className="bg-[#6551A0] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Torn Paper Divider */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/30 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-6 shadow-sm bg-black/10 backdrop-blur-sm">
            Research & Development
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4 uppercase">
            Research Projects
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
            Exploring intelligent systems, artificial intelligence, robotics,
            and computer vision through research-driven projects and
            experimental development.
          </p>
        </div>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {researchProjectsList.map((item, index) => (
            <ResearchProjectCard
              key={item.organization}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 right-10 text-black opacity-15 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div
        className="absolute bottom-24 left-10 text-black opacity-15 animate-pulse"
        style={{ animationDelay: '1.2s' }}
      >
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default ResearchProjects;
