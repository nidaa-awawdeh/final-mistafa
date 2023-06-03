import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Total Sales</Typography>
          <Typography variant="h4">$10,000</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">New Customers</Typography>
          <Typography variant="h4">100</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Orders</Typography>
          <Typography variant="h4">50</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Top Products</Typography>
          <ul>
            <li>Product A</li>
            <li>Product B</li>
            <li>Product C</li>
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
