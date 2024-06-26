import React, { useState } from 'react';
import './Structure.css';
import Topbar from '../components/topbar/Topbar';
import HeadText from '../components/headText/HeadText';
import Text3DSwitcher from '../components/text3DSwitcher/Text3DSwitcher';
import FormContainer from '../components/formContainer/FormContainer';
import ProfileSwitcher from '../components/profileSwitcher/ProfileSwitcher';
import ProfileFlow from '../components/profileFlow/ProfileFlow';

const Structure = () => {
    const [activeComponent, setActiveComponent] = useState('text');

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className='structure'>
            <div className="topBar">
                <Topbar />
            </div>
            <div className="headText">
                <HeadText />
            </div>
            <div className="text-3d-switcher">
                <Text3DSwitcher activeButton={activeComponent} onButtonClick={handleButtonClick} />
            </div>
            <div className="formContainer">
                <FormContainer activeComponent={activeComponent} />
            </div>
            <div className="profileSwitcher">
                <ProfileSwitcher />
            </div>
            <div className="profileFlow">
                <ProfileFlow />
            </div>
            <div className="bottom_gap"></div>
        </div>
    );
}

export default Structure;
