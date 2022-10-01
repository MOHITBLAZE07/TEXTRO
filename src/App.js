import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextArea from './components/TextArea.js';
import Alert from './components/Alert.js';


function App() {

  const [mode, setMode] = useState('light'); //Dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () => {
    if( mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(": Dark Mode has been enabled! ", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(": Light Mode has been enabled! ", "success")
    }
  }

  return (
    <>
      <Navbar brand = 'TEXTRO' mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <div className='container my-3'>
        <TextArea heading = "Enter the Text to Analyze below" mode = {mode} showAlert = {showAlert} />
      </div>
    </>
  );
}

export default App;
