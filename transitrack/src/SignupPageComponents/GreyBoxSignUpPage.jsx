import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import SignUpHeader from "./SignUpHeader";
import SignUpPrompt from "./SignUpPrompt";
import SignUpEmailInputField from "./SignUpEmailInputField";
import SignUpPasswordInputField from "./SignUpPasswordInputField";
import SignUpCfmPasswordInputField from "./SignUpCfmPasswordInputField";
import SignUpCheckbox from "./SignUpCheckbox";
import SignUpCheckboxText from "./SignUpCheckboxText";
import SignUpButton from "./SignUpButton";
import LoginText from "./LoginText";

const styles = {
  GreyBox: {
    position: 'absolute',
    zIndex: 10,
    height: '800px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '660px',
    backgroundColor: '#282828',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    boxSizing: 'border-box',
  },
};

const GreyBoxSignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      return (
        email !== '' &&
        password !== '' &&
        confirmPassword !== '' &&
        isChecked &&
        password === confirmPassword
      );
    };

    setIsSubmitDisabled(!validateForm());
  }, [email, password, confirmPassword, isChecked]);

  const handleFormChange = () => {
    // Reset error state upon form change to allow re-validation
    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      setError('You must agree to the terms and conditions to sign up.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(error.message);
      });
  };

  return (
    <form style={styles.GreyBox} onSubmit={onSubmit} onChange={handleFormChange}>
      <SignUpHeader />
      <SignUpPrompt />
      <SignUpEmailInputField value={email} onChange={(e) => setEmail(e.target.value)} />
      <SignUpPasswordInputField value={password} onChange={(e) => setPassword(e.target.value)} />
      <SignUpCfmPasswordInputField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <SignUpCheckbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <SignUpCheckboxText />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <SignUpButton disabled={isSubmitDisabled} />
      <div>
        <LoginText />
      </div>
    </form>
  );
};

export default GreyBoxSignUpPage;
