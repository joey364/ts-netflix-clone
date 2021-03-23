import React, { useState } from 'react';
import { Footer } from '../components';
import { SignInScreen } from './components';
import './styles/LoginScreen.css';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login-screen">
      <div className="login-screen__background">
        <img
          onClick={() => {
            if (signIn) {
              setSignIn(false);
            }
          }}
          className="login-screen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="login-screen__button"
        >
          Sign In
        </button>
        <div className="login-screen__gradient" />
      </div>
      <div className="login-screen__body">
        {!signIn ? (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere, Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-screen__input">
              <form>
                <input placeholder="Email address" type="email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login-screen__get-started"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignInScreen />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
