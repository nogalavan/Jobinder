import {
  AppBar, Avatar, Grid, Toolbar, Typography
} from '@mui/material';
import NavLink from './NavLink';
import Greeting from './Greeting';
import ColorModeButton from './ColorModeButton';

interface NavBarProps {
  height: string;
}

const NavBar = ({ height }: NavBarProps) => (
  <AppBar position='relative' sx={{ height, minWidth: '620px' }}>
    <Toolbar>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid container flexWrap='nowrap' sx={{ width: 'auto' }}>
          <Grid item>
            <Avatar alt="Remy Sharp"
              src="/img/jobs.jpeg"
              sx={{ width: '50px', height: '50px' }}>
            </Avatar>
          </Grid>
          <Grid
            container
            justifyContent='space-around'
            alignItems='center'
            wrap='nowrap'
            sx={{ width: 'auto', height: '100%' }}
          >
            <NavLink to='/'>תפקידים</NavLink>
            <NavLink to='/users'>ניהול פרופיל</NavLink>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ width: 'auto' }}
          alignItems='baseline'
          flexWrap='nowrap'
        >
          <Greeting />
          <ColorModeButton />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;