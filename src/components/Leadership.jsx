
import React from "react";
import { leadershipList } from "../data/portfolioData";
import HumanoidRobot3D from "./Robot3D";

const LeadershipCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={index * 100}
      className="relative group"
    >
      <div
        className="bg-[#0d1011]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6
        hover:border-[#ff2a2a]/50
        hover:shadow-[0_15px_40px_rgba(255,42,42,0.12)]
        hover:-translate-y-1
        transition-all duration-500"
      >
        <div className="flex gap-4">

          {/* Number */}
          <div className="flex-shrink-0">
            <span className="text-[#ff2a2a] text-3xl md:text-4xl font-black font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#ff2a2a]/40 flex-shrink-0" />

          {/* Content */}
          <div className="flex-1">

            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="text-white text-base md:text-lg font-black tracking-tight">
                {item.title}
              </h3>

              <span
                className="border border-[#ff2a2a] text-[#ff2a2a]
                text-[8px] md:text-[9px] font-black
                tracking-widest uppercase
                px-2.5 py-1 rounded-full whitespace-nowrap"
              >
                {item.badge || item.role || "TEAM LEAD"}
              </span>
            </div>

            {item.role && (
              <p
                className="text-[#ff2a2a] text-[9px] md:text-[10px]
                font-black tracking-widest uppercase mb-3"
              >
                {item.role}
              </p>
            )}

            <p className="text-white/55 text-xs md:text-sm leading-relaxed">
              {item.description}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="bg-[#080a0b] pt-24 pb-32 px-6 md:px-10 lg:px-16
      w-full relative overflow-hidden font-sans"
    >

      {/* Background glows */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px]
        bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px]
        bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">

          <span
            className="inline-flex border border-white/20 rounded-full
            px-5 py-2 mb-6 bg-white/[0.03] text-white/70
            text-xs font-bold tracking-[0.35em] uppercase"
          >
            Leadership
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl
            font-black text-white uppercase mb-5"
          >
            Leadership
          </h2>

          <p className="text-white/45 text-sm md:text-lg max-w-2xl mx-auto">
            Leading teams and turning collaboration into successful execution.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Leadership cards */}
          <div className="relative flex flex-col gap-6">

            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-black text-white uppercase">
                Leadership
              </h3>

              <div className="h-px bg-[#ff2a2a] flex-1" />
            </div>

            {leadershipList.map((item, index) => (
              <LeadershipCard
                key={item.title || index}
                item={item}
                index={index}
              />
            ))}

          </div>

          {/* Right: Interactive humanoid robot */}
          <div
            data-aos="fade-left"
            className="relative min-h-[420px] lg:min-h-[650px]
            flex items-center justify-center"
          >

            {/* Ambient glow */}
            <div
              className="absolute inset-10 rounded-full
              bg-red-600/15 blur-[110px] pointer-events-none"
            />

            <HumanoidRobot3D />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
