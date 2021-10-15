import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(7.5),
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{backgroundColor: "#3b3b3d"}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Gregslist
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/sell" className={classes.link}>
              Sell Something
            </Link>
            <Link to="/cart" className={classes.link}>
              Cart
            </Link>
            <Link to="/register" className={classes.link}>
              Register
            </Link>
            <Link to="/login" className={classes.link}>
              Log in
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;