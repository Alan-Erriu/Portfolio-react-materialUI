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
        width: { xs: "100%", sm: "100%", md: "90%" },
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "70%", md: "400px" },
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
          width: { xs: "90%", sm: "70%", md: "400px" },
          mt: "2rem",
          ml: { md: "4rem" },
          justifyContent: "center",

          textAlign: "start",
        }}
      >
        <Typography fontSize={"30px"} variant="h3" color="white">
          {title}
        </Typography>

        <Typography
          sx={{ mt: "1rem" }}
          variant="h4"
          color="white"
          fontSize="20px"
        >
          {description}
        </Typography>
        <Typography
          sx={{ mt: "1rem", color: "green" }}
          variant="h4"
          color="white"
          fontSize="20px"
        >
          <FormattedMessage
            id="project-technologies"
            defaultMessage="Used technologies:"
          />
        </Typography>
        <Typography
          sx={{ mt: "1rem" }}
          variant="h4"
          color="white"
          fontSize="20px"
        >
          {technologies}
        </Typography>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "30px",
            mt: "1rem",
          }}
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
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography
                    sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                    fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                    color={"white"}
                  >
                    <LanguageIcon />
                    <FormattedMessage
                      id="project-site-btn"
                      defaultMessage="Site"
                    />
                  </Typography>
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
              <Box>
                <Typography
                  sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                  fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                  color={"white"}
                >
                 
                  <GitHubIcon />
                  <FormattedMessage
                    id="project-code-btn"
                    defaultMessage="Code"
                  />
                </Typography>
              </Box>
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Box>
  );
};
export default CardProjects;
