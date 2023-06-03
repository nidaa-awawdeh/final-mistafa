import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { makeStyles, requirePropFactory } from "@material-ui/core";
// import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
});

function Products() {
  const classes = useStyles();
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      image: require("../imags/bluetshirt.jpg"),
      description:
        "Discover men's t-shirts and vests at Ghosen. Shop from plain, printed, designer and long sleeve t-shirts and vests to longline and oversized styles with Ghosen",
      price: "$10",
    },
    {
      id: 2,
      name: "Jeans",
      image: require("../imags/Jeans.webp"),
      description:
        "Discover jeans at Ghosen . Shop our wide range of jeans from boyfriend, mom to skinny & ripped jeans",
      price: "$20",
    },
    {
      id: 3,
      name: "Dress",
      image: require("../imags/dress.jpg"),
      description:
        "Explore head-turning fits with our collection of Ghosen 's dresses",
      price: "$30",
    },
  ];

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.image}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 1rem 1rem 1rem",
                  }}
                >
                  <Typography variant="h6" color="textPrimary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Products;
