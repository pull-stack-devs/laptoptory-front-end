import React, { useState, useEffect, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { AuthContext } from '../context/SignInContext';
const ENDPOINT = 'https://pull-stack-laptoptory.herokuapp.com/';

function SocketIO() {
  const context = useContext(AuthContext);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (context.loggedIn && context.user.role_name === 'super-admin') {
      console.log('before socket connect');
      const socket = socketIOClient(ENDPOINT, { transports: ['websocket'] });
      socket.on('superAdminLogin', (data) => {
        console.log(data);
        setResponse(data);
      });
    }
  }, []);

  return (
    <p>
      {console.log('response==========?>', response)}
      {!response ? 'No Response' : Object.keys(response).length}
    </p>
  );
}

export default SocketIO;
