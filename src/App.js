import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
function App() {
  return (
    <>
      <Fcomponent name="Elena"/>
      <Ccomponent numbers={[1,2,3,4,5]} />
    </>
    /*<div>
      <Header />
    </div>*/
  );
}

export default App;
