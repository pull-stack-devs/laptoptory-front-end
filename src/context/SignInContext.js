import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios';
import superagent from 'superagent'
const API = 'http://pull-stack-laptoptory.herokuapp.com';

// 1- Create context
export const AuthContext = React.createContext();

// 2- Create Provider
class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      signedUp: false,
      login: this.login,
      signUp: this.signUp,
      logout: this.logout,
      user: {},
      isValidAction: this.isValidAction,
    };
  }

  login = async (username, password) => {
    const encodedData = base64.encode(`${username}:${password}`);
    console.log('from login====>', password, username);
    const result = await axios(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Authorization': `Basic ${encodedData}`,
      },
    });
    console.log('result from fetch ', result);
    console.log(result.data);
    // res should have a token
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
    console.log('from sign up context======>', result.data);
    if (result.data.length > 0) {
      this.setState({ signedUp: true });
    }
  };

  validateToken = (token) => {
    // I have a token
    // I can verify it using jwt
    // get the user object from the result
    // let user = jwt.verify(token, 'anything');
    console.log('in validateToken!');
    let user = jwt.decode(token); // from the docs it's not very recommended
    if (user) {
      // save a cookie to the browser
      // set loggedIn flag to true, add user object in state
      this.setAuthState(true, token, user);
    }
    console.log('user > ', user);
  };

  setAuthState = (loggedIn, token, user) => {
    console.log('in setAuthState');
    cookie.save('auth', token);
    console.log('setAuthState user > ', user);
    this.setState({ loggedIn, user });
  };

  logout = () => {
    this.setAuthState(false, null, {});
  };

  isValidAction = (action) => {
    return this.state.user.permissions.includes(action);
  };

  componentDidMount = () => {
    const userCookie = cookie.load('auth');
    console.log('userCookie >>> ', userCookie);
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
