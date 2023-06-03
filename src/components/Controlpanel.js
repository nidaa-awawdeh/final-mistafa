import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import { Dashboard, TrendingUp, Person, Settings } from "@mui/icons-material";

const drawerWidth = 240;

const theme = createTheme();

const Root = styled("div")({
  display: "flex",
});

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
}));

const DrawerPaperStyled = styled("div")(({ theme }) => ({
  width: drawerWidth,
}));

const DrawerContainerStyled = styled("div")({
  overflow: "auto",
});

const Content = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ControlPanel = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <AppBarStyled position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Fashion Control Panel
            </Typography>
          </Toolbar>
        </AppBarStyled>
        <DrawerStyled variant="permanent">
          <Toolbar />
          <DrawerPaperStyled>
            <DrawerContainerStyled>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <TrendingUp />
                  </ListItemIcon>
                  <ListItemText primary="Trending Fashion" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </List>
            </DrawerContainerStyled>
          </DrawerPaperStyled>
        </DrawerStyled>
        <Content>
          <Toolbar />
          <Typography paragraph>
            Fashion control panel content goes here.
          </Typography>
        </Content>
      </Root>
    </ThemeProvider>
  );
};

export default ControlPanel;
