import React, { useState } from 'react';
import Header from './Header';
import Date from './Date';
import Activity from './Activity';
import DefaultPoints from './DefaultPoints';
import HeaderLine from './HeaderLine';
import Line from './Line';


const styles = {
    Container: {
        zIndex: 10, // This ensures it is above the background
        marginLeft: '30px',
        marginTop: '30px',
    },
    HeaderRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '5px',
    },
    Contents: {
        marginTop: '10px',
    }
  };
  
  const Container = ({history}) => {
    return (
        <div style={styles.Container}>
            <Header/>
            <div style={styles.HeaderRow}>
                <Date/>
                <Activity/>
                <DefaultPoints/>
            </div>
            <HeaderLine/>
            <div style={styles.Contents}>
                {history.map((reward, index) => (
                    <Line key={index} date={reward.date} content={reward.content} points={reward.points} />
                ))}
            </div>
            {/* No need to pass addRewardToHistory since history is passed as a prop */}
        </div>
    );
};

export default Container;