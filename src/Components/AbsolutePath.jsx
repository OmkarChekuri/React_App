import React from 'react';

const AbsolutePath = () => {

    var location = window.location.href;
    var directoryPath = location.substring(0, location.lastIndexOf("/")+1);
    

    return (
        <div>
            <p>Current Directory path is {directoryPath} </p>
            
        </div>
    );

}


export default AbsolutePath;