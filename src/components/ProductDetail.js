import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { addToCart } from "./cartActions"

//  هون الملف فيه نقص في السطر رقم 13

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

function ProductDetail({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find(
    (product) => product.id === parseInt(match.params.id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={product.image}
                title={product.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h1">
                {product.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {product.category}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h5" color="textPrimary">
                {product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductDetail;
