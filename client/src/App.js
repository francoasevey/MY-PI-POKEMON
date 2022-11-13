import './App.css';
import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path= "/" component={LandingPage}></Route>
    <Route path= "/home" component={Home}></Route>
    <Route path="/Detail/:id" component={Detail}></Route>
    <Route path= "/CreatePokemon" component={CreatePokemon}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
