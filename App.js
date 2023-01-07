import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const [events, setEventsArray] = useState([]);

  useEffect(() => {
    fetch(`/iris/api/events`)
      .then((response) => response.json())
      .then((jsonData) => 
      {

        console.log(`jsonData type:: ` + typeof(jsonData));
        console.log(`jsonData:: ` + jsonData);
        var obj = JSON.parse(jsonData);
        setEventsArray(obj);
        console.log(`event_type`)
        console.log(typeof(events));
        console.log(events);
      });
  }, []);


  return (
    
    <div className="App">
       
        <div className="App">
      {
          
          events.map(item => <tr class="abcd" key={item.id}><th class="defg">{item.sap_code}</th><th>{item.operation}</th><th>{item.start_time}</th><th>{item.end_time}</th></tr>)
          
      }
    </div>
      
    </div>
  );
}



export default App;
