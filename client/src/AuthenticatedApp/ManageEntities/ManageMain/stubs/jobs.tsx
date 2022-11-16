import { Stack, Typography, Divider, Button } from "@mui/material";
import axios from 'axios';
import useOpen from "../../../../hooks/use-open";
import { CardContainer } from "../../../CardContainer";
import InterestedDialog from "../InterestedDialog";
import { useState, useEffect } from 'react';

interface Props {
    handleCandidateOpen: () => void
}

export const jobs = [
    {
        purpose: 'deveops',
        location: 'redhat',
        employer: 'עמר',
        unit: 'הייטקס',
        description: 'עובד בהייטק איזה כייף'
    },
    {
        purpose: 'תכניתן',
        location: 'מקמר',
        employer: 'שמוליק',
        unit: 'מבצעי',
        description: 'מתן מה אומר מה אומר'
    }
];

export const DisplayJobs = ({ handleCandidateOpen }: Props) => {
    const [interestedOpen, handleInterestedClose, handleInterestedOpen] = useOpen();
    const [jobss, setJobs] = useState([]);

    console.log(jobss)

    useEffect(() => {
        axios("http://localhost:3004/jobs").then(
            res => setJobs(res.data)
        )
    }, [])

    return (<>
        {jobs?.map(job => (
            <CardContainer sx={{ height: '15%', width: '85%' }}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <Stack direction='row' sx={{ width: '80%' }} onClick={handleCandidateOpen}>
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '17%' }}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.purpose}</Typography>
                            <Typography variant='caption'> שם תפקיד</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '27%' }}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.location}</Typography>
                            <Typography variant='caption'>מיקום</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '17%' }}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.employer}</Typography>
                            <Typography variant='caption'>מעסיק</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '17%' }}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.unit}</Typography>
                            <Typography variant='caption'>שיוך ארגוני</Typography>
                        </Stack>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '17%' }}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{job.description}</Typography>
                            <Typography variant='caption'>תיאור</Typography>
                        </Stack>
                    </Stack>
                    <>
                        <Divider orientation='vertical' flexItem />
                        <Stack justifyContent='center' sx={{ padding: '10px', width: '15%' }}>
                            <Button variant='contained' color='success' onClick={handleInterestedOpen}> אני מעוניין בתפקיד!</Button>
                        </Stack>
                    </>
                </Stack>
            </CardContainer>
        ))}
        <InterestedDialog open={interestedOpen} handleClose={handleInterestedClose} />
    </>)
}