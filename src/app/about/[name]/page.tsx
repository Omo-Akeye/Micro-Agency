import AboutComponent from '@/app/components/AboutComponent';
import React from 'react';

interface AboutPageProps {
  params: { name: string };
}
type TeamMember = {
  name: string;
  logo: string;
  firstParagraph: string;
  secondParagh: string;
  thirdParagraph: string;
  socials: Array<{
    linkTitle: string;
    href: string;
  }>;
}

type TeamMembers = {
  [key: string]: TeamMember;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { name } = await params;
  const teamMembers: TeamMembers = {
    akeye: {
      name: "Akeye Saheed",
      logo: "/Code 2.svg",
      firstParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      secondParagh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      thirdParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      socials:[
        {linkTitle:"Portfolio website",
        href:"https://akeye-portfolio.netlify.app/"
        },
        {linkTitle:"Github",
            href:"https://github.com/Omo-Akeye"
            },
            {linkTitle:"Twitter",
                href:"https://x.com/omo_akeye"
                },
                {linkTitle:"LinkedIn",
                    href:"https://www.linkedin.com/in/akeye001/"
                    }
    ]
    },
    ore: {
      name: "Isaac Oreoluwa",
      logo: "/Layers.svg",
      firstParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      secondParagh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      thirdParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      socials:[
        {linkTitle:"Behance",
        href:"https://www.behance.net/isaacoreoluwa"
        },
        {linkTitle:"LinkedIn",
            href:"http://linkedin.com/in/oshideroore/"
            },
            {linkTitle:"Dribble",
                href:"https://dribbble.com/isaacoreoluwa"
                },
                {linkTitle:"Twitter",
                    href:"http://twitter.com/reoworx"
                    }
    ]
      
    }
  };

 
  const member = teamMembers[name];


  return (

    <AboutComponent {...member} />

  );
}
