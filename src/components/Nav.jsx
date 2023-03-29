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

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            <LogoAE />
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
                display: { xs: "block", md: "none" },
              }}
            >
              {/* -------------------------------------links mode toggle--------------------------------------------------- */}
              <MenuItem onClick={handleCloseNavMenu}>
                <FormattedMessage id="navbar-home" defaultMessage="Home" />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <FormattedMessage id="navbar-about" defaultMessage="About me" />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <FormattedMessage id="navbar-skills" defaultMessage="Skills" />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <FormattedMessage
                  id="navbar-projects"
                  defaultMessage="Projects"
                />
              </MenuItem>
              <Button onClick={changeLangToEn}>
                <Usa />
              </Button>
              <Button onClick={changeLangToEs}>
                <Spain />
              </Button>
            </Menu>
            {/* ------------------------------------------------------------------------------------------------------------- */}
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
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <LogoAE />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="navbar-home" defaultMessage="Home" />
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="navbar-about" defaultMessage="About me" />
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="navbar-skills" defaultMessage="Skills" />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage
                id="navbar-projects"
                defaultMessage="Projects"
              />
            </Button>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
