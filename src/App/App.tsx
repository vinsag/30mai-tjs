import React from 'react';
//import logo from './logo.svg';
import Button, {DefaultButton,WarningButton} from './components/Button/Button';
import ButtonStyle from './components/Button/Button.module.css';
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
      <Button style={{fontWeight:800, fontSize:'x-large' }}><div>Hello</div></Button>
      <Button bgColor="tomato" color="blue">hello<hr/> De Lu</Button>
      <Button className={ButtonStyle.underline}> With child</Button>

    </div>
  );
}

export default App;
