import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import InfoIcon from "@mui/icons-material/Info";
import LockIcon from "@mui/icons-material/Lock";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import StorageIcon from "@mui/icons-material/Storage";
import { Box, Button, Chip, Paper, Stack } from "@mui/material";
import React from "react";

const WorkCard = ({ project, onOpenDialog, onFullscreen, mediaRef }) => {
  const localRef = React.useRef(null);
  const ref = mediaRef || localRef;
  const [isInView, setIsInView] = React.useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only load once
        }
      },
      { threshold: 0.1 }
    );

    if (localRef.current) {
      observer.observe(localRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFullscreenClick = () => {
    if (ref && ref.current) {
      onFullscreen(ref.current);
    }
  };

  const handleVideoPlay = () => {
    if (ref && ref.current) {
      ref.current.play();
      setIsVideoPlaying(true);
    }
  };

  const handleVideoPause = () => {
    if (ref && ref.current) {
      ref.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const renderMedia = () => {
    // Don't render media until it's in view (lazy loading)
    if (!isInView) {
      return (
        <div
          style={{
            width: "100%",
            height: "250px",
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <div style={{ color: "#666", fontSize: "14px" }}>Loading...</div>
        </div>
      );
    }

    switch (project.mediaType) {
      case "image":
        return (
          <img
            src={project.mediaUrl}
            alt={project.title}
            ref={ref}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "4px 4px 0 0",
            }}
            loading="lazy"
          />
        );
      case "video":
        return (
          <Box sx={{ position: "relative" }}>
            <video
              ref={ref}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "4px 4px 0 0",
              }}
              loading="lazy"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src={project.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <Button
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  minWidth: "auto",
                  p: 1,
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
                onClick={handleVideoPlay}
              >
                <PlayArrowIcon sx={{ fontSize: "32px" }} />
              </Button>
            )}
          </Box>
        );
      case "iframe":
        return (
          <iframe
            src={project.mediaUrl}
            title={project.title}
            ref={ref}
            style={{
              width: "100%",
              height: "250px",
              border: "none",
              borderRadius: "4px 4px 0 0",
              overflow: "hidden",
            }}
            loading="lazy"
          />
        );
      case "pdf-placeholder":
        return (
          <div
            ref={ref}
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px 4px 0 0",
              border: "2px dashed #dee2e6",
            }}
          >
            <PictureAsPdfIcon
              style={{
                fontSize: "48px",
                color: "#dc3545",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                color: "#6c757d",
                fontSize: "14px",
                textAlign: "center",
                padding: "0 16px",
              }}
            >
              PDF Document Available
            </div>
            <div
              style={{
                color: "#adb5bd",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Click "Download" to view
            </div>
          </div>
        );
      case "pdf":
        return (
          <object
            data={project.mediaUrl}
            type="application/pdf"
            ref={ref}
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <p>PDF preview not available</p>
          </object>
        );
      default:
        return null;
    }
  };

  const getStatusChip = () => {
    const statusConfig = {
      internal: {
        label: "Internal Tool",
        color: "warning",
        icon: <LockIcon />,
      },
      public: { label: "Public Project", color: "success" },
      opensource: { label: "Open Source", color: "success" },
      research: { label: "Research", color: "info" },
      inprogress: {
        label: "In Progress",
        color: "warning",
        icon: <HourglassTopIcon />,
      },
    };

    const config = statusConfig[project.status];
    return (
      <Chip
        label={config.label}
        color={config.color}
        icon={config.icon}
        size="small"
        sx={{ ml: 2 }}
      />
    );
  };

  return (
    <Paper elevation={3} className="project-showcase" ref={localRef}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box sx={{ position: "relative" }}>
          {renderMedia()}
          {project.allowFullscreen && (
            <Button
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                minWidth: "auto",
                p: 0.5,
                bgcolor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
              onClick={handleFullscreenClick}
            >
              <FullscreenIcon />
            </Button>
          )}
        </Box>
        <Box sx={{ p: 3 }}>
          <div className="d-flex align-items-center mb-2">
            <h4 className="mb-0">{project.title}</h4>
            {getStatusChip()}
          </div>

          {project.note && (
            <p className="text-muted small">
              <InfoIcon
                sx={{ fontSize: 16, mr: 1, verticalAlign: "text-bottom" }}
              />
              {project.note}
            </p>
          )}

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
          >
            {project.techStack.map((tech, index) => (
              <Chip
                key={index}
                icon={
                  tech.icon === "code" ? (
                    <CodeIcon />
                  ) : tech.icon === "storage" ? (
                    <StorageIcon />
                  ) : tech.icon === "smart_toy" ? (
                    <SmartToyIcon />
                  ) : tech.icon === "cloud" ? (
                    <CloudIcon />
                  ) : tech.icon === "payment" ? (
                    <AttachMoneyIcon />
                  ) : null
                }
                label={tech.label}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>

          <p>{project.description}</p>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {project.showDetails && (
              <Button
                variant="outlined"
                startIcon={<InfoIcon />}
                onClick={() => onOpenDialog(project.id)}
              >
                See More Details
              </Button>
            )}
            {project.actions?.map((action, index) => (
              <Button
                key={index}
                variant={action.primary ? "contained" : "outlined"}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                download={action.download}
              >
                {action.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkCard;
