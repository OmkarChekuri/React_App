import React from 'react';
import logo from '../logo.svg';
import arrowsCircle from '../arrowsCircle.svg'

const Miscellaneous = () => {
    
    return (
        <div className="App">
        <header className="App-header">
          <div >
            <img src={logo} className="App-logo" alt="logo" />
            <img src={arrowsCircle} className="circle-logo" alt="arrowsCircle" />
          </div>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

}


export default Miscellaneous;