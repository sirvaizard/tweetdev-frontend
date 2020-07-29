import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: React.FC;
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

  return <Route path={path} render={() => 
    !loggedIn ? <Component /> : <Redirect to="/home" /> } />
}

export default PrivateRoute