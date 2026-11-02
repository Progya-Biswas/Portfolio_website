
import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent
} from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

// --------------------------------------------------
// SHARED SVG TRAJECTORY
// --------------------------------------------------

const DESKTOP_PATH =
  "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200";

// --------------------------------------------------
// SCROLL-CONTROLLED ROCKET
// --------------------------------------------------

const ScrollRocket = ({ pathLength, pathRef }) => {
  const [position, setPosition] = useState({
    x: 650,
    y: 200,
    angle: 0
  });

  useMotionValueEvent(pathLength, "change", (progress) => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const distance = Math.max(
      0,
      Math.min(1, progress)
    ) * totalLength;

    const point = path.getPointAtLength(distance);

    const nextPoint = path.getPointAtLength(
      Math.min(distance + 2, totalLength)
    );

    const angle =
      Math.atan2(
        nextPoint.y - point.y,
        nextPoint.x - point.x
      ) * (180 / Math.PI);

    setPosition({
      x: point.x,
      y: point.y,
      angle: angle + 90
    });
  });

  return (
    <g
      transform={`translate(${position.x} ${position.y}) rotate(${position.angle})`}
      className="drop-shadow-md"
    >
      {/* Rocket flame */}
      <path
        d="M -4,13 Q 0,25 4,13"
        fill="#f97316"
      >
        <animate
          attributeName="d"
          values="
            M -4,13 Q 0,24 4,13;
            M -4,13 Q 0,32 4,13;
            M -4,13 Q 0,24 4,13
          "
          dur="0.3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Outer rocket body */}
      <path
        d="M 0,-20 C 7,-12 8,1 6,13
           L -6,13 C -8,1 -7,-12 0,-20 Z"
        fill="#ef2929"
        stroke="#991b1b"
        strokeWidth="1.5"
      />

      {/* Rocket nose */}
      <path
        d="M 0,-20 C 3,-16 5,-12 6,-8
           L -6,-8 C -5,-12 -3,-16 0,-20 Z"
        fill="#7f1d1d"
      />

      {/* Window */}
      <circle
        cx="0"
        cy="-4"
        r="3"
        fill="#bfdbfe"
        stroke="white"
        strokeWidth="1"
      />

      {/* Wings */}
      <path
        d="M -6,5 L -14,14 L -6,12 Z"
        fill="#991b1b"
      />

      <path
        d="M 6,5 L 14,14 L 6,12 Z"
        fill="#991b1b"
      />

      {/* Engine */}
      <rect
        x="-3"
        y="12"
        width="6"
        height="3"
        rx="1"
        fill="#475569"
      />
    </g>
  );
};

// --------------------------------------------------
// DECORATIVE ENGINEERING ILLUSTRATIONS
// --------------------------------------------------

const TechnicalIllustration = ({ type, className = "" }) => {
  return (
    <svg
      viewBox="0 0 180 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
    >
      {type === "rover" && (
        <g
          stroke="#64748b"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Signal waves */}
          <path d="M 55 30 Q 90 0 125 30" strokeDasharray="3 4" />
          <path d="M 65 40 Q 90 20 115 40" />

          {/* Antenna */}
          <path d="M 90 65 L 90 38" />
          <circle cx="90" cy="34" r="4" />

          {/* Rover body */}
          <path d="M 48 72 L 132 72 L 140 100 L 40 100 Z" />
          <path d="M 58 72 L 65 58 L 115 58 L 123 72" />

          {/* Camera */}
          <circle cx="90" cy="65" r="7" />
          <circle cx="90" cy="65" r="2" />

          {/* Wheels */}
          <circle cx="55" cy="109" r="10" />
          <circle cx="125" cy="109" r="10" />
          <path d="M 45 100 L 40 115 M 135 100 L 140 115" />

          {/* Ground */}
          <path d="M 25 124 L 155 124" strokeDasharray="3 5" />

          {/* Sensor rays */}
          <path d="M 40 65 L 20 45 M 140 65 L 160 45" strokeDasharray="3 4" />
        </g>
      )}

      {type === "neural" && (
        <g
          stroke="#64748b"
          strokeWidth="1.3"
          strokeLinecap="round"
        >
          {/* Connections */}
          <path d="M 35 40 L 85 25 L 145 45" />
          <path d="M 35 40 L 85 75 L 145 45" />
          <path d="M 35 110 L 85 75 L 145 105" />
          <path d="M 35 110 L 85 130 L 145 105" />
          <path d="M 85 25 L 85 75 L 85 130" />
          <path d="M 35 40 L 85 130" opacity=".4" />
          <path d="M 35 110 L 145 45" opacity=".4" />

          {/* Neural nodes */}
          <circle cx="35" cy="40" r="7" fill="#e0e7ff" />
          <circle cx="35" cy="110" r="7" fill="#e0e7ff" />
          <circle cx="85" cy="25" r="7" fill="#ddd6fe" />
          <circle cx="85" cy="75" r="10" fill="#c4b5fd" />
          <circle cx="85" cy="130" r="7" fill="#ddd6fe" />
          <circle cx="145" cy="45" r="7" fill="#e0e7ff" />
          <circle cx="145" cy="105" r="7" fill="#e0e7ff" />
        </g>
      )}

      {type === "satellite" && (
        <g
          stroke="#64748b"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Orbit */}
          <ellipse
            cx="90"
            cy="75"
            rx="75"
            ry="30"
            transform="rotate(-25 90 75)"
            strokeDasharray="4 5"
          />

          {/* Satellite body */}
          <rect
            x="75"
            y="60"
            width="30"
            height="30"
            rx="4"
            fill="#e2e8f0"
          />

          {/* Solar panels */}
          <rect x="30" y="62" width="35" height="26" rx="2" />
          <path d="M 41 62 V 88 M 52 62 V 88 M 30 75 H 65" />

          <rect x="115" y="62" width="35" height="26" rx="2" />
          <path d="M 126 62 V 88 M 137 62 V 88 M 115 75 H 150" />

          {/* Antenna */}
          <path d="M 90 60 L 90 42 L 100 35" />
          <path d="M 85 42 Q 90 30 105 35" />

          {/* Signal */}
          <path d="M 110 35 Q 125 20 140 35" strokeDasharray="3 4" />
          <path d="M 115 42 Q 125 32 135 42" strokeDasharray="3 4" />
        </g>
      )}
    </svg>
  );
};

// --------------------------------------------------
// TIMELINE CARD
// --------------------------------------------------

const TagCard = ({
  number,
  title,
  subtitle,
  text,
  icon,
  skills,
  tag,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer =
      cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    setIsActive(lineTipY >= triggerY);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`
        w-72 sm:w-80 rounded-[2rem] p-2 relative
        flex flex-col items-center
        transition-all duration-700 z-10
        hover:scale-[1.02] border
        ${className}
        ${
          isActive
            ? 'bg-[#7663A8] border-[#7663A8] shadow-[0_8px_20px_rgba(37,99,235,0.35)]'
            : 'bg-white border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
        }
      `}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100
        rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
        absolute top-4 border border-gray-300 z-10
        flex items-center justify-center">

        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      {/* Inner card */}
      <div
        className={`
          w-full rounded-[1.5rem] mt-8 p-7
          flex flex-col min-h-[310px]
          transition-colors duration-700
          ${isActive ? 'bg-[#7663A8]/50' : 'bg-[#f4f4f4]'}
        `}
      >
        {/* Number and icon */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-xl font-bold font-serif italic ${
            isActive ? 'text-[#7663A8]' : 'text-gray-400'
          }`}>
            {number}
          </span>

          <span className="text-3xl">
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-black mb-2 tracking-tight ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>

        {subtitle && (
          <p className={`text-xs font-bold mb-4 ${
            isActive ? 'text-[#7663A8]' : 'text-gray-500'
          }`}>
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className={`text-sm leading-relaxed font-medium ${
          isActive ? 'text-white' : 'text-gray-500'
        }`}>
          {text}
        </p>

        {/* Skills */}
        {skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`text-[10px] font-bold px-2.5 py-1.5
                  rounded-full border transition-colors duration-700 ${
                    isActive
                      ? 'bg-[#7663A8]/40 border-[#7663A8]/30 text-white'
                      : 'bg-white border-gray-200 text-gray-600'
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Technical label */}
        {tag && (
          <div className={`mt-auto pt-5 text-[9px] tracking-widest
            font-bold ${
              isActive
                ? 'text-white/70'
                : 'text-gray-400'
            }`}
          >
            {tag}
          </div>
        )}
      </div>
    </div>
  );
};

// --------------------------------------------------
// MAIN SERVICES SECTION
// --------------------------------------------------

const Services = () => {
  const containerRef = useRef(null);
  const desktopPathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="
        bg-white pt-24 pb-32 px-6 md:px-12
        w-full relative overflow-hidden font-sans
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* ---------------------------------------
            HEADER
        --------------------------------------- */}

        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px]
          z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-gray-300
            rounded-full px-5 py-1.5 text-sm text-gray-600
            font-bold mb-8 shadow-sm bg-white"
          >
            {skillsContent.badge}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl
            font-black text-gray-900 leading-[1.1]
            mb-6 tracking-tight relative"
          >
            {skillsContent.heading}

            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-10 right-10
              w-12 h-12 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>

          <p className="text-gray-500 text-base md:text-lg
            max-w-sm font-medium leading-relaxed"
          >
            {skillsContent.description}
          </p>
        </div>

        {/* ---------------------------------------
            TECHNICAL ILLUSTRATIONS
            Desktop negative space
        --------------------------------------- */}

        {/* Robotics rover */}
        <div className="hidden md:block absolute
          top-[270px] left-[3%] w-40 opacity-40
          rotate-[-8deg] z-0"
        >
          <TechnicalIllustration type="rover" />

          <p className="text-[9px] text-gray-400
            tracking-[0.25em] text-center mt-1">
            AUTONOMOUS ROVER
          </p>
        </div>

        {/* AI neural network */}
        <div className="hidden md:block absolute
          top-[590px] right-[1%] w-40 opacity-40
          rotate-[5deg] z-0"
        >
          <TechnicalIllustration type="neural" />

          <p className="text-[9px] text-gray-400
            tracking-[0.25em] text-center mt-1">
            NEURAL NETWORK
          </p>
        </div>

        {/* Aerospace satellite */}
        <div className="hidden md:block absolute
          top-[980px] left-[3%] w-40 opacity-40
          rotate-[-5deg] z-0"
        >
          <TechnicalIllustration type="satellite" />

          <p className="text-[9px] text-gray-400
            tracking-[0.25em] text-center mt-1">
            ORBITAL SYSTEMS
          </p>
        </div>

        {/* ---------------------------------------
            DESKTOP ANIMATED TRAJECTORY
        --------------------------------------- */}

        <svg
          className="hidden md:block absolute top-0 left-0
          w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="engineering-path-mask">
              <motion.path
                d={DESKTOP_PATH}
                fill="none"
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Background trajectory */}
          <path
            d={DESKTOP_PATH}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Scroll-revealed trajectory */}
          <path
            d={DESKTOP_PATH}
            fill="none"
            stroke="#171717"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#engineering-path-mask)"
            className="drop-shadow-sm"
          />

          {/* Rocket follows the exact path */}
          <ScrollRocket
            pathLength={pathLength}
            pathRef={desktopPathRef}
          />

          {/* Invisible geometry reference for rocket */}
          <path
            ref={desktopPathRef}
            d={DESKTOP_PATH}
            fill="none"
            stroke="transparent"
            strokeWidth="1"
          />
        </svg>

        {/* ---------------------------------------
            MOBILE VERTICAL TRAJECTORY
        --------------------------------------- */}

        <svg
          className="md:hidden absolute top-0 left-[50%]
            -translate-x-1/2 w-4 h-full
            pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="engineering-mobile-mask">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#171717"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#engineering-mobile-mask)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* ---------------------------------------
            CARDS
        --------------------------------------- */}

        <div className="
          flex flex-col gap-8 md:gap-12
          items-center md:block
          relative z-10 w-full
          pt-4 md:pt-0 pb-12 md:pb-0
        ">

          {skillsContent.cards.map((card, index) => {
            const positions = [
              "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",

              "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",

              "md:absolute md:top-[900px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
            ];

            const aosTypes = [
              "fade-left",
              "fade-right",
              "fade-left"
            ];

            const aosDelays = [
              "100",
              "200",
              "300"
            ];

            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                subtitle={card.subtitle}
                text={card.text}
                icon={card.icon}
                skills={card.skills}
                tag={card.tag}
                className={positions[index] || ""}
                aosType={aosTypes[index]}
                aosDelay={aosDelays[index]}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}

          {/* ---------------------------------------
              END ANNOTATION
          --------------------------------------- */}

          <div
            data-aos="fade-in"
            data-aos-delay="500"
            className="
              hidden md:block absolute
              top-[1240px] left-[60%]
              font-['Caveat',cursive]
              text-3xl text-gray-600 rotate-6
            "
          >
            {skillsContent.endText}
          </div>

          {/* Mission label */}
          <div className="
            hidden md:flex absolute
            top-[1260px] left-[5%]
            flex-col gap-1 opacity-50
          ">
            <span className="text-[9px] tracking-[0.3em]
              font-bold text-gray-500">
              MISSION / 001
            </span>

            <span className="text-[9px] tracking-widest
              font-mono text-gray-400">
              ROBOTICS // AI // AEROSPACE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
