import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Arrow from "./homeitems/Arrow";
const Home = () => {
  return (
    <Box id="home" sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          marginTop: "18rem",
          justifyContent: "center",
          flexDirection: "column",
          width: { xs: "70%", md: "800px" },
        }}
      >
        <Typography
          textAlign={"center"}
          fontFamily={"fantasy"}
          variant="h1"
          color="white"
          fontSize={{
            xs: "30px",
            sm: "50px",
            md: "50px",
            lg: "60px",
            xl: "70px",
          }}
        >
          <FormattedMessage id="home-title" defaultMessage="Alan Erriu" />
        </Typography>
        <Typography
          textAlign={"center"}
          fontFamily={"fantasy"}
          variant="h3"
          color="white"
          fontSize={{
            xs: "16px",
            sm: "18px",
            md: "20px",
            lg: "30px",
            xl: "40px",
          }}
        >
          <FormattedMessage
            id="home-subtitle"
            defaultMessage="Desarrollador Front-End/Programador"
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            mt: "10px",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="cv Alan Erriu.pdf"
            download="cv Alan Erriu.pdf"
          >
            <Button
              sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
              variant="contained"
              color="success"
            >
              <Typography
                fontFamily={"inherit"}
                fontSize={{ xs: "8px", sm: "12px", md: "14px" }}
                color={"white"}
              >
                <FormattedMessage
                  id="btn_dowload-mycv"
                  defaultMessage="Dowload My CV"
                />
              </Typography>
            </Button>
          </a>
          <Button
            sx={{ mb: "1rem", boxShadow: " 0 0 0 4px", color: "black" }}
            variant="contained"
            color="success"
          >
            <Link
              to={"https://www.linkedin.com/in/alan-erriu-498139195/"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Typography
                fontSize={{ xs: "8px", sm: "12px", md: "14px" }}
                color={"white"}
              >
                <FormattedMessage
                  id="btn_linkedin"
                  defaultMessage="My Linkedin"
                />
              </Typography>
            </Link>
          </Button>
        </Box>
        <div className="container">

          <Arrow/>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
