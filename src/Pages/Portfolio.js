import { React, useState } from "react";
import {
  Box,
  Modal,
  Button,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import { useTheme } from "@emotion/react";
import Resume from "../Documents/resume.pdf";
import { fontSize } from "@mui/system";

export const Portfolio = () => {
  const project1 = {
    title: "GeoApp",
    repo: "https://www.github.com",
    demo: "https://www.linkedin.com",
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/GeoApp.png?raw=true",
    alt: "ProjImg",
    description:
      "A desktop application designed to efficiently keep track of and manipulate samples of rocks, minerals, and fossils for the UWO-Fox Cities Geology Department. Developed with 3 other students.",
    tech: ["C#", ".NET", "MySQL", "Github", "Jira"],
  };
  const project2 = {
    title: "Cafe Website",
    repo: "https://www.github.com",
    demo: "https://www.linkedin.com",
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/bean.png?raw=true",
    alt: "ProjImg",
    description:
      "A full-stack responsive website encapsulating a cafe. Includes account sessions, secure password hashing, and multiple validated database CRUD operations. Developed for initial web software development university class.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Ajax"],
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      marginTop="1em"
      marginBottom="2em"
      display="flex"
    >
      <Grid item xs={12}>
        <Typography fontFamily="Silkscreen" variant="h2" textAlign="center">
          Projects
        </Typography>
        <Typography fontFamily="WorkSans" variant="h6" textAlign="center">
          Some personal and collaborative projects I have worked on. You can
          view my resume
          <Button
            onClick={handleOpen}
            style={{
              textTransform: "lowercase",
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "inherit",
              fontSize: "inherit",
              marginBottom: "2.45px"
            }}
            disableRipple
          >
            here
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box
              height="85%"
              width="85%"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <object data="/Documents/resume.pdf" height="100%" width="100%">
                resume
              </object>
            </Box>
          </Modal>
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project1}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project2}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project1}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project1}></ProjectCard>
      </Grid>
    </Grid>
  );
};
export default Portfolio;
