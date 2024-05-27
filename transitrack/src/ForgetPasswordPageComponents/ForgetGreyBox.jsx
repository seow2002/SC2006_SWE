import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Import necessary Firebase Authentication functions
import ForgetBigLogo from './ForgetBigLogo';
import ForgetPasswordTransiTrackText from './ForgetTransiTrack(Text)';
import ForgetPasswordRealTimePublicTransportTrackingText from './ForgetRealTimePublicTransportTrackingText';
import ForgetEmailAddressText from './ForgetEmailAddressText';
import ForgetEmailAddressInputField from './ForgetEmailAddressInputField';
import ForgetEmailIcon from './ForgetEmailIcon';
import ForgetSubmitButton from './ForgetSubmitButton';

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

  const ForgetGreyBox = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleResetPassword = (data) => {
      if (data && data.email) {
        const auth = getAuth();
        sendPasswordResetEmail(auth, data.email)
          .then(() => {
            console.log("Password reset email sent");
            // Optionally, you can provide feedback to the user that the email has been sent
          })
          .catch((error) => {
            setError(error.message);
            console.error("Error sending password reset email:", error);
          });
      } else {
        console.log('Data or email is undefined');
      }
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    return (
      <div style={styles.GreyBox}>
        <ForgetBigLogo />
        <ForgetPasswordTransiTrackText />
        <ForgetPasswordRealTimePublicTransportTrackingText />
        <ForgetEmailAddressText />
        <ForgetEmailAddressInputField value={email} onChange={handleEmailChange} />
        <ForgetEmailIcon />
        <ForgetSubmitButton onClick={() => handleResetPassword({ email })} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  };
  
  

export default ForgetGreyBox;