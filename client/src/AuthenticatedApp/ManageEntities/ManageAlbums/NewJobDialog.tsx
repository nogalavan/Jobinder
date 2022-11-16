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
                        placeholder="שם תפקיד"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="מיקום"
                        placeholder="מיקום"
                    />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="מעסיק"
                        placeholder="מעסיק"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="שיוך ארגוני"
                        placeholder="שיוך ארגוני"
                    />
                </Stack>
                <TextField
                        required
                        id="outlined-required"
                        label="תיאור תפקיד"
                        placeholder="תיאור תפקיד"
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