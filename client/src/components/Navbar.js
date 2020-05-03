import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className="navbar-link" to="/">
              Tweeter
            </Link>
          </Typography>
          {localStorage.getItem("loggedIn") ? (
            <Button color="inherit">
              <Link className="navbar-link" to="/profile">
                Profile
              </Link>
            </Button>
          ) : (
            <Button color="inherit">
              <Link className="navbar-link" to="/signup">
                Signup
              </Link>
            </Button>
          )}

          <Button color="inherit">
            {/* Here */}
            {localStorage.getItem("loggedIn") ? (
              <Link className="navbar-link" to="/logout">
                Logout
              </Link>
            ) : (
              <Link className="navbar-link" to="/login">
                Login
              </Link>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
