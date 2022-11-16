import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/Auth';
import { User } from '../types/User';
// import logo from '../../assets/noga.jpg';

const Login = () => {
  const navigate = useNavigate();
  const newUser: User = {
    id: '1',
    name: 'omer',
    isInLoveWithNoga: true
  };

  const { setAuth } = useAuth();

  const handleLogin = () => {
    setAuth('a', newUser);
    navigate('/');
  };

  return (
    <Stack justifyContent='center' alignItems='center' sx={{height: '100%', backgroundColor: 'teal'}}>
    <Card sx={{ width: '500px', height: '350px' }}>
      <CardMedia
        component="img"
        height="180"
        image="../../assets/noga.jpg"
      />
      <CardContent>
        <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography gutterBottom variant="h6" component="div">
          צהריים טובים, נגה לבן
        </Typography>
        <Typography variant="subtitle2">
          ברוך הבא לJobinder
        </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center', p: 0}}>
      <Button onClick={handleLogin} variant='contained' color='secondary'>
        לחץ להתחברות
      </Button>
      </CardActions>
    </Card>
    </Stack>
    // <Stack justifyContent='center' alignItems='center' sx={{height: '100%'}}>
      // <Button onClick={handleLogin} variant='contained' color='secondary'>
      //   click to login!
      // </Button>
    //   <h1>login</h1>
    // </Stack>
  );
};

export default Login;