"use client";

import React from "react";
import Image from "next/image";
import {AcademicCapIcon} from "@heroicons/react/24/solid";
import {Divider} from "@mui/material";

const EducationSection = () => {
  const sectionStyle = {
    backgroundColor: "#121212", // Light blue background color for the section
    color: "#ffffff", // Dark text color
    padding: "2rem",
    textAlign: "center"
  };

  const highlightStyle = {
    color: "#a741f7" // Purple highlight color for "Education" word
  };

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

  const boxStyle = {
    backgroundColor: "#ffffff", // White background for boxes
    borderRadius: "12px",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    width: "90%",
    maxWidth: "1000px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "left"
  };

  const imageStyle = {
    flexShrink: 0,
    marginRight: "1rem",
    borderRadius: "8px"
  };

  const contentTitleStyle = {
    color: "#1c2a8a", // Dark blue title color
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem"
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
      <section style={sectionStyle} id="education">
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
                My <span style={highlightStyle}>Education</span>
              </h1>
            </div>
          </div>
        </Divider>


        <p style={quoteStyle}>
          Education is not the Learning of Facts, but the Training of the Mind to Think.
        </p>

        <div style={boxContainerStyle}>
          {/* Education Item 1 */}
          <div style={boxStyle}>
            <div style={imageStyle}>
              <Image
                  priority
                  src="/images/rgipt.jpeg"
                  alt="Rajiv Gandhi Institute of Petroleum Technology"
                  width={250}
                  height={250}
                  style={{borderRadius: "8px", objectFit: "cover"}}
              />
            </div>
            <div>
              <h3 style={contentTitleStyle}>B.Tech In Computer Science And Engineering</h3>
              <p style={contentSubtitleStyle}>Rajiv Gandhi Institute Of Petroleum Technology</p>
              <p style={contentDateStyle}>2022-2026 | Pursuing</p>
            </div>
          </div>

          {/* Education Item 2 */}
          <div style={boxStyle}>
            <div style={imageStyle}>
              <Image
                  priority
                  src="/images/sen-sec-school.jpg"
                  alt="Delhi Public School Ranchi - Intermediate"
                  width={250}
                  height={250}
                  style={{borderRadius: "8px", objectFit: "cover"}}
              />
            </div>
            <div>
              <h3 style={contentTitleStyle}>Intermediate | 93.6%</h3>
              <p style={contentSubtitleStyle}>Ramakrishna Mission Vidyapith Deoghar | CBSE</p>
              <p style={contentDateStyle}>2020-2022 | Completed</p>
            </div>
          </div>

          {/* Education Item 3 */}
          <div style={boxStyle}>
            <div style={imageStyle}>
              <Image
                  priority
                  src="/images/sec-school.jpg"
                  alt="Ramakrishna Mission Vidyapith - High School"
                  width={250}
                  height={350}
                  style={{borderRadius: "8px", objectFit: "cover"}}
              />
            </div>
            <div>
              <h3 style={contentTitleStyle}>High School | 97.2%</h3>
              <p style={contentSubtitleStyle}>Ramakrishna Mission Vidyapith Deoghar | CBSE</p>
              <p style={contentDateStyle}>2018-2020 | Completed</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EducationSection;
