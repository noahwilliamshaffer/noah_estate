import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { get } from 'mongoose';
import { app } from '../firebase';
// Ensure Firebase is initialized outside this component

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined); // Initialize with null for clarity
  const [filePerc, setFilePerc] = useState(0);
  const  [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);
 
  useEffect(() => {
    if(file){ 
      handleFileUpload();
    }
  }, [file]);

  //we have a file called 
  const handleFileUpload = () => {
    const storage = getStorage(app);
    const fileName =  new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    //tracks changed and gives snapshot
    uploadTask.on('state_changed',  
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //console.log('Upload is ' + progress + '% done');
      setFilePerc(Math.round(progress));
    },
    (error) => {
      setFileUploadError(true);
    },

    () => {
    getDownloadURL(uploadTask.snapshot.ref).then
    ((downloadURL) => setFormData({...formData, avatar: downloadURL}));

  }
  );
  };
    
  const handleChange = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value});
  }
   

 

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input
          onChange={(e) => setFile(e.target.files[0])} 
          type="file"
          ref={fileRef}
          hidden
          accept='image/*'
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar} // Fallback to a default image if no avatar
          alt="profile"
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
<p className = 'text-sm self-center'>
  {fileUploadError ? (
    <span className='text-red-700'>Error image upload (image must be less than two megab </span>
  ) : (
    filePerc > 0 && filePerc < 100 ? (
      <span className='text-slate-700'>Uploading {filePerc}%</span>
    ) : (
      <span className='text-green-700'>Upload complete!</span>
    )
  )}
</p>


        <input type="text" placeholder='Username' defaultValue={currentUser.username } id='username' name='username' className='border p-3' onChange={handleChange}
        
        
        />
        <input type="text" placeholder='Email' defaultValue={currentUser.email} id='email' name='email' className='border p-3' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' name='password' className='border p-3' onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' type='submit'>Update</button>
      </form>  
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>  
    </div>
  );
}