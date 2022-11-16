import { Stack, Typography, Divider, Button } from "@mui/material";
import useOpen from "../../../../hooks/use-open";
import { CardContainer } from "../../../CardContainer";
import InterestedDialog from "../InterestedDialog";

export let jobs = [
    {
        purpose: 'deveops',
        location: 'redhat',
        employer: ' הילי עמיר',
        unit: 'הייטקס',
        description: 'לגרד לי את הביצה הימנית בשביל 40000 שקל'
    },
    {
        purpose: 'תכניתן',
        location: 'מקמר',
        employer: 'גמזו',
        unit: 'מבצעי',
        description: 'מתן מה אומר מה אומר'
    }
];

export const DisplayJobs = () => {
    const [interestedOpen, handleInterestedClose, handleInterestedOpen] = useOpen();
    
    return (<>
        {jobs?.map(job => (
            <CardContainer sx={{ height: '15%', width: '85%' }}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.purpose}</Typography>
                        <Typography variant='caption'> שם תפקיד</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '22%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.location}</Typography>
                        <Typography variant='caption'>מיקום</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.employer}</Typography>
                        <Typography variant='caption'>מעסיק</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.unit}</Typography>
                        <Typography variant='caption'>שיוך ארגוני</Typography>
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.description}</Typography>
                        <Typography variant='caption'>תיאור</Typography>
                    </Stack>
                    <>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
                            <Button variant='contained' color='success' onClick={handleInterestedOpen}> אני מעוניין בתפקיד!</Button>
                        </Stack>
                    </>
                </Stack>
            </CardContainer>
        ))}
        <InterestedDialog open={interestedOpen} handleClose={handleInterestedClose} />
    </>)
}