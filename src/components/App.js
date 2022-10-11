import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Results from "./Results";
import Home from "./Home";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[results, setResults]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/results')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data)
    })
  },[])
  

  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <hr />
      <Switch>
        <Route exact path="/results">
          <Results isLoggedIn={isLoggedIn} results={results}/>
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
