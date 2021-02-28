import Dashboard from './components/Dashboard';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { AuthContext } from './context/SignInContext';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import store from "./rtk/index";
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const context = useContext(AuthContext);
  return (
   
   <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!context.loggedIn ? <Redirect to="/signin" /> : <Dashboard />}
          </Route>
          <Route exact path="/signin">
            {console.log('inside login route')}
            {console.log('context=>>>>>> ', context.loggedIn)}
            {context.loggedIn ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route exact path="/signup">
            {context.loggedIn ? <Redirect to="/" /> : <Signup />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      
    </Provider>
  );
}

export default App;
