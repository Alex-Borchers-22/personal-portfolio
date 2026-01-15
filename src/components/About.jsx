// Home.js
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import JavaScriptImage from "../assets/img/javascript.png";
import MySqlImage from "../assets/img/mysql.png";
import NodeJsImage from "../assets/img/node-js.png";
import PhpImage from "../assets/img/php.png";
import PythonImage from "../assets/img/python.jfif";
import ReactImage from "../assets/img/react-js.png";
import SqlServerImage from "../assets/img/sql-server.png";
import SupabaseImage from "../assets/img/supabase.jpg";
import TypescriptImage from "../assets/img/typescript.png";

const Home = () => {
  const skills = [
    {
      id: "ReactJS_skill",
      content: "React (Vite) & React Native (Expo)",
      start_date: "2023-10-01",
      image_url: ReactImage,
    },
    {
      id: "NodeJS_skill",
      content: "Node (ExpressJS)",
      start_date: "2023-10-01",
      image_url: NodeJsImage,
    },
    {
      id: "Typescript_skill",
      content: "Typescript",
      start_date: "2023-10-01",
      image_url: TypescriptImage,
    },
    {
      id: "Supabase_skill",
      content: "Supabase",
      start_date: "2024-07-01",
      image_url: SupabaseImage,
    },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      start_date: "2017-09-01",
      image_url: JavaScriptImage,
    },
    {
      id: "PHP_skill",
      content: "PHP",
      start_date: "2017-09-01",
      image_url: PhpImage,
    },
    {
      id: "Python_skill",
      content: "Python",
      start_date: "2021-05-01",
      image_url: PythonImage,
    },
    {
      id: "SQL_skill",
      content: "MySQL",
      start_date: "2018-01-01",
      image_url: MySqlImage,
    },
    {
      id: "SQLserver_skill",
      content: "SQL Server",
      start_date: "2023-10-01",
      image_url: SqlServerImage,
    },
  ];
  const about_me = [
    {
      id: "first-p-about",
      content:
        "Lifelong problem solver with a deep curiosity for how systems work—and how to make them work better. I thrive at the intersection of software architecture, product thinking, and execution, and I enjoy turning ambiguous problems into reliable, scalable solutions.",
    },
    {
      id: "second-p-about",
      content:
        "A collaborative, team-oriented engineer with a strong ownership mindset. I communicate clearly across technical and non-technical teams, enjoy mentoring others, and take pride in building tools that people actually enjoy using. I value clean design, thoughtful trade-offs, and momentum over perfectionism.",
    },
    {
      id: "third-p-about",
      content:
        "Outside of tech, I’m a lifelong athlete with a deep love for sports—both competing and studying the strategy behind the game. That mindset carries into my work: preparation matters, fundamentals win, and continuous improvement is non-negotiable. I’m also an avid traveler who enjoys exploring new places and perspectives.",
    },
    {
      id: "fourth-p-about",
      content:
        "When I’m not building or training, I’m spending time with my family and our dog, planning the next trip, or working on side projects that blend technology, sports, and creativity. Always open to meaningful conversations, collaborations, and opportunities that push the needle forward.",
    },
  ];

  // Calculate experience
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = today - start;
    const years = diff / (1000 * 60 * 60 * 24 * 365);
    const yearFloored = Math.floor(years);
    const yearValue = yearFloored === 0 ? 1 : yearFloored;
    return yearValue > 1 ? `${yearValue} Years` : `${yearValue} Year`;
  };

  // Formats date
  const formatDate = (date) => {
    const d = new Date(date);

    // Return Month - Year
    return (
      d.toLocaleString("default", { month: "long" }) + " " + d.getFullYear()
    );
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-4" style={{ paddingRight: "3em" }}>
                  <div className="title-box-2">
                    <h5 className="title-left">Skills</h5>
                  </div>
                  <div className="skill-mf">
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      {skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar
                                    style={{
                                      background: "white",
                                      borderRadius: "0px",
                                    }}
                                  >
                                    <img
                                      src={skill.image_url}
                                      alt={skill.content}
                                      style={{ width: "100%" }}
                                    />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary={skill.content}
                                  secondary={`${calculateExperience(
                                    skill.start_date
                                  )} (Since ${formatDate(skill.start_date)})`}
                                />
                              </ListItem>
                            </>
                          </React.Fragment>
                        );
                      })}
                    </List>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
