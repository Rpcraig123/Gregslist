import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router";
import { CheckSession } from '../services/Auth'
import { userLogout, authLogout, userCheck, authCheck } from '../store/actions/UserActions'

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

const mapStateToProps = ( userState ) => ({
  ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    setUser: (payload) => dispatch(userCheck(payload)),
    toggleAuthenticated: (payload) => dispatch(authCheck(payload)),
    clearUser: (payload) => dispatch(userLogout(payload)),
    clearAuthenticated: (payload) => dispatch(authLogout(payload))
  }
}

const Navbar = (props) => {
  
  const classes = useStyles();

  const history = useHistory();

  const handleLogOut = () => {
    props.clearUser(null)
    props.clearAuthenticated(false)
    localStorage.clear()
    history.push('/login')
  }

  const checkToken = async () => {
    const session = await CheckSession()
    props.setUser(session)
    props.toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

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
              Log In
            </Link>
            <Link to="/login" onClick={() => handleLogOut()} className={classes.link}>
              Log Out
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);