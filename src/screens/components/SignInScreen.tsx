import React, { useRef } from 'react';
import { auth } from '../../utils/firebase';
import './styles/SignInScreen.css';

function SignInScreen() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (e: React.FormEvent): void => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef?.current?.value as string,
        passwordRef?.current?.value as string
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => console.log(error));
  };

  const signIn = (e: React.FormEvent): void => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef?.current?.value as string,
        passwordRef?.current?.value as string
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="sign-in-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="sign-in-screen__gray">New to Netflix? </span>
          <span onClick={register} className="sign-in-screen__link">
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
