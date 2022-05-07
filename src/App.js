import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#323e50';
      showAlert("Dark Mode enabled", "success");
      document.title = 'Text-Utils Dark Mode';

      // setInterval(() =>{
      //   document.title=' Text Utils is Amazing'
      // },1000 );

      // setInterval(() =>{
      //   document.title='Install Text Utils'
      // },1500 );
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enabled", "success");

      document.title = 'Text-Utils Light Mode';


    }
  }

  return (

    <>
      {/* <Navbar title="About this" abouttext="About this"/> */}
      <Alerts alert={alert} />

      {/* <BrowserRouter> */}

    {/* /users -- Component1
    /users/home -- Component2
    exact patch will match exact location */}
    
      <Navbar mode={mode} toggleMode={toggleMode} />
    
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyse: " mode={mode}/>


        {/* <Routes> */}
          {/* < Route path="/" 
            element={<TextForm heading="Enter the text to analyse: " mode={mode}/>} />
        </Routes> */}
        </div>
      {/* </BrowserRouter> */}



      {/* <div className='container  my-3'> */}
      {/* <TextForm showAlert={showAlert} heading="Enter your text" mode = {mode} /> */}

      {/* <About />

      </div> */}
      {/* const element = <Welcome title="ok"/>; */}


    </>


  );

}

export default App;



// import React,{ useState } from 'react'

// function Example() {

//   const[ count, setCount] = useState(0);

//   return(
//     <div className="mb-3">
//       <p>You have clicked me {count} times</p>
//       <button onClick={() => setCount(count+1)}>
//         Click me
//       </button>
//     </div>
//   )

// }
// export default Example;

