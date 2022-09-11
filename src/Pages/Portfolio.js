import { React, useState } from "react";
import {
  Box,
  Modal,
  Button,
  Typography,
  Grid,
  useMediaQuery,
  Link
} from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import { useTheme } from "@emotion/react";
import Resume from "../Documents/resume.pdf";
import { fontSize } from "@mui/system";

export const Portfolio = () => {
  const project1 = {
    title: "GeoApp",
    repo: "https://github.com/rathclayton1/GeoApp",
    demo: {
      type: "demo",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6892920934198497280/"
    },
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/GeoApp.png?raw=true",
    alt: "ProjImg",
    description:
      "A desktop application designed to efficiently keep track of and manipulate samples of rocks, minerals, and fossils for the UWO-Fox Cities Geology Department. Developed with 3 other students.",
    tech: ["C#", ".NET", "MySQL", "Github", "Jira"],
  };

  const project2 = {
    title: "Cafe Website",
    repo: "https://github.com/rathclayton1/CafeSite",
    demo: {
      type: "site",
      link: "https://webdev.cs.uwosh.edu/students/rathc02/project/pages/home.php"
    },
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/bean.png?raw=true",
    alt: "ProjImg",
    description:
      "A full-stack responsive website encapsulating a cafe. Includes account sessions, secure password hashing, and multiple validated database CRUD operations. Developed for initial web software development university class.",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "MySQL", "Ajax"],
  };

  const project3 = {
    title: "This Website",
    repo: "https://github.com/rathclayton1/personal-website",
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/site.PNG?raw=true",
    alt: "ProjImg",
    description:
      "A full-stack, responsive personal website created for fun. More description coming soon once I finish it :D",
    tech: ["React", "JavaScript", "CSS", "Some", "Database", "ThatI'llMake"],
  };

  const project4 = {
    title: "IoT Bathroom Scheduler",
    repo: "https://github.com/rathclayton1/IoTBathroomScheduler",
    image:
      "https://github.com/rathclayton1/personal-website/blob/master/src/Images/IoT.png?raw=true",
    alt: "ProjImg",
    description:
      "An IoT device consisting of two micro-controllers and a website, enabling users to seamlessly schedule bathroom appointments, see a schedule of roommates' appointments, view bathroom data (inUse, temperature, humidity), and more. Developed with 3 other students.",
    tech: ["C++", "Firestore", "GCP", "JavaScript", "HTML", "CSS"],
  };

  document.title = "Portfolio";

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div display="flex">
    <Grid
      container
      direction="row"
      spacing={3}
      marginTop="1em"
      marginBottom="2em"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography fontFamily="Silkscreen" variant="h2" textAlign="center">
          Projects
        </Typography>
        <Typography fontFamily="WorkSans" variant="h6" textAlign="center">
          Some personal and collaborative projects that I have worked on. You can
          view my resume {}
          <Link
            underline="none"
            onClick={handleOpen}
            style={{
              textTransform: "lowercase",
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "inherit",
              fontSize: "inherit",
            }}
            sx={{ ':hover': {
              cursor: "pointer",
              textDecoration: "underline"
          }}}
          >
            here
          </Link>
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
              <object data={Resume} height="100%" width="100%">
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
        <ProjectCard project={project1} isDemo={true}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project2} isDemo={true}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project3} isDemo={false}></ProjectCard>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProjectCard project={project4} isDemo={false}></ProjectCard>
      </Grid>
    </Grid>
    </div>
  );
};
export default Portfolio;
