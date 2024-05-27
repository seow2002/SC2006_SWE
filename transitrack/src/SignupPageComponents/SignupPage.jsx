import React from 'react';
import GreyBoxSignUpPage from './GreyBoxSignUpPage';
import SignUpPageBackground from "./SignUpPageBackground";

function SignupPage() {
    return (
      <>
        <SignUpPageBackground />
        <GreyBoxSignUpPage />
        {/* You can add more components or functionality related to the login here */}
      </>
    );
  }
  
  export default SignupPage;
