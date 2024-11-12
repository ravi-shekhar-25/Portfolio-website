"use client";
import React from "react";
import Image from "next/image";

const EducationSection = () => {
  const sectionStyle = {
    backgroundColor: "#121212", // Light blue background color for the section
    color: "#ffffff", // Dark text color
    padding: "2rem",
    textAlign: "center"
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#432b93", // Dark purple text color for heading
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem"
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
      <h1 style={headingStyle}>
        <i className="fas fa-graduation-cap"></i> My <span style={highlightStyle}>Education</span>
      </h1>

      <p style={quoteStyle}>
        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
      </p>

      <div style={boxContainerStyle}>
        {/* Education Item 1 */}
        <div style={boxStyle}>
          <div style={imageStyle}>
            <Image
              priority
              src="/images/college.jpg"
              alt="Rajiv Gandhi Institute of Petroleum Technology"
              width={250}
              height={250}
              style={{ borderRadius: "8px", objectFit: "cover" }}
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
              src="/images/school.jpg"
              alt="Delhi Public School Ranchi - Intermediate"
              width={250}
              height={250}
              style={{ borderRadius: "8px", objectFit: "cover" }}
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
              src="/images/school.jpg"
              alt="Delhi Public School Ranchi - High School"
              width={250}
              height={250}
              style={{ borderRadius: "8px", objectFit: "cover" }}
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
