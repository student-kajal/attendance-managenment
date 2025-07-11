import React, { useState } from 'react';
import API from '../api';

const UploadImage = ({ setImageUrl }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('photo', file);
    //const res = await API.post('/upload-photo', formData);
    const res = await API.post('/upload-photo', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});

    setImageUrl(res.data.url);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
