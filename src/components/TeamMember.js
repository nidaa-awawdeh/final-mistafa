import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  member: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: theme.spacing(4),
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(2),
  },
}));

function TeamMember({ name, title, photoUrl ,para}) {
  const classes = useStyles();

  return (
    <div className={classes.member}>
      <Avatar alt={name} src={photoUrl} className={classes.avatar} />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography >{para}</Typography>
    </div>
  );
}

export default TeamMember;
