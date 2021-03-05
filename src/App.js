import Dashboard from './components/Dashboard';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import HomePage from './components/home/Home';
import AboutUs from './components/home/About';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { AuthContext } from './context/SignInContext';
import { useContext } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const context = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/team">
            <AboutUs />
          </Route>
          <Route path="/dashboard">
            {!context.loggedIn ? (
              <Redirect to="/signin" />
            ) : (
              <>
                <Dashboard />
                <Redirect to="/dashboard/charts" />
              </>
            )}
          </Route>
          <Route exact path="/signin">
            {console.log('inside login route')}
            {console.log('context=>>>>>> ', context.loggedIn)}
            {context.loggedIn ? <Redirect to="/dashboard" /> : <Signin />}
          </Route>
          <Route exact path="/signup">
            {context.loggedIn ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route exact path="/linkedin" component={LinkedInPopUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
