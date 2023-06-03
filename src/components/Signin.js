import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Perform sign-in logic here (e.g., validate email and password)
    // For simplicity, the example below considers the sign-in successful if both fields are filled with any value
    if (email && password) {
      setIsSignedIn(true);
    }
  };

  return (
      <Container maxWidth="sm" className={classes.container}>
      
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      {isSignedIn ? (
        <Typography variant="body1" gutterBottom>
          You are signed in.
        </Typography>
      ) : (
        <div>
          <TextField
            label="Email"
            variant="outlined"
            className={classes.textField}
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.textField}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SignIn;
