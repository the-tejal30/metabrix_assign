import React, { useState } from 'react';
import './Topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('Home');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className='topBar_container'>
      <div className='topBar_left'>
        <div className="logo_div">
          <img src="/assets/icon.svg" alt="logo" />
        </div>
        <span>Ultron</span>
      </div>
      <div className='topBar_Right_Section'>
        <div className='navbar'>
          <span
            className={activeNav === 'Home' ? 'navbar_onclick' : ''}
            onClick={() => handleNavClick('Home')}
          >
            Home
          </span>
          <span
            className={activeNav === 'Docs' ? 'navbar_onclick' : ''}
            onClick={() => handleNavClick('Docs')}
          >
            Docs
          </span>
          <span
            className={activeNav === 'Pricing' ? 'navbar_onclick' : ''}
            onClick={() => handleNavClick('Pricing')}
          >
            Pricing
          </span>
        </div>
        <div className='coins_section'>
          <img src="/assets/coin.svg" alt="coin" />
          <span>14/20 coins</span>
        </div>
        <div className='topBar_right'>
          <img src="/assets/profile.svg" alt="profile_icon" className='profile_img' />
          <img src="/assets/down_arrow.svg" alt="arrow" className='down_arrow' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
