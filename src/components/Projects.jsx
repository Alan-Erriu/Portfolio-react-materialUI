import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProjects from "./projectsItems/CardProjects";
import DataProjects from "./projectsItems/DataProjects";
const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "8rem",
        pt:"5rem"
      }}
    >
      <Typography
        sx={{ mb: "3rem" }}
        variant="h2"
        color="white"
        fontSize="50px"
      >
        PROJECTS
        <hr />
      </Typography>
      <Box>
        {DataProjects.map((project) => (
          <CardProjects data={project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
