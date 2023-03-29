import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CardProjects = ({
  data: { title, img, description, technologies, linkToCode, linkToDeploy },
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Card
        sx={{ width: 400, height: 400, mt: "5rem", backgroundColor: "#0f203b" }}
      >
        <CardMedia
          className="imgProject"
          component="img"
          height="100%"
          image={img}
          alt="project"
        />
      </Card>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#0f203b",
          height: "400px",
          mt: "9rem",
          ml: "3rem",
        }}
      >
        <Typography
          sx={{ width: "600px", mb: "2rem" }}
          variant="h4"
          color="white"
          fontSize="30px"
          textAlign="center"
        >
          {title}
          <hr />
        </Typography>
        <Typography
          sx={{ width: "600px" }}
          variant="h4"
          color="white"
          fontSize="20px"
          textAlign="center"
        >
          {description}
        </Typography>
        <Typography
          sx={{ width: "600px", mt: "1rem" }}
          variant="h4"
          color="white"
          fontSize="20px"
          textAlign="center"
        >
          {technologies}
        </Typography>
        <CardActions
          disableSpacing
          sx={{ gap: "30px", mt: "1rem", justifyContent: "center" }}
        >
          <Link
            to={linkToDeploy}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="success">
              <LanguageIcon sx={{ color: "white" }} /> site
            </Button>
          </Link>
          <Link
            to={linkToCode}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="success">
              <GitHubIcon sx={{ color: "white" }} /> Code
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Box>
  );
};
export default CardProjects;
