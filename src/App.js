import React from 'react';
import './App.css';
import Card from "./components/Card"
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
    <Container className="App-header">
        <Card/>
    </Container>
    </div>
  );
}

export default App;
