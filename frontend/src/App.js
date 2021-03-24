import './App.css';
import MenuComp from './components/MenuComp';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <div className="menu-container">
        <MenuComp/>
      </div>      
        <Page/>         
    </div>
  );
}

export default App;
