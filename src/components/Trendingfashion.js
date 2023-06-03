import React from "react";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const TrendingFashion = () => {
  const fashionItems = [
    {
      id: 1,
      image: "image-url-1",
      name: "Fashion Item 1",
      description: "Description of Fashion Item 1",
    },
    {
      id: 2,
      image: "image-url-2",
      name: "Fashion Item 2",
      description: "Description of Fashion Item 2",
    },
    {
      id: 3,
      image: "image-url-3",
      name: "Fashion Item 3",
      description: "Description of Fashion Item 3",
    },
  ];

  return (
    <Grid container spacing={3}>
      {fashionItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingFashion;
