import React from 'react';
import '../Text_Selection/Text_Selection.css';

const Gender = ({ gender, handleGenderSelect }) => {
    return (
        <div className="gender_selection">
            <label htmlFor="gender">Choose Gender</label>
            <div className='gender_options'>
                <div
                    className={`gender_option ${gender === 'male' ? 'selected' : ''}`}
                    data-value="male"
                    onClick={() => handleGenderSelect('male')}
                >
                    <img src="/assets/male_icon.svg" alt="Male" />
                    <span className="male_text">Male</span>
                </div>
                <div
                    className={`gender_option ${gender === 'female' ? 'selected' : ''}`}
                    data-value="female"
                    onClick={() => handleGenderSelect('female')}
                >
                    <img src="/assets/female_icon.svg" alt="Female" />
                    <span className="female_text">Female</span>
                </div>
            </div>
        </div>
    );
};

export default Gender;
