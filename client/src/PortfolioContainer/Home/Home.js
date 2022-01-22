import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import ProfileFooter from './ProfileFooter/ProfileFooter'
import './Home.css';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Profile />
            <ProfileFooter />
        </div>
    );
}
