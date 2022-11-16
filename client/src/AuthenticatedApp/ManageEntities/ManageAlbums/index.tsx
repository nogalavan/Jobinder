import {
  Divider, Stack, Typography, Button, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardContainer } from '../../CardContainer';
import ColorToggleButton from '../toggle';
import { useState } from 'react';
import NewJobDialog from './NewJobDialog';
import useOpen from '../../../hooks/use-open';
import useToggle from '../../../hooks/use-toggle';
import InterestedDialog from './InterestedDialog';

const albums = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 3,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
];

const ManageAlbums = () => {
  const [alignment, setAlignment] = useState('android');

  const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
  ) => {
      setAlignment(newAlignment);
  };
  const [isSearchJob, toggleIsSearchJob] = useToggle(true)
  const [newJobOpen, handleNewJobClose, handleNewJobOpen] = useOpen();
  const [interestedOpen, handleInterestedClose, handleInterestedOpen] = useOpen();

  return (
    <Stack
      spacing={2}
      alignItems='center'
      sx={{
        height: '100%', width: '100%', paddingTop: '50px', overflow: 'auto'
      }}
    >
      <Stack direction='row' justifyContent='space-between' sx={{ width: '85%' }}>
        <ColorToggleButton alignment={alignment} handleChange={handleChange}/>
        {alignment === 'android' && <Button variant='contained' color='success' onClick={handleNewJobOpen} >הוספת תפקיד</Button>}
      </Stack>
      {albums?.map(album => (
        <CardContainer sx={{ height: '15%', width: '85%' }}>
          <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
            <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
              <Typography variant='caption'> שם תפקיד</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '22%' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
              <Typography variant='caption'>מיקום</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
              <Typography variant='caption'>מעסיק</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
              <Typography variant='caption'>שיוך ארגוני</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
              <Typography variant='caption'>תיאור</Typography>
            </Stack>
            {alignment === 'android' && 
            <> 
              <Divider orientation='vertical' flexItem />
              <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                <Button variant='contained' color='success' onClick={handleInterestedOpen}> אני מעוניין בתפקיד!</Button>
                </Stack>
            </>}
          </Stack>
        </CardContainer>
      ))}
      <NewJobDialog open={newJobOpen} handleClose={handleNewJobClose} />
      <InterestedDialog open={interestedOpen} handleClose={handleInterestedClose} />
    </Stack>
  );
}

export default ManageAlbums;