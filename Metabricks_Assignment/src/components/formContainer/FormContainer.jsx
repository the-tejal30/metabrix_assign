import React from 'react';
import './FormContainer.css';
import Text_Selection from './Text_Selection/Text_Selection.jsx';
import Image_Selection from './Image_Selection/Image_Selection.jsx';

const FormContainer = ({ activeComponent }) => {
    return (
        <div className='Form_Container'>
            <div className="content_block">
                {activeComponent === 'text' && <Text_Selection />}
                {activeComponent === 'image' && <Image_Selection />}
            </div>
            <button className='generate_btn'>Generate</button>
        </div>
    );
}

export default FormContainer;
