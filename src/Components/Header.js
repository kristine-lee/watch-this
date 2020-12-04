import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography, CssBaseline } from '@material-ui/core';
import { withRouter } from "react-router-dom";



const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  siteName: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
})
)

const Header = props => {
  const { history } = props;

  const classes = useStyle();

  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/`);
  }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <h1 className={classes.siteName} onClick={handleClick}>
          🍿Watch This
        </h1>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header);
