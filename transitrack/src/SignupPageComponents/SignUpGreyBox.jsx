import React from "react";
import SignUpHeader from "./SignUpHeader";
import SignUpPrompt from "./SignUpPrompt";
import SignUpFullNameHeader from "./SignUpFullNameHeader";
import SignUpFullNameInputField from "./SignUpFullNameInputField";
import SignUpFullNameIcon from "./SignUpFullNameIcon";
import SignUpEmailHeader from "./SignUpEmailHeader";
import SignUpEmailInputField from "./SignUpEmailInputField";
import SignUpEmailIcon from "./SignUpEmailIcon";
import SignUpUsernameHeader from "./SignUpUsernameHeader";
import SignUpUsernameInputField from "./SignUpUsernameInputField";
import SignUpUsernameIcon from "./SignUpUsernameIcon";
import SignUpPasswordHeader from "./SignUpPasswordHeader";
import SignUpPasswordInputField from "./SignUpPasswordInputField";
import SignUpPasswordIcon from "./SignUpPasswordIcon";
import SignUpCfmPasswordHeader from "./SignUpCfmPasswordHeader";
import SignUpCfmPasswordInputField from "./SignUpCfmPasswordInputField";
import SignUpCfmPasswordIcon from "./SignUpCfmPasswordIcon";
import SignUpCheckbox from "./SignUpCheckbox";
import SignUpCheckboxText from "./SignUpCheckboxText";
import SignUpButton from "./SignUpButton";
import LoginText from "./LoginText";
import LoginLink from "./LoginLink";

const styles = {
    GreyBox: {
      position: 'absolute', 
      zIndex: -1, // This ensures it is above the background
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

const SignUpGreyBox = (props) => {
  return (
    <div style={styles.GreyBox}>
      <SignUpHeader />
      <SignUpPrompt />
      <SignUpFullNameHeader />
      <SignUpFullNameInputField />
      <SignUpFullNameIcon />
      <SignUpEmailHeader />
      <SignUpEmailInputField />
      <SignUpEmailIcon />
      <SignUpUsernameHeader />
      <SignUpUsernameInputField />
      <SignUpUsernameIcon />
      <SignUpPasswordHeader />
      <SignUpPasswordInputField />
      <SignUpPasswordIcon />
      <SignUpCfmPasswordHeader />
      <SignUpCfmPasswordInputField />
      <SignUpCfmPasswordIcon />
      <SignUpCheckbox />
      <SignUpCheckboxText />
      <SignUpButton />
      <LoginText />
      <LoginLink />
    </div>
  );
};

export default SignUpGreyBox;