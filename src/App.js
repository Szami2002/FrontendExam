import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import { TodayListContext } from './contexts/ListContext';
import { TomorrowListContext } from './contexts/ListContext';
import { useState } from 'react';

function App() {
  const [todaylist, setTodaylist] = useState([]);
  const [tomorrowlist, setTomorrowlist] = useState([]);

  return (
    <div className="App">
      <div className="row col-2">&nbsp;</div>
      <div className="row col-8">
        
          <TodayListContext.Provider value={{ todaylist, setTodaylist }}>
          <TomorrowListContext.Provider value={{ tomorrowlist, setTomorrowlist }}>
            <Header />
            <Content />
            </TomorrowListContext.Provider>
          </TodayListContext.Provider>
        

      </div>
      <div className="row col-2">&nbsp;</div>
    </div>
  )
}

export default App;
