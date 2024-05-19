import { Box, Card, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import chef from "../../static/chef.jpg";
import { Send as SendIncon} from '@mui/icons-material'

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Hey I'm Karia
      </Typography>
      <CardMedia
        component={"img"}
        height={300}
        image={chef}
        alt="burger_image"
        sx={{
          width: "400px",
          cursor: "pointer",
          "&hover:": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography align="center" variant="body1">
        I love to sing and cook! My best spend time the table.
      </Typography>
      <Typography align="center" variant="body1">
        Don't forgot Subcrise Codingstrade! <br />{" "}
        <a href="google.com">Read More</a>
      </Typography>
      <Card sx={{ height: "200px", margin: "2" }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color='white' bgcolor={"tomato"} mt={2}>Subcrise via email</Typography>
      <Box sx={{textAlign:"center"}}>
        <TextField
          label="Your Email Here!"
          variant="standard"
          color="warning"
        ></TextField>
        <IconButton sx={{color:"tomato"}}>
            <SendIncon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Rightbar;
