import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import About from './component/About'
import { useState } from 'react';



function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = ()=>{
    setmode(mode==='light'?'dark':'light')

  }
 
  return (
    <>
      <Navbar title="Anylizer" HomeButton ="Home " About="About" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-5'>
        <TextArea heading="Enter The Text " mode={mode} toggleMode={toggleMode}/>
      </div>
      <About mode={mode} toggleMode={toggleMode}/>
      <br />
      <br />
      
    </>
  );
}

export default App;
