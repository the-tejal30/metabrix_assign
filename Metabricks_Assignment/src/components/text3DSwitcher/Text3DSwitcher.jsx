import React from 'react';
import './Text3DSwitcher.css';

const Text3DSwitcher = ({ activeButton, onButtonClick }) => {
    return (
        <div className='text3DSwitcher_container'>
            <button
                className={`btn-1 ${activeButton === 'text' ? 'btn_onclick' : ''}`}
                onClick={() => onButtonClick('text')}
            >
                Text-to-3D
            </button>
            <button
                className={`btn-2 ${activeButton === 'image' ? 'btn_onclick' : ''}`}
                onClick={() => onButtonClick('image')}
            >
                Image-to-3D
            </button>
        </div>
    );
};

export default Text3DSwitcher;
