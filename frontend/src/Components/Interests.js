// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function Interests() {
//   const sections = [
//     {
//       title: "Interests",
//       icon: "💡",
//       items: [
//         { text: "President of University Tech Society", link: "https://aawaz.edu.pk/" },
//         { text: "Vice President of University Event Management Society", link: "https://aawaz.edu.pk/" },
//         { text: "Ambassador of Learning Horizon (National Level)" },
//         { text: "Content Writer, Comedy Scripting Founder" },
//         { text: "Volunteer Public Speaker" },
//       ],
//     },
//     {
//       title: "Memberships",
//       icon: "🤝",
//       items: ["Member of Skills4u x Pakistan Career Fair"],
//     },
//     {
//       title: "Awards",
//       icon: "🏆",
//       items: [
//         "NASA Hackathon 2024, 2nd Position",
//         "AI & Data Analytics Hackathon 2025, 1st Position",
//       ],
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
//       {/* Animated background blob */}
//       <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-black/20 rounded-full blur-[120px] animate-pulse"></div>

//       <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#162c6b] to-[#3a52a6] mb-12 uppercase tracking-wide">
//         Interests, Memberships & Awards
//       </h2>

//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {sections.map((section, i) => (
//           <SwiperSlide key={i}>
//             <div className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-[#162c6b] to-[#3a52a6] shadow-lg hover:shadow-2xl transition-all duration-500">
//               {/* Glass effect inner card */}
//               <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full transform group-hover:-translate-y-2 transition-all duration-500">
//                 <h3 className="flex items-center text-2xl font-bold text-[#162c6b] mb-6 uppercase">
//                   <span className="text-3xl mr-3">{section.icon}</span>
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4 text-gray-800 font-medium">
//                   {section.items.map((item, idx) =>
//                     typeof item === "string" ? (
//                       <li key={idx} className="hover:text-[#3a52a6] transition-colors duration-300">
//                         {item}
//                       </li>
//                     ) : (
//                       <li key={idx}>
//                         {item.link ? (
//                           <a
//                             href={item.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-[#3a52a6] transition-colors duration-300 underline"
//                           >
//                             {item.text}
//                           </a>
//                         ) : (
//                           <span className="hover:text-[#3a52a6] transition-colors duration-300">
//                             {item.text}
//                           </span>
//                         )}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export default Interests;

