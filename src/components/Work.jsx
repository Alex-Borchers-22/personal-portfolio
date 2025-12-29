import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import fst from "../assets/img/fst.png";
import reactNativeDemo from "../assets/mp4/react-native-project.mp4";
import viteSupabaseDemo from "../assets/mp4/vite-supabase-example.mp4";
import mlResearch from "../assets/pdf/Project_Borchers_Masters_Final.pdf";
import sajfResearch from "../assets/pdf/SAJF Report.pdf";
import WorkCard from "./WorkCard";

// Custom hook to create refs for multiple projects
const useProjectRefs = (projects) => {
  const refs = React.useRef({});

  // Initialize refs for each project if they don't exist
  React.useEffect(() => {
    projects.forEach((project) => {
      if (!refs.current[project.id]) {
        refs.current[project.id] = React.createRef();
      }
    });
  }, [projects]);

  return refs.current;
};

const Work = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "fst",
      title: "Pierson Wireless FST",
      status: "internal",
      mediaType: "image",
      mediaUrl: fst,
      allowFullscreen: true,
      note: "Due to confidentiality agreements, limited information can be shared about this internal project.",
      techStack: [
        { icon: "code", label: "React.js" },
        { icon: "code", label: "Express.js" },
        { icon: "storage", label: "SQL Server" },
      ],
      description:
        "Enterprise-level financial management and estimation platform serving 100+ employees. Integrates with multiple third-party services and handles complex workflows.",
      showDetails: true,
      actions: [],
      contributions: [
        "The original creator of this tool - have been leading the development since 2021",
        "Developed and maintained a complex financial estimation platform",
        "Implemented real-time collaboration features for 100+ concurrent users",
        "Supports Google OAuth for user authentication",
        "Highly integrated with our accounting platform, Viewpoint, for real-time data synchronization",
        "Flexible setup that allows for administrative customization",
        "PDF rendering for quotes, purchases orders, shipping labels, etc.",
        "API integration with USPS, Avalara Tax, Hubspot, Google Drive, Gmail, & Monday Dev",
      ],
    },
    {
      id: "runYourPractice",
      title: "Run Your Practice",
      status: "public",
      mediaType: "iframe",
      mediaUrl: "https://run-your-practice.com/",
      allowFullscreen: false,
      techStack: [
        { icon: "code", label: "React (Vite)" },
        { icon: "storage", label: "Supabase" },
        { icon: "smart_toy", label: "Claude API" },
        { icon: "cloud", label: "Vercel" },
        { icon: "code", label: "Tailwind CSS" },
        { icon: "payment", label: "Stripe" },
      ],
      description:
        "Fully functional SAAS. AI-powered sports practice planning software that helps coaches and teams optimize their training sessions and improve performance.",
      showDetails: true,
      actions: [
        {
          label: "Visit Live Site",
          href: "https://run-your-practice.com/",
          primary: true,
          external: true,
        },
      ],
      contributions: [
        "Developed AI-powered sports practice planning software",
        "Built responsive web application using Vite and Tailwind CSS",
        "Implemented intelligent practice session generation and optimization",
        "Created user-friendly interface for coaches and team management",
        "Deployed on Vercel for optimal performance and scalability",
        "Integrated modern web technologies for seamless user experience",
        "Integrated with Stripe, features protected behind paywall",
      ],
    },
    {
      id: "alexChatBot",
      title: "Alex Chat Bot",
      status: "public",
      mediaType: "iframe",
      mediaUrl: "https://alex-chat-eight.vercel.app/",
      allowFullscreen: false,
      techStack: [
        { icon: "code", label: "NextJs" },
        { icon: "smart_toy", label: "Claude API" },
        { icon: "cloud", label: "Vercel" },
      ],
      description: "A self-chat bot built with NextJs and the Claude API.",
      showDetails: true,
      actions: [
        {
          label: "Check it out!",
          href: "https://alex-chat-eight.vercel.app/",
          primary: true,
          external: true,
        },
      ],
      contributions: [
        "Built a self-chat bot using a Claude API and special taylored prompt",
        "Built responsive UI with NextJS and Tailwind CSS",
        "Deployed on Vercel",
      ],
    },
    {
      id: "viteSupabase",
      title: "Vite Supabase Template",
      status: "opensource",
      mediaType: "video",
      mediaUrl: viteSupabaseDemo,
      allowFullscreen: true,
      techStack: [
        { icon: "code", label: "React + Vite" },
        { icon: "storage", label: "Supabase" },
        { icon: "code", label: "Chakra UI" },
      ],
      description:
        "A modern full-stack template featuring React with Vite, Supabase authentication, and Chakra UI components. Includes Google OAuth and protected routing.",
      showDetails: true,
      actions: [
        {
          label: "View on GitHub",
          href: "https://github.com/Alex-Borchers-22/vite-supabase-chakra-template",
          primary: true,
          external: true,
        },
      ],
      contributions: [
        "Created a full-stack template with React (Vite), Supabase, and Chakra UI",
        "Implemented secure authentication with Google OAuth integration",
        "Built protected routing system with role-based access control",
        "Developed reusable components and clean project structure",
        "Published as open-source template for developer community",
      ],
    },
    {
      id: "crawl",
      title: "The Crawl",
      status: "inprogress",
      mediaType: "video",
      mediaUrl: reactNativeDemo,
      allowFullscreen: true,
      techStack: [
        { icon: "code", label: "React Native" },
        { icon: "code", label: "Expo" },
        { icon: "storage", label: "Supabase" },
        { icon: "code", label: "Tailwind" },
      ],
      description:
        "A mobile party planning app that helps users organize social events using Google Maps API for real-time location data and route planning.",
      showDetails: true,
      actions: [
        {
          label: "View on GitHub",
          href: "https://github.com/Alex-Borchers-22/crawl",
          primary: true,
          external: true,
        },
      ],
      contributions: [
        "Developed a mobile app for planning and organizing social events",
        "Integrated Google Maps and Places APIs for real-time location data",
        "Built responsive UI with React Native and Tailwind CSS",
        "Implemented secure user authentication with Supabase",
      ],
    },
    {
      id: "mlResearch",
      title: "Machine Learning Research",
      status: "research",
      mediaType: "pdf-placeholder",
      mediaUrl: mlResearch,
      allowFullscreen: false,
      techStack: [
        { icon: "code", label: "Python" },
        { icon: "code", label: "TensorFlow" },
        { icon: "storage", label: "Data Analysis" },
      ],
      description:
        "Masters Thesis - Research focused on testing support vector machines using metamorphic relations.",
      showDetails: true,
      actions: [
        {
          label: "Download Paper",
          href: mlResearch,
          download: "Project_Borchers_Masters_Final.pdf",
          primary: true,
        },
      ],
      contributions: [
        "Investigates metamorphic testing for identifying implementation bugs in SVM image classification",
        "Introduces mutation testing through hyperparameter and support vector mutations",
        "Develops a no-code interactive platform for ML model training and testing",
        "Integrates ChatGPT API to generate and evaluate hyperparameter mutations",
        "Optimizes image processing for faster execution and improved UI of existing application for usability",
        "Implements a differential analysis table to track model performance changes",
        "Validates metamorphic relations like RGB channel reordering and mirroring",
        "Suggests expansion to other ML algorithms and deeper mutation testing research",
      ],
    },
    {
      id: "sajfResearch",
      title: "Sustainable Aviation Fuel Research",
      status: "research",
      mediaType: "pdf-placeholder",
      mediaUrl: sajfResearch,
      allowFullscreen: false,
      techStack: [
        { icon: "storage", label: "Market Analysis" },
        { icon: "storage", label: "Data Analysis" },
      ],
      description:
        "Market research and data analysis focused on the sustainable aviation fuel industry, examining economic viability and environmental impact.",
      showDetails: true,
      actions: [
        {
          label: "Download Report",
          href: sajfResearch,
          download: "SAJF Report.pdf",
          primary: true,
        },
      ],
      contributions: [
        "Interned with Avalon Capital Group - The private equity firm for Ted Waitt (co-founder of Gateway)",
        "Conducted comprehensive market analysis of sustainable aviation fuel industry",
        "Analyzed market trends and economic viability of alternative jet fuels",
        "Evaluated environmental impact and sustainability metrics",
      ],
    },
  ];

  // Create refs for all projects
  const projectRefs = useProjectRefs(projects);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const handleFullscreen = (mediaElement) => {
    if (mediaElement) {
      // Create a wrapper div for fullscreen
      const wrapper = document.createElement("div");
      wrapper.style.width = "100vw";
      wrapper.style.height = "100vh";
      wrapper.style.backgroundColor = "black";
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.justifyContent = "center";
      wrapper.style.position = "fixed";
      wrapper.style.top = "0";
      wrapper.style.left = "0";
      wrapper.style.zIndex = "9999";

      // Create a clone of the media element
      const clone = mediaElement.cloneNode(true);

      // Set styles for the cloned element
      clone.style.width = "auto";
      clone.style.height = "auto";
      clone.style.maxWidth = "95vw";
      clone.style.maxHeight = "95vh";
      clone.style.objectFit = "contain";

      // For videos, ensure autoplay and controls are enabled
      if (clone.tagName === "VIDEO") {
        clone.autoplay = true;
        clone.controls = true; // Add video controls
        clone.muted = false; // Unmute the video

        // Ensure the video starts playing
        clone.addEventListener("loadedmetadata", () => {
          clone.play().catch((e) => console.log("Playback failed:", e));
        });
      }

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Add close button
      const closeButton = document.createElement("button");
      closeButton.innerHTML = "×";
      closeButton.style.position = "absolute";
      closeButton.style.top = "20px";
      closeButton.style.right = "20px";
      closeButton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      closeButton.style.border = "none";
      closeButton.style.borderRadius = "50%";
      closeButton.style.width = "40px";
      closeButton.style.height = "40px";
      closeButton.style.fontSize = "24px";
      closeButton.style.cursor = "pointer";
      closeButton.style.display = "flex";
      closeButton.style.alignItems = "center";
      closeButton.style.justifyContent = "center";
      closeButton.style.zIndex = "10000";

      closeButton.onclick = () => {
        document.body.removeChild(wrapper);
      };

      wrapper.appendChild(closeButton);

      // Handle ESC key
      const handleEsc = (event) => {
        if (event.key === "Escape") {
          closeButton.onclick();
          document.removeEventListener("keydown", handleEsc);
        }
      };

      document.addEventListener("keydown", handleEsc);
    }
  };

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">Check out some of my recent work!</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <WorkCard
                project={project}
                onOpenDialog={handleOpenDialog}
                onFullscreen={handleFullscreen}
                mediaRef={projectRefs[project.id]}
              />
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedProject &&
            projects.find((p) => p.id === selectedProject)?.title}
        </DialogTitle>
        <DialogContent>
          <h6 className="mb-3">Key Contributions:</h6>
          <List>
            {selectedProject &&
              projects
                .find((p) => p.id === selectedProject)
                ?.contributions.map((contribution, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={contribution} />
                  </ListItem>
                ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Work;
