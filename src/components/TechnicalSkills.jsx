import React from 'react';

const skillCategories = [
  {
    title: "DATA ANALYSIS",
    description: "Turning data into meaningful insights and decisions.",
    icon: "▥",
    skills: [
      "Python",
      "SQL",
      "MS Excel",
      "Power BI",
      "Data Analysis",
      "Data Visualization"
    ]
  },
  {
    title: "PROGRAMMING",
    description: "Building logic and solving problems with code.",
    icon: "</>",
    skills: [
      "Python",
      "C",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "DATABASES",
    description: "Working with structured data and database systems.",
    icon: "◉",
    skills: [
      "MySQL",
      "SQL",
      "Database Management",
      "DBMS"
    ]
  },
  {
    title: "DATA TOOLS",
    description: "Using tools to analyze, organize and present data.",
    icon: "▤",
    skills: [
      "MS Excel",
      "Power BI",
      "Data Visualization",
      "Data Reporting"
    ]
  },
  {
    title: "CORE CONCEPTS",
    description: "Strong fundamentals for analytical problem-solving.",
    icon: "⚙",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Problem Solving"
    ]
  },
  {
    title: "DEVELOPMENT",
    description: "Supporting technical skills for building applications.",
    icon: "⌘",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Git & GitHub"
    ]
  }
];

const SkillPill = ({ skill }) => {
  return (
    <div
      className="
        relative
        flex items-center justify-center
        w-full sm:w-auto
        min-w-[120px] sm:min-w-[145px]
        h-[46px]
        px-4 sm:px-6
        rounded-full
        bg-gradient-to-r from-red-600 via-red-500 to-red-600
        text-white
        font-bold
        text-xs sm:text-sm
        tracking-wide
        shadow-[0_8px_20px_rgba(255,42,42,0.25)]
        border border-red-400/30
        overflow-hidden
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_10px_30px_rgba(255,42,42,0.45)]
      "
    >
      {/* Left cylindrical highlight */}
      <span
        className="
          absolute left-0 top-0
          w-6 sm:w-8 h-full
          rounded-full
          bg-red-700/60
          border-r border-red-300/20
        "
      />

      {/* Right cylindrical highlight */}
      <span
        className="
          absolute right-0 top-0
          w-6 sm:w-8 h-full
          rounded-full
          bg-red-700/60
          border-l border-red-300/20
        "
      />

      <span className="relative z-10 text-center">
        {skill}
      </span>
    </div>
  );
};

const SkillCard = ({ category, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="
        group
        bg-white/[0.02]
        backdrop-blur-md
        border border-white/10
        rounded-2xl
        p-7
        min-h-[300px]
        transition-all duration-500
        hover:border-red-500/30
        hover:bg-white/[0.04]
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(255,42,42,0.08)]
      "
    >
      {/* Icon */}
      <div
        className="
          w-12 h-12
          flex items-center justify-center
          rounded-xl
          text-red-500
          text-2xl
          font-black
          mb-5
          border border-red-500/20
          bg-red-500/5
          group-hover:bg-red-500/10
          transition-all duration-300
        "
      >
        {category.icon}
      </div>

      {/* Title */}
      <h3
        className="
          text-white
          text-xl
          font-black
          tracking-tight
          mb-2
        "
      >
        {category.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-white/50
          text-sm
          leading-relaxed
          mb-7
        "
      >
        {category.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-4">
        {category.skills.map((skill) => (
          <SkillPill
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="
        bg-[#0a0a0a]
        pt-24
        pb-28
        px-4 sm:px-6
        md:px-12
        w-full
        relative
        overflow-hidden
        font-sans
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/4
          left-[-50px] md:left-[-150px]
          w-[250px] md:w-[450px]
          h-[250px] md:h-[450px]
          bg-red-600/10
          rounded-full
          blur-[80px] md:blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-1/4
          right-[-50px] md:right-[-150px]
          w-[250px] md:w-[450px]
          h-[250px] md:h-[450px]
          bg-red-600/10
          rounded-full
          blur-[80px] md:blur-[140px]
          pointer-events-none
        "
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="mb-16 text-center"
        >
          {/* Small Label */}
          <div
            className="
              inline-flex
              items-center
              justify-center
              border border-white/15
              rounded-full
              px-5
              py-2
              text-xs
              md:text-sm
              text-white/60
              font-bold
              tracking-wider
              uppercase
              bg-white/[0.03]
              backdrop-blur-sm
              mb-6
            "
          >
            Technical Skills
          </div>

          {/* Main Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-white
              tracking-tight
              mb-5
            "
          >
            My Skillset
          </h2>

          {/* Description */}
          <p
            className="
              text-white/50
              text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            A data-focused technical skillset combining programming,
            databases, analytics, visualization and problem-solving.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            md:gap-7
          "
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;