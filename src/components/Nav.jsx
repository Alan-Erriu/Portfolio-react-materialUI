import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoAE from "./assets/svg/LogoAe";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LanguagesContext } from "./context/LanguagesContext";
import Spain from "./assets/svg/Spain";
import Usa from "./assets/svg/Usa";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // open menu mobile
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // close menu mobile
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //-----------------------------Context languages----------------
  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);
  //this function is for close menu mobile and change language to spanish
  const closeMenuAndChangeToES = () => {
    changeLangToEs();
    handleCloseNavMenu();
  };
  //this function is for close menu mobile and change language to english
  const closeMenuAndChangeToEn = () => {
    changeLangToEn();
    handleCloseNavMenu();
  };
  return (
    <AppBar position="fixed">
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="#home">
              <LogoAE />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"},
              }}
            >
              {/* -------------------------------------links mode mobile--------------------------------------------------- */}
              <a style={{ textDecoration: "none" }} href="#home">
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  <FormattedMessage id="navbar-home" defaultMessage="Home" />
                </Button>
              </a>
              <a style={{ textDecoration: "none" }} href="#aboutMe">
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  <FormattedMessage
                    id="navbar-about"
                    defaultMessage="About me"
                  />
                </Button>
              </a>
              <a style={{ textDecoration: "none" }} href="#skills">
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  <FormattedMessage
                    id="navbar-skills"
                    defaultMessage="Skills"
                  />
                </Button>
              </a>
              <a style={{ textDecoration: "none" }} href="#projects">
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  <FormattedMessage
                    id="navbar-projects"
                    defaultMessage="Projects"
                  />
                </Button>
              </a>
              <Link
                to={"https://www.linkedin.com/in/alan-erriu-498139195/"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  <FormattedMessage
                    id="navbar-linkedin"
                    defaultMessage="My linkedin"
                  />
                </Button>
              </Link>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MenuItem onClick={closeMenuAndChangeToEn}>
                  <Usa />
                </MenuItem>
                <MenuItem onClick={closeMenuAndChangeToES}>
                  <Spain />
                </MenuItem>
              </Box>
            </Menu>
            {/* --------------------------------------------end links mode mobile-------------------------------------------------- */}
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "3rem",
              color: "inherit",
              textDecoration: "none",
              p: "5px",
            }}
          >
            <a style={{ textDecoration: "none" }} href="#home">
              <LogoAE />
            </a>
            {/*--------------------- Links mode  desktop---------------------------------------------------------------------------- */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <a style={{ textDecoration: "none" }} href="#home">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FormattedMessage id="navbar-home" defaultMessage="Home" />
              </Button>
            </a>
            <a style={{ textDecoration: "none" }} href="#aboutMe">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FormattedMessage id="navbar-about" defaultMessage="About me" />
              </Button>
            </a>
            <a style={{ textDecoration: "none" }} href="#skills">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FormattedMessage id="navbar-skills" defaultMessage="Skills" />
              </Button>
            </a>
            <a style={{ textDecoration: "none" }} href="#projects">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FormattedMessage
                  id="navbar-projects"
                  defaultMessage="Projects"
                />
              </Button>
            </a>
          </Box>
          <Button
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={changeLangToEn}
          >
            <Usa />
          </Button>
          <Button
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={changeLangToEs}
          >
            <Spain />
          </Button>
          {/*--------------------- end Links mode  desktop---------------------------------------------------------------------------- */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
