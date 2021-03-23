import { AppBar, Toolbar, Typography } from "@material-ui/core";

const AppBarComponent = () => {
  return (
      <AppBar color='secondary' position='static'>
          <Toolbar>
              <Typography variant='h5' color='inherit'>
                Lavadero
              </Typography>
          </Toolbar>
      </AppBar>
  )
};

export default AppBarComponent;
