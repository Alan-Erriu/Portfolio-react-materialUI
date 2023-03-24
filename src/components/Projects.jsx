import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardProjects from "./projectsItems/CardProjects";

const Projects = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" color="white" fontFamily="fantasy">
        projects
      </Typography>
      <Box sx={{display:"flex",justifyContent:"center",gap:"100px"}}>
        <CardProjects />
        <Typography sx={{mt:"15rem",ml:"30px",width:"600px"}} variant="h4" color="white" fontSize="25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aspernatur laborum, suscipit iste unde voluptatem placeat nulla
          exercitationem esse asperiores? Fugiat quos perspiciatis, magni
          expedita neque dolorem ab laudantium dolores!
        </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",gap:"100px"}}>
        <CardProjects />
        <Typography sx={{mt:"15rem",ml:"30px",width:"600px"}} variant="h4" color="white" fontSize="25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aspernatur laborum, suscipit iste unde voluptatem placeat nulla
          exercitationem esse asperiores? Fugiat quos perspiciatis, magni
          expedita neque dolorem ab laudantium dolores!
        </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",gap:"100px"}}>
        <CardProjects />
        <Typography sx={{mt:"15rem",ml:"30px",width:"600px"}} variant="h4" color="white" fontSize="25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aspernatur laborum, suscipit iste unde voluptatem placeat nulla
          exercitationem esse asperiores? Fugiat quos perspiciatis, magni
          expedita neque dolorem ab laudantium dolores!
        </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",gap:"100px"}}>
        <CardProjects />
        <Typography sx={{mt:"15rem",ml:"30px",width:"600px"}} variant="h4" color="white" fontSize="25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aspernatur laborum, suscipit iste unde voluptatem placeat nulla
          exercitationem esse asperiores? Fugiat quos perspiciatis, magni
          expedita neque dolorem ab laudantium dolores!
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;
