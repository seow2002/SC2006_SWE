import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { auth, db } from '../firebase'; // Adjust the path according to your project structure
import PointContext from '../PointContext';

import BigLogo from './BigLogo';
import TransiTrackText from './TransiTrack(Text)';
import RealTimePublicTransportTrackingText from './RealTimePublicTransportTrackingText';
import EmailAddressInputField from './EmailAddressInputField';
import PasswordInputField from './PasswordInputField';
import EmailIcon from './EmailIcon';
import PasswordIcon from './PasswordIcon';
import ForgetPasswordText from './ForgetPasswordText';
import LoginButton from './LoginButton';
import SignUpText from './SignUpText';

const styles = {
    GreyBox: {
      position: 'absolute', 
      zIndex: 10, // This ensures it is above the background
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '660px',
      height: '806px',
      backgroundColor: '#282828',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // This will center the logo horizontally
      paddingTop: '20px', // This gives some space at the top inside the grey box
    },
  };

  const GreyBoxLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { points, setPoints } = useContext(PointContext);
    const savePoints = async (newPoints) => {
      setPoints(newPoints); //Update the context
      if (auth.currentUser){
        const userRef = doc (db , 'users', auth.currentUser.uid);
        await setDoc (userRef, {points: newPoints}, {merge:true});// Set the new points value in Firestore
      }
    };

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Check for the user's points in Firestore
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
  
        if (userSnap.exists()) {
          // If the user document exists, set the points in context
          setPoints(userSnap.data().points);
        } else {
          // If the user document does not exist, create it with initial points
          savePoints(0);
        }
  
        navigate('/home'); // Navigate to home after handling the user points
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      }
    };
  
    return (
      <div style={styles.GreyBox}>
        <form onSubmit={onSubmit}> {/* Ensure the form calls onSubmit when submitted */}
          <BigLogo />
          <TransiTrackText />
          <RealTimePublicTransportTrackingText />
          <div>
            <EmailIcon />
            <EmailAddressInputField value={email} onChange={onEmailChange} />
          </div>
          <div>
            <PasswordIcon />
            <PasswordInputField value={password} onChange={onPasswordChange} />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <ForgetPasswordText />
          <LoginButton /> {/* Ensure this button submits the form */}
          <SignUpText />
          {/* Insert additional children or components here as needed */}
        </form>
      </div>
    );
  };

export default GreyBoxLoginPage;