import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "10rem", justifyContent: "center",flexDirection:"column" }}>
      <Typography
        textAlign={"center"}
        fontFamily={"fantasy"}
        variant="h1"
        color="gray"
        fontSize={{
          xs: "50px",
          sm: "50px",
          md: "50px",
          lg: "60px",
          xl: "70px",
        }}
      >
    <FormattedMessage id="home-title" defaultMessage="Hi, i am Alan Erriu Front-End Developer" />
      </Typography>
      <Typography
        textAlign={"center"}
        fontFamily={"fantasy"}
        variant="h3"
        color="gray"
        fontSize={{
          xs: "25px",
          sm: "30px",
          md: "30px",
          lg: "40px",
          xl: "50px",
        }}
      >
    <FormattedMessage id="home-subtitle" defaultMessage="Desarrollador Front-End/Programador" />
    </Typography>
    </Box>
  );
};

export default Home;
