import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
const imageUrl =
  "https://images.squarespace-cdn.com/content/v1/60ef3f68867c5f15de6269a1/ed224a3d-dc33-4f8d-8934-d507073b478e/E+SDG+Poster+2019_without+UN+emblem_WEB.jpg?format=500w";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400, // Adjust the height as needed
  },
  image: {
    width: "500px",
    height: "10%",
    //   objectFit: "cover",
marginRight:"90px"
  },
}));

const ImageComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper>
              <img src={imageUrl} alt="Image" className={classes.image} />
              <br />
{/* 
        <img src={imageUrl} alt="Image" className={classes.image} /> */}
      </Paper>
    </Box>
  );
};

export   default ImageComponent