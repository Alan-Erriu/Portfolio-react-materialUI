import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "10rem", justifyContent: "center" }}>
      <Typography
        textAlign={"center"}
        fontFamily={"fantasy"}
        variant="h1"
        color="white"
      >
        Hi, i am Alan Erriu <br /> Front-End Developer
      </Typography>
    </Box>
  );
};

export default Home;
