import { Stack, Button, } from '@mui/material';
import { useState } from 'react';
import NewJobDialog from './Modal/NewJobDialog';
import useOpen from '../../../hooks/use-open';
import useToggle from '../../../hooks/use-toggle';
import { DisplayJobs } from './stubs/jobs';
import { DisplayUsers } from './stubs/users';
import ColorToggleButton from '../toggle';
import CandidteDialog from './Modal/';

const maya = [{
  firstName: 'מאיה',
  lastName: 'ניומן',
  cv: 'אני  מאיה ניומן',
  avatarImage: '',
  yearsOfExperience: 2,
  dischargeDate: '2037',
  email: 'mayamaya@walla.co.il'

},
{
  firstName: 'מאיה',
  lastName: 'ניומן',
  cv: 'אני  מאיה ניומן',
  avatarImage: '',
  yearsOfExperience: 2,
  dischargeDate: '2037',
  email: 'mayamaya@walla.co.il'

},
{
  firstName: 'מאיה',
  lastName: 'ניומן',
  cv: 'אני  מאיה ניומן',
  avatarImage: '',
  yearsOfExperience: 2,
  dischargeDate: '2037',
  email: 'mayamaya@walla.co.il'

}];

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
  const [candidateOpen, handleCandidateClose, handleCandidateOpen] = useOpen();

  return (
    <Stack
      spacing={2}
      alignItems='center'
      sx={{
        height: '100%', width: '100%', paddingTop: '50px', overflow: 'auto'
      }}
    >
      <Stack direction='row' justifyContent='space-between' sx={{ width: '85%' }}>
        <ColorToggleButton alignment={alignment} handleChange={handleChange} />
        {alignment === 'android' && <Button variant='contained' color='success' onClick={handleNewJobOpen} >הוספת תפקיד</Button>}
      </Stack>
      {
        alignment === 'android' ? <DisplayJobs handleCandidateOpen={handleCandidateOpen}/> : <DisplayUsers />
      }
      <NewJobDialog open={newJobOpen} handleClose={handleNewJobClose} />
      <CandidteDialog open={candidateOpen} handleClose={handleCandidateClose} users={maya} />
    </Stack>
  );
}

export default ManageAlbums;