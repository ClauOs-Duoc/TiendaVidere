import React from 'react';
import Div from '../components/atoms/Div';
import ProfileCard from '../components/organisms/ProfileCard';
import '../styles/pages/Profile.css';

function Profile() {
    return (
        <Div className="profile">
            <ProfileCard />
        </Div>
    );
}

export default Profile;