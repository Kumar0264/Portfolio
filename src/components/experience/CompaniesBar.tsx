import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  props: any;
}

const CompaniesBar = (props: any) => {
  const [barPosition, setBarPosition] = useState<number>(0);
  const [barAbovePosition, setBarAbovePosition] = useState<number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    useState<boolean[]>([true, false, false, false, false, false, false]);

  const CompanyButton = (props: any) => {
    return (
      <button
        suppressHydrationWarning
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAbovePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen,
          );
        }}
        className={` w-32 flex-none rounded py-3
             text-center font-mono text-sm duration-500 hover:text-gray-500 lg:w-44 lg:px-4 lg:pl-6 lg:text-left
             lg:text-base
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "scale-[1.03] text-heading"
                 : "text-textWhite"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-scroll pb-4 md:items-center md:justify-center lg:w-[220px] lg:flex-row lg:overflow-hidden lg:pb-0 ">
      {/* Left bar holder */}
      <div className="relative order-1 hidden translate-y-1 rounded bg-gray-500 lg:block lg:h-[240px] lg:w-0.5">
        {/* Animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className="absolute h-0.5 w-10 rounded bg-heading lg:h-10 lg:w-0.5"
        />
      </div>
      {/* // ? Companies name as buttons */}
      <div className="order-1 flex flex-col space-y-1 px-4 md:px-8 lg:order-2 lg:px-0">
        <div className="flex flex-row lg:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Infosys"
            BarPosition={0}
            BarAbovePosition={0}
            DescriptionJob="Blitz"
            CompanyNameBackgroundColorGreen={[
              true,
              false,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="TNSDC"
            BarPosition={48}
            DescriptionJob="TribeLink"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              true,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          {/* <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Go Careers"
            BarPosition={90}
            DescriptionJob="GoCareers"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              true,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="Epoch"
            BarPosition={143}
            DescriptionJob="Epoch"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              true,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={4}
            CompanyName="Physics Wallah"
            BarPosition={195}
            BarAbovePosition={257}
            DescriptionJob="PhysicsWallah"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              true,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          /> */}
        </div>
        <div className="block h-0.5 rounded bg-gray-500 lg:hidden">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="h-0.5 w-[128px] rounded"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesBar;