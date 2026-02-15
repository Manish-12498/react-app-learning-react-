import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import About from './component/About'
import { useState } from 'react';
import Alert from './component/Alert';



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      showAlert("Dark Mode Enabled","success")
    }
    else {
      setmode('light');
      showAlert("Light Mode Enabled","success")
    }

  }

  return (
    <>
      <Navbar title="Anylizer" HomeButton="Home " About="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextArea heading="Enter The Text " mode={mode} toggleMode={toggleMode} />
      <About mode={mode} toggleMode={toggleMode} />
      

    </>
  );
}

export default App;
