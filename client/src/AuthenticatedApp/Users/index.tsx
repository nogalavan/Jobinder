import { Stack, Typography, Divider, Chip, Avatar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { CardContainer } from "../CardContainer";

const Users = () => (
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
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>עידו פישר</Typography>
            <Avatar alt="Remy Sharp" src="../../../assets/ido.jpeg" sx={{width: '100px', height: '100px'}}/>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>אתר:</Typography>
            <Typography variant="h6">מקמר</Typography>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>סטטוס שירות:</Typography>
            <Typography variant="h6">משוחרר</Typography>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', marginLeft: '3px', marginTop: '5px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>תפקיד:</Typography>
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
            <TextField label="בוגר קורס מגן בסייבר, בעל ניסיון משמעותי במכונות צילום. מקום 4 בתחרות הרכבים של גבעת אלה" disabled multiline variant="filled" rows={8} sx={{marginTop: '8px'}}/>
          </Stack>
        </Stack>
      </CardContainer>
      <CardContainer sx={{ height: '90%', width: '40%' }}>
        <Stack direction='column' sx={{ height: '100%', width: '100%' }}>
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>ma</Typography>
            <Typography variant='caption'>שם</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
        </Stack>
      </CardContainer>
    </Stack>
  </Stack>
);

export default Users;