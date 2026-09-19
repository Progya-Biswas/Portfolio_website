import React from 'react';
import { leadershipList, coordinationList } from '../data/portfolioData';

const LeadershipCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={index * 100}
      className="relative group"
    >
      <div className="bg-[#0d1011]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 
                      hover:border-[#ff2a2a]/50 
                      hover:shadow-[0_15px_40px_rgba(255,42,42,0.12)] 
                      hover:-translate-y-1
                      transition-all duration-500"
      >
        <div className="flex gap-4">

          {/* Number */}
          <div className="flex-shrink-0">
            <span className="text-[#ff2a2a] text-3xl md:text-4xl font-black font-mono">
              {String(index + 1).padStart(2, '0')}
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

              <span className="border border-[#ff2a2a] text-[#ff2a2a] 
                               text-[8px] md:text-[9px] font-black 
                               tracking-widest uppercase 
                               px-2.5 py-1 rounded-full whitespace-nowrap">
                {item.badge || item.role || 'TEAM LEAD'}
              </span>
            </div>

            {item.role && (
              <p className="text-[#ff2a2a] text-[9px] md:text-[10px] 
                            font-black tracking-widest uppercase mb-3">
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


const CoordinationCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={index * 100}
      className="relative group"
    >
      <div className="bg-[#0d1011]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 
                      hover:border-[#ff2a2a]/50 
                      hover:shadow-[0_15px_40px_rgba(255,42,42,0.12)] 
                      hover:-translate-y-1
                      transition-all duration-500"
      >
        <div className="flex gap-4">

          {/* Number */}
          <div className="flex-shrink-0">
            <span className="text-[#ff2a2a] text-3xl md:text-4xl font-black font-mono">
              {String(index + 1).padStart(2, '0')}
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

              <span className="border border-[#ff2a2a] text-[#ff2a2a] 
                               text-[8px] md:text-[9px] font-black 
                               tracking-widest uppercase 
                               px-2.5 py-1 rounded-full whitespace-nowrap">
                {item.badge || item.role || 'EVENT COORDINATOR'}
              </span>
            </div>

            {item.role && (
              <p className="text-[#ff2a2a] text-[9px] md:text-[10px] 
                            font-black tracking-widest uppercase mb-3">
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
      className="
        bg-[#080a0b]
        pt-24 pb-32
        px-6 md:px-10 lg:px-16
        w-full
        relative
        overflow-hidden
        font-sans

        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
        linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:70px_70px]
      "
    >

      {/* Background Glow - Top Left */}
      <div
        className="
          absolute
          -top-20 md:-top-40
          -left-20 md:-left-40
          w-[300px] md:w-[500px]
          h-[300px] md:h-[500px]
          bg-[#ff2a2a]/10
          rounded-full
          blur-[100px] md:blur-[150px]
          pointer-events-none
        "
      />

      {/* Background Glow - Bottom Right */}
      <div
        className="
          absolute
          -bottom-20 md:-bottom-40
          -right-20 md:-right-40
          w-[300px] md:w-[500px]
          h-[300px] md:h-[500px]
          bg-[#ff2a2a]/10
          rounded-full
          blur-[100px] md:blur-[150px]
          pointer-events-none
        "
      />


      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}

        <div
          data-aos="fade-up"
          className="text-center mb-16 md:mb-20"
        >

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              border
              border-white/20
              rounded-full
              px-5
              py-2
              mb-6
              bg-white/[0.03]
              backdrop-blur-sm
            "
          >
            <span
              className="
                text-white/70
                text-[9px]
                md:text-[10px]
                font-bold
                tracking-[0.35em]
                uppercase
              "
            >
              Leadership & Coordination
            </span>
          </div>


          {/* Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              uppercase
              text-white
              mb-5
            "
          >
            Leadership
            <span className="text-[#ff2a2a] mx-3">&</span>
            Engagement
          </h2>


          {/* Description */}
          <p
            className="
              text-white/45
              text-sm
              md:text-base
              lg:text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Leading teams, coordinating events, and turning collaboration
            into successful execution.
          </p>

        </div>


        {/* ================= COLUMN HEADINGS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">

          {/* LEFT HEADING */}
          <div
            data-aos="fade-right"
            className="flex items-center gap-4"
          >
            <h3
              className="
                text-2xl
                md:text-3xl
                font-black
                text-white
                uppercase
                tracking-tight
                whitespace-nowrap
              "
            >
              Leadership
            </h3>

            <div className="h-px bg-[#ff2a2a] flex-1" />
          </div>


          {/* RIGHT HEADING */}
          <div
            data-aos="fade-left"
            className="flex items-center gap-4"
          >

            <div className="h-px bg-[#ff2a2a] flex-1" />

            <h3
              className="
                text-2xl
                md:text-3xl
                font-black
                text-white
                uppercase
                tracking-tight
                whitespace-nowrap
              "
            >
              Coordination
            </h3>

          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="relative mt-8">

          {/* CENTRAL VERTICAL LINE */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              -translate-x-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-transparent
              via-[#ff2a2a]
              to-transparent
              shadow-[0_0_12px_rgba(255,42,42,0.5)]
              z-20
            "
          />


          {/* CENTRAL LINE DOTS */}

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-[45px]
              w-4
              h-4
              rounded-full
              bg-[#ff2a2a]
              border-4
              border-[#080a0b]
              shadow-[0_0_15px_#ff2a2a]
              z-30
            "
          />

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-[calc(25%+45px)]
              w-4
              h-4
              rounded-full
              bg-[#ff2a2a]
              border-4
              border-[#080a0b]
              shadow-[0_0_15px_#ff2a2a]
              z-30
            "
          />

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-[calc(50%+45px)]
              w-4
              h-4
              rounded-full
              bg-[#ff2a2a]
              border-4
              border-[#080a0b]
              shadow-[0_0_15px_#ff2a2a]
              z-30
            "
          />

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-[calc(75%+45px)]
              w-4
              h-4
              rounded-full
              bg-[#ff2a2a]
              border-4
              border-[#080a0b]
              shadow-[0_0_15px_#ff2a2a]
              z-30
            "
          />


          {/* ================= TWO COLUMNS ================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              md:gap-20
              relative
            "
          >

            {/* ================= LEADERSHIP ================= */}

            <div className="flex flex-col gap-5">

              {(leadershipList || []).map((item, index) => (
                <LeadershipCard
                  key={item.title || index}
                  item={item}
                  index={index}
                />
              ))}

            </div>


            {/* ================= COORDINATION ================= */}

            <div className="flex flex-col gap-5">

              {(coordinationList || []).map((item, index) => (
                <CoordinationCard
                  key={item.title || index}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;