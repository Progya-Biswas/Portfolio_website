import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/professional intro.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  // =========================================================
  // PLAY REEL
  // =========================================================

  const openReel = () => {
    setIsVideoPlaying(true);
    setIsMuted(false);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;

        videoRef.current.play().catch((error) => {
          console.log('Video play failed:', error);
        });
      }
    }, 100);
  };

  // =========================================================
  // CLOSE REEL
  // =========================================================

  const closeReel = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoPlaying(false);
    setIsMuted(true);
  };

  // =========================================================
  // MUTE / UNMUTE
  // =========================================================

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // =========================================================
  // SCROLL TO PROJECTS
  // =========================================================

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // =========================================================
  // SCROLL TO CONTACT
  // =========================================================

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >

        {/* =====================================================
            HERO VIDEO BACKGROUND
        ===================================================== */}

        <video
          ref={videoRef}
          src={heroVideo}
          playsInline
          muted={isMuted}
          preload="metadata"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* =====================================================
            DARK OVERLAY
            Keeps text readable
        ===================================================== */}

        <div
          className={`absolute inset-0 z-10 transition-all duration-500 ${isVideoPlaying ? 'bg-black/20' : 'bg-black/10'
            }`}
        />

        {/* =====================================================
            HERO CONTENT
            Everything remains above the video
        ===================================================== */}

        <div className="relative z-20 flex min-h-screen items-center py-24 sm:py-0">

          <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-16">

            <div className="max-w-2xl">

              {/* =================================================
                  INTRO
              ================================================= */}

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.28em] text-white md:text-base"
              >
                Hello, I'm
              </p>

              {/* =================================================
                  NAME
              ================================================= */}

              <h1
                data-aos="fade-up"
                data-aos-delay="450"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] sm:leading-[0.9] tracking-[-0.05em] sm:tracking-[-0.06em] text-white break-words"
              >
                Progya
                <br />
                <span className="text-white">Paromita Biswas.</span>
              </h1>

              {/* =================================================
                  ROLE
              ================================================= */}

              <h2
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-4 sm:mt-6 max-w-xl text-lg sm:text-2xl md:text-3xl font-bold leading-tight text-white"
              >
                BTECH Computer Science and Engineering 
              </h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                data-aos="fade-up"
                data-aos-delay="750"
                className="mt-4 sm:mt-5 max-w-lg text-xs sm:text-sm md:text-base font-medium leading-6 sm:leading-7 text-white/90"
              >
                 I’m passionate about Artificial Intelligence, Robotics and Reinforcement Learning — 
                 exploring intelligent systems, breaking complex problems into manageable steps, 
                 and building innovative solutions.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-delay="900"
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >

                {/* VIEW MY WORK */}

                <button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto text-center rounded-full bg-white px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                  View My Work
                </button>

                {/* CONTACT ME */}

                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto text-center rounded-full border-2 border-white px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  Contact Me
                </button>

                {/* DOWNLOAD RESUME */}

                <a
                  href="/Progya_Biswas_Resume.pdf"
                  download="Progya_Biswas_Resume.pdf"
                  className="w-full sm:w-auto text-center rounded-full border-2 border-black bg-black px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  Download Resume
                </a>

              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-delay="1050"
                className="mt-6 sm:mt-8 flex items-center gap-6"
              >

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/progya-paromita-biswas-440a96365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-white underline-offset-4 transition-all duration-300 hover:text-black hover:underline"
                >
                  LinkedIn
                </a>

                {/* GITHUB */}

                <a
                  href="https://github.com/Progya-Biswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-white underline-offset-4 transition-all duration-300 hover:text-black hover:underline"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PLAY REEL BUTTON

            Appears before video starts
        ===================================================== */}

        {!isVideoPlaying && (
          <button
            onClick={openReel}
            data-aos="fade-up"
            data-aos-delay="1200"
            className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 z-30 flex items-center gap-2 sm:gap-3 rounded-full bg-white/95 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-black shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
          >

            <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black text-white text-xs sm:text-sm">
              ▶
            </span>

            <span>Play Reel</span>

          </button>
        )}

        {/* =====================================================
            VIDEO CONTROLS

            Appear when video is playing
        ===================================================== */}

        {isVideoPlaying && (
          <>

            {/* MUTE / UNMUTE */}

            <button
              onClick={toggleMute}
              className="absolute bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-10 z-40 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>

            {/* CLOSE REEL */}

            <button
              onClick={closeReel}
              className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 z-40 flex items-center gap-2 sm:gap-3 rounded-full bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >

              <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black text-white text-sm">
                ×
              </span>

              <span>Close Reel</span>

            </button>

          </>
        )}

      </section>
    </>
  );
};

export default Hero;