import React, { useState } from 'react';
import './ProfileSwitcher.css';

const ProfileSwitcher = () => {
    const [activeButton, setActiveButton] = useState('My Avatars');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        console.log('called');
    };

    return (
        <div className='profileSwitcher_container'>
            <button
                className={activeButton === 'My Avatars' ? 'profile_switch_btn_onclick' : ''}
                onClick={() => handleButtonClick('My Avatars')}
            >
                My Avatars
            </button>
            <button
                className={activeButton === 'Featured' ? 'profile_switch_btn_onclick' : ''}
                onClick={() => handleButtonClick('Featured')}
            >
                Featured
            </button>
        </div>
    );
};

export default ProfileSwitcher;
