import React, { Component } from 'react';
import { AuthContext } from '../../context/SignInContext';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import Button from '@material-ui/core/Button';
import axios from 'axios'

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import Show from '../Show'
class LinkedInPage extends Component {
  static contextType = AuthContext;
  state = {
    code: '',
    errorMessage: '',
    open: false,
  };

  oauth = async () => {
    let result = await axios(`http://pull-stack-laptoptory.herokuapp.com/oauth?code=${this.state.code}`, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }
    });
    if (result.data.token) {
      this.context.validateToken(result.data.token);
    }
    if (!result.data.token && result.data[0].is_accepted == false) {
      this.setState({open:true})
    }
    
  }
  handleSuccess = async (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
    if (this.state.code) {
      await this.oauth();
    }
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render() {
    const { code, errorMessage ,open} = this.state;
    return (
      <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
        >
          <LinkedIn
            clientId="86pkfwm050vrw0"
            redirectUri={`${window.location.origin}/linkedin`}
            scope='r_liteprofile'
            state="some-cryptic-stuff-98471871987981247"
            onFailure={this.handleFailure}
            onSuccess={this.handleSuccess}
            redirectPath='/linkedin'
          >‏
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
          </LinkedIn >
        </Button>
        <Show condition={this.state.open}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    this.setState({ open: false });
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              You Already Have An Account Please Wait To Get Permission 
            </Alert>
          </Collapse>
        </Show>
      </div>
    );
  }
}

export default LinkedInPage;