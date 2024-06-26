import React, { useState } from 'react';
import './ProfileFlow.css';

const ProfileFlow = () => {
    const profiles = [
        { id: 1, bgImg: '/assets/profile_1st.svg' },
        { id: 2, bgImg: '/assets/profile_girl.svg', selectedText: 'A 55 year old american guy with beard and moustaches used as a soldier for a battle game' },
        { id: 3, bgImg: '/assets/profile_2nd.svg' },
        { id: 4, bgImg: '/assets/profile_boy.svg', selectedText: 'A 55 year old american guy with beard and moustaches used as a soldier for a battle game' },
        { id: 5, bgImg: '/assets/profile_3rd.svg' },
        { id: 6, bgImg: '/assets/profile_1st.svg', selectedText: 'A 55 year old american guy with beard and moustaches used as a soldier for a battle game' },
        { id: 7, bgImg: '/assets/profile_4th.svg' },
        { id: 8, bgImg: '/assets/profile_1st.svg', selectedText: 'A 55 year old american guy with beard and moustaches used as a soldier for a battle game' },
    ];

    const [showMenu, setShowMenu] = useState(null); // State to track which menu is open

    const handleMenuToggle = (profileId) => {
        if (showMenu === profileId) {
            setShowMenu(null); // Close menu if already open
        } else {
            setShowMenu(profileId); // Open menu for the clicked profile
        }
    };

    const handleEdit = (profileId) => {
        console.log(`Edit profile ${profileId}`); // Replace with your edit logic
    };

    const handleDelete = (profileId) => {
        console.log(`Delete profile ${profileId}`); // Replace with your delete logic
    };

    return (
        <div className='profile_flow_container'>
            {profiles.map((profile) => (
                <div className='profile_card' key={profile.id} style={{ backgroundImage: `url(${profile.bgImg})` }}>
                    {profile.selectedText && <p>{profile.selectedText}</p>}
                    <img
                        className="menu_icon"
                        src="/assets/dots.svg"
                        alt="menu"
                        onClick={() => handleMenuToggle(profile.id)}
                    />
                    {showMenu === profile.id && (
                        <div className="menu_options">
                            <button onClick={() => handleEdit(profile.id)}>Edit</button>
                            <button onClick={() => handleDelete(profile.id)}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProfileFlow;
