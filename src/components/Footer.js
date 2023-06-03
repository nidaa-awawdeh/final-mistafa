import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    textAlign: "center",
  },
  link: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">Email: example@example.com</Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Additional Section
            </Typography>
            <Typography variant="body1">
              We support global education, media, and skills initiatives that
              are transforming the fashion workforce to earn fair wages, operate
              in safe and ethical conditions and achieve effective leadership.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
