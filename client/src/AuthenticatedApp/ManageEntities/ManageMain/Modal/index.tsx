import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { User } from '../../../../types/User';
import { CardContainer } from "../../../CardContainer";
import { Stack, Typography, Divider, Button } from "@mui/material";

interface Props {
    open: boolean;
    handleClose: () => void
    users: User[]
}

const Candidate = ({ open, handleClose, users }: Props) =>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`מעוניינים בתפקיד`}</DialogTitle>
        <DialogContent>
            {users?.map(user => (
                <CardContainer sx={{ height: '80px', borderBottomStyle: 'ridge' }}>
                    <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                            <Typography variant='caption'> שם פרטי</Typography>
                            <Typography variant='subtitle2'>{user.firstName}</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                            <Typography variant='caption'>שם משפחה</Typography>
                            <Typography variant='subtitle2'>{user.lastName}</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                            <Typography variant='caption'>קו"ח</Typography>
                            <Typography variant='subtitle2'>{user.cv}</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                            <Typography variant='caption'>נסיון</Typography>
                            <Typography variant='subtitle2' >{user.yearsOfExperience}</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                            <Typography variant='caption'>תאריך שחרור</Typography>
                            <Typography variant='subtitle2'>{user.dischargeDate}</Typography>
                        </Stack>
                    </Stack>
                </CardContainer>
            ))}
        </DialogContent>
    </Dialog>

export default Candidate;