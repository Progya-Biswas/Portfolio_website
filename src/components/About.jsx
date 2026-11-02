import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import myImage from "../assets/about/my_photo.jpeg";

/* =========================================================
   C ICON
========================================================= */

const CIcon = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      <svg
        viewBox="0 0 128 128"
        className="h-16 w-16"
        aria-label="C Programming"
      >
        <circle cx="64" cy="64" r="48" fill="#A8B9CC" />

        <path
          d="M91 42C84 34 75 30 64 30C45 30 30 45 30 64C30 83 45 98 64 98C75 98 84 94 91 86"
          fill="none"
          stroke="#1E5AA8"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <span className="text-xs font-bold uppercase tracking-wider text-white">
      C
    </span>
  </div>
);

/* =========================================================
   C++ ICON
========================================================= */

const CppIcon = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      <svg
        viewBox="0 0 128 128"
        className="h-16 w-16"
        aria-label="C++ Programming"
      >
        <circle cx="64" cy="64" r="48" fill="#659AD2" />

        <path
          d="M92 43C85 35 76 30 64 30C45 30 30 45 30 64C30 83 45 98 64 98C76 98 85 93 92 85"
          fill="none"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <text
          x="65"
          y="76"
          textAnchor="middle"
          fontSize="25"
          fontWeight="bold"
          fill="#00599C"
        >
          ++
        </text>
      </svg>
    </div>

    <span className="text-xs font-bold uppercase tracking-wider text-white">
      C++
    </span>
  </div>
);

/* =========================================================
   JAVA ICON
========================================================= */

const JavaIcon = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      <svg
        viewBox="0 0 128 128"
        className="h-16 w-16"
        aria-label="Java Programming"
      >
        {/* Steam */}
        <path
          d="M55 47C47 39 64 34 56 25"
          fill="none"
          stroke="#EA2D2E"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M72 47C64 39 81 34 73 25"
          fill="none"
          stroke="#EA2D2E"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Cup */}
        <path
          d="M37 59H91V76C91 89 81 98 68 98H60C47 98 37 89 37 76V59Z"
          fill="#EA2D2E"
        />

        {/* Handle */}
        <path
          d="M91 64H98C105 64 109 69 109 75C109 81 105 86 98 86H91"
          fill="none"
          stroke="#EA2D2E"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Saucer */}
        <path
          d="M30 104H98"
          stroke="#EA2D2E"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <span className="text-xs font-bold uppercase tracking-wider text-white">
      Java
    </span>
  </div>
);

/* =========================================================
   PYTHON ICON
========================================================= */

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      <svg
        viewBox="0 0 128 128"
        className="h-16 w-16"
        aria-label="Python Programming"
      >
        {/* Blue */}
        <path
          d="M64 14C45 14 46 22 46 22V36H65V41H37C19 41 19 61 19 61C19 61 19 81 37 81H48V68C48 58 56 50 66 50H93V31C93 22 83 14 64 14Z"
          fill="#3776AB"
        />

        {/* Yellow */}
        <path
          d="M64 114C83 114 82 106 82 106V92H63V87H91C109 87 109 67 109 67C109 67 109 47 91 47H80V60C80 70 72 78 62 78H35V97C35 106 45 114 64 114Z"
          fill="#FFD43B"
        />

        {/* Eyes */}
        <circle cx="55" cy="27" r="3" fill="white" />
        <circle cx="73" cy="101" r="3" fill="#3776AB" />
      </svg>
    </div>

    <span className="text-xs font-bold uppercase tracking-wider text-white">
      Python
    </span>
  </div>
);

/* =========================================================
   MONGODB ICON
========================================================= */

const MongoDBIcon = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      <svg viewBox="0 0 128 128" className="h-16 w-16" aria-label="MongoDB">
        <path
          d="M64 10C61 24 57 30 50 38C42 47 39 57 39 68C39 87 50 102 64 112C78 102 89 87 89 68C89 57 86 47 78 38C71 30 67 24 64 10Z"
          fill="#47A248"
        />

        <path
          d="M64 31V101"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M64 101C62 106 61 110 61 116"
          stroke="#47A248"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <span className="text-xs font-bold uppercase tracking-wider text-white">
      MongoDB
    </span>
  </div>
);

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = () => {
  /* AOS INITIALIZATION */

  React.useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#6551A0] px-6 pt-20 pb-40 font-sans md:px-12"
    >
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 md:flex-row">
        {/* ===================================================
            LEFT SIDE — PROFILE IMAGE
        =================================================== */}

        <div className="mt-12 flex w-full shrink-0 flex-col items-center md:mt-0 md:w-[350px]">
          <div
            data-aos="zoom-in"
            className="relative flex w-full justify-center"
          >
            {/* LANYARD STRING */}

            <div className="absolute -top-32 left-1/2 z-0 h-40 w-3 -translate-x-1/2 bg-black shadow-inner" />

            {/* LANYARD CLIP */}

            <div className="absolute -top-6 left-1/2 z-10 h-12 w-6 -translate-x-1/2 rounded border border-gray-400 bg-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />

            {/* PROFILE CARD */}

            <div className="relative z-20 w-full max-w-[280px] -rotate-3 rounded-2xl bg-gray-900 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:rotate-0">
              {/* CARD CUTOUT */}

              <div className="absolute -top-3 left-1/2 flex h-6 w-16 -translate-x-1/2 items-center justify-center rounded-t-xl bg-gray-900">
                <div className="h-2 w-8 rounded-full bg-black/30 shadow-inner" />
              </div>

              {/* =================================================
                  SHRUTI IMAGE
              ================================================= */}

              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border-2 border-transparent bg-gray-800">
                <img
                  src={myImage}
                  alt="Shruti Mishra"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE — INTRO
        =================================================== */}

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative z-20 mt-8 flex-1 text-white md:mt-0"
        >
          {/* HEADING */}

          <h2 className="mb-4 text-4xl font-black text-black md:text-5xl">
            Hi! 👋
          </h2>

          {/* =================================================
              SHRUTI INTRO
          ================================================= */}

          <p className="mb-12 max-w-3xl text-lg font-bold leading-relaxed text-white">
            I'm <strong className="text-black">Progya </strong>,
            a Computer Engineering student who is passionate about Artificial
            Intelligence, Robotics, and Reinforcement Learning. I enjoy solving
            complex problems step by step, exploring intelligent systems, and
            continuously developing my technical and analytical skills.
          </p>

          {/* =================================================
              PROGRAMMING LANGUAGES
          ================================================= */}

          <div className="flex flex-wrap items-start gap-5 sm:gap-6 md:gap-7">
            {/* C */}

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <CIcon />
            </div>

            {/* C++ */}

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <CppIcon />
            </div>

            {/* JAVA */}

            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <JavaIcon />
            </div>

            {/* PYTHON */}

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <PythonIcon />
            </div>

            {/* MONGODB */}

            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <MongoDBIcon />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TORN PAPER DIVIDER
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-12 w-full fill-white md:h-20"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* =====================================================
          TOP RIGHT STAR
      ===================================================== */}

      <div className="absolute right-10 top-10 animate-pulse text-black opacity-30 md:right-20">
        <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* =====================================================
          BOTTOM LEFT STAR
      ===================================================== */}

      <div
        className="absolute bottom-32 left-4 animate-pulse text-black opacity-30 md:left-20"
        style={{ animationDelay: "1s" }}
      >
        <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
