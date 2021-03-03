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
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../home/style.css';
import linked from '../../img/linked.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}));

export default function SignInSide() {
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
    <>
    <section class="signImg">
      <div class="signin">
     
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="name"  placeholder="Username" required
              onChange={handleChangeUserName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus></input>

              <p>Password</p>
              <input type="password" name="password" placeholder="Enter Password"  required
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"></input>

                <input type="submit" name="sign-in" value="Sign In"></input>
                <img src={linked}/>
          </form>
      </div>
      </section>
    </>
   
  );
}
