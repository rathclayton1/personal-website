import React from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  styled,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GitHub } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: ["Silkscreen"].join(","),
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const CoolButton = styled(Button)(() => ({
  fontFamily: ["Silkscreen"].join(","),
  color: "black",
}));

export const ProjectCard = ({ project }) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 600 }} elevation="15" variant="elevation">
      <CardHeader
        action={
          <Box>
            <Button color="secondary" target="_blank" href={project.repo}>
              <GitHub />
            </Button>
            <CoolButton href={project.demo} target="_blank">
              Demo
            </CoolButton>
          </Box>
        }
        title={
          <Typography fontFamily="Silkscreen" variant="h5">
            {project.title}
          </Typography>
        }
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image={project.image}
        alt={project.alt}
      />
      <CardContent>
        <Typography variant="body2" fontFamily="WorkSans" color="secondary" marginBottom="1em">
          {project.description}
        </Typography>
        {project.tech.map((item) => (
            <Chip label={item} variant="outlined"/>
        ))}
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
