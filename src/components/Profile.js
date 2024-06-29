import React from 'react';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Footer from './Footer';

const Profile
 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Header/>
        <ProfilePage/>
        <Footer/>
    </div>
  );
};

export default Profile
;