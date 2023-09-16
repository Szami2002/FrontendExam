import './App.css';
import Header from './Header.js';
import Content from './Content.js';

function App() {
  return (
    <div className="App">
      <div className="row col-2">&nbsp;</div>
      <div className="row col-8">
        <Header />
        <Content />
      </div>
      <div className="row col-2">&nbsp;</div>
    </div>
  )
}

export default App;
