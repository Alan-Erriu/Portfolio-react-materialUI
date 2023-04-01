import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function GuestFooter() {
  return (
    <Box
      className="footer"
      sx={{
        marginTop: "150px",
        backgroundColor: "#3E2B47",
        boxShadow: " 0 0 0 4px",
        color: "black",
        position: "relative",
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography variant="caption" color="white" textAlign="center">
            Ulitma Actulizacion abril--2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to={"https://www.linkedin.com/in/alan-erriu-498139195/"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link
            to={"https://github.com/Alan-Erriu"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <IconButton sx={{ color: "white" }}>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
