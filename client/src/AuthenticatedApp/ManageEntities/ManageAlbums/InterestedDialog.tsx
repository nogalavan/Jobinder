import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';

interface Props {
    open: boolean;
    handleClose: () =>  void
}

const InterestedDialog = ({open, handleClose}: Props) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>למה אתה מתאים לתפקיד?</DialogTitle>
        <DialogContent>
            <Stack spacing={2} sx={{mt: '10px'}}>
                    <TextField
                        required
                        id="outlined-required"
                    />
            </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' >ביטול</Button>
          <Button onClick={handleClose} variant='contained' color='success'>שמור</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InterestedDialog;