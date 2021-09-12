import './App.css';
import React from 'react';
import TDate from './Components/TDate'
import Hello from './Components/Hello';
import Miscellaneous from './Components/Miscellaneous';
import AbsolutePath from './Components/AbsolutePath';

function App() {
  return (

    <React.Fragment>
      <Hello/>
      <TDate/>
      <Miscellaneous/>
      <AbsolutePath/>

    </React.Fragment>
  );
}

export default App;
