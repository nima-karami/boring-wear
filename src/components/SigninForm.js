import * as React from 'react';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SingInWithGooglePopup, CreateUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/Firebase/Firebase';

import { UserContext } from '../context/ContextProvider';

const theme = createTheme();

export default function SignIn() {

    const { setCurrentUser } = useContext(UserContext);

    const emailInput = React.useRef(null);
    const passwordInput = React.useRef(null);
    
    const resetFormFields = () => {
        emailInput.current.value = "";
        passwordInput.current.value = "";
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {

            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('cannot sign in: wrong password');
            } else if (error.code === 'auth/user-not-found'){
                alert('cannot sign in: user not found');
            } else {
                console.log('user sign in failed', error);
            }
        }
    };

    const signInWithGoogle = async () => {
        const { user } = await SingInWithGooglePopup();
        setCurrentUser(user);
        await CreateUserDocumentFromAuth(user);
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              inputRef={emailInput}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              inputRef={passwordInput}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography align="center" variant="body2" > Or </Typography>
            <Button
              onClick={signInWithGoogle}
              fullWidth
              variant="outlined"
              sx={{ mt:2 , mb: 2 }}
            >
              <GoogleIcon sx={{ mr:1 }} /> Continue With Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}