"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import ImageSwiper from "./ImageSwiper";
import about from "@/assets/about.png";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 flex flex-col items-center justify-between gap-10 py-6 lg:flex-row">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src={about}
            alt="About"
            width={300}
            height={400}
            className="size-[300px] rotate-[2.5deg] cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[350px]"
            priority
          />
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            inViewContent
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 xl:px-4"
        >
          <p className="mt-4">
  I&apos;m{" "}
  <span className="font-semibold text-heading">Navin Kumar</span>, a passionate frontend developer with hands-on experience in building modern, responsive web applications using HTML, CSS, JavaScript and frameworks like React.js. I specialize in designing clean, user-centric interfaces with Tailwind CSS and enhancing them through smooth, dynamic animations using Framer Motion. Over the past year, I&apos;ve worked on impactful projects including an Education Consultancy application, Exam Registration System, and a healthcare-based application that combine intuitive UI with efficient backend integration.
</p>

<p className="mt-4">
  My portfolio reflects a strong emphasis on performance, accessibility, and clean code. I&apos;ve also deployed projects on platforms like Vercel and Netlify and I&apos;m comfortable working with REST APIs, version control (Git) and development tools like Vite and Next.js. I&apos;m always eager to learn, adapt and build tools that not only look great but solve real-world problems. I&apos;m currently looking for opportunities to collaborate on ambitious projects and grow alongside a team of creative, forward-thinking developers.
</p>

          <div className="mt-6 w-full sm:mt-0">
            <div className="w-full">
              <h5 className="mt-4 text-xl font-bold text-textWhite">
                Education
              </h5>
              <div className="">
                <h5 className="text-lg font-medium">
                  Parisutham Institute of Technology & Science, Thanjavur
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      Bachelor of Engineering in Computer Science & Engineering{" "}
                      <br />
                      <small>2021 - 2025</small>
                    </p>
                    <span>GPA: 8.1/10.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full">
              <h5 className="mb-0.5 mt-2 text-xl font-bold text-textWhite">
                Achievements
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                  Earned an{" "}
                    <span className="font-bold text-heading">
                    Elite certificate{" "}
                    </span>
                    from the NPTEL exam on{" "} 
                    <span className="font-bold text-heading">
                    <a
                        href="https://drive.google.com/file/d/1SPEPEyk0HYMBXJSOikM7NPJPzq-XiaWv/view?usp=drive_link"
                        target="_blank"
                        className="underline"
                      >
                     Ethical Hacking
                    </a>
                    </span>
                    , a 12-week course.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                  Achieved certification in{" "}
                    <span className="font-bold text-heading">
                    <a
                        href="https://drive.google.com/file/d/1SgKY9IkKiLKfihKxfSAGjWcuDzRHPlsG/view?usp=drive_link"
                        target="_blank"
                        className="underline"
                      >
                    Data Structures and Algorithms using Java
                    </a>
                    </span>
                    , through NPTEL’s 12-week course.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                  Completed the{" "}
                    <span className="font-bold text-heading">
                    <a
                        href="https://drive.google.com/file/d/1SLk167WEBnttNlp9e1X_Oj8jNzvJKvjy/view?usp=drive_link"
                        target="_blank"
                        className="underline"
                      >
                    IR4.0 Foundation Course sponsored by Microsoft and SAP
                    </a>
                    </span>
                    , supported by the Naan Mudhalvan Program and Tamil Nadu Skill Development Corporation.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Successfully published a paper on the topic of{" "}
                    <span className="font-bold text-heading">
                    <a
                        href="https://drive.google.com/file/d/1StkjV0IgEaQ0L6-kfjfEKZjSbah72lkc/view?usp=drive_link"
                        target="_blank"
                        className="underline"
                      >
                      Multi-factor Proactive Authentication Solution for Web Applicaion
                      </a>
                    </span>
                    ,at ICEET-2025 conference.{" "}
                    {/* <a
                      href="https://medium.com/@aashishdhiman88"
                      target="_blank"
                      className="text-heading underline"
                    >
                      {" "}
                      Medium
                    </a> */}
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    <span className="font-bold text-heading">
                      <a
                        href="https://unstop.com/certificate-preview/65a3248e-db42-41ba-a8ec-e02acaba3d77?utm_campaign=site-emails"
                        target="_blank"
                        className="underline"
                      >
                        Certificate of Participation in Submission Round (Round 1) of HackZ&apos;24
                      </a>
                    </span>
                    , Idea Submission - 2024.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                HACKATHONS
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                  Actively participated in national-level hackathons{" "}
                    <span className="font-bold text-heading">
                    <a
                        href="https://drive.google.com/file/d/1T5hCGCbTUQyW5Ws_hpiMOHlqWMJsP5Ol/view?usp=drive_link"
                        target="_blank"
                        className="underline"
                      >
                     CODEATHON-3.0, CRACKATHON-2.0, & ISYSWAY TECHNOLOGIES{" "}
                    </a>
                    </span>
                    , contributing to impactful, real-world tech solutions.
                    These hackathons enhanced my collaborative problem-solving abilities and deepened my expertise in building scalable, user-focused applications under tight deadlines.{" "} 
                  </div>
                </div>
              {/* <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://leetcode.com/u/aashish_dhiman/"
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-[#1d1d1d] px-3 py-2 text-sm font-medium text-orange-300 transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiLeetcode className="size-6" />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/decode_aashish/practice"
                  target="_blank"
                  title="GeeksForGeeks"
                  className="flex items-center gap-1 rounded-md bg-green-700 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiGeeksforgeeks className="size-6" />
                </a>

                {/* <a
                  href="https://www.codechef.com/users/aashish_dhiman"
                  target="_blank"
                  title="Codechef"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05] "
                >
                  <SiCodechef className="size-6" />
                </a> */} 
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
