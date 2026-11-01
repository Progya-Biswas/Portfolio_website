// import React from 'react';
// import { Achievements as achievementsData } from '../data/portfolioData';

// const AchievementCard = ({ category, index }) => (
//   <div 
//     data-aos="fade-up"
//     data-aos-delay={index * 100}
//     className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between"
//   >
//     <div>
//       <div className="flex justify-between items-start mb-6">
//         <span className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
//           {category.icon}
//         </span>
//         <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase py-1 px-3 border border-white/10 rounded-full bg-white/[0.02]">
//           {category.stats}
//         </span>
//       </div>
//       <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
//         {category.title}
//       </h3>
//       <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium">
//         {category.description}
//       </p>
//     </div>

//     <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-wider font-bold text-white/40 group-hover:text-white transition-colors">
//       <span>Milestone Details</span>
//       <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-red-300 border border-white/10">
//         Achievement #{index + 1}
//       </span>
//     </div>
//   </div>
// );

// const Achievements = () => {
//   return (
//     <section id="achievements" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
//       {/* Visual background lights */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/5 rounded-full blur-[100px] md:blur-[160px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">
        
//         {/* Header */}
//         <div data-aos="fade-up" className="mb-16 md:mb-20">
//           <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
//             {achievementsData.badge}
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
//             {achievementsData.heading}
//           </h2>
//           <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
//             {achievementsData.description}
//           </p>
//         </div>

//         {/* Achievements Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           {achievementsData.categories.map((category, index) => (
//             <AchievementCard key={category.title} category={category} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Achievements;
