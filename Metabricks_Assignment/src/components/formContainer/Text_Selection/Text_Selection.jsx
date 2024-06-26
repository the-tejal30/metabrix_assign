import React, { useState } from 'react';
import './Text_Selection.css';
import Gender from '../Gender/Gender';

const Text_Selection = () => {
    const [text, setText] = useState('');
    const [gender, setGender] = useState(null);

    // console.log(gender)

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
    };

    const handlePresetClick = (prompt) => {
        setText(prompt);
    };

    const presetPrompts = [
        "A 55 year old american guy with beard and moustaches used as a soldier for a battle game",
        "A young smiling cute Korean girl with long black hair and bright eyes, wearing a traditional hanbok and standing in a beautiful garden.",
        "A 45 year old Asian guy with clean-shaven face, short hair, and a sharp suit, looking confident as he walks through a bustling city street."
    ];

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <form className='text_selection_form_container'>
            <div className="selection_top_box">
                <textarea
                    name="text"
                    id="text"
                    placeholder="Enter your prompt describing facial features.."
                    value={text}
                    onChange={handleTextChange}
                />
                <div className="text_3d_gender_block">
                    <Gender gender={gender} handleGenderSelect={handleGenderSelect} /> 
                </div>
            </div>
            <div className="selection_bottom_box">
                {presetPrompts.map((prompt, index) => (
                    <p key={index} onClick={() => handlePresetClick(prompt)}>
                        {truncateText(prompt, 31)}
                    </p>
                ))}
            </div>
        </form>
    );
}

export default Text_Selection;
