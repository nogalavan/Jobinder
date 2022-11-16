import { Stack, Typography, Divider, Button } from "@mui/material";
import useOpen from "../../../../hooks/use-open";
import { CardContainer } from "../../../CardContainer";
import InterestedDialog from "../InterestedDialog";

export const Users = [
    {
        firstName: 'מאיה',
        lastName: 'ניומן',
        cv: 'אני  מאיה ניומן',
        avatarImage: '',
        yearsOfExperience: ' 10 דקות',
        rolesInCharge: [],
        dischargeDate: '2037',
        email: 'mayamaya@walla.co.il'
        
    },
    {
        firstName: 'נוגה',
        lastName: 'לבן',
        cv: '',
        avatarImage: '',
        yearsOfExperience: ' ',
        rolesInCharge: [],
        dischargeDate: '',
        email: ''
        
    }
];

export const DisplayUsers = () => {
    return (<>
        {Users?.map(user => (
            <CardContainer sx={{ height: '15%', width: '85%' }}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{user.firstName}</Typography>
                        <Typography variant='caption'> שם פרטי</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '22%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{user.lastName}</Typography>
                        <Typography variant='caption'>שם משפחה</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{user.cv}</Typography>
                        <Typography variant='caption'>קו"ח</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{user.yearsOfExperience}</Typography>
                        <Typography variant='caption'>נסיון</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{user.dischargeDate}</Typography>
                        <Typography variant='caption'>תאריך שחרור</Typography>
                    </Stack>
                </Stack>
            </CardContainer>
        ))}
    </>)
}