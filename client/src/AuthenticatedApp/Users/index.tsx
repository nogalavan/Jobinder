import { Stack, Typography, Divider, Chip, Avatar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import { CardContainer } from "../CardContainer";

const Users = () => { 
  const [applies, isLoading, error] = useFetch('jobApply');
  const [myApplies, setMyApplies] = useState([]);

  useEffect(() => {
    !isLoading && setMyApplies(applies.find(apply => apply.userId === 1))
  }, [applies])


  // const MyApplies = applies.find(apply => apply.userId === 1);
  
  
  return (
  <Stack
    spacing={2}
    align-items='center'
    display='flex'
    justifyContent='center'
    direction='row'
    flex-wrap='wrap'
    sx={{
      height: '100%', width: '100%', paddingTop: '50px', overflow: 'auto'
    }}
  >
    <Stack
      spacing={7}
      align-items='center'
      display='flex'
      justifyContent='center'
      direction='row'
      sx={{
        height: '100%', width: '85%', overflow: 'auto'
      }}
    >
      <CardContainer sx={{ height: '90%', width: '40%' }}>
        <Stack>
        <Stack direction='row' justifyContent='space-around' alignItems='center' sx={{ width: '100%', marginTop: '10px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' , marginRight: '5px'}}>עידו פישר</Typography>
            <Avatar alt="Remy Sharp" src="../../../assets/ido.jpeg" sx={{width: '100px', height: '100px'}}/>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: '5px' }}>אתר:</Typography>
            <Typography variant="h6">מקמר</Typography>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: '5px'}}>סטטוס שירות:</Typography>
            <Typography variant="h6">משוחרר</Typography>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' , marginRight: '5px'}}>תפקיד:</Typography>
            <Typography variant="h6">תוכניתן</Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-evenly' sx={{ marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold'}}>מידורים:</Typography>
            <Chip label="שדכן קסום" sx={{backgroundColor: 'royalblue', color: 'white'}} />
            <Chip label="דרך ארוכה" sx={{backgroundColor: 'royalblue', color: 'white'}} />
            <Chip label="אגם רדוד" sx={{backgroundColor: 'royalblue', color: 'white'}} />
          </Stack>
          <Stack direction='column' sx={{ width: '100%', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>פרטים נוספים:</Typography>
            <TextField disabled label="שירתתי המון המון זמן בצבא" variant="outlined"/>
          </Stack>
        </Stack>
      </CardContainer>
      <CardContainer sx={{ height: '90%', width: '40%' }}>
        <Stack direction='column' sx={{ height: '100%', width: '100%' }}>
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>הבקשות שלי</Typography>
          <Stack direction='column' sx={{ width: '100%', marginTop: '5px' }}>
            {
              !isLoading && myApplies.map(x => 
                <TextField disabled label={x.description} variant="outlined"/>)
            }
          </Stack>
          </Stack>
          <Divider orientation='vertical' flexItem />
        </Stack>
      </CardContainer>
    </Stack>
  </Stack>
);
}

export default Users;