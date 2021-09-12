import React from 'react';

const TDate = () => {
    const data = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    

    return (
        <div>
            <p>Today's date is {data} </p>
            <p>Current time is {time}</p>
        </div>
    );

}


export default TDate;