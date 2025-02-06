import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hero from "./AbouItems/Hero";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <Box>
      <Grid sx={{ mb: "20rem", mt: "2rem" }} container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: "1rem",
              mt: "9rem",
            }}
          >
            <Hero />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
          <Box
            id="aboutMe"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "1rem",
              pt: { md: "4rem" },
            }}
          >
            <Typography
              sx={{
                width: "100%",
                backgroundColor: "#0f203b",
                position: "relative",
                pt: "5rem",
              }}
              fontSize={{
                xs: "15px",
                sm: "25px",
                md: "25px",
                lg: "28px",
                xl: "30px",
              }}
              variant="h2"
              color={"white"}
            >
              <FormattedMessage id="about-title" defaultMessage="About me" />
            </Typography>
            <Typography

              sx={{
                width: "100%",
                backgroundColor: "#0f203b",
                position: "relative",
                pt: "2rem",
              }}
              fontSize={{
                xs: "15px",
                sm: "25px",
                md: "25px",
                lg: "28px",
                xl: "30px",
              }}
              variant="h2"
              color={"white"}
            >
              <FormattedMessage
                id="about-first-paragraph"
                defaultMessage="Hi! My name is Alan Erriu, I am a 28 years old Software and Web Developer based in Buenos Aires, Argentina."
              />
              <br />
              <br />
              <FormattedMessage
                id="about-second-paragraph"
                defaultMessage="My goal is to continue training as a full stack web developer and be part of a professional team where I can develop my acquired skills. I usually work with react.js, materialUI, node.js and similar technologies."
              />
              <br />
              <br />
              <FormattedMessage
                id="about-third-paragraph"
                defaultMessage="I consider that my strengths lie in research, the ease of adapting to my colleagues, and I enjoy learning new technologies a lot."
              />
              <br />
              <br />
              <FormattedMessage
                id="about-fourth-paragraph"
                defaultMessage="I consider that my strengths lie in research, the ease of adapting to my colleagues, and I enjoy learning new technologies a lot."
              />
              <br />
              <br />
              <FormattedMessage
                id="about-fifth-paragraph"
                defaultMessage="I consider that my strengths lie in research, the ease of adapting to my colleagues, and I enjoy learning new technologies a lot."
              />

            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
