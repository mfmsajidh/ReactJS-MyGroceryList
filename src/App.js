// import React, { Component } from 'react';

import React, { Fragment } from 'react';

import {
  // CssBaseline,
  withStyles,
} from '@material-ui/core'

import NavBar from './components/NavBar'
import Home from './components/Home'

const styles = theme => ({
  main : {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <NavBar />
    {/* <CssBaseline /> */}
    <main className={classes.main}>
      <Home />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
