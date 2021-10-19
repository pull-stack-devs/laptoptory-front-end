import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios';
const API = 'https://pull-stack-laptoptory.herokuapp.com';


export const AuthContext = React.createContext();


class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      signedUp: false,
      numSinedUp:0,
      setNumSigned: this.setNumSigned,
      login: this.login,
      signUp: this.signUp,
      logout: this.logout,
      user: {},
      isValidAction: this.isValidAction,
      permissions: []
    };
  }
  setNumSigned =(numSinedUp)=>{
    this.setState({numSinedUp});
  }
  login = async (username, password) => {
    const encodedData = base64.encode(`${username}:${password}`);
    const result = await axios(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Authorization': `Basic ${encodedData}`,
      },
    });
    this.setState({ permissions: result.data.permissions})
    this.validateToken(result.data.token);
  };
  signUp = async (object) => {
    const result = await axios(`${API}/signup`, {
      method: 'post',
      data: {
        username: object.userName,
        role_name: object.role,
        password: object.password,
        email: object.email,
        name: object.name,
        is_accepted: false,
      },
    });
    if (result.data.length > 0) {
      this.setState({ signedUp: true });
    }
  };

  validateToken = (token) => {
    let user = jwt.decode(token); 
    if (user) {
      this.setAuthState(true, token, user);
    }
  };

  setAuthState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ loggedIn, user });
  };

  logout = () => {
    this.setAuthState(false, null, {});
  };

  isValidAction = (action) => {
    console.log('this.state.user.permissions>>>>>>',this.state.permissions)
    return this.state.permissions.includes(action);
  };

  componentDidMount = () => {
    const userCookie = cookie.load('auth');
    this.validateToken(userCookie);
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;