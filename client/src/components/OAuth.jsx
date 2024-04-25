import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase'; // Ensure this is the correct path to your Firebase config file
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app); // Pass the app instance to getAuth
            const result = await signInWithPopup(auth, provider);
            console.log('Google sign-in result:', result);

            // Ensure you are receiving the photo URL
            if (!result.user.photoURL) {
                console.error('No photo URL available from Google sign-in');
                return;
            }

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: result.user.displayName, 
                    email: result.user.email, 
                    photo: result.user.photoURL 
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('Could not sign in with Google:', error);
        }
    };

    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Continue with Google
        </button>
    );
}