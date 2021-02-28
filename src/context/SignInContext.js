import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios'

const API = "http://pull-stack-laptoptory.herokuapp.com";

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            signedUp:false,
            login: this.login,
            signUp: this.signUp,
            logout: this.logout,
            user: {},
            token:"",
            isValidAction: this.isValidAction,
        }
    }
    login = async (username, password) => {
        const encodedData = base64.encode(`${username}:${password}`)
        const result = await axios(`${API}/signin`, {
            method: 'post',
            
            headers: { 'Authorization': `Basic ${encodedData}` }
            
        });
        let res = await result;
        console.log(result.data);
        let token=result.data.token
        this.setState({token:token});
        this.validateToken(result.data.token);
    }
    signUp = async (object) => {
        const result = await axios(`${API}/signup`, {
            method: 'post',
            data: {
                username: object.username,
                role_name: object.role_name,
                password: object.password,
                email: object.email,
                name: object.name,
                is_accepted: false
            }
        });
        if (result.data.length>0){
          this.setState({signedUp:true});
        }
        
    }

    validateToken = (token) => {
        let user = jwt.decode(token); 
        if (user) {
            this.setAuthState(true, token, user);
        }
    }

    setAuthState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({ loggedIn, user });
    }

    logout = () => {
        this.setAuthState(false, null, {});
    }

    isValidAction = (action) => {
        return this.state.user.permissions.includes(action);
    }

    componentDidMount = () => {
        const userCookie = cookie.load('auth');
        this.validateToken(userCookie);
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;
