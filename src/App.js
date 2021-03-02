import './App.css';
import React, { useState } from 'react'
import ColorForm from './components/ColorForm'
import ColorDisplay from './components/ColorDisplay'

function App() {
  const [color, setColor] = useState([]);

  return (
    <div className="App">
      <ColorForm
      color = {color}
      setColor = {setColor} />
      <ColorDisplay color = {color} />
    </div>
  );
  }

export default App;
