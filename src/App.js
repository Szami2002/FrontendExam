import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import { ListContext } from './contexts/ListContext';
import { useContext } from 'react';

function App() {
  const {todaylist, setTodaylist}=useContext(ListContext)
  return (
    <div className="App">
      <div className="row col-2">&nbsp;</div>
      <div className="row col-8">
        
          <ListContext.Provider value={{todaylist, setTodaylist}}>
            <Header />
            <Content />
          </ListContext.Provider>
        

      </div>
      <div className="row col-2">&nbsp;</div>
    </div>
  )
}

export default App;
