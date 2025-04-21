"use client";

import React from "react";
import Image from "next/image";
import {AcademicCapIcon} from "@heroicons/react/24/solid";
import {Divider, Typography} from "@mui/material";

const EducationSection = () => {

  const quoteStyle = {
    fontSize: "1.1rem",
    color: "#6b6b6b",
    marginBottom: "2rem",
    fontStyle: "italic"
  };

  const boxContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem"
  };

  const contentSubtitleStyle = {
    color: "#777777", // Gray subtitle color
    fontSize: "1rem",
    marginBottom: "0.5rem"
  };

  const contentDateStyle = {
    color: "#2b8a3e", // Green color for date/status
    fontSize: "1rem",
    fontWeight: "bold"
  };

  return (
      <section id="education" className="text-white text-center">
        <Divider
            sx={{
              borderColor: "#33353F",
              '&::before, &::after': {
                borderColor: '#33353F',
              },
              my: 1,
            }}
        >
          <div className="w-full flex justify-center mb-1">
            <div className="flex flex-row items-center gap-2">
              <AcademicCapIcon className="size-12 text-green-700"/>
              <h1 className={"text-4xl text-center font-bold "}>
                My <span className="text-[#a741f7]">Education</span>
              </h1>
            </div>
          </div>
        </Divider>

        <p style={quoteStyle}>
          Education is not the Learning of Facts, but the Training of the Mind to Think.
        </p>

        <div style={boxContainerStyle}>
          {/* Education Item 1 */}
          <div className={`flex flex-col md:flex-row md:gap-3 items-center text-left md:w-[90%] max-w-[1000px] bg-white rounded-lg`}>
            <div className="relative w-full max-w-[400px] md:w-[300px] h-[150px]">
              <Image
                  fill
                  src="/images/college.jpg"
                  alt="Rajiv Gandhi Institute of Petroleum Technology"
                  className= "object-cover"
              />
            </div>
            <div className="p-3">
              <Typography component="h3"
                          sx={{color: "#1c2a8a",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "0.5rem"}}>
                B.Tech In Computer Science & Engineering
              </Typography>
              <p style={contentSubtitleStyle}>Rajiv Gandhi Institute of Petroleum Technology</p>
              <p style={contentDateStyle}>2022-2026 | Pursuing</p>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className={`flex flex-col md:flex-row md:gap-3 items-center text-left md:w-[90%] max-w-[1000px] bg-white rounded-lg`}>
            <div className="relative w-full max-w-[400px] md:w-[300px] h-[150px]">
              <Image
                  fill
                  src="/images/sen-sec-school.jpg"
                  alt="Ramakrishna Mission Vidyapith- Intermediate"
                  className={"relative object-cover"}
              />
            </div>
            <div className="p-3">
              <Typography component="h3"  sx={{color: "#1c2a8a",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem"}}>
                Intermediate | 93.6%
              </Typography>
              <p style={contentSubtitleStyle}>Ramakrishna Mission Vidyapith Deoghar | CBSE</p>
              <p style={contentDateStyle}>2020-2022 | Completed</p>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className={`flex flex-col md:flex-row md:gap-3 items-center text-left md:w-[90%] max-w-[1000px] bg-white rounded-lg`}>
            <div className="relative w-full max-w-[400px] md:w-[300px] h-[150px]">
              <Image
                  fill
                  src="/images/sec-school.jpg"
                  alt="Ramakrishna Mission Vidyapith - High School"
                  className="object-cover"
              />
            </div>
            <div className="p-3">
              <Typography component="h3"  sx={{color: "#1c2a8a",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem"}}>
                High School | 97.2%
              </Typography>
              <p style={contentSubtitleStyle}>Ramakrishna Mission Vidyapith Deoghar | CBSE</p>
              <p style={contentDateStyle}>2018-2020 | Completed</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EducationSection;
