import React from 'react';
import {AuthContext} from '../../context/SignInContext'
import Show from '../Show';

class Auth extends React.Component {
    static contextType = AuthContext;
    render() {
       let okToRender = this.context.loggedIn;

        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}
export default Auth;