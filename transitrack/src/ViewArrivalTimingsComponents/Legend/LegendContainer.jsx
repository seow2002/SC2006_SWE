import React from 'react';
import LegendLogo from './LegendLogo';
import HeaderVAT from './HeaderVAT';
import LegendHeader from './LegendHeader';
import OnTimeIcon from './OnTimeIcon';
import OnTimeText from './OnTimeText';
import SlightDelayIcon from './SlightDelayIcon';
import SlightDelayText from './SlightDelayText';
import LateIcon from './LateIcon';
import LateText from './LateText';

const styles = {
    LegendContainer: {
        display: 'flex',
        flexDirection: 'column',
      justifyContent: 'flex-end',
     marginRight: '40px',
     marginLeft: 'auto',
    },
    Columns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10px',
        marginRight: '5px',
    },

  };

  const LegendContainer = (props) => {
    return (
      <div style={styles.LegendContainer}>
          <div style = {styles.Columns}>
              <LegendLogo/>
              <HeaderVAT/>
          </div>
          <LegendHeader/>
          <div style = {styles.Columns}>
                <OnTimeText/>
                <OnTimeIcon/>
          </div>
          <div style = {styles.Columns}>
            <SlightDelayText/>
            <SlightDelayIcon/>
          </div>
          <div style = {styles.Columns}>
            <LateText/>
            <LateIcon/>
          </div>
        {props.children}
      </div>
    );
  };
  
  export default LegendContainer;