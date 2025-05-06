// import AboutComponent from '@/app/components/AboutComponent';
// import React from 'react';


// type TeamMember = {
//   name: string;
//   logo: string;
//   firstParagraph: string;
//   secondParagh: string;
//   thirdParagraph: string;
//   socials: Array<{
//     linkTitle: string;
//     href: string;
//   }>;
// };

// type TeamMembers = {
//   [key: string]: TeamMember;
// };

// export function generateStaticParams() {
//   return [
//     { name: 'akeye' },
//     { name: 'oreoluwa' }
//   ];
// }

// export default async function AboutPage({ params }: {params: Promise<{ name: string }>}) {
//   const { name } = await  params;
  
//   const teamMembers: TeamMembers = {
//     akeye: {
//       name: "Akeye Saheed",
//       logo: "/Code 2.svg",
//       firstParagraph: "Hi, I'm Akeye,I am a frontend developer specialize in creating responsive,functional, accessible and visually appealing websites. I have a keen eye for beautiful designs, user-friendly and functionality web applications.",
//       secondParagh: "I have hands-on experience in building websites and writing reusable, maintainable code. I am continually evolving my skills and staying up-to-date with the latest web development technologies. I align technical solutions with the broader project vision, bringing both expertise and passion to every project I undertake.",
//       thirdParagraph: " Let's use code to solve problems together!",
//       socials: [
//         { linkTitle: "Portfolio website", href: "https://akeye-portfolio.netlify.app/" },
//         { linkTitle: "Github", href: "https://github.com/Omo-Akeye" },
//         { linkTitle: "Twitter", href: "https://x.com/omo_akeye" },
//         { linkTitle: "LinkedIn", href: "https://www.linkedin.com/in/akeye001/" }
//       ]
//     },
//     oreoluwa: {
//       name: "Isaac Oreoluwa",
//       logo: "/Layers.svg",
//       firstParagraph: "Hi, I'm Oreoluwa, a passionate product designer driven by the power of ideas and their ability to shape impactful, user-centric experiences. I thrive on transforming concepts into tangible, meaningful designs that resonate with users and meet business goals",
//       secondParagh: "With a sharp eye for detail and a strategic mindset, I specialize in crafting products that not only look great but function seamlessly. Whether it's designing from scratch or refining existing interfaces, I bring dedication and creativity to every project, guiding it from concept to execution.",
//       thirdParagraph: "Let's create designs that make a difference together.",
//       socials: [
//         { linkTitle: "Behance", href: "https://www.behance.net/isaacoreoluwa" },
//         { linkTitle: "LinkedIn", href: "http://linkedin.com/in/oshideroore/" },
//         { linkTitle: "Dribble", href: "https://dribbble.com/isaacoreoluwa" },
//         { linkTitle: "Twitter", href: "http://twitter.com/reoworx" }
//       ]
//     }
//   };

//   const member = teamMembers[name];

//   if (!member) {
//     return <div>Team member not found</div>;
//   }

//   return <AboutComponent {...member} />;
// }