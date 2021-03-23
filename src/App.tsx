import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { login, logout } from './features/userSlice';
import { HomeScreen, LoginScreen, ProfileScreen } from './screens';
import { auth } from './utils/firebase';

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser') as string)
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser as any);
      } else {
        localStorage.removeItem('authUser');
        dispatch(logout());
        setUser(null);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {user ? (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        ) : (
          <LoginScreen />
        )}
      </Router>
    </div>
  );
};

export default App;
