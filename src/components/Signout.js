import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const SignOut = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Sign Out
      </Typography>
      {isSignedIn ? (
        <div>
          <Typography variant="body1" gutterBottom>
            You are signed in.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <Typography variant="body1" gutterBottom>
          You are signed out.
        </Typography>
      )}
    </Container>
  );
};

export default SignOut;
