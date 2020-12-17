import React from 'react';
import { AppBar, Toolbar, makeStyles, CssBaseline } from '@material-ui/core';
import { withRouter } from "react-router-dom";



const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'static'
  },
  siteName: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    },
    '&:hover': {
      'cursor': 'pointer',
      color: '#b6c2b7'
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
    <>
  <CssBaseline />
    <AppBar className={classes.header}>
        <h1 className={classes.siteName} onClick={handleClick}>
          🍿Watch This
        </h1>
    </AppBar>
    </>
  )
}

export default withRouter(Header);
