import React from 'react';
import {Route,Switch} from "react-router-dom"
import NarBar from "./components/NarBar"
import Home from "./components/Home"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {

  return (
    <div className="App">
      <NarBar/>

      <Switch>
      
        <Route exact path={"/"}>
          <Home/> 
          <Project/> 
          <About/> 
          <Contact/> 
        </Route>


      </Switch>
    </div>
  );
}

export default App;
