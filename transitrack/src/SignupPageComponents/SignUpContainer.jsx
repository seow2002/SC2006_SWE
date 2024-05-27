import React, { useState } from 'react';
import { auth } from './firebase'; // Adjust the path to your firebase config file
import { createUserWithEmailAndPassword } from "firebase/auth";
import GreyBoxSignUpPage from './GreyBoxSignUpPage'; // Adjust the path to your sign-up form component

const SignUpContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User creation successful
        console.log("User created successfully:", userCredential.user);
        // Redirect the user or clear form
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
        console.error("Error creating user:", error.message);
      });
  };

  return (
    <GreyBoxSignUpPage
      email={email}
      onEmailChange={handleEmailChange}
      password={password}
      onPasswordChange={handlePasswordChange}
      confirmPassword={confirmPassword}
      onConfirmPasswordChange={handleConfirmPasswordChange}
      onSubmit={handleSubmit}
      error={error}
    />
  );
};

export default SignUpContainer;