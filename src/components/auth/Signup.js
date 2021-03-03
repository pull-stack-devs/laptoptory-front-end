import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/SignInContext';
import Show from '../Show';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import '../home/style.css';
import linked from '../../img/linked.png';

const useStyles = makeStyles((theme) => ({
  // paper: {
  //     marginTop: theme.spacing(8),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  // },
  // avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(3),
  // },
  // submit: {
  //     margin: theme.spacing(3, 0, 2),
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
    console.log('from sign up====>', e.target.name);
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
    console.log('from sign up====>', object);
    context.signUp(object);
  };

  return (


    <>
      <section class="signImg">
        <div class="loginBox">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="name"
              placeholder="Username"
              onChange={handleName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoFocus></input>

            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password"  required
              onChange={handlePassword}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"></input>

            <p>Email</p>
            <input type="email" name="email" placeholder="Enter Email" required
              onChange={handleEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="current-email"></input>

            <p>Name</p>
            <input type="name" placeholder="Enter Your Name" required
              onChange={handleUserName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus></input>

            <div class="dropdown">
              <button onChange={handleChangeradio} class="dropbtn">Role</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Admin</a>
                <a href="#">User</a>
                <a href="#">Editor</a>
              </div>
            </div>

            <input type="submit" name="sign-in" value="Sign up"></input>
            <img src={linked}/>
          </form>
        </div>
      </section>
    </>
  );
}
