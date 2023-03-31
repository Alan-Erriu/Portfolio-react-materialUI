import React from "react";
import Box from "@mui/material/Box";
import SkillsIcons from "./skillsItems/skillsIcons";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Button } from "@mui/material";
import { frontEndIcons, backEndIcons, allIcons } from "./skillsItems/iconState";



export const Skills = () => {
  // render of icons in skill box-----------------
  const [icons, setIcons] = useState(allIcons);

  return (
    <Box id="skills" sx={{display:"flex",justifyContent:"center"}}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: "10rem",
        width:{xs:"90%",md:"600px"}
      }}
    >
      <Box>
        <Typography variant="h3" fontSize="100px" color="white">
          Skills
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "20px", mb: "1rem" }}>
        {/* allIcons is a new state now ---------------------*/}
        <Button
          onClick={() => setIcons(allIcons)}
          sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
          variant="contained"
          color="success"
        >
          <Typography color={"white"}>All-Skills</Typography>
        </Button>
        {/* backend is a new state now ---------------------*/}
        <Button
          onClick={() => setIcons(backEndIcons)}
          sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
          variant="contained"
          color="success"
        >
          <Typography color={"white"}>Back-End</Typography>
        </Button>
        {/* frontEndIcons is a new state now--------------------- */}
        <Button
          onClick={() => setIcons(frontEndIcons)}
          sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
          variant="contained"
          color="success"
        >
          <Typography color={"white"}>front-End</Typography>
        </Button>
      </Box>
      <Box sx={{ width:{xs:"90%",md:"600px"} , height:{xs:"90%",md:"500px"} }}>
        <Grid
          sx={{
            position: "relative",
            backgroundColor: "#3E2B47",
            height: "400px",
            boxShadow: " 0 0 2px 4px",
          }}
          container
          rowSpacing={1}
        >
          {icons.map((desc, i) => (
            <Grid key={i} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  xs: "colunm",
                  mt: "3rem",
                }}
              >
                <SkillsIcons desc={desc} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </Box>
  );
};
export default Skills;
