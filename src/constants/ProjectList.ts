import Educonnect from "@/assets/projects/Educonnect.png";
import Medizen from "@/assets/projects/Medizen.png";
import discord from "@/assets/projects/discord.png";
import bytebrainhub from "@/assets/projects/bytebrainhub.png";
import whisper from "@/assets/projects/whisper.png";
import notion from "@/assets/projects/notion.png";
import forkify from "@/assets/projects/forkify.png";
import bankist from "@/assets/projects/bankist.png";

export const ProjectList = [
  {
    id: 1,
    name: "Edu-Consultancy",
    description: [
      "Streamlining consultancy workflows for students, and administrators to save time and effort.",
      "Delivering a responsive, intuitive, and user-friendly interface for all stakeholders.",
      "We integrated Resend's email service with our own to efficiently send transactional and promotional emails to users.",
      "Secure and reliable payment gateway for seamless transactions, providing diverse payment options."
    ],
    img: Educonnect,
    //max 6 tech stack
    tech: ["ReactJs", "TailwindCSS", "Shadcn/ui",
      "SpringBoot", "MySQL",
    ],
    source: "https://github.com/Kumar0264/Edu-Consultancy.git",
    demo: "https://docs.google.com/presentation/d/1HzZCx5nUvYO3zjgvUI-mKf_sEqUXX1Bd/edit?usp=drive_link&ouid=115250899428124632875&rtpof=true&sd=true",
  },
  {
    id: 2,
    name: "Medizen",
    description: [
      "Designed a responsive, role-based interface for doctors and patients to ensure easy navigation and cross-device accessibility.",
      "Divided functionality into Doctor and Patient modules with role-based access, drug assignment features, and appointment tracking.",
      "Integrated real-time JavaScript validation to ensure accurate user input, reducing errors and enhancing form submission reliability across the application.",
    ],
    img: Medizen,
    //max 6 tech stack
    tech: ["HTML", "CSS", "Javascript", "Python", "MysQL"],
    source: "https://github.com/Kumar0264/final_year_project.git",
    // demo: "https://buzz-buy.vercel.app/",
  },
  // {
  //   id: 3,
  //   name: "ByteBrainHub",
  //   description: [
  //     "Created ByteBrainHub using Next.js for global insight sharing.",
  //     " Implemented Google Authentication via NextAuth and utilized MongoDB for efficient data management.",
  //     "Designed an interface for easy insight sharing with tags, enhancing user experience and fostering community interaction.",
  //   ],
  //   img: bytebrainhub,
  //   //max 6 tech stack
  //   tech: ["Next.js", "Tailwind CSS", "MongoDB"],
  //   source: "https://github.com/aashish-dhiman/byte-brain-hub",
  //   demo: "https://byte-brain-hub.vercel.app/",
  // },
  {
    id: 4,
    name: "Notion UI",
    description: [
      "Engineered a high-fidelity Notion Home Page UI Clone, revolutionizing user experience across all devices and screen sizes. Ensured flawless responsiveness and seamless navigation.",
      "Managed to develop a fully responsive solution within a challenging 12-hour timeframe. Demonstrated a strong work ethic and dedication to project success.",
      ,
    ],
    img: notion,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS"],
    source: "https://github.com/Kumar0264/discord-clone.git",
    demo: " https://discord-clone-navin.vercel.app/",
  },
  {
    id: 5,
    name: "Discord UI",
    description: [
      "Developed with React and Tailwind CSS, mirroring the original Discord UI's essence and functionality.",
      "Faithfully recreated Discord's home page, Nitro page, and Safety page.",
      "Ensured a responsive design with all links connecting to the official Discord site.",
    ],
    img: discord,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "Material UI"],
    source: "https://github.com/Kumar0264/discord-clone.git",
    demo: " https://discord-clone-navin.vercel.app/",
  },
  // {
  //   id: 6,
  //   name: "Whisper Wave",
  //   description: [
  //     "Developed with Node.js, Express.js, and Passport.js for secure registration and secret sharing.",
  //     "Incorporated Google OAuth 2.0 for a smooth and secure user login experience.",
  //     "Focused on ease of use and anonymity, providing a safe and engaging online experience.",
  //   ],
  //   img: whisper,
  //   //max 6 tech stack
  //   tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
  //   source: "https://github.com/aashish-dhiman/Authorisation",
  //   demo: null,
  // },
  // {
  //   id: 7,
  //   name: "Forkify",
  //   description: [
  //     "Developed a recipe search and bookmarking application.",
  //     "Users can find recipes by searching with keywords like ingredients, recipe name, or cuisine type, using the Forkify API.",
  //     "Users can upload and save their own recipes, adding them to the searchable database.",
  //     "Users can bookmark their favorite recipes, which are stored in their browser using local storage for easy access.",
  //   ],
  //   img: forkify,
  //   //max 6 tech stack
  //   tech: ["HTML", "SaSS", "JavaScript"],
  //   source: "https://github.com/aashish-dhiman/Forkify",
  //   demo: "https://forkify-get-your-recipes.vercel.app/",
  // },
  // {
  //   id: 8,
  //   name: "Bankist",
  //   description: [
  //     "Developed a banking interface that supports four accounts with unique usernames and PINs for login.",
  //     "Users can perform basic banking operations such as transferring money to other users, viewing account balance, and checking transaction history.",
  //     "Users can request loans and close their accounts by verifying their credentials.",
  //   ],
  //   img: bankist,
  //   //max 6 tech stack
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   source: "hhttps://github.com/aashish-dhiman/Bankist",
  //   demo: "https://bankist-web-aashish.netlify.app/",
  // },
];
