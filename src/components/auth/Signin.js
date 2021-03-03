import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/SignInContext';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Typography,
  Container,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import coloredLogo2 from '../../images/coloredLogo2.png';
import LinkedInPage from './LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
  },
  image: {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  flexBox: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    borderRadius: '25px',
    boxSizing: 'border-box',
    padding: ' 50px 30px',
    margin: 'auto',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoImage: {
    maxWidth: '200px',
    margin: 'auto',
    display: 'block',
    marginBottom: '30px',
  },
  formBtn: {
    maxWidth: '160px',
    display: 'block',
    margin: '24px auto 16px',
  },
}));

function SignInSide() {
  const context = useContext(AuthContext);
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    context.login(userName, password);
  };
  return (

    <Container maxWidth="xl" className={classes.image}>
      <Box className={classes.flexBox}>
        {/* <CssBaseline /> */}

        <div className={classes.paper}>
          <img src={coloredLogo2} alt="logo" className={classes.logoImage} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={handleChangeUserName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.formBtn} ${classes.submit}`}
            >
              Sign In
            </Button>
            <LinkedInPage />
            <Grid container>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
  );
}

export default SignInSide;
