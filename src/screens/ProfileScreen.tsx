import React from 'react';
import { useSelector } from 'react-redux';
import { Footer, Nav } from '../components';
import { selectUser } from '../features/userSlice';
import { auth } from '../utils/firebase';
import './styles/ProfileScreen.css';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="profile-screen">
        <Nav />
        <div className="profile-screen__body">
          <h1>Edit Profile</h1>
          <div className="profile-screen__info">
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt=""
            />
            <div className="profile-screen__details">
              <h2>{user?.email}</h2>
              <div className="profile-screen__plans">
                <h3>Plans</h3>
                <button
                  className="profile-screen__sign-out"
                  onClick={() => auth.signOut()}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
