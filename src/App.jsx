import './App.css';
import Header from './components/Header/header';
import FirstBlock from './components/FirstBlock/firstBlock'
import SecondBlock from './components/SecondBlock/SecondBlock'
import ThirdBlock from './components/ThirdBlock/ThirdBlock';

function App() {
  return (
    <>
    <div className="wrapper">
      <Header/>
        <FirstBlock/>
        <SecondBlock/>
        <ThirdBlock/>
    </div>    
    </>
  );
}
export default App;
