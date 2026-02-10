import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';

function App() {
  return (
    <>
      <Navbar title="Anylizer" HomeButton ="Home " About="About"/>
      <div className='container my-5'>
        <TextArea heading="Enter The Text "/>
      </div>
      
    </>
  );
}

export default App;
