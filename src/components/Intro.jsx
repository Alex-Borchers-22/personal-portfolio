import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";
import { ReactTyped } from "react-typed";
import resume from "../assets/pdf/Alex Borchers Resume.pdf";
import "./stars.scss";

const Intro = ({ theme }) => {
  // Handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
    <>
      <div id="page-top"></div>
      <div
        id="home"
        className={
          theme === "dark"
            ? "intro route bg-image background"
            : "intro route bg-image sunny-background"
        }
        style={{ zIndex: "3" }}
      >
        {theme === "light" ? (
          <>
            <WbSunnyIcon
              className="sun-icon"
              style={{
                fontSize: "500px",
                position: "absolute",
                top: "-240px",
                left: "-240px",
                color: "lightgoldenrodyellow",
              }}
            />
          </>
        ) : (
          <>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </>
        )}

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Alex Borchers</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "M.S. in Computer Science",
                      "Founding Engineer",
                      "Senior Software Developer",
                      "Specializing in React, Vite, Express, and SQL",
                      "Retired Point Guard",
                      "Leader, Team Player, and Problem Solver",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-1">
                <button
                  className="btn btn-primary btn js-scroll px-4"
                  onClick={handleDownloadResume}
                >
                  Checkout My Resume!
                </button>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
