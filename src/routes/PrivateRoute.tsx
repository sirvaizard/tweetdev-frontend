import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface RouteProps {
  match?: {
    params: {
      id: string;
    }
  };
}

interface Props {
  component: React.FC<RouteProps>;
  exact?: boolean;
  path: string;
}

const PrivateRoute = ({ component: Component, path }: Props) => {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('@tweetdev:auth'))
    setLoading(false)
  }, [])
  
  if(loading)
    return null

  return <Route path={path} exact render={(props) =>
    loggedIn ? <Component {...props} /> : <Redirect to="/" /> } />
}

export default PrivateRoute