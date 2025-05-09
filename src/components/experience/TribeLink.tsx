import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function TribeLink() {
  const tasks = [
    {
      text: "Completed a virtual internship on Data Science using Python under the Naan Mudhalvan – Pantech E-Learning Program. Gained hands-on experience in data preprocessing, visualization, and machine learning using Python, preparing for real-world data-driven problem solving.",
    },
    // {
    //   text: "Collaborated closely with the design and product teams to ensure seamless integration of features, optimizing user experience for content-creators-focused platform.",
    // },
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
                STEP NITK & Pantech E-Learning pvt Ltd
              </span>
              {/* <span className="text-sm">Remote</span> */}
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Virtual Internship</span>

              {/* Date */}
              <span>1-Month</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
  {/* Tasks Description 1 */}
  {tasks?.map((item, index) => {
    return (
      <div key={index} className="flex flex-row space-x-2">
        <ArrowRight className="h-5 w-4 flex-none" />
        <span>{item.text}</span>
      </div>
    );
  })}
          {/* Technologies Used */}
          <div className="flex flex-row space-x-2">
            <ArrowRight className="h-5 w-4 flex-none" />
            <span className="font-bold text-heading">
              Technologies used: Python.
            </span>
          </div>

          {/* Certificate Link */}
          <div className="flex flex-row space-x-2">
            <ArrowRight className="h-5 w-4 flex-none" />
            <span className="font-bold text-heading">
              Certificate:{" "}
              <a
                href="https://drive.google.com/file/d/1SGeDw-XkZIakZampLQP2KHi4g2NRcQkd/view?usp=drive_link" // replace with your actual link
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
      </motion.div>
    </>
  );
}
