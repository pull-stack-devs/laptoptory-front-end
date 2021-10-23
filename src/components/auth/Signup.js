import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/SignInContext';
import Show from '../Show';
import styled from 'styled-components';
import {
  Button,
  Container,
  Box,
  TextField,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import coloredLogo2 from '../../images/coloredLogo2.png';
import LinkedInPage from './LinkedIn';
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    margin: '16px 0 8px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    height: '100vh',
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
    minHeight: '100vh',
    padding: '40px 0',
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
    maxWidth: '600px',
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
    width: '100%', 
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
    maxWidth: '340px',
    display: 'block',
    margin: '24px auto 16px',
  },
  coloredText: {
    color: '#5D5C61',
    '&:hover': {
      color: '#0F3057',
      textDecoration: 'none',
    },
  },
}));

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #0f3057;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #5d5c61;
    }
    &:hover fieldset {
      border-color: #5d5c61;
    }
    &.Mui-focused fieldset {
      border-color: #0f3057;
    }
  }
`;

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#0F3057',
    '&:hover': {
      backgroundColor: '#0F3057',
    },
  },
}))(Button);

export default function SignUp() {
  const context = useContext(AuthContext);
  const classes = useStyles();
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = React.useState(true);

  const handleChangeradio = (event) => {
    setRole(event.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const object = {
      userName: userName,
      role: role,
      password: password,
      email: email,
      name: name,
    };
    context.signUp(object);
  };

  return (
    <Container maxWidth="xl" className={classes.image}>
      <Box className={classes.flexBox}>
        <div className={classes.paper}>
          <img src={coloredLogo2} alt="logo" className={classes.logoImage} />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {' '}
                <StyledTextField
                  onChange={handleUserName}
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
              </Grid>
              <Grid item xs={6}>
                {' '}
                <StyledTextField
                  onChange={handlePassword}
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
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  onChange={handleName}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="password"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={6}>
                {' '}
                <StyledTextField
                  onChange={handleEmail}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  id="email"
                  autoComplete="current-email"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    User's Role
                  </InputLabel>
                  <Select
                    native
                    value={role}
                    onChange={handleChangeradio}
                    label="Age"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={'admin'}>Admin</option>
                    <option value={'editor'}>editor</option>
                    <option value={'user'}>User</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.formBtn} ${classes.submit}`}
            >
              Sign UP
            </ColorButton>
            <LinkedInPage />
            <Show condition={context.signedUp}>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  You Signed up successfuly wait for permission and{' '}
                  <a href="/signin">Sign In</a>
                </Alert>
              </Collapse>
            </Show>
            <Grid container>
              <Grid item>
                Have an account already?{' '}
                <Link className={classes.coloredText} to="/signin">
                  {' Sign In'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
  );
}
