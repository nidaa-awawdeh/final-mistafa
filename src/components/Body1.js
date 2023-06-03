import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Body from "./Body";
import { Box } from "@mui/material";
import ImageComponent from "./Ima"
const imageUrl1 =
  "https://images.squarespace-cdn.com/content/v1/60ef3f68867c5f15de6269a1/c37c9d07-6ca1-4056-8230-ebce9a5e7ed6/E_SDG+goals_icons-individual-rgb-05.png?format=300w";
  const imageUrl2 =
    "https://images.squarespace-cdn.com/content/v1/60ef3f68867c5f15de6269a1/4d8d5216-48b2-4e9c-a3a7-b2bf82dfe8f6/E_SDG+goals_icons-individual-rgb-08.png?format=300w";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.primary,
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100px",
    height: "110px",
    marginBottom: theme.spacing(2),
    float: "Left",
  },

  image1: {
    width: "100px",
    height: "110px",
    marginTop: theme.spacing(1),
    float: "Left",
  },
  video: {
    width: "50%",
    // height: "auto",
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
    // height: "40%",
    // width: "70%",
    fontSize: "14px",
  },
  content: {
    fontSize: "14px",
  },
  div: {
    marginRight: "30px",
  },
}));

const Body1 = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <Body /> */}
      <Container maxWidth="lg" className={classes.container}>
        <Grid container direction="column" justify="center" spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h3" >
               GhosenFashion
              </Typography>
              <Typography className={classes.content}>
                We support All
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
        

              <ImageComponent />
              <Typography className={classes.content}>
                The Fashion Impact Fund is committed to advancing the
                Sustainable Development Goals. The Sustainable Development Goals
                (SDGs), the blueprint to achieve a better and more sustainable
                future for all as adopted by the United Nations Member States in
                2015, address the global challenges we face, including poverty,
                inequality, climate change, environmental degradation, peace and
                justice. Given its global reach, the fashion industry is
                uniquely positioned to be a driving force in the achievement of
                the Sustainable Development Goals; particularly in relation to
                gender equality, decent work for all, responsible consumption
                and production and climate action.
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              {/* <Typography variant="h5" className={classes.title}>
                Div 3
              </Typography> */}
              <div className={classes.div}>
                <img src={imageUrl1} alt="Image" className={classes.image} />
                <Typography className={classes.content}>
                  Gender equality is not only a fundamental human right, but a
                  necessary foundation for a peaceful, prosperous and
                  sustainable world. The Fashion Impact Fund is committed to
                  Sustainable Development
                  <br /> Goal 5: Gender Equality targets:
                  <br />
                  5.1 End all forms of discrimination against all women and
                  girls everywhere
                  <br />
                  5.2Eliminate all forms of violence against all women and girls
                  in the public and private spheres, including trafficking and
                  sexual and other types of exploitation
                  <br />
                  5.5 Ensure women’s full and effective participation and equal
                  opportunities for leadership at all levels of decisionmaking
                  in political, economic and public life Sustained and inclusive
                  economic growth can drive progress, create decent jobs for all
                  and improve living standards.
                  <br />
                </Typography>
                <div className={classes.div}>
                  <img src={imageUrl2} alt="Image" className={classes.image1} />
                  <Typography className={classes.content}>
                    The Fashion Impact Fund is committed to Sustainable
                    Development Goal 8: Decent Work and Economic Growth targets:
                    8.3 Promote development-oriented policies that support
                    productive activities, decent job creation,
                    entrepreneurship, creativity and innovation, and encourage
                    the formalization and growth of micro-, small- and
                    medium-sized enterprises, including through access to
                    financial services
                    <br /> 8.5 By 2030, achieve full and productive employment
                    and decent work for all women and men, including for young
                    people and persons with disabilities, and equal pay for work
                    of equal value
                    <br />
                    8.8 Protect labour rights and promote safe and secure
                    working environments for all workers, including migrant
                    workers, in particular women migrants, and those in
                    precarious employment
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Body1;
