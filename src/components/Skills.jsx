import React from "react";
import Box from "@mui/material/Box";
import SkillsIcons from "./skillsItems/skillsIcons";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const imgReat =
  "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg";
const imgJs =
  "https://profilinator.rishav.dev/skills-assets/javascript-original.svg";
const imgTS =
  "https://profilinator.rishav.dev/skills-assets/typescript-original.svg";
const imgMongodb =
  "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg";
const imgPy =
  "https://profilinator.rishav.dev/skills-assets/python-original.svg";
const imgExpress =
  "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg";
const imgNodeJs =
  "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg";
const imgTailwind =
  "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg";
const imgMaterialUi = "https://profilinator.rishav.dev/skills-assets/mui.png";
const imgRedux =
  "https://profilinator.rishav.dev/skills-assets/redux-original.svg";
const imgDjango =
  "https://profilinator.rishav.dev/skills-assets/django-original.svg";
const imgPostgre =
  "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg";

export const Skills = () => {
  const images = [
    imgReat,
    imgJs,
    imgTS,
    imgMongodb,
    imgPy,
    imgExpress,
    imgNodeJs,
    imgTailwind,
    imgMaterialUi,
    imgRedux,
    imgDjango,
    imgPostgre,
  ];

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column",mt:"10rem" }}
    >
      <Box>
        <Typography variant="h3" fontSize="150px" color="white" fontFamily="fantasy">
          Skills
        </Typography>
      </Box>
      <Box sx={{ width: "700px" }}>
        <Grid
          sx={{position:"relative", backgroundColor: "#1f203b", height: "400px" }}
          container
          rowSpacing={2}
        >
          {images.map((i) => (
            <Grid key={i} item xs={3} sm={3} md={3} lg={3} xl={4}>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  xs: "colunm",
                }}
              >
                <SkillsIcons img={i} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Skills;
