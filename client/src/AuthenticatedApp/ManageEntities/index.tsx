import { Grid, ToggleButton, ToggleButtonGroup, Typography, Stack } from '@mui/material';
import CardLink from '../CardLink';
import ManageAlbums from './ManageMain';
import ColorToggleButton from './toggle';

const useStyles = () => {

}

const ManageEntities = () => (
  // <Stack direction='column' spacing={2} justifySelf>
  //   <ColorToggleButton />
  // </Stack>
  // <Grid container>
    // <Grid item sm={12} alignItems='center' flexDirection={'column'}>
      // <ColorToggleButton />
      <ManageAlbums />
    // </Grid>
  // </Grid>
);

export default ManageEntities;