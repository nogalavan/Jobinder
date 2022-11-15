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

const NewJobDialog = ({open, handleClose}: Props) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>הוספת תפקיד חדש</DialogTitle>
        <DialogContent>
            <Stack spacing={2} sx={{mt: '10px'}}>
                <Stack direction='row' spacing={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="שם תפקיד"
                        defaultValue="שם תפקיד"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="מיקום"
                        defaultValue="מיקום"
                    />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="מעסיק"
                        defaultValue="מעסיק"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="שיוך ארגוני"
                        defaultValue="שיוך ארגוני"
                    />
                </Stack>
                <TextField
                        required
                        id="outlined-required"
                        label="תיאור תפקיד"
                        defaultValue="תיאור תפקיד"
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

export default NewJobDialog;