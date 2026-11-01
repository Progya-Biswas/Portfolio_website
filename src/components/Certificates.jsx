import React from "react";

/* =========================================================
   PROGYA'SCERTIFICATIONS
   ========================================================= */

const certificates = [
  {
    name: "Comparative Analysis of Transfer Learning Models with Explainable AI",
    issuer: "IJERT",
    year: "2026",
    icon: "📄"
  },
];

/* =========================================================
   CERTIFICATE CARD
   ========================================================= */

const CertificateCard = ({ cert, index }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={index * 100}
    className="
      bg-black/20
      backdrop-blur-sm
      rounded-2xl
      p-5
      border
      border-white/10
      hover:border-white/30
      hover:scale-[1.03]
      hover:bg-black/30
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
      transition-all
      duration-500
      cursor-default
      group
    "
  >
    <div className="flex items-start gap-4">
      {/* Certificate Icon */}
      <div
        className="
          w-12
          h-12
          shrink-0
          rounded-xl
          bg-white
          flex
          items-center
          justify-center
          text-2xl
          shadow-lg
          group-hover:scale-110
          transition-transform
          duration-300
        "
      >
        {cert.icon}
      </div>

      {/* Certificate Details */}
      <div className="flex-1 min-w-0">
        <h3
          className="
            text-white
            font-bold
            text-sm
            md:text-base
            leading-tight
            mb-2
          "
        >
          {cert.name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="
              text-white/60
              text-xs
              font-semibold
              uppercase
              tracking-wider
            "
          >
            {cert.issuer}
          </span>

          <span className="text-white/30 text-xs">•</span>

          <span
            className="
              text-white/50
              text-xs
              font-semibold
            "
          >
            {cert.year}
          </span>
        </div>
      </div>
    </div>
  </div>
);

/* =========================================================
   CERTIFICATIONS SECTION
   ========================================================= */

const Certificates = () => {
  return (
    <section
      id="certifications"
      className="
        bg-[#ff2a2a]
        pt-20
        pb-28
        px-6
        md:px-12
        w-full
        relative
        overflow-hidden
        font-sans
      "
    >
      {/* =====================================================
          TORN PAPER DIVIDER
          ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          pointer-events-none
          z-10
          transform
          -translate-y-[1px]
          rotate-180
        "
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="max-w-6xl mx-auto relative z-20">
        {/* ===================================================
            HEADER
            =================================================== */}

        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-black
              mb-4
              tracking-tight
            "
          >
            Certifications
          </h2>

          <p
            className="
              text-red-100
              text-base
              md:text-lg
              font-semibold
              max-w-2xl
              mx-auto
            "
          >
            Courses and certifications that reflect my continuous learning
            across technology, data, AI and cybersecurity.
          </p>
        </div>

        {/* ===================================================
            CERTIFICATION CARDS
            =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            md:gap-6
          "
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

        {/* ===================================================
            TOTAL CERTIFICATION COUNT
            =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex justify-center mt-12"
        >
          <div
            className="
              bg-white
              text-black
              px-7
              py-3
              rounded-full
              font-bold
              text-sm
              shadow-lg
              hover:scale-105
              transition-transform
              duration-300
            "
          >
             <a href = "https://drive.google.com/drive/u/1/folders/1ULKiA9SEyG_IMVBONrds4PKqVe0u7IYD">View all Certifications</a>
          </div>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE STAR — TOP LEFT
          ===================================================== */}

      <div
        className="
          absolute
          top-16
          left-6
          md:left-16
          text-black
          opacity-20
          animate-pulse
        "
      >
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* =====================================================
          DECORATIVE STAR — BOTTOM RIGHT
          ===================================================== */}

      <div
        className="
          absolute
          bottom-20
          right-8
          md:right-24
          text-black
          opacity-20
          animate-pulse
        "
        style={{ animationDelay: "1.5s" }}
      >
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default Certificates;
