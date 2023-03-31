import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const CardProjects = ({
  data: { title, img, description, technologies, linkToCode, linkToDeploy },
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
       
      }}
    >
      <Card
        sx={{
          width: {xs:"90%",md:"400px"},
          height: 400,
          mt: "5rem",
          backgroundColor: "#0f203b",
          boxShadow: " 0 0 2px 6px",
          color: "black",
        }}
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
          height: {xs:"90%",md:"400px"},
          width: {xs:"90%",md:"400px"},
          mt: "9rem",
          ml: "3rem",
          justifyContent:"center"
        }}
      >
        <Typography
          sx={{ width: {xs:"200px",md:"600px"}, mb: "2rem" }}
          variant="h4"
          color="white"
          fontSize="30px"
          textAlign="center"
        >
          {title}
          <hr />
        </Typography>
        <Typography
          sx={{ width: {xs:"200px",md:"600px"} }}
          variant="h4"
          color="white"
          fontSize="20px"
          textAlign="center"
        >
          {description}
        </Typography>
        <Typography
          sx={{ width: {xs:"200px",md:"600px"}, mt: "1rem" }}
          variant="h4"
          color="white"
          fontSize="20px"
          textAlign="center"
        >
          <FormattedMessage
            id="project-technologies"
            defaultMessage="Used technologies:"
          />{" "}
          <br />
          {technologies}
        </Typography>
        <CardActions
          disableSpacing
          sx={{ display:"flex",gap: "30px", mt: "1rem", justifyContent: "center",alignItems:"center" }}
        >
          {/* this ternaries is for not place a this button in the porforlio personal.  */}
          {linkToDeploy ? ( //start ternaries
            <Link
              to={linkToDeploy}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{ boxShadow: " 0 0 0 4px", color: "black" }}
              >
                <Box sx={{display:"flex", gap:"5px"}}>
                <LanguageIcon sx={{ color: "white" }} />
                <Typography color={"white"}>Site</Typography>
                </Box>
              </Button>
            </Link>
          ) : null}
          {/* end ternaries  */}

          <Link
            to={linkToCode}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="success"
              
              sx={{ boxShadow: " 0 0 0 4px", color: "black" }}
            >
              <Box sx={{display:"flex", gap:"5px"}}>
                <GitHubIcon sx={{ color: "white" }} />
                <Typography color={"white"}>code</Typography>
              </Box>
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Box>
  );
};
export default CardProjects;
