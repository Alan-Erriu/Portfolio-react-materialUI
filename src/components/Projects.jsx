import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProjects from "./projectsItems/CardProjects";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "8rem",
      }}
    >
      <Typography variant="h1" color="white" fontFamily="fantasy">
        projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <CardProjects />
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#0f203b",
            height: "400px",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{ width: "600px", mb: "2rem" }}
            variant="h4"
            color="white"
            fontSize="40px"
            textAlign="center"
          >
            AE.IMPORTACIONES
            <hr />
          </Typography>
          <Typography
            sx={{ width: "600px" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            TIENDA DE PERIFÉRICOS Y ACCESORIOS PARA PC. Cuenta con varias
            secciones y un carro de compras.
          </Typography>
          <Typography
            sx={{ width: "600px", mt: "1rem" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            Tecnologías: React.js Context react router MaterialUI
          </Typography>
          <CardActions
            disableSpacing
            sx={{ gap: "30px", mt: "1rem", justifyContent: "center" }}
          >
            <Button variant="contained" color="success">
              <LanguageIcon sx={{ color: "white" }} /> site
            </Button>
            <Button variant="contained" color="success">
              <GitHubIcon sx={{ color: "white" }} /> Code
            </Button>
          </CardActions>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <CardProjects />
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#0f203b",
            height: "400px",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{ width: "600px", mb: "2rem" }}
            variant="h4"
            color="white"
            fontSize="40px"
            textAlign="center"
          >
            AE.IMPORTACIONES
            <hr />
          </Typography>
          <Typography
            sx={{ width: "600px" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            TIENDA DE PERIFÉRICOS Y ACCESORIOS PARA PC. Cuenta con varias
            secciones y un carro de compras.
          </Typography>
          <Typography
            sx={{ width: "600px", mt: "1rem" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            Tecnologías: React.js Context react router MaterialUI
          </Typography>
          <CardActions
            disableSpacing
            sx={{ gap: "30px", mt: "1rem", justifyContent: "center" }}
          >
            <Button variant="contained" color="success">
              <LanguageIcon sx={{ color: "white" }} /> site
            </Button>
            <Button variant="contained" color="success">
              <GitHubIcon sx={{ color: "white" }} /> Code
            </Button>
          </CardActions>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <CardProjects />
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#0f203b",
            height: "400px",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{ width: "600px", mb: "2rem" }}
            variant="h4"
            color="white"
            fontSize="40px"
            textAlign="center"
          >
            AE.IMPORTACIONES
            <hr />
          </Typography>
          <Typography
            sx={{ width: "600px" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            TIENDA DE PERIFÉRICOS Y ACCESORIOS PARA PC. Cuenta con varias
            secciones y un carro de compras.
          </Typography>
          <Typography
            sx={{ width: "600px", mt: "1rem" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            Tecnologías: React.js Context react router MaterialUI
          </Typography>
          <CardActions
            disableSpacing
            sx={{ gap: "30px", mt: "1rem", justifyContent: "center" }}
          >
            <Button variant="contained" color="success">
              <LanguageIcon sx={{ color: "white" }} /> site
            </Button>
            <Button variant="contained" color="success">
              <GitHubIcon sx={{ color: "white" }}/>code
            </Button>
          </CardActions>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <CardProjects />
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#0f203b",
            height: "400px",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{ width: "600px", mb: "2rem" }}
            variant="h4"
            color="white"
            fontSize="40px"
            textAlign="center"
          >
            AE.IMPORTACIONES
            <hr />
          </Typography>
          <Typography
            sx={{ width: "600px" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            TIENDA DE PERIFÉRICOS Y ACCESORIOS PARA PC. Cuenta con varias
            secciones y un carro de compras.
          </Typography>
          <Typography
            sx={{ width: "600px", mt: "1rem" }}
            variant="h4"
            color="white"
            fontSize="25px"
            textAlign="center"
          >
            Tecnologías: React.js Context react router MaterialUI
          </Typography>
          <CardActions
            disableSpacing
            sx={{ gap: "30px", mt: "1rem", justifyContent: "center" }}
          >
            <Button variant="contained" color="success">
              <LanguageIcon sx={{ color: "white" }} /> site
            </Button>
            <Button variant="contained" color="success">
              <GitHubIcon sx={{ color: "white" }} /> Code
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
