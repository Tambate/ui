import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "#" },
    { Name: "Subcrise", Link: "#" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={4}>
        <StyleToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Link href="http://localhost:3000/" sx={{ textDecoration: "none" }}>
              <Typography 
              variant="h4"
              color={"tomato"}
              sx = {{fontFamily:"Splash, cursive", textAlign:{xs:"center", md:"left"}}}>
                Codingstrade
              </Typography>
            </Link>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body2">{item.Name}</Typography>
            ))}
          </MenuBox>
          <Box flex={1}>
            <TextField
              color="warning"
              label="Searching"
              variant="standard"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
            <MenuIcon
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyleToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton>{item.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>

          <TextField
            color="warning"
            label="Searching"
            variant="outlined"
            sx={{ display: { xs: "flex", md: "none" } }}
          />
        </Drawer>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          flexDirection: { xs: "column", md: "row" },
          padding:1
        }}
      >
        <Typography variant="h5" mr={{ xs: 0, md: 1 }} align="center">
          Simple Recipes Made For Coders
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color={"tomato"}
          sx={{ fontFamily: "Splash, cursive" }}
        >
          Simple Recipes Made For Coders
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
