import React, { useState } from 'react';
import './Image_Selection.css';
import Gender from '../Gender/Gender';

const Image_Selection = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    console.log(files); // Handle the files here
  };

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files); // Handle the files here
  };

  return (
    <form className='image_selection_form' onDragEnter={handleDrag}>
      <div className="file_upload_div" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
        <img src="/assets/file_upload.svg" alt="upload icon" />
        <label htmlFor="file" className="file_label">
          <span>Click to Upload</span> or <br />Drag and Drop
        </label>
        {/* <input
          type="file"
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png, .webp"
          className="file_input"
          onChange={handleChange}
        /> */}
        <p className="file_hint">Supported formats: PNG, JPG, <br /> JPEG, WebP</p>
      </div>

      <div className="middle_block">
        <div className="or_div">
          <img src="/assets/or.svg" alt="or" />
        </div>
        <div className="take_pic_block">
          <img src="/assets/camera.svg" alt="camera" />
          <span className="take_pic_button">Take a Picture</span>
        </div>
      </div>

      <div className="sample_images_gender">
        <div className='threed_text_gender_block'><Gender /></div>
        <div className="sample_image_block">
          <p>Choose from Sample</p>
          <div className="images">
            <img src="/assets/img_1.svg" alt="profile" />
            <img src="/assets/img_2.svg" alt="profile" />
            <img src="/assets/img_3.svg" alt="profile" />            
            <img src="/assets/img_4.svg" alt="profile" />
          </div>
        </div>
      </div>
      {dragActive && <div className="drag_overlay" />}
    </form>
  );
};

export default Image_Selection;
