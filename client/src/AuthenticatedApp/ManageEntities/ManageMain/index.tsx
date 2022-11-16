import {
  Divider, Stack, Typography, Button, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardContainer } from '../../CardContainer';
import ColorToggleButton from '../toggle';
import { useState } from 'react';
import NewJobDialog from './Modal/NewJobDialog';
import useOpen from '../../../hooks/use-open';
import useToggle from '../../../hooks/use-toggle';
import InterestedDialog from './InterestedDialog';
import { DisplayJobs } from './stubs/jobs';
import { DisplayUsers } from './stubs/users';
import ColorToggleButton from '../toggle';
import CandidteDialog from './Modal';
import { User } from '../../../types/User';

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
      {
        alignment === 'android' ? <DisplayJobs /> : <DisplayUsers />
      }
      <NewJobDialog open={newJobOpen} handleClose={handleNewJobClose} />
    </Stack>
  );
}

export default ManageAlbums;