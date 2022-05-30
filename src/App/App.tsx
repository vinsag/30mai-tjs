import React from 'react';
//import logo from './logo.svg';
import Button from './components/Button/Button';
import './App.css';

function App() {
  // Comment js
  /* Comment mutltignes js */
  return (
    <div className="App">
      {/* Comment dans XML */}
      DEMAT BREIZH
      <hr/>
      <Button
        action={() => {
          alert("Le bouton est clické");
        }}
        type="button"
      > Hello </Button>
      <Button><div>Hello</div></Button>
      <Button>hello<hr/> De Lu</Button>
      <Button> With child</Button>

    </div>
  );
}

export default App;
