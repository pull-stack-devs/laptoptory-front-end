import React, { useState, useEffect, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { AuthContext } from '../context/SignInContext';
import { IconButton, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
const ENDPOINT = 'https://pull-stack-laptoptory.herokuapp.com/';

const useStyles = makeStyles((theme) => ({
  alertMessage: {
    marginBottom: '20px',
  },}));

function SocketIO() {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const [response, setResponse] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (context.loggedIn && context.user.role_name === 'super-admin') {
      const socket = socketIOClient(ENDPOINT, { transports: ['websocket'] });
      socket.on('superAdminLogin', (data) => {
        setResponse(data);
        setOpen(true);
        context.setNumSigned(Object.keys(data).length);
      });
    }
  }, [context]);


  return (
    <>
      <Collapse in={open}>
        <Alert
        className={classes.marginBottom}
          severity="info"
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
          There Are {Object.keys(response).length} new users Signed up on your
          platform
        </Alert>
      </Collapse>
    </>
  );
}

export default SocketIO;
