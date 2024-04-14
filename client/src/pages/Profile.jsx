import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  
  const dispatch = useDispatch();

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

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        dispatch(updateUserStart());
        const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          console.log(data);
            dispatch(updateUserFailure(data.message));
            return;
        }
        console.log(data);
        dispatch(updateUserSuccess(data));
    } catch (error) {
      console.log(data);
        dispatch(updateUserFailure(error.message));
    }
};

 const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };
  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };


 

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
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


        <input type="username" placeholder='username' defaultValue={currentUser.username } id='username' name='username' className='border p-3' onChange={handleChange}
  
        />
        <input type="email" placeholder='email' defaultValue={currentUser.email} id='email' name='email' className='border p-3' onChange={handleChange}/>
        <input type="password" placeholder='password' id='password' name='password' className='border p-3' onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' type='submit'>{loading ? 'Loading...' : 'update'}</button>

      <Link className = 'bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' to={"/create-listing"}>Create Listing </Link>
      </form> 


      <div className='flex justify-between mt-5'>
        <span
          onClick={handleDeleteUser}
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
        <p className='text-red-700 mt-5'>{error ? error : ''}</p>
        <p className='text-green-700 mt-5'>{updateUserSuccess ? 'User us updated succsefully!' : ''}</p>
        <button onClick={handleShowListings} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Sign out</button>
      </div>  
  );
}