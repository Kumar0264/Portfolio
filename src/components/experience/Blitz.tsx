import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Blitz() {
  const tasks = [
    {
      text: "Edu-Consultancy is a centralized platform connecting students and consultants for educational planning. It offers role-based dashboards, secure access, and integrated services like email and payments.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              INFOSYS SpringBoard
              </span>
              {/* <span className="text-sm">Bangalore, India</span> */}
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Internship 5.0</span>

              {/* Date */}
              <span>3-Months</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRight className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
              <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-2">
                <ArrowRight className="h-5 w-4 flex-none" />
                <span className="font-bold text-heading">
                  Technologies used: React.js, Tailwind CSS, Python, and MySQL.
                </span>
              </div>

              <div className="flex flex-row space-x-2">
                <ArrowRight className="h-5 w-4 flex-none" />
                <span className="font-bold text-heading">
                  Certificate:{" "}
                  <a
                    href="https://drive.google.com/file/d/1LeRTepjhKpKJZLMRvbs5tO81iTnoOsGZ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-1"
                  >
                    View Document
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
}
