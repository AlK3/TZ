import React from 'react';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import {
  BrowserRouter as Router,
  RouteProps,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  component: any;
  user: string;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const { component: Component, user, ...anothers } = props;
  
  return (
    <Route {...anothers} render={(props) => (
      user.length > 0
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
}

export const App: React.FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/profile' component={Profile} user={user} />
        <Redirect to={ user.length > 0 ? '/profile' : '/'} />
      </Switch>
    </Router>
  );
}