import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography,Box } from "@material-ui/core";
import TeamMember from "./TeamMember";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  team: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const teamMembers = [
  {
    name: "Mustafa Jaradat",
    title: "CEO",
    photoUrl: "https://example.com/john-doe.jpg",
    para: "A graduate of the Faculty of Science and Technology, from Al-Quds University, majoring in computer science, he established his first store to sell clothes, and is now working on developing his store to add the features of redesigning clothes.",
  }
  // },
  // {
  //   name: "Rami",
  //   title: "CTO",
  //   photoUrl: "https://example.com/jane-smith.jpg",
  //   para: "A graduate of the Faculty of Science and Technology, from Al-Quds University, majoring in computer science, he established his first store to sell clothes, and is now working on developing his store to add the features of redesigning clothes.",
  // },
  // Add more team members here...
];

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
 

      {/* <Typography component="div">
        <Box sx={{ lineHeight: "normal", m: 1 }}>
    
          Ghosn is a website for redesigning clothes, then selling them at
          reasonable prices.
        </Box>
     
      </Typography> */}

      {/* <Typography variant="h5" className={classes.header}>
        OurTeam
      </Typography> */}
      <div className={classes.team}>
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </Container>
  );
}

export default About;
