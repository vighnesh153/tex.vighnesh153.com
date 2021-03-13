import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Math Equation Editor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
