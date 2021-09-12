import React from 'react';

const TDate = () => {
    const data = new Date().toLocaleDateString();

    return (
        <div>
            <p>Today is a good day. Today's date is {data} </p>
        </div>
    );

}


export default TDate;