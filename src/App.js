import React,{ useState } from 'react';
import MyCalendar from './MyCalendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';


function App() {
  
  const [value, onChange] = useState(new Date());

  return (
    <div className='main'>
      <MyCalendar
      />
    </div>
  );
}

export default App;
