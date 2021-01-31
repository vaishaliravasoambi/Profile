import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from "./components/Navbar"

import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Switch>
            <Route exact path="/" component={Home} />
 
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
 
            <Redirect to="/" />
       </Switch>      
          
    </div>
  );
}

export default App;
