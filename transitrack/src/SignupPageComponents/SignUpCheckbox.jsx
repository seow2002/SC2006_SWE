import React from 'react';

const styles = {
  Container: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '20px',
    height: '20px',
    pointerEvents: 'auto',
    color: 'rgba(227, 15, 3, 1)',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(255, 255, 255, 0.1)',
    border: 0,
    position: 'absolute',
    left: '165px',
    marginTop: '410px',
  },
  Check: {
    display: 'none',
    transition: 'left 0.3s ease',
    zIndex: 1,
  },
  Input: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
    width: '1px',
    height: '1px',
    pointerEvents: 'none',
    display: 'flex',
  },
};

const SignUpCheckbox = ({ onChange }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);

    // Mimic an event object with a 'target' that has a 'checked' property
    const syntheticEvent = { target: { checked: newValue } };
    if (onChange) onChange(syntheticEvent);
  }

  return (
    <div 
      style={styles.Container} 
      onClick={onClick} 
      tabIndex="0" 
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      role="checkbox" 
      aria-checked={isChecked}
    >
      <div style={{...styles.Check, display: isChecked ? 'block' : 'none',}}>
        ✓
      </div>
      <input 
        type="checkbox" 
        style={styles.Input} 
        checked={isChecked} 
        readOnly 
      />
    </div>
  );
};

export default SignUpCheckbox;
