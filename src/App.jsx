import './App.css';
import Header from './components/Header/header';
import FirstBlock from './components/FirstBlock/firstBlock'
import SecondBlock from './components/SecondBlock/SecondBlock'

function App() {
  return (
    <>
    <div className="wrapper">
      <Header/>
        <FirstBlock/>
        <SecondBlock/>
    </div>    
    </>
  );
}
export default App;
