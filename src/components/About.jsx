import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hero from "./AbouItems/Hero";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <Box sx={{pt:"10rem"}} id="aboutMe">
      <Grid sx={{ mb: "20rem" }} container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              xs: "colunm",
              mt: "1rem",
            }}
          >
            <Hero />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              xs: "colunm",
              mt: "7rem",
              padding: "2rem",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                backgroundColor: "#0f203b",
                position: "relative",
              }}
              fontSize={{
                xs: "15px",
                sm: "25px",
                md: "25px",
                lg: "35px",
                xl: "35px",
              }}
              variant="h2"
              color={"white"}
            >
              <FormattedMessage id="about-title" defaultMessage="About me" />{" "}
              <br />
              <br />
              <FormattedMessage
                id="about-first-paragraph"
                defaultMessage="Hi! My name is Alan Erriu, I am a 28 years old Software and Web Developer based in Buenos Aires, Argentina."
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
