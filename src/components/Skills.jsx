import React from "react";
import Box from "@mui/material/Box";
import SkillsIcons from "./skillsItems/skillsIcons";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Button } from "@mui/material";
import { frontEndIcons, backEndIcons, allIcons,dataBaseIcons } from "./skillsItems/iconState";
import Divider from "@mui/material/Divider";
import { FormattedMessage } from "react-intl";

export const Skills = () => {
  // render of icons in skill box-----------------
  const [icons, setIcons] = useState(allIcons);

  return (
    <Box id="skills" sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: "10rem",
         
        }}
      >
        <Box sx={{ mb: "1rem" }}>
          <Typography
            variant="h3"
            fontSize={{ xs: "30px", md: "60px" }}
            color="gray"
          >
            <FormattedMessage id="skills-title" defaultMessage="Tech Skills" />
          </Typography>
          <Divider sx={{ backgroundColor: "white" }} variant="middle" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent:"center",
            mb: "1rem",
            width: { xs: "90%" },
          }}
        >
          {/* allIcons is a new state now ---------------------*/}
          <Button
            onClick={() => setIcons(allIcons)}
            sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
            variant="contained"
            color="success"
          >
            <Typography
              fontSize={{ xs: "8px", sm: "11px", md: "13px" }}
              color={"white"}
            >
             <FormattedMessage id="filter-all" defaultMessage="All" />
            </Typography>
          </Button>
          {/* backend is a new state now ---------------------*/}
          <Button
            onClick={() => setIcons(backEndIcons)}
            sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
            variant="contained"
            color="success"
          >
            <Typography
              fontSize={{ xs: "8px", sm: "11px", md: "13px" }}
              color={"white"}
            >
             <FormattedMessage id="filter-backend" defaultMessage="Back-End" />
            </Typography>
          </Button>
          {/* frontEndIcons is a new state now--------------------- */}
          <Button
            onClick={() => setIcons(frontEndIcons)}
            sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
            variant="contained"
            color="success"
          >
            <Typography
              color={"white"}
              fontSize={{ xs: "8px", sm: "11px", md: "13px" }}
            >
              <FormattedMessage id="filter-frontend" defaultMessage="Front-End" />
            </Typography>
          </Button>
         {/* databaseIcons is a new state now */}
          <Button
            onClick={() => setIcons(dataBaseIcons)}
            sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
            variant="contained"
            color="success"
          >
            <Typography
              color={"white"}
              fontSize={{ xs: "8px", sm: "11px", md: "13px" }}
            >
              <FormattedMessage id="filter-database" defaultMessage="Data-Base" />
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "600px" },
          }}
        >
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
              <Grid key={i} item xs={4} sm={4} md={2} lg={2} xl={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    xs: "colunm",
                    mt: "1rem",
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
