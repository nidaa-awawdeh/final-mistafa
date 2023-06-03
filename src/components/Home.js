import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Body from "./Body";
import Body1 from "./Body1";

function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
          marginTop="40px"
        >
          Ghosn Fashion
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Ghosn is a small project located in the town of Sair in the city of
          Hebron, which is interested in importing and selling clothes, and
          recycling used clothes for reuse. Ghosn takes into account social and
          environmental goals, as it reduces the consumption of clothes by
          recycling
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button variant="contained" color="primary" href="/products">
            View Products
          </Button>
        </div>
      </Container>
      <Body />
      <Body1 />
    </div>
  );
}

export default Home;
