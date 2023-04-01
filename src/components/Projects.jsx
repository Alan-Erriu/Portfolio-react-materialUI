import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProjects from "./projectsItems/CardProjects";
import DataProjects from "./projectsItems/DataProjects";
import { FormattedMessage } from "react-intl";
const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "8rem",
        pt: "5rem",
      }}
    >
      <Typography
        sx={{ mb: "3rem" }}
        variant="h2"
        color="gray"
        fontSize="50px"
      >
         <FormattedMessage
            id="project-title"
            defaultMessage="My projects"
          />
        <hr />
      </Typography>
      <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        {DataProjects.map((project) => (
          <CardProjects data={project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
