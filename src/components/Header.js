import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Home from "./Home"
function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="red"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GhosenFashion
            <img src=".../logo.svg" />
          </Typography>
          <Button href="/Home" color="inherit">
            Home
          </Button>
          <Button href="/products" color="inherit">
            Products
          </Button>
          <Button href="/Cart" color="inherit">
            Cart
          </Button>
          <Button href="/About" color="inherit">
            About
          </Button>
          <Button href="/SignIn" color="inherit">
            SignIn
          </Button>

          <Button href="/SignOut" color="inherit">
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
