import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const [events, setEventsArray] = useState([]);

  useEffect(() => {
    fetch(`/api/events`)
      .then((response) => response.json())
      .then((json) => 
      {
        console.log(json);
        setEventsArray([json]);
      });
  }, []);


  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
      {
        events.map(event => <div>{event.message} </div>)
      }
    </div>
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



export default App;
