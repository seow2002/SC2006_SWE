import React from 'react';
import ViewCrowdLevelIcon from './ViewCrowdLevelIcon';
import ViewCrowdLevelText from './ViewCrowdLevelText';
import LegendText from './LegendText';
import NotCrowdedColor from './NotCrowdedColor';
import NotCrowdedText from './NotCrowdedText';
import SomeCrowdsColor from './SomeCrowdsColor';
import SomeCrowdsText from './SomeCrowdsText';
import MaxCrowdColor from './MaxCrowdColor';
import MaxCrowdText from './MaxCrowdText';
import ClosedColor from './ClosedColor';
import ClosedText from './ClosedText';
  
const styles = {
    LegendContainer: {
        position: 'absolute',
        top: '100px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
    },
    Columns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10px',
    },

  };

  const LegendContainer = (props) => {
    return (
      <div style={styles.LegendContainer}>
          <div style = {styles.Columns}>
              <ViewCrowdLevelIcon/>
              <ViewCrowdLevelText/>
          </div>
          <LegendText/>
          <div style = {styles.Columns}>
                <NotCrowdedText/>
                <NotCrowdedColor/>
          </div>
          <div style = {styles.Columns}>
            <SomeCrowdsText/>
            <SomeCrowdsColor/>
          </div>
          <div style = {styles.Columns}>
            <MaxCrowdText/>
            <MaxCrowdColor/>
          </div>
          <div style = {styles.Columns}>
            <ClosedText/>
            <ClosedColor/>
            </div>
        {props.children}
      </div>
    );
  };
  
  export default LegendContainer;