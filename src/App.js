import React, {useState, Fragment} from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import {Render} from 'react-dom'
import formJSON from './formElement.json';
import formJSON2 from './formElement2.json';
import CurrentScreen from './components/CurrentScreen'
import NavBar from './components/NavBar';
import './App.css'



function App() {
  
  
  return (

    <Router>
    <div className='App'>
      <NavBar />   
        <div className='container'>
          <Routes>
          <Route exact path='/job' element={<CurrentScreen formJSON={formJSON}/>} />
          <Route exact path='/pto' element={<CurrentScreen formJSON={formJSON2}/>} />
          </Routes>
       </div>
    </div>
    </Router>
    
      // <div className="App container">
      // <FormCooser/>
       
      //   <CurrentScreen formJSON={formJSON2}/>
       
      // </div>
   
  );
}

export default App;
